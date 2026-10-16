import React from 'react';
import { MapPin, Clock, Sparkles } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Restaurant notice and timings"
      className="bg-[#2B151B] text-[#F8F3E9] text-xs py-2 px-4 border-b border-[#C5A46D]/20 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#481D26] text-[#C5A46D] text-[10px] uppercase font-semibold tracking-wider border border-[#C5A46D]/30">
            <Sparkles className="w-2.5 h-2.5" />
            Rayachoty
          </span>
          <span className="text-[#F8F3E9]/90 hidden md:inline">
            An inviting place for family, friends &amp; good food on Madanapalli Road.
          </span>
          <span className="text-[#F8F3E9]/90 md:hidden">
            Welcoming families on Madanapalli Road.
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-[#F8F3E9]/80">
          <div className="flex items-center gap-1.5" title="Reported listing hours, verify before visit">
            <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Reported: {restaurantConfig.operatingHours.reportedHours}</span>
            <span className="text-[9px] text-[#C5A46D] uppercase tracking-wider bg-[#481D26] px-1 rounded border border-[#C5A46D]/20">
              Unverified
            </span>
          </div>

          <a 
            href={restaurantConfig.location.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 hover:text-[#C5A46D] transition-colors"
          >
            <MapPin className="w-3 h-3 text-[#C5A46D]" />
            <span>Kothapeta</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
