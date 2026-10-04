import React, { useState } from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { Wind, Wifi, BellRing, HeartHandshake, ShieldCheck, Check, Sparkles, BedSingle, ArrowRight } from 'lucide-react';

interface RoomStoryProps {
  onOpenBooking: () => void;
}

export const RoomStory: React.FC<RoomStoryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'plan' | 'service'>('overview');

  return (
    <section id="stay" className="py-24 bg-[#F5F2EC] relative border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D9D6CF]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-2">
              <span className="w-4 h-px bg-[#A8875B]" />
              <span>ACCOMMODATION & COMFORT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1D1D1B] tracking-tight">
              A ROOM THAT FEELS RIGHT.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-sm">
            <p className="text-xs sm:text-sm text-[#1D1D1B]/80 font-normal leading-relaxed">
              Designed for travelers seeking uncluttered cleanliness, tranquil rest, and attentive hospitality in Bhabua.
            </p>
          </div>
        </div>

        {/* Room Showcase Box */}
        <div className="bg-white border border-[#D9D6CF] shadow-xs">
          
          {/* Top navigation tabs */}
          <div className="flex border-b border-[#D9D6CF] bg-[#F5F2EC]/40 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3.5 border-r border-[#D9D6CF] transition-colors cursor-pointer ${
                activeTab === 'overview' ? 'bg-white font-bold text-[#1D1D1B] border-t-2 border-t-[#A8875B]' : 'text-[#697568] hover:text-[#1D1D1B]'
              }`}
            >
              01 • Room Features & Atmosphere
            </button>
            <button
              onClick={() => setActiveTab('plan')}
              className={`px-6 py-3.5 border-r border-[#D9D6CF] transition-colors cursor-pointer ${
                activeTab === 'plan' ? 'bg-white font-bold text-[#1D1D1B] border-t-2 border-t-[#A8875B]' : 'text-[#697568] hover:text-[#1D1D1B]'
              }`}
            >
              02 • Architectural Floor Plan
            </button>
            <button
              onClick={() => setActiveTab('service')}
              className={`px-6 py-3.5 transition-colors cursor-pointer ${
                activeTab === 'service' ? 'bg-white font-bold text-[#1D1D1B] border-t-2 border-t-[#A8875B]' : 'text-[#697568] hover:text-[#1D1D1B]'
              }`}
            >
              03 • In-Room Service Standards
            </button>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Visual Architectural Canvas & Room Photography */}
              <div className="lg:col-span-7">
                {activeTab === 'overview' && (
                  <div className="relative border border-[#D9D6CF] bg-[#1D1D1B] overflow-hidden aspect-[16/10] group">
                    <img
                      src={HOTEL_IMAGES.room}
                      alt="Hotel Sivoy modern air conditioned room interior"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Vignette & overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                    {/* Top tags */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start text-white text-xs font-mono">
                      <div className="bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/20">
                        <span className="text-[#A8875B] uppercase text-[10px] tracking-widest">AIR-CONDITIONED ROOM</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-xs px-2.5 py-1 border border-white/20 text-[10px]">
                        HOTEL SIVOY • BHABUA
                      </div>
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] font-mono tracking-widest text-[#A8875B] uppercase mb-1">
                        ROOM SPECIFICATION
                      </div>
                      <div className="font-serif text-lg sm:text-xl font-normal">
                        Spotless White Linens, Modern Headboard & Climate Control
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'plan' && (
                  <div className="relative border border-[#D9D6CF] bg-[#1D1D1B] text-[#F5F2EC] p-6 sm:p-8 flex flex-col justify-between aspect-[16/10] overflow-hidden">
                    <div className="flex justify-between items-start text-xs font-mono text-[#D9D6CF]">
                      <span>SCHEMATIC ROOM FLOORPLAN</span>
                      <span className="text-[#A8875B]">WARD NO. 3 • BHABUA</span>
                    </div>

                    {/* Floorplan blueprint graphic */}
                    <div className="my-auto py-2">
                      <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="20" width="320" height="160" stroke="#A8875B" strokeWidth="1.5" strokeDasharray="4 2" />
                        
                        {/* Room boundary */}
                        <rect x="50" y="30" width="300" height="140" stroke="#FFFFFF" strokeWidth="1.5" />
                        
                        {/* Door swing */}
                        <path d="M 50 140 A 30 30 0 0 1 80 170" stroke="#A8875B" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="50" y1="140" x2="50" y2="170" stroke="#FFFFFF" strokeWidth="2" />

                        {/* Bed layout */}
                        <rect x="180" y="30" width="110" height="80" stroke="#A8875B" strokeWidth="1.2" fill="#2A2927" />
                        <text x="235" y="75" textAnchor="middle" fill="#D9D6CF" fontSize="8" fontFamily="sans-serif">
                          REST BED AREA
                        </text>

                        {/* Bathroom ensuite */}
                        <rect x="50" y="30" width="90" height="70" stroke="#FFFFFF" strokeWidth="1" fill="#22211F" />
                        <text x="95" y="68" textAnchor="middle" fill="#A8875B" fontSize="8" fontFamily="sans-serif">
                          HYGIENIC ENSUITE
                        </text>

                        {/* Work / Luggage console */}
                        <rect x="290" y="130" width="60" height="30" stroke="#A8875B" strokeWidth="1" />
                        <text x="320" y="148" textAnchor="middle" fill="#D9D6CF" fontSize="7" fontFamily="sans-serif">
                          SERVICE DESK
                        </text>
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[11px] font-mono text-[#D9D6CF] pt-2 border-t border-white/20">
                      <span>FAMILY & CHILD FRIENDLY CAPACITY</span>
                      <span className="text-[#A8875B]">2 GUESTS DEFAULT</span>
                    </div>
                  </div>
                )}

                {activeTab === 'service' && (
                  <div className="relative border border-[#D9D6CF] bg-white p-6 sm:p-8 flex flex-col justify-between aspect-[16/10]">
                    <div className="flex justify-between items-start text-xs font-mono text-[#697568]">
                      <span>ROOM SERVICE & LAUNDRY</span>
                      <span className="text-[#A8875B]">PROMPT IN-ROOM CARE</span>
                    </div>

                    <div className="space-y-4 my-auto">
                      <div className="p-4 bg-[#F5F2EC] border-l-2 border-[#A8875B]">
                        <div className="font-serif text-base text-[#1D1D1B] font-medium">
                          Attentive Room Service
                        </div>
                        <p className="text-xs text-[#1D1D1B]/80 mt-1">
                          Direct in-room service available for guests throughout their stay.
                        </p>
                      </div>

                      <div className="p-4 bg-[#F5F2EC] border-l-2 border-[#697568]">
                        <div className="font-serif text-base text-[#1D1D1B] font-medium">
                          In-House Laundry Service
                        </div>
                        <p className="text-xs text-[#1D1D1B]/80 mt-1">
                          Convenient laundry turnaround to keep your clothing fresh and pressed.
                        </p>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-[#697568] pt-2 border-t border-[#D9D6CF]">
                      PHONE EXTENSION OR RECEPTION CALL: 075648 72622
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Verified Review Sentiments & Action */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#A8875B] mb-2">
                    VERIFIED GUEST REVIEWS
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-medium leading-snug">
                    Uncompromising Cleanliness & Well-Kept Interiors
                  </h3>
                </div>

                {/* EXACT review sentiments as required */}
                <div className="space-y-4">
                  <div className="border-l-2 border-[#A8875B] pl-4 py-1">
                    <p className="font-serif text-base sm:text-lg text-[#1D1D1B] italic">
                      "Excellent room service and place is extremely clean and hygienic."
                    </p>
                    <span className="text-xs font-mono text-[#697568] block mt-1">
                      — Munni Kumari, Verified Google Review
                    </span>
                  </div>

                  <div className="border-l-2 border-[#1D1D1B] pl-4 py-1">
                    <p className="font-serif text-base sm:text-lg text-[#1D1D1B] italic">
                      "The rooms are well maintained with fantastically done interiors."
                    </p>
                    <span className="text-xs font-mono text-[#697568] block mt-1">
                      — Ashutosh Pant, Verified Google Review
                    </span>
                  </div>
                </div>

                {/* Feature bullets */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#1D1D1B]">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#A8875B]" />
                    <span>Air-Conditioned</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#A8875B]" />
                    <span>Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#A8875B]" />
                    <span>Room Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#A8875B]" />
                    <span>Child Friendly</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#1D1D1B] hover:bg-[#A8875B] text-white py-4 px-6 text-xs tracking-[0.2em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1B]"
                  >
                    <span>CHECK AVAILABILITY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
