import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MessageCircleCheck, Info } from 'lucide-react';
import { candidateSignatureDishes } from '../data/menuData';

export const SignatureDishes: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="signature-dishes" 
      className="bg-jali-dark text-[#F8F3E9] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative overflow-hidden"
      aria-label="Candidate Signature Dishes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39141D] text-[#DFC698] text-xs font-semibold uppercase tracking-[0.2em] border border-[#C5A46D]/40 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Candidate Featured Specialties</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F3E9]">
            Dishes Loved by Our Diners
          </h2>

          <p className="text-sm sm:text-base text-[#F8F3E9]/80 font-light leading-relaxed">
            Highlighted in visitor feedback from external listings. Prepared fresh daily using traditional Indian spices and time-honored cooking methods.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-[#DFC698] pt-1">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Candidate items noted in guest reviews · Daily availability &amp; pricing confirmed fresh at the restaurant</span>
          </div>
        </motion.div>

        {/* Editorial Culinary Spread (2 Featured Items) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {candidateSignatureDishes.map((dish, index) => (
            <motion.article 
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="heritage-card group rounded-2xl bg-[#39141D]/90 border border-[#C5A46D]/40 overflow-hidden shadow-2xl flex flex-col transition-all duration-500 hover:border-[#C5A46D] hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Dish Photograph */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#241116]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241116] via-transparent to-transparent opacity-80" />
                
                {/* Status / Category Tag */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#241116]/90 backdrop-blur-md text-[#DFC698] text-xs font-semibold tracking-wider uppercase border border-[#C5A46D]/40">
                    {index === 0 ? 'Fragrant Dum Biryani' : 'Tandoori & Grill'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#858D73]/90 text-white text-xs font-medium">
                    Non-Veg
                  </span>
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F3E9] group-hover:text-[#DFC698] transition-colors">
                      {dish.name}
                    </h3>
                    {dish.teluguName && (
                      <span className="text-sm font-medium text-[#C5A46D]/80">
                        {dish.teluguName}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base text-[#F8F3E9]/80 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Customer Feedback Highlight Quote */}
                {dish.customerFeedbackNote && (
                  <div className="p-3.5 rounded-lg bg-[#241116]/90 border border-[#C5A46D]/25 flex items-start gap-3">
                    <MessageCircleCheck className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-semibold uppercase text-[#DFC698] block">
                        Customer Feedback Highlight
                      </span>
                      <p className="text-xs text-[#F8F3E9]/85 italic mt-0.5">
                        "{dish.customerFeedbackNote}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Subtle Divider & Menu Prompt */}
                <div className="pt-3 border-t border-[#C5A46D]/25 flex items-center justify-between text-xs text-[#F8F3E9]/70">
                  <span>Price: Confirmed on daily menu</span>
                  <button
                    type="button"
                    onClick={() => scrollTo('menu')}
                    className="inline-flex items-center gap-1 text-[#DFC698] font-semibold hover:underline"
                  >
                    <span>View In Interactive Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Interactive Menu */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <button
            type="button"
            onClick={() => scrollTo('menu')}
            className="shimmer-button inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-gradient-to-r from-[#C5A46D] via-[#DFC698] to-[#C5A46D] text-[#241116] font-bold text-sm tracking-wide shadow-xl transition-all hover:scale-105"
          >
            <span>Explore All Proposed Categories &amp; Menu Search</span>
            <ArrowRight className="w-4 h-4 text-[#241116]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
