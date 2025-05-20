"use client";

import type { BiryaniRestaurant } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles,ThumbsUp, ThumbsDown } from 'lucide-react';
import Image from 'next/image';

interface AiRecommendationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  restaurant: BiryaniRestaurant | null;
  recommendation: string | null;
  isLoading: boolean;
}

export function AiRecommendationModal({
  isOpen,
  onOpenChange,
  restaurant,
  recommendation,
  isLoading,
}: AiRecommendationModalProps) {
  if (!restaurant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px] bg-card shadow-2xl rounded-lg">
        <DialogHeader className="pt-6 px-6">
          <DialogTitle className="text-2xl font-bold flex items-center text-primary">
            <Sparkles className="mr-2 h-6 w-6" />
            AI Recommendation for {restaurant.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground pt-1">
            Our AI analyzed the details to give you this insight. Score: <span className="font-semibold text-foreground">{restaurant.score}/10</span>
          </DialogDescription>
        </DialogHeader>
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              width={120}
              height={80}
              className="rounded-lg object-cover border border-border"
              data-ai-hint={restaurant.dataAiHint}
            />
            <div>
              <h3 className="text-lg font-semibold text-foreground">{restaurant.name}</h3>
              <p className="text-xs text-muted-foreground italic line-clamp-2" title={restaurant.description}>
                {restaurant.description}
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-4">
            <h4 className="text-md font-semibold text-foreground mb-2">AI Summary:</h4>
            {isLoading ? (
              <div className="flex items-center justify-center h-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-2 text-muted-foreground">Generating recommendation...</p>
              </div>
            ) : recommendation ? (
              <p className="text-sm text-foreground/90 leading-relaxed bg-secondary/30 p-3 rounded-md border border-secondary">
                {recommendation}
              </p>
            ) : (
              <p className="text-sm text-destructive">Could not fetch recommendation.</p>
            )}
          </div>
          
          {!isLoading && recommendation && (
            <div className="pt-2 text-center">
              <p className="text-xs text-muted-foreground mb-2">Was this recommendation helpful?</p>
              <div className="flex justify-center space-x-3">
                <Button variant="outline" size="sm" className="hover:bg-green-100 dark:hover:bg-green-800">
                  <ThumbsUp className="h-4 w-4 mr-1 text-green-500"/> Yes
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-red-100 dark:hover:bg-red-800">
                  <ThumbsDown className="h-4 w-4 mr-1 text-red-500"/> No
                </Button>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="px-6 pb-6">
          <Button onClick={() => onOpenChange(false)} variant="outline">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
