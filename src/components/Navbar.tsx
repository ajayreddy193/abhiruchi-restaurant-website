import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Calendar, PhoneCall, MapPin } from 'lucide-react';
import { restaurantConfig } from '../data/restaurantConfig';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'story', 'menu', 'experience', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Story', href: '#story', id: 'story' },
    { label: 'Menu', href: '#menu', id: 'menu' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#2B151B]/95 backdrop-blur-md shadow-lg shadow-black/15 py-3 border-b border-[#C5A46D]/30' 
          : 'bg-[#481D26] py-4 border-b border-[#C5A46D]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Authentic Restaurant Wordmark (No fabricated logo) */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex flex-col text-left focus-visible:outline-2 focus-visible:outline-[#C5A46D] rounded px-1"
          >
            <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-[#F8F3E9] group-hover:text-[#C5A46D] transition-colors leading-none">
              ABHIRUCHI
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C5A46D] font-medium mt-1">
              Family Restaurant Garden
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-all relative ${
                    isActive 
                      ? 'text-[#C5A46D] font-semibold' 
                      : 'text-[#F8F3E9]/85 hover:text-[#F8F3E9] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C5A46D] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={restaurantConfig.location.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#F8F3E9]/80 hover:text-[#C5A46D] hover:bg-white/5 rounded-full transition-colors"
              title="Directions on Google Maps"
              aria-label="Open Google Maps Directions"
            >
              <MapPin className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#C5A46D] hover:bg-[#DEC492] text-[#2B151B] text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A46D]"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenReservation}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#C5A46D] text-[#2B151B] text-xs font-semibold tracking-wide"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#F8F3E9] hover:text-[#C5A46D] hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#C5A46D]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div 
            className="relative w-full max-w-xs bg-[#2B151B] border-r border-[#C5A46D]/20 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              <div className="pb-4 mb-4 border-b border-[#C5A46D]/20">
                <span className="font-display text-2xl font-bold text-[#F8F3E9]">ABHIRUCHI</span>
                <p className="text-xs text-[#C5A46D] tracking-widest uppercase mt-0.5">Family Restaurant Garden</p>
                <p className="text-xs text-[#F8F3E9]/70 mt-1">Madanapalli Road, Rayachoty</p>
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Mobile menu links">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#481D26] text-[#C5A46D] font-semibold border-l-2 border-[#C5A46D]'
                          : 'text-[#F8F3E9]/80 hover:bg-[#481D26]/60 hover:text-[#F8F3E9]'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#C5A46D]/20 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[#C5A46D] hover:bg-[#DEC492] text-[#2B151B] font-semibold text-sm transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Table Reservation</span>
              </button>

              <a
                href={restaurantConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#C5A46D]/40 text-[#F8F3E9] hover:bg-[#481D26] font-medium text-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C5A46D]" />
                <span>Open Google Maps Directions</span>
              </a>

              <a
                href={`tel:${restaurantConfig.contact.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#481D26] text-[#C5A46D] font-medium text-xs hover:bg-[#481D26]/80 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Restaurant Desk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
