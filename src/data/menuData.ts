import type { MenuItem } from '../types';

export const candidateSignatureDishes: MenuItem[] = [
  {
    id: 'abhiruchi-special-biryani',
    name: 'Abhiruchi Special Biryani',
    teluguName: 'అభిరుచి స్పెషల్ బిర్యానీ',
    category: 'biryani',
    description: 'Fragrant long-grain basmati rice slow-cooked with aromatic spices, caramelized onions, and tender cuts. Highlighted with positive customer appreciation in local reviews.',
    isVegetarian: false,
    isCandidateSignature: true,
    customerFeedbackNote: 'Positively recommended by visiting diners for its authentic spiced profile.',
    image: '/images/special-biryani.jpg',
    status: 'daily_special',
  },
  {
    id: 'chicken-grill',
    name: 'Chicken Grill',
    teluguName: 'చికెన్ గ్రిల్',
    category: 'tandoori',
    description: 'Succulent chicken pieces marinated in traditional spices and grilled over heat for a smoky char, served with fresh lemon and mint accompaniment.',
    isVegetarian: false,
    isCandidateSignature: true,
    customerFeedbackNote: 'Received positive mentions in external customer feedback for tenderness and smoky flavor.',
    image: '/images/chicken-grill.jpg',
    status: 'daily_special',
  },
];

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const proposedCategories: MenuCategory[] = [
  { id: 'all', name: 'All Offerings', description: 'Explore our candidate dishes and proposed culinary categories', iconName: 'Utensils' },
  { id: 'biryani', name: 'Biryani Specialties', description: 'Traditional dum cooked fragrant rice preparations', iconName: 'Flame' },
  { id: 'tandoori', name: 'Grills & Tandoori', description: 'Smoky skewered kebabs and clay-oven specialties', iconName: 'Sparkles' },
  { id: 'starters', name: 'Starters & Appetizers', description: 'Crispy, spiced vegetarian and non-vegetarian starters', iconName: 'ChefHat' },
  { id: 'curries', name: 'Curries & Gravies', description: 'Rich regional Andhra and North Indian style gravies', iconName: 'Soup' },
  { id: 'breads', name: 'Indian Breads', description: 'Freshly baked tandoori rotis, naans, and parottas', iconName: 'Wheat' },
  { id: 'beverages', name: 'Coolers & Desserts', description: 'Refreshing beverages and classic sweet finishes', iconName: 'GlassWater' },
];

export const candidateMenuItems: MenuItem[] = [
  ...candidateSignatureDishes,
  {
    id: 'tandoori-platter',
    name: 'Tandoori Starter Platter (Candidate)',
    teluguName: 'తందూరి ప్లాటర్',
    category: 'starters',
    description: 'Assorted marinated paneer and spiced kebabs charred with capsicum and onion rings, served with mint chutney.',
    isVegetarian: false,
    image: '/images/tandoori-platter.jpg',
    status: 'available',
  },
  {
    id: 'andhra-chicken-curry',
    name: 'Andhra Style Chicken Curry (Proposed)',
    teluguName: 'ఆంధ్రా చికెన్ కర్రీ',
    category: 'curries',
    description: 'Homestyle spicy chicken gravy flavored with ground coriander, poppy seeds, and fiery green chilies. Subject to daily kitchen preparation.',
    isVegetarian: false,
    status: 'daily_special',
  },
  {
    id: 'paneer-tikka-masala',
    name: 'Paneer Tikka Gravy (Proposed)',
    teluguName: 'పన్నీర్ టిక్కా మసాలా',
    category: 'curries',
    description: 'Grilled cottage cheese cubes simmered in a mildly spiced tomato and cashew gravy.',
    isVegetarian: true,
    status: 'available',
  },
  {
    id: 'butter-naan-roti',
    name: 'Fresh Tandoori Naan & Roti (Proposed)',
    teluguName: 'బటర్ నాన్ & రోటి',
    category: 'breads',
    description: 'Clay-oven baked leavened breads brushed with butter, ideal for pairing with rich curries.',
    isVegetarian: true,
    status: 'available',
  },
  {
    id: 'spiced-buttermilk',
    name: 'South Indian Majjiga / Buttermilk (Proposed)',
    teluguName: 'మజ్జిగ',
    category: 'beverages',
    description: 'Cooling churned yogurt drink seasoned with crushed ginger, green chili, curry leaves, and mustard seeds.',
    isVegetarian: true,
    status: 'available',
  },
];
