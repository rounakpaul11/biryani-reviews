"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { BiryaniRestaurant } from '@/types';
import { biryaniRecommendation } from '@/ai/flows/biryani-recommendation';
import { FilterControls } from './FilterControls';
import { BiryaniLeaderboard } from './BiryaniLeaderboard';
import { AiRecommendationModal } from './AiRecommendationModal';
import { useToast } from "@/hooks/use-toast";
import { ChefHat } from 'lucide-react';

interface BiryaniDashboardProps {
  initialRestaurants: BiryaniRestaurant[];
}

const MAX_SCORE = 10;

export function BiryaniDashboard({ initialRestaurants }: BiryaniDashboardProps) {
  const [restaurants, setRestaurants] = useState<BiryaniRestaurant[]>(initialRestaurants);
  const [minScore, setMinScore] = useState<number>(0);
  const [sortColumn, setSortColumn] = useState<keyof BiryaniRestaurant | 'score'>('score');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const [selectedRestaurant, setSelectedRestaurant] = useState<BiryaniRestaurant | null>(null);
  const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);

  const { toast } = useToast();

  const filteredAndSortedRestaurants = useMemo(() => {
    let result = initialRestaurants.filter(r => r.score >= minScore);

    result.sort((a, b) => {
      let valA, valB;
      if (sortColumn === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else { // score or any other numeric column
        valA = a[sortColumn as 'score']; // Ensure type safety for numeric properties
        valB = b[sortColumn as 'score'];
      }

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [minScore, sortColumn, sortDirection, initialRestaurants]);

  useEffect(() => {
    setRestaurants(filteredAndSortedRestaurants);
  }, [filteredAndSortedRestaurants]);

  const handleSort = (column: keyof BiryaniRestaurant | 'score') => {
    if (sortColumn === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc'); // Default to descending for new column
    }
  };

  const handleGetRecommendation = useCallback(async (restaurant: BiryaniRestaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
    setIsLoadingAi(true);
    setAiRecommendation(null);

    try {
      const result = await biryaniRecommendation({
        restaurantName: restaurant.name,
        description: restaurant.description,
        review: restaurant.review,
        score: restaurant.score,
      });
      setAiRecommendation(result.recommendationSummary);
    } catch (error) {
      console.error("AI Recommendation Error:", error);
      setAiRecommendation(null); // Keep it null or set an error message
      toast({
        title: "Error",
        description: "Failed to get AI recommendation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingAi(false);
    }
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-primary flex items-center justify-center">
          <ChefHat className="mr-3 h-12 w-12" />
          Biryani Vista
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">
          Discover the Best Biryani Spots with AI-Powered Insights
        </p>
      </header>

      <FilterControls 
        minScore={minScore} 
        setMinScore={setMinScore} 
        maxPossibleScore={MAX_SCORE}
      />

      <BiryaniLeaderboard
        restaurants={restaurants}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onGetRecommendation={handleGetRecommendation}
      />

      <AiRecommendationModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        restaurant={selectedRestaurant}
        recommendation={aiRecommendation}
        isLoading={isLoadingAi}
      />
      
      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Biryani Vista. All rights reserved.</p>
        <p>Savor the flavor, one biryani at a time.</p>
      </footer>
    </div>
  );
}
