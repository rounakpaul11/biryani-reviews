
import type { BiryaniRestaurant } from '@/types';

// Data provided by the user
const newRestaurantData = [
  { name: "Paradise Restaurant", address: "Sarojini Devi Road, Paradise Circle, Secunderabad, Hyderabad 500003", avgUserRating: 8.0 },
  { name: "ZAZA Mughal Biryani", address: "Gachibowli, Hyderabad, Telangana, India", avgUserRating: 8.6 },
  { name: "Mehfil Restaurant", address: "7-1-282/C/1/4, BK Guda, Balkampet Main Road, Ameerpet, Hyderabad", avgUserRating: 7.8 },
  { name: "Behrouz Biryani", address: "Kothaguda, Hyderabad, Telangana, India", avgUserRating: 8.2 },
  { name: "The Biryani Life", address: "Abids, Hyderabad, Telangana, India", avgUserRating: 7.4 },
  { name: "Biryani By Kilo", address: "Sri Krishna Sanjay Commercial, House No-2-60, Gachibowli, Hyderabad", avgUserRating: 8.4 },
  { name: "Hi-Tech Bawarchi", address: "1-21/1, Madhapur, Hyderabad, Telangana, India", avgUserRating: 7.0 },
  { name: "Dum Safar Biryani", address: "Unit G-3, Vishnavi Onyx-1, Doctors Colony, Kothapet, Hyderabad", avgUserRating: 7.8 },
  { name: "Box8 - Desi Meals", address: "Yousufguda, Hyderabad, Telangana, India", avgUserRating: 7.2 },
  { name: "Itminaan Matka Biryani", address: "Tolichowki, Hyderabad, Telangana, India", avgUserRating: 8.0 },
  { name: "The Spicy Venue", address: "Door 8-2-293/82/A/265-S, Road 10, Jubilee Hills, Hyderabad", avgUserRating: 8.3 },
  { name: "Galaxy Restaurant", address: "Plot 13, Survey 14, Nanakramguda, Financial District, Hyderabad", avgUserRating: 7.2 },
  { name: "Being Hungry", address: "Seshadri Marg, Raja Rajeshwara Nagar, Kondapur, Hyderabad", avgUserRating: 7.5 },
  { name: "T Grill", address: "Address not available", avgUserRating: 7.1 },
  { name: "Raju Gari", address: "Address not available", avgUserRating: 7.4 },
  { name: "Kinara Grand", address: "Plot 1-57/90/1, Circle 12, Madinaguda, Hafeezpet, Hyderabad", avgUserRating: 8.0 },
  { name: "Soul of South", address: "Address not available", avgUserRating: 6.9 },
  { name: "Kolkata Food Plaza", address: "Near RTO Office, Gopal Reddy Nagar, Kondapur, Hyderabad", avgUserRating: 7.5 },
  { name: "The Northern Circars", address: "Address not available", avgUserRating: 5.8 },
  { name: "The Nawabs Restaurant", address: "Gachibowli, Hyderabad, Telangana, India", avgUserRating: 8.7 },
  { name: "Chickpet Donne Biryani House", address: "Address not available", avgUserRating: 4.9 },
  { name: "Dasara", address: "2-1-8/A, Plot 68, 49/A & 49/B, Main Road, Nagole, Hyderabad", avgUserRating: 7.2 },
  { name: "AnTeRa Kitchen & Bar", address: "Plot 265, G/A, Road 10, Jubilee Hills, Hyderabad", avgUserRating: 8.6 },
  { name: "Pista House", address: "Multiple locations across Hyderabad (e.g., Charminar, Gachibowli, Kukatpally)", avgUserRating: 8.5 },
  { name: "Rowdy Reddy Biryani", address: "Address not available", avgUserRating: 5.0 },
  { name: "Thalaiva Biryani", address: "Address not available", avgUserRating: 4.5 },
  { name: "Vasistha Srilakshmi", address: "Address not available", avgUserRating: 8.8 },
  { name: "The Gravity Lounge", address: "Address not available", avgUserRating: 7.1 },
  { name: "Pakka Local", address: "2-41/11/2/A, Plot 152, First Floor, Lalitha Arcade, Kondapur, Hyderabad", avgUserRating: 8.4 },
  { name: "Potful - Claypot Biryanis", address: "6-3-639/640/642, Golden Edifice Building, Khairatabad, Hyderabad", avgUserRating: 8.5 },
  { name: "Malabar Kitchen", address: "Address not available", avgUserRating: 6.1 },
  { name: "Pista House Bakery & Snacks", address: "Multiple locations across Hyderabad", avgUserRating: 7.5 },
  { name: "Tosh E Daan", address: "Address not available", avgUserRating: 7.4 },
  { name: "Pepper Green Kerala Kitchen", address: "House 5-1-109/2, Ground Floor, Padmasri Garden, Financial District, Hyderabad", avgUserRating: 8.0 },
  { name: "Charminar Biryani", address: "Street 11, Block C, Sri Ram Nagar, Kondapur, Hyderabad", avgUserRating: 8.6 },
  { name: "K-Grill Restaurant", address: "Plot 6, Ground Floor, Suraram Colony, Suraram, Hyderabad", avgUserRating: 8.2 },
  { name: "Al-Saba Restaurant", address: "Multiple locations across Hyderabad (e.g., Yousufguda, Moosapet, Gachibowli, Jeedimetla)", avgUserRating: 8.7 },
  { name: "Mega Kitchen", address: "Address not available", avgUserRating: 8.6 },
  { name: "Theth Masala", address: "11, Ranganath Colony, Gopanpally Thanda, Tellapur Road, Hyderabad", avgUserRating: 8.8 },
  { name: "Kinnus Kitchen", address: "Address not available", avgUserRating: 8.0 },
  { name: "Red Bucket Biryani", address: "Shop 5, Plot 816-818, Platinum Heights, Sri Swamy Ayyappa Society, Madhapur, Hyderabad", avgUserRating: 7.8 },
  { name: "Mandar Takeaway", address: "Address not available", avgUserRating: 8.2 },
  { name: "Chaitanya Food Court", address: "MIG 25/1, Phase 3, KPHB Colony, Kukatpally, Hyderabad", avgUserRating: 8.4 },
  { name: "Tasca Bar & Kitchen", address: "8-23/1/A/1, Near Indian Oil Petrol Pump, Kokapet, Hyderabad", avgUserRating: 8.5 },
  { name: "Hyderabadi Biryani Dreams", address: "Address not available", avgUserRating: 4.3 },
  { name: "Chaitanya's Modern Kitchen", address: "Address not available", avgUserRating: 7.2 },
  { name: "City Pride Bawarchi Restaurant", address: "Address not available", avgUserRating: 6.0 },
  { name: "Sakhi Cafe & Kitchen", address: "Plot 46 & 47, Prasanth Hills, Raidurg, Road 2, Manikonda, Hyderabad", avgUserRating: 3.9 },
  { name: "Biryani & Biryani", address: "Address not available", avgUserRating: 7.2 },
  { name: "Biryanis & More", address: "Plot 09, Jai Bharathi Nagar, Nizampet X Roads, Nizampet, Hyderabad", avgUserRating: 8.6 },
  { name: "Pondy Parottas", address: "Multiple locations in Hyderabad (e.g., Hitex Road, Manikonda, Ameerpet)", avgUserRating: 7.6 },
  { name: "SR Ambur Biryani", address: "House 7-59, Ground Floor, Bapu Nagar, Lingampally, Hyderabad", avgUserRating: 8.3 },
];

