import React, { useState } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RestaurantHighlights } from './components/RestaurantHighlights';
import { StorySection } from './components/StorySection';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ReservationModal } from './components/ReservationModal';
import { OwnerNoticeModal } from './components/OwnerNoticeModal';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isOwnerNoticeOpen, setIsOwnerNoticeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3E9] text-[#252321] selection:bg-[#C5A46D]/30 selection:text-[#241116] parchment-texture">
      {/* 0. Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Accessible Skip Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#241116] focus:text-[#F8F3E9] focus:rounded-md focus:shadow-xl focus:border focus:border-[#C5A46D]"
      >
        Skip to main content
      </a>

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 3. Hero Section */}
        <HeroSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 4. Trust & Highlights Strip */}
        <RestaurantHighlights />

        {/* 5. Our Story */}
        <StorySection />

        {/* 6. Signature Dishes */}
        <SignatureDishes />

        {/* 7. Interactive Menu */}
        <MenuSection />

        {/* 8. Family Dining Experience */}
        <ExperienceSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 9. Visual Photo Gallery */}
        <GallerySection />

        {/* 10. Customer Reviews */}
        <ReviewsSection />

        {/* 11. Table Reservation Section */}
        <ReservationSection />

        {/* 12. Location & Contact */}
        <LocationSection />

        {/* 13. FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 14. Footer */}
      <Footer 
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenOwnerNotice={() => setIsOwnerNoticeOpen(true)}
      />

      {/* 15. Fixed Mobile Action Bar */}
      <MobileActionBar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* 16. Modals */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

      <OwnerNoticeModal 
        isOpen={isOwnerNoticeOpen} 
        onClose={() => setIsOwnerNoticeOpen(false)} 
      />
    </div>
  );
};

export default App;
