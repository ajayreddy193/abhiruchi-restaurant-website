import React from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, PhoneCall, Sparkles } from 'lucide-react';
import { ReservationForm } from './ReservationForm';
import { restaurantConfig } from '../data/restaurantConfig';

export const ReservationSection: React.FC = () => {
  return (
    <section 
      id="reservation" 
      className="bg-jali-dark text-[#F8F3E9] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative overflow-hidden"
      aria-label="Table Reservations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Narrative Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#DFC698] uppercase tracking-[0.25em]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                Plan Your Visit
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8F3E9]">
                Reserve Your Table.
              </h2>
            </div>

            <p className="text-base text-[#F8F3E9]/80 font-light leading-relaxed">
              We look forward to welcoming you and your family. Whether you are visiting for our signature biryani or planning an evening in our garden booths, reserving helps us prepare your table smoothly.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#39141D] border border-[#C5A46D]/35 space-y-2 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFC698]">
                  <Clock className="w-4 h-4 text-[#C5A46D]" />
                  <span>Reported Timings</span>
                </div>
                <p className="text-sm font-semibold text-[#F8F3E9]">
                  {restaurantConfig.operatingHours.reportedHours}
                </p>
                <p className="text-[11px] text-[#F8F3E9]/60">
                  (Timings based on external public listing; subject to owner confirmation)
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#39141D] border border-[#C5A46D]/35 space-y-2 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFC698]">
                  <MapPin className="w-4 h-4 text-[#C5A46D]" />
                  <span>Restaurant Address</span>
                </div>
                <p className="text-xs text-[#F8F3E9]/90 leading-relaxed">
                  {restaurantConfig.location.fullAddress}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${restaurantConfig.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#DFC698] hover:text-white hover:underline transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#C5A46D]" />
                <span>Prefer to call directly? Tap to dial our front desk</span>
              </a>
            </div>

          </motion.div>

          {/* Right Form Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <ReservationForm isModal={false} />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
