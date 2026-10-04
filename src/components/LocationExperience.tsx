import React, { useState } from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { MapPin, Navigation, Phone, Copy, Check, Car, Compass, ExternalLink, Map, Image as ImageIcon } from 'lucide-react';

export const LocationExperience: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);
  const [activeView, setActiveView] = useState<'map' | 'photo'>('map');

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(HOTEL_INFO.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-white border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D9D6CF]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-2">
              <span className="w-4 h-px bg-[#A8875B]" />
              <span>GEOGRAPHIC ADVANTAGE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1D1D1B] tracking-tight">
              IN THE HEART OF BHABUA
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-sm">
            <p className="text-xs sm:text-sm text-[#1D1D1B]/80 font-normal leading-relaxed">
              Situated in Azad Nagar with convenient on-site parking and accessible regional transit links.
            </p>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Premium Location Card & Details */}
          <div className="lg:col-span-6 bg-[#F5F2EC] border border-[#D9D6CF] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#A8875B] uppercase tracking-widest">
                <MapPin className="w-4 h-4 text-[#A8875B]" />
                <span>OFFICIAL REGISTERED ADDRESS</span>
              </div>

              {/* Exact Address as requested */}
              <div className="border-l-2 border-[#1D1D1B] pl-4 py-1">
                <div className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-medium leading-snug">
                  {HOTEL_INFO.address.line1},
                  <br />
                  {HOTEL_INFO.address.line2},
                  <br />
                  {HOTEL_INFO.address.city}, {HOTEL_INFO.address.state} {HOTEL_INFO.address.pincode}
                </div>
              </div>

              {/* Plus Code with 1-click copy */}
              <div className="p-4 bg-white border border-[#D9D6CF] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#697568]">
                    GOOGLE PLUS CODE
                  </div>
                  <div className="text-sm font-mono font-semibold text-[#1D1D1B] mt-0.5">
                    {HOTEL_INFO.plusCode}
                  </div>
                </div>

                <button
                  onClick={handleCopyPlusCode}
                  className="p-2 border border-[#D9D6CF] hover:border-[#A8875B] hover:bg-[#F5F2EC] text-[#1D1D1B] transition-colors flex items-center space-x-1 text-xs font-mono cursor-pointer"
                  title="Copy Google Plus Code"
                >
                  {copiedPlusCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#697568]" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Parking verified amenity */}
              <div className="flex items-center space-x-3 text-xs text-[#1D1D1B] bg-white p-3 border border-[#D9D6CF]/70">
                <Car className="w-4 h-4 text-[#A8875B] shrink-0" />
                <span>On-site parking available for resident guests and family vehicles.</span>
              </div>
            </div>

            {/* Action Buttons: GET DIRECTIONS and CALL HOTEL */}
            <div className="pt-8 mt-8 border-t border-[#D9D6CF] flex flex-col sm:flex-row gap-4">
              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1D1D1B] hover:bg-[#A8875B] text-white py-4 px-6 text-xs tracking-[0.2em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1B]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex-1 border border-[#1D1D1B] hover:bg-[#1D1D1B] text-[#1D1D1B] hover:text-white py-4 px-6 text-xs tracking-[0.2em] font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1B]"
              >
                <Phone className="w-4 h-4 text-[#A8875B]" />
                <span>CALL HOTEL</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Photography Card */}
          <div className="lg:col-span-6 border border-[#D9D6CF] bg-[#F5F2EC] flex flex-col relative overflow-hidden min-h-[380px]">
            {/* Map & Photo Switcher Header */}
            <div className="p-4 bg-white border-b border-[#D9D6CF] flex items-center justify-between text-xs font-mono text-[#697568]">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveView('map')}
                  className={`flex items-center space-x-1 px-2.5 py-1 transition-colors cursor-pointer ${
                    activeView === 'map' ? 'bg-[#1D1D1B] text-white font-medium' : 'bg-[#F5F2EC] text-[#1D1D1B]'
                  }`}
                >
                  <Map className="w-3.5 h-3.5" />
                  <span>GOOGLE MAP</span>
                </button>
                <button
                  onClick={() => setActiveView('photo')}
                  className={`flex items-center space-x-1 px-2.5 py-1 transition-colors cursor-pointer ${
                    activeView === 'photo' ? 'bg-[#1D1D1B] text-white font-medium' : 'bg-[#F5F2EC] text-[#1D1D1B]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>SURROUNDINGS</span>
                </button>
              </div>

              <a
                href={HOTEL_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8875B] hover:underline flex items-center space-x-1 text-[11px]"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Maps or Street Photography */}
            {activeView === 'map' ? (
              <div className="flex-1 w-full h-full min-h-[320px] bg-[#E5E3DF] relative">
                <iframe
                  title="Hotel Sivoy Bhabua Google Map Location"
                  src="https://maps.google.com/maps?q=25.0478,83.6139+(Hotel%20Sivoy%20Bhabua)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  aria-label="Hotel Sivoy Google Map location in Bhabua"
                />
              </div>
            ) : (
              <div className="flex-1 w-full h-full min-h-[320px] bg-[#1D1D1B] relative group">
                <img
                  src={HOTEL_IMAGES.location}
                  alt="Azad Nagar Bhabua street approach to Hotel Sivoy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] font-mono tracking-widest text-[#A8875B] uppercase mb-1">
                    AZAD NAGAR • WARD NO. 3
                  </div>
                  <div className="font-serif text-base sm:text-lg">
                    Peaceful Town Setting in Bhabua, Kaimur District
                  </div>
                </div>
              </div>
            )}

            {/* Bottom address label */}
            <div className="p-3 bg-white border-t border-[#D9D6CF] text-[11px] font-mono text-[#1D1D1B]/80 flex justify-between items-center">
              <span>BHABUA, KAIMUR DISTRICT, BIHAR</span>
              <span className="text-[#A8875B] font-semibold">PIN: 821101</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