// Original scores (Rounak's Scores) mapped by name for easy lookup
const rounaksScoresByName: { [key: string]: number } = {
  "Paradise": 8.5, "Zaza mughal biryani": 8.5, "Mehfil": 6.0, "Behrouz": 7.0, "The biryani life": 7.2,
  "Biryani by kilo": 7.5, "Hi-tech bawarchi": 7.7, "Dum safar biryani": 5.5, "Box8 biryani": 7.0, "Itminaan biryani": 8.5,
  "The spicy venue": 7.0, "Galaxy restaurant": 6.5, "Being hungry": 7.2, "T grill": 7.1, "Raju gari": 7.4,
  "Kinara grand": 8.6, "Soul of south": 6.9, "Kolkata food plaza": 5.0, "The northern circars": 5.8, "The nawabs restaurant": 8.7,
  "Chickpet donne biryyhouse": 4.9, "Dasara": 8.0, "Antera": 8.9, "Pista house": 8.6, "Rowdy reddy biryani": 5.0,
  "Thalaiva biryani": 4.5, "Vasistha srilakhsmi": 8.8, "The gravity lounge": 7.1, "Pakka local": 8.8, "Potful clay pot biryani": 8.7,
  "Malabar kitchen": 6.1, "Pista house bakery & snacks": 7.5, "Tosh E Daan": 7.4, "Pepper green kerala kitchen": 8.0, "Charminar biryani": 8.6,
  "K-grill restaurant": 8.2, "Al-saba restaurant": 8.7, "Mega kitchen": 8.6, "Theth masala": 8.8, "Kinnus kitchen": 8.0,
  "Red bucket biryani": 7.8, "Mandar takeaway": 8.2, "Chaitanya food court": 8.4, "Tasca bar & kitchen": 8.5, "Hyderabadi Biryani dreams": 4.3,
  "Chaitanya's modern kitchen": 7.2, "City pride bawarchi restaurant": 6.0, "Sakhi cafe & kitchen": 1.0, "Biryani & biryani": 7.2, "Biryanis & more": 8.6,
  "Pondi parottas": 7.5, "SR ambur biryani": 8.3
};

