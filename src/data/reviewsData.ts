import type { ReviewItem } from '../types';

export const externalListingOverview = {
  rating: 4.1,
  maxRating: 5.0,
  reviewCount: 380,
  source: 'External Public Business Directory',
  verifiedDisclaimer:
    'Ratings and customer feedback summary represent unverified external public business directory records as of the latest listing crawl. They are not internally generated or independently audited.',
  customerQuote:
    'Visitors have specifically highlighted the Chicken Grill and Abhiruchi Special Biryani for their flavor, alongside noting the dedicated private cabins for family visits. External feedback also reflects varying experiences across different days and service rush hours.',
};

export const verifiedFeedbackHighlights: ReviewItem[] = [
  {
    id: 'feedback-biryani-grill',
    source: 'External Listing Visitor Comment',
    reviewer: 'Local Patron (Public Listing)',
    rating: 4.5,
    highlight: 'Chicken Grill & Abhiruchi Special Biryani',
    text: 'Customer feedback particularly praised the Chicken Grill and the Abhiruchi Special Biryani as standout orders for family dinner.',
    dateNote: 'From supplied external listing feedback',
    dishMentioned: ['Chicken Grill', 'Abhiruchi Special Biryani'],
  },
  {
    id: 'feedback-family-cabins',
    source: 'External Listing Visitor Comment',
    reviewer: 'Family Guest (Public Listing)',
    rating: 4.0,
    highlight: 'Private Cabins for Family Gatherings',
    text: 'Patrons noted the availability of private cabin arrangements providing personal comfort when dining with family and kids.',
    dateNote: 'From supplied external listing feedback',
    dishMentioned: ['Private Cabins'],
  },
  {
    id: 'feedback-balanced-note',
    source: 'Service & Consistency Note',
    reviewer: 'Operational Transparency',
    rating: 4.0,
    highlight: 'Commitment to Consistency',
    text: 'As noted in historical guest feedback, dish preparation and wait times can vary during peak hours. Our kitchen team strives to deliver fresh preparations for every table.',
    dateNote: 'Transparent service acknowledgment',
    dishMentioned: ['Daily Specials'],
  },
];
