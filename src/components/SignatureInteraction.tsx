import React, { useState } from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { Sparkles, Bed, BellRing, MapPin, CheckCircle2, Quote } from 'lucide-react';

export const SignatureInteraction: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<'CLEAN' | 'COMFORT' | 'SERVICE' | 'LOCATION'>('CLEAN');

  const cards = [
    {
      id: 'CLEAN' as const,
      title: 'CLEAN',
      tagline: 'Hygiene & Cleanliness',
      icon: Sparkles,
      image: HOTEL_IMAGES.bathroom,
      imageAlt: 'Spotless hygienic bathroom at Hotel Sivoy Bhabua',
      reviewQuote: 'Extremely clean and hygienic.',
      reviewAuthor: 'Verified Guest Sentiment (Munni Kumari & Santosh Singh)',
      verifiedHighlights: [
        'Extremely clean and hygienic rooms',
        'Spotless bed linen and sanitized surfaces',
        'Well-maintained bathroom and living areas',
        'Daily upkeep with strict cleanliness standards',
      ],
      description: 'Cleanliness is not an afterthought at Hotel Sivoy — it is the primary pillar upon which guest trust in Bhabua is built.',
    },
    {
      id: 'COMFORT' as const,
      title: 'COMFORT',
      tagline: 'Rest & Architecture',
      icon: Bed,
      image: HOTEL_IMAGES.room,
      imageAlt: 'Comfortable air-conditioned hotel room interior at Hotel Sivoy',
      reviewQuote: 'The rooms are well maintained with fantastically done interiors.',
      reviewAuthor: 'Verified Guest Sentiment (Ashutosh Pant)',
      verifiedHighlights: [
        'Air-conditioned accommodation for climate comfort',
        'Fantastically done modern room interiors',
        'Child-friendly atmosphere welcoming for families',
        'Quiet, soundly designed resting spaces',
      ],
      description: 'Comfort designed around restful sleep, reliable climate control, and well-proportioned interior spaces.',
    },
    {
      id: 'SERVICE' as const,
      title: 'SERVICE',
      tagline: 'Polite & Attentive Care',
      icon: BellRing,
      image: HOTEL_IMAGES.lobby,
      imageAlt: 'Front desk reception and guest service at Hotel Sivoy',
      reviewQuote: 'Excellent room service and place is extremely clean... staff is polite.',
      reviewAuthor: 'Verified Guest Sentiment (Munni Kumari & Santosh Singh)',
      verifiedHighlights: [
        'Attentive in-room Room Service',
        'Prompt Laundry Service on demand',
        'Courteous, polite, and responsive hotel staff',
        'Helpful assistance from check-in to check-out',
      ],
      description: 'Genuine hospitality with polite staff always on hand to assist with room service and laundry requests.',
    },
    {
      id: 'LOCATION' as const,
      title: 'LOCATION',
      tagline: 'Heart of Azad Nagar',
      icon: MapPin,
      image: HOTEL_IMAGES.location,
      imageAlt: 'Azad Nagar Bhabua location and exterior approach',
      reviewQuote: 'Location is great, staff is polite Very clean rooms , great experience',
      reviewAuthor: 'Verified Guest Sentiment (Santosh Singh)',
      verifiedHighlights: [
        'Ward No. 3, Azad Nagar, Bhabua, Bihar 821101',
        'Plus Code: 2HRX+5J Bhabua, Bihar',
        'Convenient parking available on premises',
        'Central, accessible connection to town and transit',
      ],
      description: 'Situated conveniently in Ward No. 3, Azad Nagar, placing you close to local commerce, transit, and quiet residential surroundings.',
    },
  ];

  const currentData = cards.find((c) => c.id === selectedPillar) || cards[0];
  const CurrentIcon = currentData.icon;

  return (
    <section className="py-24 bg-white border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-3">
            GUEST-CENTRIC FOCUS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] tracking-tight">
            WHAT MATTERS MOST TO YOU?
          </h2>
          <p className="text-sm text-[#1D1D1B]/75 mt-3">
            Select an aspect of your stay to discover how Hotel Sivoy delivers verified value.
          </p>
        </div>

        {/* 4 Selectable Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedPillar === card.id;

            return (
              <button
                key={card.id}
                onClick={() => setSelectedPillar(card.id)}
                className={`relative p-5 sm:p-7 text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8875B] ${
                  isSelected
                    ? 'bg-[#1D1D1B] text-[#F5F2EC] border-[#1D1D1B] shadow-lg translate-y-[-2px]'
                    : 'bg-[#F5F2EC] text-[#1D1D1B] border-[#D9D6CF] hover:border-[#A8875B] hover:bg-[#FAF8F5]'
                }`}
                aria-pressed={isSelected}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono tracking-widest uppercase ${isSelected ? 'text-[#A8875B]' : 'text-[#697568]'}`}>
                      PILLAR
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-[#A8875B]' : 'text-[#1D1D1B]/60'}`} />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide">
                    {card.title}
                  </h3>
                  <p className={`text-xs mt-1 ${isSelected ? 'text-[#D9D6CF]' : 'text-[#697568]'}`}>
                    {card.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/20 flex items-center justify-between">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? 'text-white' : 'text-[#1D1D1B]'}`}>
                    {isSelected ? 'ACTIVE VIEW' : 'CLICK TO VIEW'}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#A8875B]' : 'bg-[#D9D6CF]'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Revealed Verified Information Box with Integrated Photography */}
        <div className="border border-[#D9D6CF] bg-[#F5F2EC] p-6 sm:p-10 shadow-xs relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Verified Detail & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white border border-[#D9D6CF] flex items-center justify-center text-[#A8875B]">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#697568]">
                    VERIFIED SIVOY STANDARD
                  </span>
                  <h4 className="font-serif text-2xl text-[#1D1D1B] font-medium">
                    {currentData.title} in Bhabua
                  </h4>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1D1D1B]/85 leading-relaxed font-sans">
                {currentData.description}
              </p>

              {/* Verified Points */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#697568]">
                  VERIFIED SPECIFICATIONS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentData.verifiedHighlights.map((point) => (
                    <div
                      key={point}
                      className="flex items-start space-x-2.5 text-xs text-[#1D1D1B] bg-white p-3 border border-[#D9D6CF]/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#A8875B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Quote snippet */}
              <div className="pt-2">
                <blockquote className="font-serif text-base sm:text-lg text-[#1D1D1B] italic bg-white p-4 border-l-2 border-[#A8875B]">
                  "{currentData.reviewQuote}"
                  <span className="block text-[11px] font-mono text-[#697568] not-italic mt-1">
                    — {currentData.reviewAuthor}
                  </span>
                </blockquote>
              </div>
            </div>

            {/* Right side: High-Resolution Visual Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="border border-[#D9D6CF] p-2 bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1D1D1B]">
                  <img
                    src={currentData.image}
                    alt={currentData.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8875B] block">
                      {currentData.title} FOCUS
                    </span>
                    <span className="font-serif text-sm">
                      Hotel Sivoy, Azad Nagar, Bhabua
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
