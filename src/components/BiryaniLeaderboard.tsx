"use client";

import type { BiryaniRestaurant } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, Award, MessageSquareHeart } from 'lucide-react';
import Image from 'next/image';

interface BiryaniLeaderboardProps {
  restaurants: BiryaniRestaurant[];
  onSort: (column: keyof BiryaniRestaurant | 'score') => void;
  sortColumn: keyof BiryaniRestaurant | 'score';
  sortDirection: 'asc' | 'desc';
  onGetRecommendation: (restaurant: BiryaniRestaurant) => void;
}

export function BiryaniLeaderboard({
  restaurants,
  onSort,
  sortColumn,
  sortDirection,
  onGetRecommendation,
}: BiryaniLeaderboardProps) {
  const renderSortIcon = (column: keyof BiryaniRestaurant | 'score') => {
    if (sortColumn === column) {
      return sortDirection === 'asc' ? '▲' : '▼';
    }
    return <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />;
  };

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Award className="mr-3 h-8 w-8 text-primary" />
          Biryani Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[80px] hidden sm:table-cell">Image</TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-muted transition-colors min-w-[200px]"
                  onClick={() => onSort('name')}
                >
                  <div className="flex items-center">
                    Name {renderSortIcon('name')}
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:bg-muted transition-colors text-right min-w-[100px]"
                  onClick={() => onSort('score')}
                >
                  <div className="flex items-center justify-end">
                    Score {renderSortIcon('score')}
                  </div>
                </TableHead>
                <TableHead className="text-center min-w-[150px]">AI Recommendation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {restaurants.length > 0 ? (
                restaurants.map((restaurant) => (
                  <TableRow key={restaurant.id} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="hidden sm:table-cell p-2">
                       <Image
                        src={restaurant.imageUrl}
                        alt={restaurant.name}
                        width={60}
                        height={40}
                        className="rounded-md object-cover"
                        data-ai-hint={restaurant.dataAiHint}
                      />
                    </TableCell>
                    <TableCell className="font-medium py-3 px-4">{restaurant.name}</TableCell>
                    <TableCell className="text-right font-semibold text-primary py-3 px-4">
                      {restaurant.score.toFixed(1)}
                    </TableCell>
                    <TableCell className="text-center py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onGetRecommendation(restaurant)}
                        className="text-accent-foreground hover:bg-accent/80"
                        aria-label={`Get AI recommendation for ${restaurant.name}`}
                      >
                        <MessageSquareHeart className="mr-2 h-4 w-4" />
                        Suggest
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                    No restaurants match the current filter.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
