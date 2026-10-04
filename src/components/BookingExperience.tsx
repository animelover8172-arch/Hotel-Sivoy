import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Calendar, Users, Clock, ExternalLink, Phone, ShieldCheck, ArrowRight } from 'lucide-react';

interface BookingExperienceProps {
  onOpenBooking: () => void;
}

export const BookingExperience: React.FC<BookingExperienceProps> = ({ onOpenBooking }) => {
  const [checkInDate, setCheckInDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [checkOutDate, setCheckOutDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });

  const [guests, setGuests] = useState<number>(HOTEL_INFO.defaultGuests);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking();
  };

  return (
    <section id="booking" className="py-24 bg-white border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-3">
            <span className="w-4 h-px bg-[#A8875B]" />
            <span>RESERVATIONS & TARIFFS</span>
            <span className="w-4 h-px bg-[#A8875B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-4">
            PLAN YOUR SIVOY STAY
          </h2>

          <p className="text-sm sm:text-base text-[#1D1D1B]/80 leading-relaxed font-normal">
            Transparent hospitality with direct inquiries and verified travel partner comparisons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Dates & Booking Plan Form */}
          <div className="lg:col-span-7 bg-[#F5F2EC] border border-[#D9D6CF] p-6 sm:p-10 shadow-xs">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#D9D6CF]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#697568] block">
                  STANDARD TIMINGS
                </span>
                <span className="font-serif text-xl text-[#1D1D1B] font-medium">
                  Check-in / Check-out Schedule
                </span>
              </div>

              <div className="flex items-center space-x-6 text-right">
                <div>
                  <div className="text-[10px] font-mono text-[#697568] uppercase">CHECK-IN</div>
                  <div className="text-sm font-semibold text-[#1D1D1B] font-mono">{HOTEL_INFO.checkIn}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#697568] uppercase">CHECK-OUT</div>
                  <div className="text-sm font-semibold text-[#1D1D1B] font-mono">{HOTEL_INFO.checkOut}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Check-In Date */}
                <div className="bg-white p-4 border border-[#D9D6CF]">
                  <label htmlFor="booking-checkin" className="flex items-center text-[10px] font-mono uppercase tracking-wider text-[#697568] mb-1">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-[#A8875B]" />
                    Check-in Date
                  </label>
                  <input
                    id="booking-checkin"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full text-xs font-medium text-[#1D1D1B] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#A8875B]"
                  />
                  <div className="text-[10px] text-[#A8875B] mt-1 font-mono">From {HOTEL_INFO.checkIn}</div>
                </div>

                {/* Check-Out Date */}
                <div className="bg-white p-4 border border-[#D9D6CF]">
                  <label htmlFor="booking-checkout" className="flex items-center text-[10px] font-mono uppercase tracking-wider text-[#697568] mb-1">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-[#A8875B]" />
                    Check-out Date
                  </label>
                  <input
                    id="booking-checkout"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full text-xs font-medium text-[#1D1D1B] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#A8875B]"
                  />
                  <div className="text-[10px] text-[#A8875B] mt-1 font-mono">Until {HOTEL_INFO.checkOut}</div>
                </div>

                {/* Guests */}
                <div className="bg-white p-4 border border-[#D9D6CF]">
                  <label htmlFor="booking-guests" className="flex items-center text-[10px] font-mono uppercase tracking-wider text-[#697568] mb-1">
                    <Users className="w-3.5 h-3.5 mr-1 text-[#A8875B]" />
                    Guests
                  </label>
                  <select
                    id="booking-guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full text-xs font-medium text-[#1D1D1B] bg-transparent focus:outline-none focus:ring-1 focus:ring-[#A8875B] py-0.5 cursor-pointer"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests (Default)</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests (Family)</option>
                  </select>
                  <div className="text-[10px] text-[#697568] mt-1 font-mono">Child Friendly</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#1D1D1B] hover:bg-[#A8875B] text-white py-4 px-6 text-xs tracking-[0.2em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1B]"
                >
                  <span>CHECK AVAILABILITY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phoneRaw}`}
                  className="border border-[#1D1D1B]/40 hover:border-[#1D1D1B] bg-white text-[#1D1D1B] py-4 px-6 text-xs tracking-[0.18em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
                  <span>CALL {HOTEL_INFO.phone}</span>
                </a>
              </div>

              {/* Official Website destination note */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#697568] pt-2">
                <span>OFFICIAL PORTAL: {HOTEL_INFO.website}</span>
                <span className="text-[#A8875B]">NO HIDDEN AGENT COMMISSIONS</span>
              </div>
            </form>
          </div>

          {/* Right Column: Listed Comparison & Date Disclaimers */}
          <div className="lg:col-span-5 bg-white border border-[#D9D6CF] p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D9D6CF]">
                <div className="text-xs font-mono uppercase tracking-widest text-[#A8875B]">
                  CURRENT LISTED COMPARISON
                </div>
                <div className="text-[10px] font-mono text-[#697568]">
                  REFERENCE RATES
                </div>
              </div>

              <div className="space-y-4">
                {HOTEL_INFO.priceComparison.map((item) => (
                  <div
                    key={item.platform}
                    className="p-4 bg-[#F5F2EC] border border-[#D9D6CF] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-serif text-lg text-[#1D1D1B] font-medium">
                        {item.platform}
                      </div>
                      <div className="text-[11px] text-[#697568]">
                        {item.note}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xl font-bold text-[#1D1D1B]">
                        {item.price}
                      </div>
                      <div className="text-[10px] text-[#697568] uppercase font-mono">
                        Per Night (Approx)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MANDATORY DISCLAIMER */}
            <div className="p-4 border border-[#A8875B]/30 bg-[#FAF8F5]">
              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A8875B] shrink-0 mt-0.5" />
                <p className="text-xs text-[#1D1D1B]/80 leading-relaxed font-sans">
                  <strong>Important Notice:</strong> {HOTEL_INFO.priceDisclaimer}
                </p>
              </div>
            </div>

            {/* Direct Official Link */}
            <div className="pt-2 border-t border-[#D9D6CF]">
              <a
                href={HOTEL_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F5F2EC] hover:bg-[#1D1D1B] text-[#1D1D1B] hover:text-[#F5F2EC] border border-[#D9D6CF] py-3 px-4 text-xs tracking-wider font-mono uppercase transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>VISIT {HOTEL_INFO.website}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
