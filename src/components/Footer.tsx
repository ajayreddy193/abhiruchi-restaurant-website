import React, { useState } from 'react';
import { Phone, Compass, Settings } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenOwnerNotice: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenOwnerNotice }) => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      className="bg-[#2B151B] text-[#F8F3E9] pt-16 pb-24 lg:pb-12 border-t border-[#C5A46D]/20 text-left"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C5A46D]/20">
          
          {/* Brand & Wordmark (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-display text-3xl font-bold tracking-wider text-[#F8F3E9] block">
                ABHIRUCHI
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A46D] font-semibold block mt-0.5">
                Family Restaurant Garden
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F3E9]/75 font-light leading-relaxed max-w-sm">
              An inviting Indian dining garden in Rayachoty, Andhra Pradesh. Dedicated to comforting regional cuisine, serene family dining, and genuine hospitality.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C5A46D]">
              <span className="w-2 h-2 rounded-full bg-[#858D73]" />
              <span>Rayachoty · Andhra Pradesh 516269</span>
            </div>

            {/* Owner Setup Prompt Link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenOwnerNotice}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#481D26] hover:bg-[#5E2632] text-[#C5A46D] text-[11px] font-semibold border border-[#C5A46D]/30 transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Owner Configuration &amp; Verification Checklist</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F3E9]/80 font-medium">
              <li>
                <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-[#C5A46D] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => scrollTo(e, 'story')} className="hover:text-[#C5A46D] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => scrollTo(e, 'menu')} className="hover:text-[#C5A46D] transition-colors">
                  Menu &amp; Dishes
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => scrollTo(e, 'experience')} className="hover:text-[#C5A46D] transition-colors">
                  Family Experience
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="hover:text-[#C5A46D] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => scrollTo(e, 'reviews')} className="hover:text-[#C5A46D] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#C5A46D] transition-colors">
                  Contact &amp; Map
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-[#F8F3E9]/80 font-light">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Address &amp; Timings
            </h4>
            
            <div className="space-y-1">
              <p className="font-semibold text-[#F8F3E9]">Madanapalli Road, Kothapeta</p>
              <p>Rayachoty, Andhra Pradesh 516269, India</p>
              <p className="text-[11px] text-[#F8F3E9]/60">Opp. Bharat Petrol Pump</p>
            </div>

            <div className="pt-2 space-y-1 border-t border-[#C5A46D]/15">
              <p className="font-semibold text-[#C5A46D]">Reported Operating Hours:</p>
              <p>{restaurantConfig.operatingHours.reportedHours}</p>
              <p className="text-[10px] text-[#F8F3E9]/60 italic">(Hours require owner verification before launch)</p>
            </div>

            <div className="pt-2">
              <a
                href={restaurantConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A46D] font-semibold hover:underline"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Table Actions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Reservations
            </h4>
            <p className="text-xs text-[#F8F3E9]/75 font-light leading-relaxed">
              Book your family table or private cabin request in advance.
            </p>
            
            <button
              type="button"
              onClick={onOpenReservation}
              className="w-full py-2.5 px-3 rounded-lg bg-[#C5A46D] hover:bg-[#DEC492] text-[#2B151B] text-xs font-bold tracking-wide transition-colors"
            >
              Reserve a Table
            </button>

            <a
              href={`tel:${restaurantConfig.contact.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#481D26] hover:bg-[#5E2632] text-[#F8F3E9] text-xs font-medium border border-[#C5A46D]/30 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Call Front Desk</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal, Privacy & Attribution Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F3E9]/60">
          <p>
            &copy; {currentYear} ABHIRUCHI FAMILY RESTAURANT GARDEN. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="hover:text-[#C5A46D] transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <span>Rayachoty, Andhra Pradesh</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white text-[#252321] rounded-xl max-w-lg w-full p-6 space-y-4 border border-[#C5A46D]/40 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3 border-[#C5A46D]/20">
              <h3 className="font-display text-xl font-bold text-[#2B151B]">
                Privacy Notice
              </h3>
              <button
                type="button"
                onClick={() => setShowPrivacy(false)}
                className="text-gray-500 hover:text-black font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-[#252321]/80">
              <p>
                <strong>Information We Collect:</strong> When you submit a table reservation enquiry, we collect only your name, phone number, and reservation preferences.
              </p>
              <p>
                <strong>How It Is Used:</strong> We use this information solely to verify and confirm your dining request with the restaurant desk via WhatsApp or phone.
              </p>
              <p>
                <strong>Third-Party Disclosures:</strong> We never sell, rent, or distribute your personal data.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              className="w-full py-2 bg-[#481D26] text-[#F8F3E9] text-xs font-semibold rounded-lg hover:bg-[#2B151B]"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
