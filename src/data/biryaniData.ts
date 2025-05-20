import type { BiryaniRestaurant } from '@/types';

const placeholderDescriptions = [
  "A renowned destination for authentic biryani, cooked with traditional spices and techniques.",
  "Specializing in flavorful Mughlai-style biryani, offering a rich and aromatic experience.",
  "Known for its wide variety of biryanis, from classic Hyderabadi to regional specialties.",
  "A popular choice for those seeking a delicious and satisfying biryani meal, prepared with fresh ingredients.",
  "Offers a modern take on biryani, blending traditional flavors with contemporary culinary flair."
];

const placeholderReviews = (score: number): string => {
  if (score >= 8.5) return "Exceptional biryani! The flavors are rich, aromatic, and perfectly balanced. A must-try for enthusiasts.";
  if (score >= 7.5) return "Very good biryani with delightful taste and generous portions. Consistently impressive quality.";
  if (score >= 6.5) return "Good biryani, offers a decent taste and satisfying meal. Worth a try if you're in the area.";
  if (score >= 5.0) return "Average biryani. While it satisfies the craving, there's room for improvement in flavor complexity.";
  return "Below average biryani. The taste was somewhat disappointing and lacked the expected richness.";
};

const data: { name: string; score: number; imageHint: string }[] = [
  { name: "Paradise", score: 8.5, imageHint: "biryani restaurant" },
  { name: "Zaza mughal biryani", score: 8.5, imageHint: "mughal food" },
  { name: "Mehfil", score: 6.0, imageHint: "indian cuisine" },
  { name: "Behrouz", score: 7.0, imageHint: "royal biryani" },
  { name: "The biryani life", score: 7.2, imageHint: "food delivery" },
  { name: "Biryani by kilo", score: 7.5, imageHint: "biryani pot" },
  { name: "Hi-tech bawarchi", score: 7.7, imageHint: "hyderabadi biryani" },
  { name: "Dum safar biryani", score: 5.5, imageHint: "dum biryani" },
  { name: "Box8 biryani", score: 7.0, imageHint: "takeaway food" },
  { name: "Itminaan biryani", score: 8.5, imageHint: "slow cooked" },
  { name: "The spicy venue", score: 7.0, imageHint: "spicy food" },
  { name: "Galaxy restaurant", score: 6.5, imageHint: "family restaurant" },
  { name: "Being hungry", score: 7.2, imageHint: "food court" },
  { name: "T grill", score: 7.1, imageHint: "grill restaurant" },
  { name: "Raju gari", score: 7.4, imageHint: "traditional food" },
  { name: "Kinara grand", score: 8.6, imageHint: "fine dining" },
  { name: "Soul of south", score: 6.9, imageHint: "south indian" },
  { name: "Kolkata food plaza", score: 5.0, imageHint: "kolkata biryani" },
  { name: "The northern circars", score: 5.8, imageHint: "coastal food" },
  { name: "The nawabs restaurant", score: 8.7, imageHint: "nawabi cuisine" },
  { name: "Chickpet donne biryyhouse", score: 4.9, imageHint: "donne biryani" },
  { name: "Dasara", score: 8.0, imageHint: "festive food" },
  { name: "Antera", score: 8.9, imageHint: "modern indian" },
  { name: "Pista house", score: 8.6, imageHint: "famous biryani" },
  { name: "Rowdy reddy biryani", score: 5.0, imageHint: "local eatery" },
  { name: "Thalaiva biryani", score: 4.5, imageHint: "chennai biryani" },
  { name: "Vasistha srilakhsmi", score: 8.8, imageHint: "authentic cuisine" },
  { name: "The gravity lounge", score: 7.1, imageHint: "lounge bar" },
  { name: "Pakka local", score: 8.8, imageHint: "street food" },
  { name: "Potful clay pot biryani", score: 8.7, imageHint: "claypot cooking" },
  { name: "Malabar kitchen", score: 6.1, imageHint: "kerala cuisine" },
  { name: "Pista house bakery & snacks", score: 7.5, imageHint: "bakery snacks" },
  { name: "Tosh E Daan", score: 7.4, imageHint: "kashmiri food" },
  { name: "Pepper green kerala kitchen", score: 8.0, imageHint: "kerala spices" },
  { name: "Charminar biryani", score: 8.6, imageHint: "historic biryani" },
  { name: "K-grill restaurant", score: 8.2, imageHint: "korean grill" }, // Note: K-grill might not be biryani, using generic hint
  { name: "Al-saba restaurant", score: 8.7, imageHint: "arabic food" },
  { name: "Mega kitchen", score: 8.6, imageHint: "large kitchen" },
  { name: "Theth masala", score: 8.8, imageHint: "desi masala" },
  { name: "Kinnus kitchen", score: 8.0, imageHint: "home kitchen" },
  { name: "Red bucket biryani", score: 7.8, imageHint: "bucket biryani" },
  { name: "Mandar takeaway", score: 8.2, imageHint: "chinese takeaway" }, // Note: Mandar might not be biryani, using generic hint
  { name: "Chaitanya food court", score: 8.4, imageHint: "food court variety" },
  { name: "Tasca bar & kitchen", score: 8.5, imageHint: "bar kitchen" },
  { name: "Hyderabadi Biryani dreams", score: 4.3, imageHint: "dreamy biryani" },
  { name: "Chaitanya's modern kitchen", score: 7.2, imageHint: "modern kitchen" },
  { name: "City pride bawarchi restaurant", score: 6.0, imageHint: "city restaurant" },
  { name: "Sakhi cafe & kitchen", score: 1.0, imageHint: "cafe food" },
  { name: "Biryani & biryani", score: 7.2, imageHint: "biryani variety" },
  { name: "Biryanis & more", score: 8.6, imageHint: "more food" },
  { name: "Pondi parottas", score: 7.5, imageHint: "parotta" }, // Note: Pondi Parottas might not be biryani focus
  { name: "SR ambur biryani", score: 8.3, imageHint: "ambur biryani" }
];

export const biryaniRestaurants: BiryaniRestaurant[] = data.map((item, index) => ({
  id: (index + 1).toString(),
  name: item.name,
  score: item.score,
  description: placeholderDescriptions[index % placeholderDescriptions.length] + ` They offer a unique dining experience focused on ${item.imageHint}.`,
  review: placeholderReviews(item.score) + ` Many patrons appreciate their ${item.imageHint} specialties.`,
  imageUrl: `https://placehold.co/300x200.png`, // Generic placeholder
  dataAiHint: item.imageHint,
}));
