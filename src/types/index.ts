export interface RestaurantConfig {
  name: string;
  tagline: string;
  concept: string;
  category: string;
  location: {
    street: string;
    area: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullAddress: string;
    landmark: string;
    googleMapsDirectionsUrl: string;
    googleMapsEmbedQuery: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string; // international format without + or spaces e.g. 918125653503
    email: string;
    isPhoneVerified: boolean;
    isWhatsappVerified: boolean;
  };
  operatingHours: {
    reportedHours: string;
    lunchSlot: string;
    dinnerSlot: string;
    isVerified: boolean;
    verificationNote: string;
  };
  externalListing: {
    rating: number;
    reviewCount: number;
    platform: string;
    externalUrl: string;
    note: string;
  };
  features: {
    hasGardenDining: boolean;
    hasPrivateCabins: boolean;
    privateCabinsNote: string;
    familyFriendly: boolean;
    parkingAvailable: string;
  };
  verifiedDishesNotice: string;
}

export interface MenuItem {
  id: string;
  name: string;
  teluguName?: string;
  category: 'biryani' | 'starters' | 'curries' | 'tandoori' | 'breads' | 'beverages';
  description: string;
  isVegetarian: boolean;
  isCandidateSignature?: boolean;
  customerFeedbackNote?: string;
  image?: string;
  status: 'available' | 'seasonal' | 'daily_special';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambience' | 'food' | 'cabins';
  src: string;
  alt: string;
  caption: string;
  isAuthenticRepresentation: boolean;
}

export interface ReviewItem {
  id: string;
  source: string;
  reviewer: string;
  rating: number;
  highlight: string;
  text: string;
  dateNote: string;
  dishMentioned: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  requiresOwnerConfirmation?: boolean;
}

export interface ReservationFormData {
  fullName: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'garden' | 'private_cabin' | 'main_hall' | 'no_preference';
  specialRequests: string;
}
