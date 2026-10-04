import React, { useState } from 'react';
import { Wifi, Car, Wind, Shirt, BellRing, HeartHandshake, CheckCircle2, Shield } from 'lucide-react';
import { CONFIRMED_AMENITIES } from '../data/hotelData';

export const AmenitiesGrid: React.FC = () => {
  const [selectedAmenity, setSelectedAmenity] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return Wifi;
      case 'Car':
        return Car;
      case 'Wind':
        return Wind;
      case 'Shirt':
        return Shirt;
      case 'BellRing':
        return BellRing;
      case 'HeartHandshake':
        return HeartHandshake;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-white border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-3">
            <span className="w-4 h-px bg-[#A8875B]" />
            <span>CONFIRMED PROVISIONS</span>
            <span className="w-4 h-px bg-[#A8875B]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-4">
            AMENITIES — SMART GRID
          </h2>

          <p className="text-sm sm:text-base text-[#1D1D1B]/80 leading-relaxed font-normal">
            Honest, essential comforts meticulously provided for your stay in Bhabua.
          </p>
        </div>

        {/* 6 Confirmed Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIRMED_AMENITIES.map((amenity, index) => {
            const Icon = getIcon(amenity.icon);
            const isHoveredOrActive = selectedAmenity === amenity.id;

            return (
              <div
                key={amenity.id}
                onMouseEnter={() => setSelectedAmenity(amenity.id)}
                onMouseLeave={() => setSelectedAmenity(null)}
                className={`group relative p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHoveredOrActive
                    ? 'border-[#A8875B] bg-[#F5F2EC] shadow-md translate-y-[-2px]'
                    : 'border-[#D9D6CF] bg-white hover:border-[#A8875B]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center border transition-colors ${
                      isHoveredOrActive
                        ? 'bg-[#1D1D1B] border-[#1D1D1B] text-[#A8875B]'
                        : 'bg-[#F5F2EC] border-[#D9D6CF] text-[#1D1D1B]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#697568]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-[#1D1D1B] mb-2">
                    {amenity.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1D1D1B]/75 leading-relaxed font-sans">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D9D6CF]/60 flex items-center justify-between text-[11px] font-mono text-[#697568]">
                  <span className="flex items-center space-x-1.5 text-[#A8875B]">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Verified Amenity</span>
                  </span>
                  <span className="uppercase text-[10px] tracking-wider">
                    HOTEL SIVOY
                  </span>
                </div>

                {/* Subtle corner marker */}
                <div className={`absolute top-0 right-0 w-3 h-3 transition-opacity ${isHoveredOrActive ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#A8875B]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#697568] tracking-wide max-w-lg mx-auto italic">
            All listed amenities are confirmed and available to guests during their stay at Hotel Sivoy, Bhabua.
          </p>
        </div>

      </div>
    </section>
  );
};
