import type { RestaurantConfig } from '../types';

export const restaurantConfig: RestaurantConfig = {
  name: 'ABHIRUCHI FAMILY RESTAURANT GARDEN',
  tagline: 'An inviting Indian dining garden with the warmth of traditional hospitality.',
  concept: 'An inviting Indian dining garden with the sophistication of a modern culinary destination.',
  category: 'Indian Family Restaurant',
  location: {
    street: 'Madanapalli Road',
    area: 'Kothapeta',
    city: 'Rayachoty',
    state: 'Andhra Pradesh',
    postalCode: '516269',
    country: 'India',
    fullAddress: 'Madanapalli Rd, Kothapeta, Rayachoty, Andhra Pradesh 516269, India',
    landmark: 'Opposite Bharat Petrol Pump / Near Raju Colony, Madanapalli Road',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Abhiruchi+Family+Restaurant+Garden+Madanapalli+Road+Rayachoty+Andhra+Pradesh+516269',
    googleMapsEmbedQuery: 'Abhiruchi+Family+Restaurant+Garden+Madanapalli+Road+Rayachoty+516269',
  },
  contact: {
    phone: '+91 81256 53503',
    phoneDisplay: '+91 81256 53503',
    whatsappNumber: '918125653503',
    email: 'info@abhiruchirestaurant.com',
    isPhoneVerified: false, // Owner should verify and replace with preferred booking number
    isWhatsappVerified: false,
  },
  operatingHours: {
    reportedHours: '11:00 AM – 4:00 PM daily',
    lunchSlot: '11:30 AM – 3:45 PM',
    dinnerSlot: '7:00 PM – 10:30 PM (Evening timings subject to owner confirmation)',
    isVerified: false,
    verificationNote: 'Operating hours are based on reported external directory data and should be verified directly with the restaurant management prior to visiting.',
  },
  externalListing: {
    rating: 4.1,
    reviewCount: 380,
    platform: 'Public Business Directory',
    externalUrl: 'https://www.google.com/maps/search/Abhiruchi+Family+Restaurant+Garden+Rayachoty',
    note: 'Aggregated rating and review count derived from external directory listings. Not an internal website poll.',
  },
  features: {
    hasGardenDining: true,
    hasPrivateCabins: true,
    privateCabinsNote: 'Private dining cabins mentioned in customer feedback; subject to on-day availability and owner confirmation.',
    familyFriendly: true,
    parkingAvailable: 'Street and premises parking (contact restaurant to confirm capacity).',
  },
  verifiedDishesNotice: 'Prices, ingredients, and daily availability are set fresh on-site. Contact our front desk or ask our servers for today’s special selection.',
};
