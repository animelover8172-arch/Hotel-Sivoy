import React, { useState } from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { Star, Wifi, MapPin, ArrowRight, ShieldCheck, Sparkles, Sun, Moon, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [ambientMode, setAmbientMode] = useState<'day' | 'evening' | 'night'>('evening');
  const [viewMode, setViewMode] = useState<'photo' | 'elevation'>('photo');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#F5F2EC]">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Hero Core Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
            
            {/* Small label */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-px bg-[#A8875B]" />
              <span className="text-xs sm:text-sm tracking-[0.28em] font-medium text-[#697568] uppercase">
                HOTEL SIVOY • BHABUA
              </span>
              <span className="text-xs text-[#A8875B] font-serif italic hidden sm:inline">
                होटल शिवाय
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-normal tracking-tight text-[#1D1D1B] leading-[1.08]">
              STAY COMFORTABLE.
              <br />
              <span className="italic font-light text-[#A8875B]">STAY SIVOY.</span>
            </h1>

            {/* Supporting line */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-[#1D1D1B]/80 font-normal leading-relaxed max-w-xl">
              A clean, comfortable stay in Azad Nagar, Bhabua.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#1D1D1B] hover:bg-[#A8875B] text-[#F5F2EC] px-8 py-4 text-xs tracking-[0.22em] font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-3 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D1D1B]"
              >
                <span>CHECK AVAILABILITY</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToSection('concept')}
                className="border border-[#1D1D1B]/30 hover:border-[#1D1D1B] text-[#1D1D1B] hover:bg-[#1D1D1B]/5 px-7 py-4 text-xs tracking-[0.22em] font-medium transition-all duration-300 flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1B]"
              >
                <span>EXPLORE THE STAY</span>
              </button>
            </div>

            {/* Micro value cues */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#697568]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A8875B]" />
                <span>Verified Guest Hygiene</span>
              </span>
              <span className="text-[#D9D6CF]">•</span>
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#A8875B]" />
                <span>Modern Air-Conditioned Rooms</span>
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Editorial Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Architectural Frame Border */}
              <div className="border border-[#D9D6CF] p-3 sm:p-4 bg-white/60 shadow-sm backdrop-blur-xs relative">
                
                {/* Visual Header / Mode Selector */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D9D6CF]/60 text-[11px] text-[#697568]">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('photo')}
                      className={`text-[10px] font-mono tracking-wider uppercase px-2 py-1 transition-colors cursor-pointer ${
                        viewMode === 'photo'
                          ? 'bg-[#1D1D1B] text-white font-medium'
                          : 'bg-[#F5F2EC] text-[#1D1D1B] hover:text-[#A8875B]'
                      }`}
                    >
                      HOTEL PHOTOGRAPHY
                    </button>
                    <button
                      onClick={() => setViewMode('elevation')}
                      className={`text-[10px] font-mono tracking-wider uppercase px-2 py-1 transition-colors cursor-pointer ${
                        viewMode === 'elevation'
                          ? 'bg-[#1D1D1B] text-white font-medium'
                          : 'bg-[#F5F2EC] text-[#1D1D1B] hover:text-[#A8875B]'
                      }`}
                    >
                      ELEVATION
                    </button>
                  </div>
                  
                  {/* Ambient Lighting toggle for elevation atmosphere */}
                  {viewMode === 'elevation' && (
                    <div className="flex items-center space-x-1 bg-[#F5F2EC] p-0.5 rounded-sm border border-[#D9D6CF]/70">
                      <button
                        onClick={() => setAmbientMode('day')}
                        aria-label="Day lighting"
                        className={`p-1 rounded-xs transition-colors cursor-pointer ${ambientMode === 'day' ? 'bg-white text-[#A8875B] shadow-xs' : 'text-[#697568]'}`}
                      >
                        <Sun className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => setAmbientMode('evening')}
                        aria-label="Evening golden lighting"
                        className={`p-1 rounded-xs transition-colors cursor-pointer ${ambientMode === 'evening' ? 'bg-[#1D1D1B] text-[#A8875B] shadow-xs' : 'text-[#697568]'}`}
                      >
                        <Sparkles className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => setAmbientMode('night')}
                        aria-label="Night ambient lighting"
                        className={`p-1 rounded-xs transition-colors cursor-pointer ${ambientMode === 'night' ? 'bg-[#1D1D1B] text-white shadow-xs' : 'text-[#697568]'}`}
                      >
                        <Moon className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  {viewMode === 'photo' && (
                    <span className="text-[10px] font-mono tracking-widest text-[#A8875B] uppercase hidden sm:inline">
                      AZAD NAGAR • BHABUA
                    </span>
                  )}
                </div>

                {/* Photo or Architectural Façade Rendering Canvas */}
                {viewMode === 'photo' ? (
                  <div className="relative aspect-[4/5] sm:aspect-[4/4.8] w-full overflow-hidden bg-[#1D1D1B] group">
                    <img
                      src={HOTEL_IMAGES.facade}
                      alt="Hotel Sivoy Bhabua exterior facade"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Editorial photo overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                    {/* Top photo specs */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-white text-xs font-mono">
                      <div className="bg-black/50 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                        <span className="text-[10px] tracking-widest text-[#A8875B]">HOTEL SIVOY</span>
                      </div>
                      <div className="bg-black/50 backdrop-blur-xs px-2.5 py-1 border border-white/20 text-[10px] tracking-wider">
                        WARD NO. 3 • BHABUA
                      </div>
                    </div>

                    {/* Bottom photo caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] font-mono tracking-[0.25em] text-[#A8875B] uppercase mb-1">
                        CONTEMPORARY HOSPITALITY
                      </div>
                      <div className="font-serif text-lg sm:text-xl font-normal leading-snug">
                        Modern Exterior with On-Site Parking & AC Rooms
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative aspect-[4/5] sm:aspect-[4/4.8] w-full overflow-hidden transition-all duration-700 flex flex-col justify-between p-6 ${
                      ambientMode === 'day'
                        ? 'bg-gradient-to-b from-[#FAF8F5] via-[#EFECE4] to-[#E3DFD5]'
                        : ambientMode === 'evening'
                        ? 'bg-gradient-to-b from-[#2A2927] via-[#22211F] to-[#171615] text-[#F5F2EC]'
                        : 'bg-gradient-to-b from-[#171716] via-[#101010] to-[#080808] text-[#F5F2EC]'
                    }`}
                  >
                    {/* Background grid lines */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                    {/* Top Architectural Elevation Specs */}
                    <div className="relative z-10 flex justify-between items-start">
                      <div>
                        <div className="text-[10px] tracking-[0.3em] font-mono uppercase opacity-70">
                          WARD NO. 3 • AZAD NAGAR
                        </div>
                        <div className="font-serif text-lg tracking-wide mt-0.5">
                          HOTEL SIVOY
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] tracking-widest font-mono text-[#A8875B]">
                          EST. BHABUA
                        </div>
                        <div className="text-[11px] opacity-75 font-mono">
                          CHECK-IN 11:00 AM
                        </div>
                      </div>
                    </div>

                    {/* Central Architectural Elevation Illustration */}
                    <div className="relative z-10 my-auto py-4 flex items-center justify-center">
                      <svg
                        viewBox="0 0 320 260"
                        className="w-full max-w-[280px] h-auto drop-shadow-md"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Ground line */}
                        <line x1="20" y1="240" x2="300" y2="240" stroke="#A8875B" strokeWidth="1.5" strokeDasharray="4 2" />

                        {/* Main Hotel Sivoy Building Structure */}
                        <rect x="50" y="40" width="220" height="200" stroke={ambientMode === 'day' ? '#1D1D1B' : '#D9D6CF'} strokeWidth="1.75" />
                        
                        {/* Roofline / Parapet */}
                        <rect x="42" y="32" width="236" height="8" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="1.5" fill={ambientMode === 'day' ? '#F5F2EC' : '#1D1D1B'} />
                        <line x1="160" y1="16" x2="160" y2="32" stroke="#A8875B" strokeWidth="1.5" />
                        <circle cx="160" cy="14" r="2.5" fill="#A8875B" />

                        {/* Sivoy Signage Plate */}
                        <rect x="100" y="52" width="120" height="22" stroke="#A8875B" strokeWidth="1" fill={ambientMode === 'day' ? '#FFFFFF' : '#262422'} />
                        <text x="160" y="67" textAnchor="middle" fill="#A8875B" fontSize="10" fontFamily="serif" letterSpacing="3">
                          HOTEL SIVOY
                        </text>

                        {/* Floor 3 Windows & Balcony */}
                        <rect x="70" y="90" width="45" height="34" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" fill={ambientMode === 'day' ? '#F5F2EC' : '#322E29'} />
                        <rect x="138" y="90" width="44" height="34" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" fill={ambientMode === 'day' ? '#F5F2EC' : '#322E29'} />
                        <rect x="205" y="90" width="45" height="34" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" fill={ambientMode === 'day' ? '#F5F2EC' : '#322E29'} />
                        <line x1="92" y1="90" x2="92" y2="124" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="0.8" opacity="0.6" />
                        <line x1="160" y1="90" x2="160" y2="124" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="0.8" opacity="0.6" />
                        <line x1="227" y1="90" x2="227" y2="124" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="0.8" opacity="0.6" />

                        {/* Floor 2 Windows & Balconies */}
                        <rect x="70" y="140" width="45" height="34" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" fill={ambientMode === 'day' ? '#F5F2EC' : '#322E29'} />
                        <rect x="138" y="140" width="44" height="34" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" fill={ambientMode === 'day' ? '#F5F2EC' : '#322E29'} />
                        <rect x="205" y="140" width="45" height="34" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" fill={ambientMode === 'day' ? '#F5F2EC' : '#322E29'} />
                        <line x1="92" y1="140" x2="92" y2="174" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="0.8" opacity="0.6" />
                        <line x1="160" y1="140" x2="160" y2="174" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="0.8" opacity="0.6" />
                        <line x1="227" y1="140" x2="227" y2="174" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="0.8" opacity="0.6" />

                        {/* Ground Floor Entrance & Portico */}
                        <rect x="125" y="195" width="70" height="45" stroke={ambientMode === 'day' ? '#1D1D1B' : '#A8875B'} strokeWidth="1.5" fill={ambientMode === 'day' ? '#FFFFFF' : '#1F1E1B'} />
                        <line x1="160" y1="195" x2="160" y2="240" stroke="#A8875B" strokeWidth="1.2" />
                        <polygon points="115,195 205,195 215,200 105,200" stroke="#A8875B" strokeWidth="1" fill={ambientMode === 'day' ? '#EAE5DB' : '#2C2824'} />
                        <rect x="70" y="200" width="38" height="30" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" />
                        <rect x="212" y="200" width="38" height="30" stroke={ambientMode === 'day' ? '#697568' : '#D9D6CF'} strokeWidth="1.2" />

                        {ambientMode !== 'day' && (
                          <>
                            <circle cx="92" cy="107" r="14" fill="#FFC876" opacity="0.18" />
                            <circle cx="160" cy="107" r="14" fill="#FFC876" opacity="0.18" />
                            <circle cx="227" cy="107" r="14" fill="#FFC876" opacity="0.18" />
                            <circle cx="92" cy="157" r="14" fill="#FFC876" opacity="0.22" />
                            <circle cx="160" cy="157" r="14" fill="#FFC876" opacity="0.22" />
                            <circle cx="227" cy="157" r="14" fill="#FFC876" opacity="0.22" />
                            <circle cx="160" cy="217" r="20" fill="#FFC876" opacity="0.25" />
                          </>
                        )}
                      </svg>
                    </div>

                    {/* Bottom Verification Label */}
                    <div className="relative z-10 pt-2 border-t border-current/15 flex items-center justify-between text-[11px] opacity-85">
                      <span className="font-serif italic">Verified Hotel Experience</span>
                      <span className="font-mono text-[10px] tracking-widest text-[#A8875B]">
                        BHABUA • BIHAR
                      </span>
                    </div>
                  </div>
                )}

                {/* Decorative corner accents */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#A8875B]" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#A8875B]" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#A8875B]" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#A8875B]" />
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-[#1D1D1B] text-[#F5F2EC] px-4 py-2.5 shadow-lg border border-[#A8875B]/30 flex items-center space-x-3">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider font-mono">4.3 / 5.0 RATING</div>
                  <div className="text-[10px] text-[#D9D6CF] font-sans">403 Verified Reviews</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Trust Strip (Exact specifications) */}
      <div className="relative z-10 mt-16 border-y border-[#D9D6CF] bg-white/70 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#D9D6CF]">
            
            {/* 4.3★ Rating */}
            <div className="flex items-center space-x-3 pt-2 md:pt-0">
              <div className="w-9 h-9 rounded-none bg-[#F5F2EC] border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                <Star className="w-5 h-5 fill-[#A8875B] text-[#A8875B]" />
              </div>
              <div>
                <div className="text-lg font-bold font-serif text-[#1D1D1B] leading-none">
                  4.3★
                </div>
                <div className="text-[11px] text-[#697568] tracking-wider uppercase font-medium mt-1">
                  Google Rating
                </div>
              </div>
            </div>

            {/* 403 Google Reviews */}
            <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
              <div className="w-9 h-9 rounded-none bg-[#F5F2EC] border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                <ShieldCheck className="w-5 h-5 text-[#A8875B]" />
              </div>
              <div>
                <div className="text-lg font-bold font-serif text-[#1D1D1B] leading-none">
                  403
                </div>
                <div className="text-[11px] text-[#697568] tracking-wider uppercase font-medium mt-1">
                  Google Reviews
                </div>
              </div>
            </div>

            {/* FREE WI-FI */}
            <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
              <div className="w-9 h-9 rounded-none bg-[#F5F2EC] border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                <Wifi className="w-5 h-5 text-[#A8875B]" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wider text-[#1D1D1B] leading-none uppercase">
                  FREE WI-FI
                </div>
                <div className="text-[11px] text-[#697568] tracking-wider uppercase font-medium mt-1">
                  Stay Connected
                </div>
              </div>
            </div>

            {/* AZAD NAGAR • BHABUA */}
            <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
              <div className="w-9 h-9 rounded-none bg-[#F5F2EC] border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                <MapPin className="w-5 h-5 text-[#A8875B]" />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-wider text-[#1D1D1B] leading-none uppercase">
                  AZAD NAGAR
                </div>
                <div className="text-[11px] text-[#697568] tracking-wider uppercase font-medium mt-1">
                  Bhabua, Bihar
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