// Match original names to new data names for Rounak's score
const nameMappingForRounaksScore: { [key: string]: string } = {
  "Paradise Restaurant": "Paradise",
  "ZAZA Mughal Biryani": "Zaza mughal biryani",
  "Mehfil Restaurant": "Mehfil",
  "Behrouz Biryani": "Behrouz",
  "The Biryani Life": "The biryani life",
  "Biryani By Kilo": "Biryani by kilo",
  "Hi-Tech Bawarchi": "Hi-tech bawarchi",
  "Dum Safar Biryani": "Dum safar biryani",
  "Box8 - Desi Meals": "Box8 biryani", // Name changed slightly
  "Itminaan Matka Biryani": "Itminaan biryani", // Name changed slightly
  "The Spicy Venue": "The spicy venue",
  "Galaxy Restaurant": "Galaxy restaurant",
  "Being Hungry": "Being hungry",
  "T Grill": "T grill",
  "Raju Gari": "Raju gari",
  "Kinara Grand": "Kinara grand",
  "Soul of South": "Soul of south",
  "Kolkata Food Plaza": "Kolkata food plaza",
  "The Northern Circars": "The northern circars",
  "The Nawabs Restaurant": "The nawabs restaurant",
  "Chickpet Donne Biryani House": "Chickpet donne biryyhouse", // Typo in original key
  "Dasara": "Dasara",
  "AnTeRa Kitchen & Bar": "Antera", // Case and spacing
  "Pista House": "Pista house",
  "Rowdy Reddy Biryani": "Rowdy reddy biryani",
  "Thalaiva Biryani": "Thalaiva biryani",
  "Vasistha Srilakshmi": "Vasistha srilakhsmi",
  "The Gravity Lounge": "The gravity lounge",
  "Pakka Local": "Pakka local",
  "Potful - Claypot Biryanis": "Potful clay pot biryani", // Spacing and plural
  "Malabar Kitchen": "Malabar kitchen",
  "Pista House Bakery & Snacks": "Pista house bakery & snacks",
  "Tosh E Daan": "Tosh E Daan",
  "Pepper Green Kerala Kitchen": "Pepper green kerala kitchen",
  "Charminar Biryani": "Charminar biryani",
  "K-Grill Restaurant": "K-grill restaurant",
  "Al-Saba Restaurant": "Al-saba restaurant",
  "Mega Kitchen": "Mega kitchen",
  "Theth Masala": "Theth masala",
  "Kinnus Kitchen": "Kinnus kitchen",
  "Red Bucket Biryani": "Red bucket biryani",
  "Mandar Takeaway": "Mandar takeaway",
  "Chaitanya Food Court": "Chaitanya food court",
  "Tasca Bar & Kitchen": "Tasca bar & kitchen",
  "Hyderabadi Biryani Dreams": "Hyderabadi Biryani dreams",
  "Chaitanya's Modern Kitchen": "Chaitanya's modern kitchen",
  "City Pride Bawarchi Restaurant": "City pride bawarchi restaurant",
  "Sakhi Cafe & Kitchen": "Sakhi cafe & kitchen",
  "Biryani & Biryani": "Biryani & biryani",
  "Biryanis & More": "Biryanis & more",
  "Pondy Parottas": "Pondi parottas",
  "SR Ambur Biryani": "SR ambur biryani"
};


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

export const biryaniRestaurants: BiryaniRestaurant[] = newRestaurantData.map((item, index) => {
  const originalNameKey = nameMappingForRounaksScore[item.name] || item.name;
  const rounaksScore = rounaksScoresByName[originalNameKey] !== undefined ? rounaksScoresByName[originalNameKey] : 0; // Default to 0 if not found

  return {
    id: (index + 1).toString(),
    name: item.name,
    address: item.address,
    avgUserRating: item.avgUserRating,
    rounaksScore: rounaksScore,
    description: placeholderDescriptions[index % placeholderDescriptions.length] + ` Located at: ${item.address}.`,
    review: placeholderReviews(rounaksScore),
  };
});
