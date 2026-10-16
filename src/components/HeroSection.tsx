import React from 'react';
import { motion } from 'motion/react';
import { Compass, Calendar, ArrowRight, MapPin, Star, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
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
      id="home" 
      className="relative bg-jali-dark text-[#F8F3E9] overflow-hidden min-h-[calc(100vh-100px)] flex items-center py-12 lg:py-20"
      aria-label="Welcome to Abhiruchi Family Restaurant Garden"
    >
      {/* Warm Ambient Drifting Lantern Embers / Fireflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/6 w-2.5 h-2.5 rounded-full bg-[#C5A46D] blur-[1px] ember-1" />
        <div className="absolute top-1/2 left-1/3 w-3.5 h-3.5 rounded-full bg-[#E2A850] blur-[2px] ember-2" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#C5A46D] blur-[1px] ember-1" />
        <div className="absolute top-1/3 right-1/12 w-3 h-3 rounded-full bg-[#E2A850] blur-[1.5px] ember-2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column with Smooth Orchestrated Motion */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#39141D]/90 border border-[#C5A46D]/40 text-[#DFC698] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] animate-spin-slow" />
              <span>RAYACHOTY · ANDHRA PRADESH</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F8F3E9] leading-[1.08]">
                Good Food.<br />
                <span className="gold-gradient-text italic font-normal">Beautiful Moments.</span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base sm:text-lg text-[#F8F3E9]/85 max-w-2xl font-light leading-relaxed"
            >
              Gather around the table and discover the warmth of Indian dining at{' '}
              <strong className="font-semibold text-[#F8F3E9]">Abhiruchi Family Restaurant Garden</strong>. 
              Authentic regional flavors, welcoming private cabins, and open garden seating nestled on Madanapalli Road.
            </motion.p>

            {/* Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <button
                type="button"
                onClick={() => scrollTo('menu')}
                className="shimmer-button inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-to-r from-[#C5A46D] via-[#DFC698] to-[#C5A46D] text-[#241116] font-bold text-sm tracking-wide shadow-xl shadow-black/40 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#241116]" />
              </button>

              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#39141D] hover:bg-[#481D26] text-[#F8F3E9] font-medium text-sm tracking-wide border border-[#C5A46D]/50 shadow-lg hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
              >
                <Calendar className="w-4 h-4 text-[#C5A46D]" />
                <span>Reserve a Table</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs text-[#DFC698] hover:text-white font-medium transition-colors"
              >
                <Compass className="w-4 h-4 text-[#C5A46D]" />
                <span>Find Us &amp; Directions</span>
              </button>
            </motion.div>

            {/* Trust and Key Info Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="pt-6 border-t border-[#C5A46D]/25 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[#DFC698] font-semibold text-sm">
                  <Star className="w-4 h-4 fill-[#C5A46D] text-[#C5A46D]" />
                  <span>4.1 / 5.0 Rating</span>
                </div>
                <p className="text-xs text-[#F8F3E9]/60 mt-0.5">
                  Reported across 380 external reviews
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#F8F3E9] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#858D73]" />
                  <span>Family Dining</span>
                </div>
                <p className="text-xs text-[#F8F3E9]/60 mt-0.5">
                  Garden &amp; private cabins
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-[#F8F3E9] font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-[#C5A46D]" />
                  <span>Madanapalli Rd</span>
                </div>
                <p className="text-xs text-[#F8F3E9]/60 mt-0.5">
                  Kothapeta, Rayachoty
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Photographic Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Antique Gold Dual Offset Frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C5A46D]/40 -rotate-1 pointer-events-none transition-transform duration-700 hover:rotate-0" />
              <div className="absolute -inset-1 rounded-xl border border-[#C5A46D]/20 rotate-1 pointer-events-none" />

              {/* Main Restaurant Hero Photograph */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/70 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] bg-[#39141D] group">
                <motion.img
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                  src="/images/hero-garden.jpg"
                  alt="Evening dining ambiance at Abhiruchi Family Restaurant Garden in Rayachoty"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  fetchPriority="high"
                  loading="eager"
                />
                
                {/* Deep Warm Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B0F] via-transparent to-transparent opacity-85" />

                {/* Overlaid Image Caption Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#241116]/95 backdrop-blur-md border border-[#C5A46D]/40 text-left shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#DFC698] uppercase tracking-wider">
                        Serene Outdoor Dining
                      </p>
                      <p className="text-sm font-medium text-[#F8F3E9] mt-0.5">
                        Lush Garden Ambience &amp; Private Cabins
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#241116] bg-gradient-to-r from-[#C5A46D] to-[#DFC698] px-2.5 py-1 rounded shadow-sm">
                      Open
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Architectural Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="hidden sm:block absolute -top-4 -left-6 bg-[#39141D] border border-[#C5A46D]/50 rounded-lg p-3.5 shadow-2xl backdrop-blur-md max-w-[190px] text-left"
              >
                <span className="text-[10px] text-[#DFC698] font-bold uppercase tracking-wider block">Signature Dish</span>
                <span className="text-xs font-semibold text-[#F8F3E9] block mt-0.5">Special Dum Biryani</span>
                <span className="text-[10px] text-[#F8F3E9]/70 block mt-0.5">Customer feedback favorite</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
