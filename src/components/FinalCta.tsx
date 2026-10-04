import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, CalendarCheck, Globe, ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#1D1D1B] text-[#F5F2EC] relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Brand Monogram / Label */}
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.3em] text-[#A8875B] mb-4">
          <span className="w-6 h-px bg-[#A8875B]" />
          <span>HOTEL SIVOY • BHABUA</span>
          <span className="w-6 h-px bg-[#A8875B]" />
        </div>

        {/* Main Title as requested */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-6">
          GOOD STAYS START HERE.
        </h2>

        {/* Supporting text as requested */}
        <p className="font-sans text-base sm:text-xl text-[#D9D6CF] font-light max-w-2xl mx-auto mb-12">
          Plan your next stay at Hotel Sivoy, Bhabua.
        </p>

        {/* Buttons as requested */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-12">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#A8875B] hover:bg-[#96764d] text-white px-8 py-4 text-xs tracking-[0.22em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>CHECK AVAILABILITY</span>
          </button>

          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="w-full sm:w-auto border border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 text-xs tracking-[0.22em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-4 h-4 text-[#A8875B]" />
            <span>CALL HOTEL</span>
          </a>
        </div>

        {/* Verified details strip */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-[#D9D6CF]">
          <span className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
            <span>{HOTEL_INFO.phone}</span>
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <a
            href={HOTEL_INFO.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#A8875B] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#A8875B]" />
            <span>{HOTEL_INFO.website}</span>
          </a>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span>Check-in {HOTEL_INFO.checkIn} / Check-out {HOTEL_INFO.checkOut}</span>
        </div>

      </div>
    </section>
  );
};
