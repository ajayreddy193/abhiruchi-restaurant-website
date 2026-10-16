import type { FAQItem } from '../types';

export const faqItems: FAQItem[] = [
  {
    id: 'faq-location',
    question: 'Where is Abhiruchi Family Restaurant Garden located?',
    answer:
      'We are located on Madanapalli Road in Kothapeta, Rayachoty, Andhra Pradesh 516269, India (conveniently accessible opposite Bharat Petrol Pump / near Raju Colony). You can find direct directions via our "Open Google Maps" button.',
    requiresOwnerConfirmation: false,
  },
  {
    id: 'faq-hours',
    question: "What are the restaurant's operating hours?",
    answer:
      'The reported operating hours from external public listings are 11:00 AM – 4:00 PM daily. Please note that exact evening timings and holiday hours are unverified business information and should be confirmed directly with the restaurant management before visiting.',
    requiresOwnerConfirmation: true,
  },
  {
    id: 'faq-reservations',
    question: 'Can I request a table reservation?',
    answer:
      'Yes! You can submit a table reservation request using our online booking form or via WhatsApp with your preferred date, time, and guest count. Please note that all reservations are requests and must be acknowledged and confirmed by the restaurant team.',
    requiresOwnerConfirmation: false,
  },
  {
    id: 'faq-family-friendly',
    question: 'Is the restaurant suitable for family dining?',
    answer:
      'Yes, Abhiruchi is designed specifically as an Indian family restaurant with spacious garden seating and accommodations tailored for family gatherings, group meals, and casual celebrations.',
    requiresOwnerConfirmation: false,
  },
  {
    id: 'faq-private-cabins',
    question: 'Are private cabins available?',
    answer:
      'Customer feedback frequently mentions private dining cabin arrangements for family groups. However, availability may depend on daily bookings, group size, and current management policies. We recommend asking when reserving your table.',
    requiresOwnerConfirmation: true,
  },
  {
    id: 'faq-menu',
    question: 'Where can I find the menu?',
    answer:
      'Our website displays candidate signature dishes—including our well-received Abhiruchi Special Biryani and Chicken Grill. Full printed menus with seasonal specials and current pricing are provided fresh at your table, or you can request today\'s menu via WhatsApp.',
    requiresOwnerConfirmation: true,
  },
  {
    id: 'faq-contact',
    question: 'How can I contact the restaurant?',
    answer:
      'You can reach us through our verified address on Madanapalli Road, send a reservation enquiry via our online form, or connect directly through WhatsApp / phone. Please refer to our Contact section for updated details.',
    requiresOwnerConfirmation: false,
  },
];
