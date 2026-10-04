import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'STAY', href: '#stay' },
    { label: 'AMENITIES', href: '#amenities' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'LOCATION', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F2EC]/95 backdrop-blur-md shadow-sm border-b border-[#D9D6CF]/70 py-3.5'
          : 'bg-[#F5F2EC]/80 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Identity */}
          <a
            href="#hero"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8875B]"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-semibold text-[#1D1D1B] group-hover:text-[#A8875B] transition-colors">
              HOTEL SIVOY
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#697568] uppercase font-sans">
              होटल शिवाय • Bhabua
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs tracking-[0.2em] font-medium text-[#1D1D1B]/80 hover:text-[#1D1D1B] relative py-1 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8875B]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#A8875B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Items */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-xs font-medium tracking-wider text-[#1D1D1B] hover:text-[#A8875B] transition-colors py-2 px-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A8875B]"
              title="Call Hotel Sivoy"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 bg-[#1D1D1B] hover:bg-[#A8875B] text-[#F5F2EC] hover:text-white px-5 py-2.5 text-xs tracking-[0.18em] font-medium transition-colors duration-200 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D1D1B]"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>CHECK AVAILABILITY</span>
            </button>
          </div>

          {/* Mobile menu and Quick Booking triggers */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-[#1D1D1B] text-[#F5F2EC] px-3 py-2 text-[11px] tracking-wider font-medium cursor-pointer"
            >
              CHECK DATES
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1D1B] hover:text-[#A8875B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8875B]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2EC] border-b border-[#D9D6CF] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm tracking-[0.2em] font-medium text-[#1D1D1B] hover:text-[#A8875B] py-2 border-b border-[#D9D6CF]/40"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col space-y-3">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center space-x-3 text-sm text-[#1D1D1B] font-medium py-2"
              >
                <div className="w-8 h-8 rounded-full bg-[#D9D6CF]/40 flex items-center justify-center text-[#A8875B]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{HOTEL_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#1D1D1B] text-[#F5F2EC] py-3 text-xs tracking-[0.2em] font-medium flex items-center justify-center space-x-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>CHECK AVAILABILITY</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
