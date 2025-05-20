
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { BiryaniRestaurant } from '@/types';
import { biryaniRecommendation } from '@/ai/flows/biryani-recommendation';
import { FilterControls } from './FilterControls';
import { BiryaniLeaderboard } from './BiryaniLeaderboard';
import { AiRecommendationModal } from './AiRecommendationModal';
import { useToast } from "@/hooks/use-toast";
import { ChefHat, Utensils } from 'lucide-react';

interface BiryaniDashboardProps {
  initialRestaurants: BiryaniRestaurant[];
}

const MAX_SCORE = 10; // This refers to Rounak's Score and Avg User Rating max

export function BiryaniDashboard({ initialRestaurants }: BiryaniDashboardProps) {
  const [restaurants, setRestaurants] = useState<BiryaniRestaurant[]>(initialRestaurants);
  const [minScore, setMinScore] = useState<number>(0); // This will filter by Rounak's Score
  const [sortColumn, setSortColumn] = useState<keyof BiryaniRestaurant>('rounaksScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const [selectedRestaurant, setSelectedRestaurant] = useState<BiryaniRestaurant | null>(null);
  const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);

  const { toast } = useToast();

  const filteredAndSortedRestaurants = useMemo(() => {
    let result = initialRestaurants.filter(r => r.rounaksScore >= minScore);

    result.sort((a, b) => {
      let valA, valB;
      if (sortColumn === 'name') {
        valA = a.name.toLowerCase();
        valB = b.name.toLowerCase();
      } else if (sortColumn === 'rounaksScore' || sortColumn === 'avgUserRating') {
        valA = a[sortColumn];
        valB = b[sortColumn];
      } else { // For address or id - though sorting by them might not be primary
        valA = String(a[sortColumn]).toLowerCase();
        valB = String(b[sortColumn]).toLowerCase();
      }

      if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
      // Secondary sort by name if primary sort values are equal
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });

    return result;
  }, [minScore, sortColumn, sortDirection, initialRestaurants]);

  useEffect(() => {
    setRestaurants(filteredAndSortedRestaurants);
  }, [filteredAndSortedRestaurants]);

  const handleSort = (column: keyof BiryaniRestaurant) => {
    if (column === 'id' || column === 'address' || column === 'description' || column === 'review') { // Columns not meant for primary sorting
      // Optionally, do nothing or keep current sort
      return;
    }
    if (sortColumn === column) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc'); 
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
        rounaksScore: restaurant.rounaksScore,
      });
      setAiRecommendation(result.recommendationSummary);
    } catch (error) {
      console.error("AI Recommendation Error:", error);
      setAiRecommendation(null);
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
          Rounak's Biryani Review
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
        <p>&copy; {new Date().getFullYear()} Rounak's Biryani Review. All rights reserved.</p>
        <p className="flex items-center justify-center">
          <Utensils className="mr-2 h-4 w-4" />
          Savor the flavor, one biryani at a time.
        </p>
      </footer>
    </div>
  );
}
