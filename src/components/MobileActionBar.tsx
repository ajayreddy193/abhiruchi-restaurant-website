import React from 'react';
import { Calendar, Compass, PhoneCall } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

interface MobileActionBarProps {
  onOpenReservation: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenReservation }) => {
  return (
    <aside 
      aria-label="Quick mobile navigation actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#2B151B]/95 backdrop-blur-md border-t border-[#C5A46D]/30 py-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Directions button */}
        <a
          href={restaurantConfig.location.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#481D26] text-[#F8F3E9] text-[10px] font-semibold tracking-wide border border-[#C5A46D]/20 active:scale-95 transition-all"
        >
          <Compass className="w-4 h-4 text-[#C5A46D] mb-0.5" />
          <span>Directions</span>
        </a>

        {/* Reserve Table button (Primary) */}
        <button
          type="button"
          onClick={onOpenReservation}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#C5A46D] text-[#2B151B] text-[10px] font-bold tracking-wide shadow-md active:scale-95 transition-all"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-[#2B151B]" />
          <span>Reserve Table</span>
        </button>

        {/* Call button */}
        <a
          href={`tel:${restaurantConfig.contact.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#481D26] text-[#F8F3E9] text-[10px] font-semibold tracking-wide border border-[#C5A46D]/20 active:scale-95 transition-all"
        >
          <PhoneCall className="w-4 h-4 text-[#C5A46D] mb-0.5" />
          <span>Call Desk</span>
        </a>

      </div>
    </aside>
  );
};
