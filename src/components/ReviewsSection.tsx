import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MessageCircle, AlertCircle } from 'lucide-react';
import { externalListingOverview, verifiedFeedbackHighlights } from '../data/reviewsData';
import { restaurantConfig } from '../data/restaurantConfig';

export const ReviewsSection: React.FC = () => {
  return (
    <section 
      id="reviews" 
      className="bg-jali-light text-[#252321] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative"
      aria-label="Customer Reviews and Feedback"
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
          <span className="text-xs font-bold text-[#9F7E46] uppercase tracking-[0.25em] block">
            Public Directory Sentiment
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#241116]">
            Honest Guest Feedback
          </h2>

          <p className="text-base text-[#252321]/75 font-light leading-relaxed">
            Ratings and diner insights provided from external public listings. We share this transparently to help you make an informed dining choice.
          </p>
        </motion.div>

        {/* Featured Editorial Rating Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="heritage-card max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl border border-[#C5A46D]/35 p-8 sm:p-10 shadow-xl mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Rating Big Number (4 cols) */}
            <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-[#C5A46D]/20 pb-6 md:pb-0 md:pr-6">
              <span className="text-xs font-bold text-[#9F7E46] uppercase tracking-wider block">
                External Listing Rating
              </span>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="font-display text-5xl sm:text-6xl font-bold text-[#241116]">
                  {externalListingOverview.rating}
                </span>
                <span className="text-lg text-[#252321]/50 font-medium">/ 5.0</span>
              </div>

              <div className="flex justify-center md:justify-start text-[#C5A46D] text-lg">
                {'★★★★☆'}
              </div>

              <p className="text-xs text-[#252321]/70 font-medium">
                Based on <strong className="text-[#252321]">{externalListingOverview.reviewCount} reported reviews</strong>
              </p>
            </div>

            {/* Honest Narrative & Feedback Note (8 cols) */}
            <div className="md:col-span-8 text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#481D26]">
                <MessageCircle className="w-4 h-4 text-[#C5A46D]" />
                <span>Summary of Reported Diner Experience</span>
              </div>

              <p className="text-sm sm:text-base text-[#252321]/85 font-light leading-relaxed italic">
                "{externalListingOverview.customerQuote}"
              </p>

              {/* Attribution Disclaimer Box */}
              <div className="p-3.5 rounded-lg bg-[#F8F3E9] border border-[#C5A46D]/25 flex items-start gap-2.5 text-left">
                <AlertCircle className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#252321]/70 leading-relaxed">
                  {externalListingOverview.verifiedDisclaimer}
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {verifiedFeedbackHighlights.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="heritage-card bg-white/90 backdrop-blur-md rounded-xl p-6 border border-[#C5A46D]/25 shadow-sm hover:shadow-lg flex flex-col justify-between text-left space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9F7E46]">
                    {item.source}
                  </span>
                  <div className="text-[#C5A46D] text-xs">
                    {'★★★★★'}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-[#241116]">
                  {item.highlight}
                </h3>

                <p className="text-xs text-[#252321]/80 font-light leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#C5A46D]/15 flex items-center justify-between text-[11px] text-[#252321]/60">
                <span>{item.reviewer}</span>
                <span className="italic">{item.dateNote}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Link */}
        <div className="mt-14 text-center">
          <a
            href={restaurantConfig.externalListing.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-button inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#C5A46D] text-[#241116] hover:bg-[#C5A46D] hover:text-[#241116] text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
          >
            <span>Read More Reviews on Google Maps Listing</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
