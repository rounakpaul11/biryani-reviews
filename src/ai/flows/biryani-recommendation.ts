
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
  rounaksScore: z.number().describe("Rounak's score for the restaurant (out of 10)."),
  // avgUserRating: z.number().describe('The average user rating for the restaurant (out of 10).'), // Optionally include if needed for AI
});
export type BiryaniRecommendationInput = z.infer<typeof BiryaniRecommendationInputSchema>;

const BiryaniRecommendationOutputSchema = z.object({
  recommendationSummary: z.string().describe('A summary of the AI recommendation for the biryani restaurant based on its description, reviews, and scores.'),
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

  Based on the restaurant's description, review, and Rounak's score, provide a concise recommendation summary.

  Restaurant Name: {{{restaurantName}}}
  Description: {{{description}}}
  Review: {{{review}}}
  Rounak's Score: {{{rounaksScore}}}/10

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
