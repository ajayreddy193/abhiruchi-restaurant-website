import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MessageSquare, Utensils, AlertCircle, X, Sparkles } from 'lucide-react';
import { candidateMenuItems, proposedCategories } from '../data/menuData';
import { restaurantConfig } from '../data/restaurantConfig';
import type { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  // Filtered menu items
  const filteredDishes = useMemo(() => {
    return candidateMenuItems.filter((item: MenuItem) => {
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
      const vegMatch = !vegOnly || item.isVegetarian;
      const queryMatch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.teluguName && item.teluguName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && vegMatch && queryMatch;
    });
  }, [selectedCategory, searchQuery, vegOnly]);

  const handleAskMenuWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Abhiruchi Family Restaurant Garden! I am planning to visit and would love to see today's available menu and daily specials.`
    );
    window.open(`https://wa.me/${restaurantConfig.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section 
      id="menu" 
      className="bg-jali-light text-[#252321] py-20 lg:py-28 border-b border-[#C5A46D]/25 relative"
      aria-label="Interactive Restaurant Menu"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <span className="text-xs font-bold text-[#9F7E46] uppercase tracking-[0.25em] block">
            Culinary Offerings &amp; Specialties
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#241116]">
            Interactive Menu Explorer
          </h2>

          <p className="text-base text-[#252321]/75 font-light leading-relaxed">
            Browse our candidate dishes and proposed culinary categories. In keeping with our commitment to transparency, complete printed menus and seasonal daily specials are provided fresh at your table.
          </p>

          {/* Owner Transparency Notice Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 text-[#481D26] text-xs font-medium border border-[#C5A46D]/40 shadow-sm mt-2">
            <AlertCircle className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
            <span>Prices are subject to daily kitchen freshness &amp; verified at the restaurant.</span>
          </div>
        </motion.div>

        {/* Filter and Search Bar Container */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-[#C5A46D]/30 p-4 sm:p-6 mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-[#252321]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search biryani, grill, chicken, paneer..."
                className="w-full pl-10 pr-9 py-2.5 rounded-lg border border-[#C5A46D]/40 bg-[#F8F3E9]/40 text-sm focus:outline-none focus:border-[#C5A46D] focus:ring-1 focus:ring-[#C5A46D] transition-all"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#252321]/40 hover:text-[#252321]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Veg Only Toggle */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={(e) => setVegOnly(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-9 h-5 rounded-full transition-colors relative ${vegOnly ? 'bg-[#858D73]' : 'bg-gray-300'}`}>
                  <div className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-transform ${vegOnly ? 'left-4.5' : 'left-1'}`} />
                </div>
                <span className="text-xs font-medium text-[#252321]/80 flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full border border-green-600 flex items-center justify-center p-[2px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  </span>
                  Vegetarian Only
                </span>
              </label>

              {/* Quick WhatsApp Inquiry Action */}
              <button
                type="button"
                onClick={handleAskMenuWhatsApp}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366]/15 text-[#075E54] hover:bg-[#25D366]/25 border border-[#25D366]/40 text-xs font-semibold transition-all hover:scale-102"
                title="Ask for today's menu on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ask Today's Specials</span>
                <span className="sm:hidden">Specials</span>
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar" role="tablist">
            {proposedCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-[#241116] text-[#DFC698] shadow-md font-semibold'
                      : 'bg-[#F8F3E9] text-[#252321]/80 hover:bg-[#EAE4D7] hover:text-[#252321]'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid with AnimatePresence & layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish: MenuItem) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  key={dish.id}
                  className="heritage-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Optional Dish Thumbnail */}
                  {dish.image && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#241116]">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[#DFC698] text-[10px] font-bold uppercase tracking-wider border border-[#C5A46D]/30">
                          Signature Choice
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-3">
                    <div>
                      {/* Dietary marker & Category */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#9F7E46]">
                          {dish.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium">
                          {dish.isVegetarian ? (
                            <span className="w-3.5 h-3.5 border border-green-600 flex items-center justify-center p-[2px]" title="Vegetarian">
                              <span className="w-2 h-2 rounded-full bg-green-600" />
                            </span>
                          ) : (
                            <span className="w-3.5 h-3.5 border border-red-600 flex items-center justify-center p-[2px]" title="Non-Vegetarian">
                              <span className="w-2 h-2 rounded-full bg-red-600" />
                            </span>
                          )}
                          <span className="text-[10px] text-[#252321]/60">
                            {dish.isVegetarian ? 'Veg' : 'Non-Veg'}
                          </span>
                        </span>
                      </div>

                      {/* Dish Title */}
                      <h3 className="font-display text-xl font-bold text-[#252321] group-hover:text-[#481D26] transition-colors">
                        {dish.name}
                      </h3>
                      {dish.teluguName && (
                        <p className="text-xs text-[#9F7E46] font-medium mt-0.5">
                          {dish.teluguName}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-xs text-[#252321]/75 font-light leading-relaxed mt-2">
                        {dish.description}
                      </p>
                    </div>

                    {/* Status / Pricing Disclosure */}
                    <div className="pt-3 border-t border-[#C5A46D]/20 flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#858D73] font-medium">
                        <Sparkles className="w-3 h-3 text-[#C5A46D]" />
                        <span>Fresh Daily Prep</span>
                      </span>
                      <span className="text-[11px] text-[#252321]/60 italic font-mono">
                        Price verified on-site
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : null}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredDishes.length === 0 && (
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-12 text-center border border-dashed border-[#C5A46D]/40 max-w-lg mx-auto space-y-4">
            <Utensils className="w-10 h-10 text-[#C5A46D] mx-auto opacity-75" />
            <h3 className="font-display text-2xl font-bold text-[#252321]">
              No dishes found matching your query
            </h3>
            <p className="text-xs sm:text-sm text-[#252321]/70 font-light">
              We couldn't find any dishes matching "{searchQuery}". Try selecting another category or resetting the filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setVegOnly(false);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#241116] text-[#F8F3E9] text-xs font-semibold hover:bg-[#39141D] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Ask for Full Menu Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#241116] text-[#F8F3E9] flex flex-col md:flex-row items-center justify-between gap-6 text-left border border-[#C5A46D]/40 shadow-xl"
        >
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#DFC698] uppercase tracking-wider block">
              Planning a Gathering or Special Meal?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Ask Us for Today’s Complete Menu &amp; Specials
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F3E9]/80 font-light max-w-2xl">
              Connect directly with our team to inquire about current curries, seasonal biryani portions, group platters, or to confirm cabin availability.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAskMenuWhatsApp}
            className="shimmer-button shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#C5A46D] via-[#DFC698] to-[#C5A46D] text-[#241116] text-sm font-bold tracking-wide transition-all shadow-md hover:scale-102"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
