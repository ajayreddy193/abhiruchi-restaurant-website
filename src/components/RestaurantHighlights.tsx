import React from 'react';
import { motion } from 'motion/react';
import { Home, UtensilsCrossed, MapPin, Award } from 'lucide-react';

export const RestaurantHighlights: React.FC = () => {
  const highlights = [
    {
      icon: MapPin,
      badge: 'Rayachoty Destination',
      title: 'Indian Family Restaurant',
      text: 'Situated on Madanapalli Road in Kothapeta, offering an accessible dining retreat for travelers and local residents.',
    },
    {
      icon: Award,
      badge: 'Reported Rating',
      title: '4.1 / 5.0 · 380 Reviews',
      text: 'Aggregated from public business directory listings. Represents honest external customer sentiment over time.',
    },
    {
      icon: Home,
      badge: 'Seating Options',
      title: 'Private Cabins & Garden',
      text: 'Private cabin seating mentioned in visitor feedback for family privacy (subject to daily confirmation and availability).',
    },
    {
      icon: UtensilsCrossed,
      badge: 'Patron Favorites',
      title: 'Biryani & Chicken Grill',
      text: 'Customer feedback specifically highlights the Chicken Grill and Special Biryani for their distinct spiced character.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  return (
    <section 
      aria-label="Restaurant Highlights and Information"
      className="bg-jali-light text-[#252321] py-14 border-b border-[#C5A46D]/25 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="heritage-card bg-white/80 backdrop-blur-sm rounded-xl p-6 text-left space-y-3 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-[#481D26]">
                  <div className="p-2 rounded-lg bg-[#F8F3E9] text-[#C5A46D]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9F7E46]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#252321]">
                  {item.title}
                </h3>

                <p className="text-xs text-[#252321]/75 leading-relaxed font-light">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
