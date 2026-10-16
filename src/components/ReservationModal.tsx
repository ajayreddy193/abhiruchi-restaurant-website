import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ReservationForm } from './ReservationForm';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10 my-8 overflow-hidden animate-fade-in border border-[#C5A46D]/40">
        <div className="flex items-center justify-between p-4 bg-[#481D26] text-[#F8F3E9] border-b border-[#C5A46D]/30">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
              Table Booking Request
            </span>
            <h3 id="modal-title" className="font-display text-xl font-bold">
              Abhiruchi Family Restaurant Garden
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F8F3E9] hover:text-[#C5A46D] transition-colors focus-visible:outline-2 focus-visible:outline-[#C5A46D]"
            aria-label="Close reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <ReservationForm isModal={true} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
