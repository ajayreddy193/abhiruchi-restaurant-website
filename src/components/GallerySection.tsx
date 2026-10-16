import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2, Camera } from 'lucide-react';
import { galleryItems } from '../data/galleryData';
import type { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedImageIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext]);

  // Lock background scroll when lightbox is active
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section 
      id="gallery" 
      className="bg-jali-light text-[#252321] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative"
      aria-label="Restaurant Photographic Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241116] text-[#DFC698] text-xs font-semibold uppercase tracking-[0.2em] border border-[#C5A46D]/40 shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Visual Experience</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#241116]">
            A Glimpse Into Abhiruchi
          </h2>

          <p className="text-base text-[#252321]/75 font-light leading-relaxed">
            Take a visual tour through our garden courtyards, private dining arrangements, and candidate culinary specialties.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'ambience', label: 'Garden Ambience' },
              { id: 'food', label: 'Food & Specialties' },
              { id: 'cabins', label: 'Private Cabins' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-[#241116] text-[#DFC698] shadow-md font-semibold'
                    : 'bg-white/80 text-[#252321]/70 hover:bg-[#EAE4D7] hover:text-[#252321] border border-[#C5A46D]/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical Gallery Grid with Smooth Motion Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: GalleryItem, index: number) => {
              const isLarge = index === 0 || index === 4;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  key={item.id}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`heritage-card group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-[#241116] ${
                    isLarge ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImageIndex(index);
                    }
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlaid Title & Hover Icon */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFC698] block">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F8F3E9]/80 font-light line-clamp-1 mt-1">
                      {item.caption}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#DFC698] opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-[#C5A46D]/30">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Full-Screen Accessible Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImageIndex !== null && currentItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Photo viewer: ${currentItem.title}`}
          >
            {/* Close Backdrop Click */}
            <div 
              className="absolute inset-0" 
              onClick={() => setSelectedImageIndex(null)}
              aria-hidden="true" 
            />

            {/* Top Controls Bar */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white">
              <div className="text-xs font-mono bg-black/70 px-3.5 py-1.5 rounded-full border border-white/15 text-[#DFC698]">
                {selectedImageIndex + 1} / {filteredItems.length}
              </div>

              <button
                type="button"
                onClick={() => setSelectedImageIndex(null)}
                className="p-2.5 rounded-full bg-black/70 hover:bg-[#39141D] text-white hover:text-[#DFC698] border border-white/15 transition-colors"
                aria-label="Close lightbox modal (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/70 hover:bg-[#39141D] text-white hover:text-[#DFC698] border border-white/15 transition-all hover:scale-110"
              aria-label="Previous photo (Arrow Left)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/70 hover:bg-[#39141D] text-white hover:text-[#DFC698] border border-white/15 transition-all hover:scale-110"
              aria-label="Next photo (Arrow Right)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content with Scale Animation */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 max-w-5xl w-full flex flex-col items-center pointer-events-none"
            >
              <div className="relative rounded-xl overflow-hidden max-h-[75vh] pointer-events-auto bg-black shadow-2xl border border-white/10">
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Lightbox Caption Card */}
              <div className="mt-4 p-4 rounded-xl bg-[#241116]/95 border border-[#C5A46D]/40 text-center max-w-2xl w-full pointer-events-auto shadow-2xl backdrop-blur-md">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFC698] block">
                  {currentItem.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#F8F3E9] mt-0.5">
                  {currentItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#F8F3E9]/80 font-light mt-1">
                  {currentItem.caption}
                </p>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
