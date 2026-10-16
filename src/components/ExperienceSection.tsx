import React from 'react';
import { motion } from 'motion/react';
import { Users, Home, MessageSquare, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

interface ExperienceSectionProps {
  onOpenReservation: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenReservation }) => {
  const handleGroupDiningWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Abhiruchi Family Restaurant Garden! I am planning a family gathering in Rayachoty and would like to ask about group dining seating and cabin availability.`
    );
    window.open(`https://wa.me/${restaurantConfig.contact.whatsappNumber}?text=${message}`, '_blank');
  };

  const features = [
    {
      icon: Users,
      title: 'Family-Friendly Dining Atmosphere',
      text: 'Spacious seating arrangements designed to accommodate large families, kids, and elders comfortably without feeling crowded.',
    },
    {
      icon: Home,
      title: 'Private Cabin Seating (Subject to Availability)',
      text: 'Dedicated private dining cabins highlighted in guest feedback, offering a serene, personal environment for intimate family celebrations.',
    },
    {
      icon: Sparkles,
      title: 'Serene Garden Setting',
      text: 'Enjoy the evening breeze with garden dining that lets you escape the hustle of town while remaining conveniently accessible on Madanapalli Road.',
    },
  ];

  return (
    <section 
      id="experience" 
      className="bg-jali-dark text-[#F8F3E9] py-20 lg:py-28 border-b border-[#C5A46D]/25 overflow-hidden relative"
      aria-label="Family Dining Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Content (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-[#DFC698] uppercase tracking-[0.25em] block">
                Warm Indian Hospitality
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F3E9]">
                Designed for Family Gatherings.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#F8F3E9]/85 font-light leading-relaxed">
              Dining in an Indian household is always about togetherness—passing thalis, enjoying generous servings of biryani, and catching up with loved ones across generations.
            </p>

            <div className="space-y-4 pt-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-[#39141D]/50 border border-[#C5A46D]/15 backdrop-blur-sm"
                  >
                    <div className="p-2.5 rounded-lg bg-[#241116] text-[#DFC698] shrink-0 border border-[#C5A46D]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#F8F3E9]">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#F8F3E9]/75 font-light leading-relaxed mt-0.5">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Group Dining CTA Box */}
            <div className="pt-4 p-6 rounded-2xl bg-[#39141D] border border-[#C5A46D]/40 space-y-3 shadow-xl">
              <div>
                <h4 className="text-sm font-bold text-[#DFC698] uppercase tracking-wider">
                  Planning a Family Gathering?
                </h4>
                <p className="text-xs text-[#F8F3E9]/80 mt-0.5">
                  Reach out directly to verify cabin seating or reserve adjacent tables for your family group.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleGroupDiningWhatsApp}
                  className="shimmer-button inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#C5A46D] via-[#DFC698] to-[#C5A46D] text-[#241116] text-xs font-bold tracking-wide transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask About Group Dining</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#C5A46D]/50 text-[#F8F3E9] hover:bg-white/10 text-xs font-medium transition-colors"
                >
                  <span>Submit Table Request</span>
                </button>
              </div>
            </div>

          </motion.div>

          {/* Photographic Visual Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#C5A46D]/30 translate-x-2 -translate-y-2 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[4/5] bg-[#39141D] group">
                <img
                  src="/images/private-cabins.jpg"
                  alt="Family seated in private dining cabin at Abhiruchi Restaurant"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B0F]/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="text-[11px] font-bold text-[#DFC698] uppercase tracking-wider block">
                    Private Dining Cabins
                  </span>
                  <p className="text-xs text-[#F8F3E9]/80 mt-0.5">
                    Secluded booth seating option mentioned in guest experiences.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
