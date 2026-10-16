import React, { useState } from 'react';
import { X, AlertTriangle, CheckSquare, ShieldCheck, Phone, Clock, Utensils } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

interface OwnerNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerNoticeModal: React.FC<OwnerNoticeModalProps> = ({ isOpen, onClose }) => {
  const [checklist, setChecklist] = useState({
    hours: false,
    phone: false,
    menu: false,
    cabins: false,
  });

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="owner-modal-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10 my-8 overflow-hidden border border-[#C5A46D]/40 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-[#481D26] text-[#F8F3E9] border-b border-[#C5A46D]/30">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#C5A46D]" />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                Pre-Launch Verification Guide
              </span>
              <h3 id="owner-modal-title" className="font-display text-xl font-bold">
                Restaurant Owner Checklist
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F8F3E9] hover:text-[#C5A46D] transition-colors"
            aria-label="Close owner guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-sm text-[#252321]">
          
          <div className="p-4 rounded-xl bg-[#F8F3E9] border border-[#C5A46D]/30 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#481D26]">
              <AlertTriangle className="w-4 h-4 text-[#C5A46D]" />
              <span>Mandatory Pre-Launch Owner Verification</span>
            </div>
            <p className="text-[#252321]/80 leading-relaxed">
              This website has been built with strict adherence to verified facts. The details below were compiled from external directory listings and must be verified by the restaurant owner before domain launch.
            </p>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#481D26]">
              Verification Action Items
            </h4>

            {/* Item 1: Operating Hours */}
            <div className="p-3.5 rounded-lg border border-gray-200 hover:border-[#C5A46D] transition-colors flex items-start gap-3">
              <input
                type="checkbox"
                id="check-hours"
                checked={checklist.hours}
                onChange={(e) => setChecklist({ ...checklist, hours: e.target.checked })}
                className="mt-1 w-4 h-4 text-[#481D26] rounded border-gray-300 focus:ring-[#C5A46D]"
              />
              <label htmlFor="check-hours" className="text-xs space-y-1 cursor-pointer flex-1">
                <span className="font-bold text-[#252321] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
                  1. Confirm Operating Hours
                </span>
                <p className="text-[#252321]/70">
                  Current reported hours: <strong>{restaurantConfig.operatingHours.reportedHours}</strong>. Confirm whether dinner hours or 7-day schedules apply.
                </p>
                <code className="text-[10px] text-gray-600 bg-gray-100 px-1 py-0.5 rounded block">
                  Config file: src/data/restaurantConfig.ts &rarr; operatingHours
                </code>
              </label>
            </div>

            {/* Item 2: Phone & WhatsApp Number */}
            <div className="p-3.5 rounded-lg border border-gray-200 hover:border-[#C5A46D] transition-colors flex items-start gap-3">
              <input
                type="checkbox"
                id="check-phone"
                checked={checklist.phone}
                onChange={(e) => setChecklist({ ...checklist, phone: e.target.checked })}
                className="mt-1 w-4 h-4 text-[#481D26] rounded border-gray-300 focus:ring-[#C5A46D]"
              />
              <label htmlFor="check-phone" className="text-xs space-y-1 cursor-pointer flex-1">
                <span className="font-bold text-[#252321] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                  2. Confirm WhatsApp &amp; Booking Phone
                </span>
                <p className="text-[#252321]/70">
                  Current configured number: <strong>{restaurantConfig.contact.phone}</strong>. Ensure this matches the phone that receives customer reservation messages.
                </p>
                <code className="text-[10px] text-gray-600 bg-gray-100 px-1 py-0.5 rounded block">
                  Config file: src/data/restaurantConfig.ts &rarr; contact
                </code>
              </label>
            </div>

            {/* Item 3: Menu & Pricing */}
            <div className="p-3.5 rounded-lg border border-gray-200 hover:border-[#C5A46D] transition-colors flex items-start gap-3">
              <input
                type="checkbox"
                id="check-menu"
                checked={checklist.menu}
                onChange={(e) => setChecklist({ ...checklist, menu: e.target.checked })}
                className="mt-1 w-4 h-4 text-[#481D26] rounded border-gray-300 focus:ring-[#C5A46D]"
              />
              <label htmlFor="check-menu" className="text-xs space-y-1 cursor-pointer flex-1">
                <span className="font-bold text-[#252321] flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#C5A46D]" />
                  3. Verify Complete Menu &amp; Daily Pricing
                </span>
                <p className="text-[#252321]/70">
                  Candidate items currently displayed: Abhiruchi Special Biryani &amp; Chicken Grill. Add full verified dishes and exact prices when ready.
                </p>
                <code className="text-[10px] text-gray-600 bg-gray-100 px-1 py-0.5 rounded block">
                  Data file: src/data/menuData.ts &rarr; candidateMenuItems
                </code>
              </label>
            </div>

            {/* Item 4: Private Cabins Policy */}
            <div className="p-3.5 rounded-lg border border-gray-200 hover:border-[#C5A46D] transition-colors flex items-start gap-3">
              <input
                type="checkbox"
                id="check-cabins"
                checked={checklist.cabins}
                onChange={(e) => setChecklist({ ...checklist, cabins: e.target.checked })}
                className="mt-1 w-4 h-4 text-[#481D26] rounded border-gray-300 focus:ring-[#C5A46D]"
              />
              <label htmlFor="check-cabins" className="text-xs space-y-1 cursor-pointer flex-1">
                <span className="font-bold text-[#252321] flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
                  4. Confirm Private Cabin Booking Policy
                </span>
                <p className="text-[#252321]/70">
                  Confirm reservation rules (minimum guest count, advance notice, or cabin fees if any).
                </p>
                <code className="text-[10px] text-gray-600 bg-gray-100 px-1 py-0.5 rounded block">
                  Config file: src/data/restaurantConfig.ts &rarr; features
                </code>
              </label>
            </div>
          </div>

          {/* Quick File Locations Reference */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-2">
            <span className="font-bold uppercase tracking-wider text-gray-500 block">
              Centralized Source Files:
            </span>
            <ul className="space-y-1 text-gray-700 font-mono text-[11px]">
              <li>• Configuration: <code>src/data/restaurantConfig.ts</code></li>
              <li>• Menu items: <code>src/data/menuData.ts</code></li>
              <li>• Photo gallery: <code>src/data/galleryData.ts</code></li>
              <li>• Reviews &amp; quotes: <code>src/data/reviewsData.ts</code></li>
              <li>• FAQ answers: <code>src/data/faqData.ts</code></li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#481D26] text-[#F8F3E9] text-xs font-semibold hover:bg-[#2B151B] transition-colors"
          >
            Acknowledge &amp; Close Checklist
          </button>
        </div>

      </div>
    </div>
  );
};
