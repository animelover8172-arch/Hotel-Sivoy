import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Clock, ArrowDown, KeyRound, Coffee, Moon, SunMedium } from 'lucide-react';

export const CheckinTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F2EC] border-b border-[#D9D6CF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-2">
            STAY CADENCE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] tracking-tight">
            THE RHYTHM OF YOUR STAY
          </h2>
          <p className="text-xs sm:text-sm text-[#1D1D1B]/75 mt-2">
            Structured for smooth transitions, restful nights, and unhurried departures.
          </p>
        </div>

        {/* Visual Timeline Layout */}
        <div className="relative">
          {/* Vertical joining hairline */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-[#D9D6CF] -translate-x-1/2" />

          <div className="space-y-12 relative">
            
            {/* Stage 1: 11:00 AM CHECK IN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right pr-0 md:pr-12">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#A8875B] uppercase tracking-widest mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>MORNING ARRIVAL</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium">
                  {HOTEL_INFO.checkIn}
                </h3>
                <div className="text-sm font-serif italic text-[#697568] mt-1">
                  CHECK IN
                </div>
                <p className="text-xs text-[#1D1D1B]/80 mt-2 font-sans">
                  Warm reception in Azad Nagar, secure parking coordination, key assignment, and room access.
                </p>
              </div>

              <div className="hidden md:flex justify-start pl-12">
                <div className="w-14 h-14 bg-white border border-[#D9D6CF] flex items-center justify-center text-[#A8875B] shadow-xs">
                  <KeyRound className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Transitional Arrow */}
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-full bg-white border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Stage 2: YOUR STAY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:flex justify-end pr-12">
                <div className="w-14 h-14 bg-[#1D1D1B] text-[#A8875B] border border-[#1D1D1B] flex items-center justify-center shadow-xs">
                  <Moon className="w-6 h-6" />
                </div>
              </div>

              <div className="pl-0 md:pl-12">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#A8875B] uppercase tracking-widest mb-1">
                  <Coffee className="w-3.5 h-3.5" />
                  <span>THE SANCTUARY</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium">
                  YOUR STAY
                </h3>
                <div className="text-sm font-serif italic text-[#697568] mt-1">
                  REST, WORK & RECHARGE
                </div>
                <p className="text-xs text-[#1D1D1B]/80 mt-2 font-sans">
                  Quiet air-conditioned comfort, high-speed Wi-Fi, responsive room service, and spotless hygiene.
                </p>
              </div>
            </div>

            {/* Transitional Arrow */}
            <div className="flex justify-center">
              <div className="w-8 h-8 rounded-full bg-white border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Stage 3: 10:30 AM CHECK OUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right pr-0 md:pr-12">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#A8875B] uppercase tracking-widest mb-1">
                  <SunMedium className="w-3.5 h-3.5" />
                  <span>EFFORTLESS DEPARTURE</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1D1D1B] font-medium">
                  {HOTEL_INFO.checkOut}
                </h3>
                <div className="text-sm font-serif italic text-[#697568] mt-1">
                  CHECK OUT
                </div>
                <p className="text-xs text-[#1D1D1B]/80 mt-2 font-sans">
                  Expeditious departure settlement, courteous luggage handling, and onward journey assistance.
                </p>
              </div>

              <div className="hidden md:flex justify-start pl-12">
                <div className="w-14 h-14 bg-white border border-[#D9D6CF] flex items-center justify-center text-[#A8875B] shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
