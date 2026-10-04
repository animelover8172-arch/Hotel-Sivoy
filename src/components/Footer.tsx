import React from 'react';
import { HOTEL_INFO, DEVELOPER_INFO } from '../data/hotelData';
import { Phone, MapPin, Globe, MessageSquare, ArrowUp, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171615] text-[#D9D6CF] border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Identity & Location */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-white">
                {HOTEL_INFO.name}
              </span>
              <span className="text-xs tracking-[0.25em] text-[#A8875B] uppercase font-sans mt-0.5">
                {HOTEL_INFO.nameHindi} • BHABUA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#D9D6CF]/80 leading-relaxed max-w-sm">
              A clean, comfortable hotel in Azad Nagar, Bhabua offering air-conditioned accommodation with free Wi-Fi, on-site parking, laundry service and room service.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-white/70">
              <Star className="w-3.5 h-3.5 fill-[#A8875B] text-[#A8875B]" />
              <span>{HOTEL_INFO.rating}★ Rating</span>
              <span>•</span>
              <span>{HOTEL_INFO.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Hotel Contact & Verified Address */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8875B]">
              HOTEL CONTACT & ADDRESS
            </div>

            <div className="space-y-2.5 text-xs text-[#D9D6CF]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A8875B] shrink-0 mt-0.5" />
                <span>
                  {HOTEL_INFO.address.full}
                  <br />
                  <span className="text-[11px] font-mono text-white/60">
                    Plus Code: {HOTEL_INFO.plusCode}
                  </span>
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#A8875B] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {HOTEL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-[#A8875B] shrink-0" />
                <a
                  href={HOTEL_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {HOTEL_INFO.website}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8875B]">
              KEY DETAILS
            </div>

            <ul className="space-y-1.5 text-xs text-[#D9D6CF]">
              <li>
                <span className="text-white/60">Check-In:</span> {HOTEL_INFO.checkIn}
              </li>
              <li>
                <span className="text-white/60">Check-Out:</span> {HOTEL_INFO.checkOut}
              </li>
              <li>
                <span className="text-white/60">Category:</span> Hotel (Bhabua)
              </li>
              <li>
                <span className="text-white/60">Capacity:</span> 2 Guests default
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#A8875B] hover:text-white transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ROADSIDEDEVELOPER FOOTER CREDIT (Exact requirements) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#D9D6CF]/80 gap-4">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="font-medium text-white">
              Created by {DEVELOPER_INFO.name}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>🌐 Designed & Developed by {DEVELOPER_INFO.name}</span>
          </div>

          {/* Developer Contact Links */}
          <div className="flex items-center space-x-5 font-mono text-xs">
            <a
              href={DEVELOPER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>📱 {DEVELOPER_INFO.whatsappText}</span>
            </a>

            <a
              href={DEVELOPER_INFO.callUrl}
              className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
              title="Call Developer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>📞 {DEVELOPER_INFO.callText}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
