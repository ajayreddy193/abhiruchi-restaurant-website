import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { restaurantConfig } from '../data/restaurantConfig';
import type { ReservationFormData } from '../types';

interface ReservationFormProps {
  onSuccess?: () => void;
  isModal?: boolean;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ onSuccess }) => {
  // Today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phone: '',
    date: todayStr,
    time: '12:30 PM',
    guests: 4,
    seatingPreference: 'garden',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ReservationFormData | null>(null);

  // Validate Indian Phone number
  const validatePhone = (num: string): boolean => {
    // Strips spaces, hyphens, and +91
    const cleaned = num.replace(/[\s\-+]/g, '');
    const indianRegex = /^(?:91)?[6-9]\d{9}$/;
    return indianRegex.test(cleaned);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date.';
    } else if (formData.date < todayStr) {
      newErrors.date = 'Reservation date cannot be in the past.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred time.';
    }

    if (formData.guests < 1 || formData.guests > 30) {
      newErrors.guests = 'Please select between 1 and 30 guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save to local reservation log for owner review
    try {
      const existing = JSON.parse(localStorage.getItem('abhiruchi_reservations') || '[]');
      const newEntry = {
        ...formData,
        id: 'res_' + Date.now(),
        createdAt: new Date().toISOString(),
        status: 'pending_confirmation',
      };
      localStorage.setItem('abhiruchi_reservations', JSON.stringify([newEntry, ...existing]));
    } catch {
      // Local storage fallback
    }

    // Trigger visual confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A46D', '#481D26', '#858D73', '#DEC492'],
      });
    } catch {
      // Ignore if confetti not supported
    }

    // Prepare readable WhatsApp Message
    const seatingLabel = {
      garden: 'Garden Seating',
      private_cabin: 'Private Cabin (Subject to Availability)',
      main_hall: 'Main Dining Hall',
      no_preference: 'No Preference',
    }[formData.seatingPreference];

    const message = encodeURIComponent(
      `*TABLE RESERVATION REQUEST*\n` +
      `Restaurant: Abhiruchi Family Restaurant Garden, Rayachoty\n` +
      `──────────────────────────\n` +
      `• *Name:* ${formData.fullName.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n` +
      `• *Date:* ${formData.date}\n` +
      `• *Time:* ${formData.time}\n` +
      `• *Guests:* ${formData.guests} person(s)\n` +
      `• *Seating:* ${seatingLabel}\n` +
      (formData.specialRequests.trim() ? `• *Special Requests:* ${formData.specialRequests.trim()}\n` : '') +
      `──────────────────────────\n` +
      `_Please confirm availability for this request. Thank you!_`
    );

    // Open WhatsApp with verified message
    const whatsappUrl = `https://wa.me/${restaurantConfig.contact.whatsappNumber}?text=${message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      window.open(whatsappUrl, '_blank');
      if (onSuccess) onSuccess();
    }, 600);
  };

  const timeSlots = [
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
  ];

  if (submittedData) {
    return (
      <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#C5A46D]/40 shadow-xl text-center space-y-5 animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
            Request Dispatched
          </span>
          <h3 className="font-display text-2xl font-bold text-[#2B151B]">
            Reservation Request Sent!
          </h3>
          <p className="text-xs sm:text-sm text-[#252321]/75 max-w-md mx-auto">
            Thank you, <strong className="text-[#252321]">{submittedData.fullName}</strong>. Your table enquiry has been generated for{' '}
            <strong>{submittedData.date}</strong> at <strong>{submittedData.time}</strong> for{' '}
            <strong>{submittedData.guests} guest(s)</strong>.
          </p>
        </div>

        {/* Important Pending Confirmation Notice */}
        <div className="p-4 rounded-lg bg-[#F8F3E9] border border-[#C5A46D]/30 text-left text-xs space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#481D26]">
            <AlertCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
            <span>Important Confirmation Note:</span>
          </div>
          <p className="text-[#252321]/80 leading-relaxed">
            A table is <strong>not automatically guaranteed</strong> until confirmed by the Abhiruchi restaurant management via phone or WhatsApp. Please ensure you sent the WhatsApp message that just opened.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setSubmittedData(null)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#C5A46D] text-[#2B151B] text-xs font-semibold hover:bg-[#F8F3E9] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl p-6 sm:p-8 border border-[#C5A46D]/30 shadow-xl space-y-5 text-left"
    >
      <div className="space-y-1">
        <h3 className="font-display text-2xl font-bold text-[#2B151B]">
          Request a Table
        </h3>
        <p className="text-xs text-[#252321]/70 font-light">
          Fill out your details below to dispatch a direct WhatsApp reservation request to our front desk.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#252321] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#C5A46D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Ramesh Reddy"
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-[#F8F3E9]/20 focus:outline-none focus:ring-1 transition-all ${
                errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A46D]/40 focus:border-[#C5A46D] focus:ring-[#C5A46D]'
              }`}
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#252321] mb-1">
            Mobile Number (India) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#C5A46D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-[#F8F3E9]/20 focus:outline-none focus:ring-1 transition-all ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A46D]/40 focus:border-[#C5A46D] focus:ring-[#C5A46D]'
              }`}
            />
          </div>
          {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-xs font-semibold text-[#252321] mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#C5A46D] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="date"
              name="date"
              type="date"
              required
              min={todayStr}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-[#F8F3E9]/20 focus:outline-none focus:ring-1 transition-all ${
                errors.date ? 'border-red-500 focus:ring-red-500' : 'border-[#C5A46D]/40 focus:border-[#C5A46D] focus:ring-[#C5A46D]'
              }`}
            />
          </div>
          {errors.date && <p className="text-[11px] text-red-500 mt-1">{errors.date}</p>}
        </div>

        {/* Time Slot */}
        <div>
          <label htmlFor="time" className="block text-xs font-semibold text-[#252321] mb-1">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-[#C5A46D] absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#C5A46D]/40 bg-[#F8F3E9]/20 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
            >
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          {errors.time && <p className="text-[11px] text-red-500 mt-1">{errors.time}</p>}
        </div>

        {/* Guests Count */}
        <div>
          <label htmlFor="guests" className="block text-xs font-semibold text-[#252321] mb-1">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
              className="px-3 py-2 rounded-lg border border-[#C5A46D]/40 text-sm font-bold bg-[#F8F3E9] hover:bg-[#DEC492] transition-colors"
              aria-label="Decrease guests"
            >
              -
            </button>
            <div className="relative flex-1">
              <Users className="w-4 h-4 text-[#C5A46D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="30"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#C5A46D]/40 bg-[#F8F3E9]/20 text-center font-semibold"
              />
            </div>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, guests: Math.min(30, formData.guests + 1) })}
              className="px-3 py-2 rounded-lg border border-[#C5A46D]/40 text-sm font-bold bg-[#F8F3E9] hover:bg-[#DEC492] transition-colors"
              aria-label="Increase guests"
            >
              +
            </button>
          </div>
          {errors.guests && <p className="text-[11px] text-red-500 mt-1">{errors.guests}</p>}
        </div>

        {/* Seating Preference */}
        <div>
          <label htmlFor="seatingPreference" className="block text-xs font-semibold text-[#252321] mb-1">
            Seating Preference
          </label>
          <select
            id="seatingPreference"
            name="seatingPreference"
            value={formData.seatingPreference}
            onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
            className="w-full px-3 py-2 text-sm rounded-lg border border-[#C5A46D]/40 bg-[#F8F3E9]/20 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
          >
            <option value="garden">Garden Seating</option>
            <option value="private_cabin">Private Cabin (Subject to Availability)</option>
            <option value="main_hall">Main Dining Hall</option>
            <option value="no_preference">No Preference</option>
          </select>
        </div>

      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-xs font-semibold text-[#252321] mb-1">
          Special Requests / Occasion (Optional)
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          rows={2}
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          placeholder="e.g. Birthday dinner, high chair needed for child, quiet cabin preferred..."
          className="w-full p-3 text-sm rounded-lg border border-[#C5A46D]/40 bg-[#F8F3E9]/20 focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
        />
      </div>

      {/* Confirmation & Transparency Notice */}
      <div className="p-3.5 rounded-lg bg-[#F8F3E9] border border-[#C5A46D]/20 text-[11px] text-[#252321]/75 space-y-1">
        <p className="font-semibold text-[#481D26]">Notice on Booking Process:</p>
        <p>
          Submitting this form prepares your request and opens WhatsApp with our front desk. 
          <strong>All table requests must be acknowledged and confirmed by restaurant staff before being finalized.</strong>
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#C5A46D] hover:bg-[#DEC492] text-[#2B151B] font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99] disabled:opacity-60"
      >
        <MessageSquare className="w-4 h-4" />
        <span>{isSubmitting ? 'Preparing WhatsApp Request...' : 'Send Reservation Request on WhatsApp'}</span>
      </button>

      {/* Privacy Notice */}
      <p className="text-[10px] text-center text-[#252321]/60">
        Privacy Guarantee: We only use your name and phone number to coordinate your table booking.
      </p>

    </form>
  );
};
