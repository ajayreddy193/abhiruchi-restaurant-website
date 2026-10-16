import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, HeartHandshake, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
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
      id="story" 
      className="bg-jali-light text-[#252321] py-20 lg:py-28 border-b border-[#C5A46D]/25 overflow-hidden relative"
      aria-label="Our Story and Dining Philosophy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photographic Composition with Framed Reveal (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer double decorative borders */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#C5A46D]/30 translate-x-2 translate-y-2 pointer-events-none" />
              <div className="absolute -inset-1 rounded-xl border border-[#C5A46D]/15 -translate-x-1 -translate-y-1 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[4/5] bg-[#39141D] group">
                <img
                  src="/images/garden-walkway.jpg"
                  alt="Garden walkway and illuminated pavilions at Abhiruchi Restaurant"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFC698] block">
                    Atmosphere &amp; Ambience
                  </span>
                  <span className="text-base font-medium text-[#F8F3E9] block mt-0.5">
                    Illuminated garden pathways &amp; dining gazebos
                  </span>
                </div>
              </div>

              {/* Editorial Quote Pill */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 bg-[#241116] text-[#F8F3E9] p-4 rounded-xl shadow-2xl border border-[#C5A46D]/50 max-w-xs text-left backdrop-blur-md"
              >
                <Leaf className="w-6 h-6 text-[#858D73] shrink-0" />
                <p className="text-xs text-[#F8F3E9]/90 italic font-serif leading-snug">
                  "Thoughtfully designed for sharing meals, unwinding, and celebrating family bonds."
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* Editorial Content (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2"
          >
            
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#9F7E46] uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                Hospitality &amp; Roots
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#241116] leading-tight">
                A Place to Come Together.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-12 h-0.5 bg-[#C5A46D]" />
              <span className="w-2 h-2 rounded-full bg-[#C5A46D]" />
              <span className="w-6 h-0.5 bg-[#C5A46D]/40" />
            </div>

            <div className="space-y-4 text-base text-[#252321]/80 leading-relaxed font-light">
              <p className="text-lg text-[#252321] font-normal leading-relaxed">
                Good meals bring people closer. Abhiruchi Family Restaurant Garden welcomes guests in Rayachoty to discover an Indian dining experience suited to sharing food and making memories.
              </p>

              <p>
                Nestled on Madanapalli Road in Kothapeta, our restaurant is shaped around the timeless joy of dining together. Whether you are catching up over fragrant biryani on a weekend, sharing sizzling chicken grills after work, or hosting relatives in our private dining spaces, every meal is prepared to bring genuine warmth to your table.
              </p>

              <p>
                We believe in genuine hospitality, comforting regional flavors, and spaces where every generation of the family feels comfortably at home.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('menu')}
                className="shimmer-button inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#241116] hover:bg-[#39141D] text-[#F8F3E9] text-sm font-semibold tracking-wide shadow-md transition-all duration-300"
              >
                <span>Discover Featured Dishes</span>
                <ArrowRight className="w-4 h-4 text-[#DFC698]" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('experience')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#241116] hover:text-[#9F7E46] transition-colors py-2"
              >
                <HeartHandshake className="w-4 h-4 text-[#858D73]" />
                <span>Explore The Family Experience</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
