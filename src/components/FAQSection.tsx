import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { faqItems } from '../data/faqData';
import type { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-location', 'faq-hours']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section 
      id="faq" 
      className="bg-jali-light text-[#252321] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241116] text-[#DFC698] text-xs font-semibold uppercase tracking-[0.2em] border border-[#C5A46D]/40 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Common Queries</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#241116]">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-[#252321]/75 font-light">
            Clear, honest answers to help you plan your dining visit to Abhiruchi in Rayachoty.
          </p>
        </motion.div>

        {/* Accessible Accordion List with Smooth Motion Expansion */}
        <div className="space-y-3.5">
          {faqItems.map((item: FAQItem) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="heritage-card bg-white/90 backdrop-blur-md rounded-xl border border-[#C5A46D]/30 overflow-hidden shadow-sm transition-all hover:border-[#C5A46D]"
              >
                <button
                  type="button"
                  id={`accordion-header-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-content-${item.id}`}
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display text-lg sm:text-xl font-bold text-[#241116] focus-visible:outline-2 focus-visible:outline-[#C5A46D]"
                >
                  <span className="flex items-center gap-2">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#C5A46D] shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`accordion-content-${item.id}`}
                      role="region"
                      aria-labelledby={`accordion-header-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-[#252321]/80 font-light leading-relaxed border-t border-[#C5A46D]/15 space-y-2 text-left">
                        <p>{item.answer}</p>

                        {item.requiresOwnerConfirmation && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F8F3E9] text-[11px] font-medium text-[#481D26] border border-[#C5A46D]/30 mt-1">
                            <AlertCircle className="w-3 h-3 text-[#C5A46D]" />
                            <span>Management confirmation recommended prior to arrival</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
