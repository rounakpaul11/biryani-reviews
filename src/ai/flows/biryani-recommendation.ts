// This file is machine-generated - edit with care!
'use server';
/**
 * @fileOverview Biryani restaurant recommendation AI agent.
 *
 * - biryaniRecommendation - A function that provides a recommendation summary for a biryani restaurant.
 * - BiryaniRecommendationInput - The input type for the biryaniRecommendation function.
 * - BiryaniRecommendationOutput - The return type for the biryaniRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BiryaniRecommendationInputSchema = z.object({
  restaurantName: z.string().describe('The name of the biryani restaurant.'),
  description: z.string().describe('The description of the restaurant.'),
  review: z.string().describe('The review of the restaurant.'),
  score: z.number().describe('The score of the restaurant (out of 10).'),
});
export type BiryaniRecommendationInput = z.infer<typeof BiryaniRecommendationInputSchema>;

const BiryaniRecommendationOutputSchema = z.object({
  recommendationSummary: z.string().describe('A summary of the AI recommendation for the biryani restaurant based on its description, reviews, and score.'),
});
export type BiryaniRecommendationOutput = z.infer<typeof BiryaniRecommendationOutputSchema>;

export async function biryaniRecommendation(input: BiryaniRecommendationInput): Promise<BiryaniRecommendationOutput> {
  return biryaniRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'biryaniRecommendationPrompt',
  input: {schema: BiryaniRecommendationInputSchema},
  output: {schema: BiryaniRecommendationOutputSchema},
  prompt: `You are an expert biryani restaurant recommender.

  Based on the restaurant's description, review, and score, provide a concise recommendation summary.

  Restaurant Name: {{{restaurantName}}}
  Description: {{{description}}}
  Review: {{{review}}}
  Score: {{{score}}}/10

  Recommendation Summary: `,
});

const biryaniRecommendationFlow = ai.defineFlow(
  {
    name: 'biryaniRecommendationFlow',
    inputSchema: BiryaniRecommendationInputSchema,
    outputSchema: BiryaniRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
