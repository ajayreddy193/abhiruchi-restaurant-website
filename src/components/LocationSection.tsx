import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Copy, Check, ExternalLink, Phone, MessageSquare, Clock, Compass, ShieldAlert } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(restaurantConfig.location.fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hello Abhiruchi Family Restaurant Garden! I am contacting you regarding your restaurant location and timings on Madanapalli Road, Rayachoty.`
    );
    window.open(`https://wa.me/${restaurantConfig.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="bg-jali-light text-[#252321] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative"
      aria-label="Location, Contact and Directions"
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
            Find Us in Rayachoty
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#241116]">
            Location &amp; Contact
          </h2>

          <p className="text-base text-[#252321]/75 font-light leading-relaxed">
            Conveniently located on Madanapalli Road in Kothapeta. We look forward to hosting you and your family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Contact & Address Cards (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left"
          >
            
            {/* Address Card */}
            <div className="heritage-card bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#C5A46D]/35 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#241116] text-[#DFC698]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#241116]">
                    Restaurant Address
                  </h3>
                  <span className="text-xs text-[#9F7E46] font-semibold uppercase tracking-wider">
                    Kothapeta · Rayachoty
                  </span>
                </div>
              </div>

              <div className="space-y-1 text-sm text-[#252321]/80 font-light">
                <p className="font-medium text-[#241116]">
                  ABHIRUCHI FAMILY RESTAURANT GARDEN
                </p>
                <p>{restaurantConfig.location.street}, {restaurantConfig.location.area}</p>
                <p>{restaurantConfig.location.city}, {restaurantConfig.location.state} {restaurantConfig.location.postalCode}, {restaurantConfig.location.country}</p>
                <p className="text-xs text-[#252321]/60 italic mt-1">
                  Landmark: {restaurantConfig.location.landmark}
                </p>
              </div>

              {/* Action Buttons for Address */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F8F3E9] hover:bg-[#EAE4D7] text-[#241116] text-xs font-semibold border border-[#C5A46D]/30 transition-all active:scale-95"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>Copy Full Address</span>
                    </>
                  )}
                </button>

                <a
                  href={restaurantConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-button inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#241116] hover:bg-[#39141D] text-[#F8F3E9] text-xs font-semibold tracking-wide transition-colors"
                >
                  <Compass className="w-3.5 h-3.5 text-[#DFC698]" />
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#DFC698]/80" />
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="heritage-card bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#C5A46D]/35 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#241116] text-[#DFC698]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#241116]">
                      Operating Timings
                    </h3>
                    <span className="text-xs text-[#9F7E46] font-semibold uppercase tracking-wider">
                      Reported External Hours
                    </span>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold text-[#241116] bg-[#C5A46D]/25 px-2.5 py-0.5 rounded border border-[#C5A46D]/40">
                  Unverified
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-[#252321]/80 pt-1">
                <div className="flex items-center justify-between border-b border-[#C5A46D]/15 pb-1.5">
                  <span className="font-medium text-[#241116]">Reported Daily Hours:</span>
                  <span className="font-semibold text-[#481D26]">{restaurantConfig.operatingHours.reportedHours}</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#C5A46D]/15 pb-1.5">
                  <span className="font-medium text-[#241116]">Lunch Service:</span>
                  <span>{restaurantConfig.operatingHours.lunchSlot}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#241116]">Evening Service:</span>
                  <span className="italic text-[#252321]/60">Subject to confirmation</span>
                </div>
              </div>

              <div className="p-2.5 rounded-md bg-[#F8F3E9] text-[11px] text-[#252321]/70 leading-relaxed border border-[#C5A46D]/20 flex items-start gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>
                  Please call the restaurant or verify via WhatsApp before traveling if you are visiting outside primary lunch hours.
                </span>
              </div>
            </div>

            {/* Direct Connect Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${restaurantConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#241116] text-[#F8F3E9] hover:bg-[#39141D] text-xs font-semibold transition-all hover:scale-102 border border-[#C5A46D]/30 shadow-md"
              >
                <Phone className="w-4 h-4 text-[#DFC698]" />
                <span>Call Restaurant Desk</span>
              </a>

              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#25D366]/15 text-[#075E54] hover:bg-[#25D366]/25 text-xs font-semibold transition-all hover:scale-102 border border-[#25D366]/40 shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

          </motion.div>

          {/* Right Map Embed Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="heritage-card bg-white rounded-2xl border border-[#C5A46D]/35 shadow-lg overflow-hidden flex-1 flex flex-col">
              
              <div className="p-4 bg-[#241116] text-[#F8F3E9] flex items-center justify-between text-left">
                <div>
                  <h4 className="font-display text-base font-bold text-[#F8F3E9]">
                    Interactive Location Map
                  </h4>
                  <p className="text-[11px] text-[#DFC698]">
                    Madanapalli Rd, Kothapeta, Rayachoty, AP 516269
                  </p>
                </div>

                <a
                  href={restaurantConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-md bg-gradient-to-r from-[#C5A46D] to-[#DFC698] text-[#241116] text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  Directions
                </a>
              </div>

              {/* Responsive Map Embed Container */}
              <div className="relative w-full flex-1 min-h-[380px] bg-[#EAE4D7]">
                <iframe
                  title="Abhiruchi Family Restaurant Garden Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    restaurantConfig.location.fullAddress
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full min-h-[380px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-3 bg-[#F8F3E9] border-t border-[#C5A46D]/20 text-center text-xs text-[#252321]/70">
                <span>Click "Directions" to open turn-by-turn navigation in your Google Maps app.</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
