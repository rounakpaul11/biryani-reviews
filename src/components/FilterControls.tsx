"use client";

import type { Dispatch, SetStateAction } from 'react';
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FilterIcon } from 'lucide-react';

interface FilterControlsProps {
  minScore: number;
  setMinScore: Dispatch<SetStateAction<number>>;
  maxPossibleScore: number;
}

export function FilterControls({ minScore, setMinScore, maxPossibleScore }: FilterControlsProps) {
  return (
    <Card className="mb-6 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-xl">
          <FilterIcon className="mr-2 h-6 w-6 text-primary" />
          Filter Restaurants
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="score-filter" className="text-base font-medium text-foreground/80">
              Minimum Score: <span className="font-bold text-primary">{minScore.toFixed(1)}</span>
            </Label>
            <Slider
              id="score-filter"
              min={0}
              max={maxPossibleScore}
              step={0.1}
              value={[minScore]}
              onValueChange={(value) => setMinScore(value[0])}
              className="mt-2"
            />
             <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>0</span>
              <span>{maxPossibleScore}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
