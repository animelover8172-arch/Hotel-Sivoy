import React, { useState } from 'react';
import { Compass, Sparkles, Bed, Shield, MapPin, ArrowRight } from 'lucide-react';

export const JourneyStory: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'ARRIVE',
      subtitle: 'Smooth Entry into Azad Nagar',
      description: 'Step into a calm, welcoming entrance situated conveniently in Ward No. 3, Bhabua. Check-in commences at 11:00 AM with courteous, attentive reception.',
      icon: MapPin,
      pillar: 'LOCATION',
    },
    {
      step: '02',
      title: 'SETTLE',
      subtitle: 'Unpack in Thoroughly Clean Interiors',
      description: 'Hygienic spaces and spotless linen prepare your sanctuary. Rooms are thoughtfully maintained with fantastically appointed interiors.',
      icon: Sparkles,
      pillar: 'CLEANLINESS',
    },
    {
      step: '03',
      title: 'RELAX',
      subtitle: 'Air-Conditioned Personal Climate',
      description: 'Cool down with dependable climate control, connect effortlessly to high-speed complimentary Wi-Fi, and request room service as you unwind.',
      icon: Bed,
      pillar: 'COMFORT',
    },
    {
      step: '04',
      title: 'EXPLORE',
      subtitle: 'Center of Bhabua & Kaimur Hub',
      description: 'Set out into the heart of town or attend to business knowing convenient parking and laundry service support your day with ease.',
      icon: Compass,
      pillar: 'SERVICE',
    },
    {
      step: '05',
      title: 'REST',
      subtitle: 'Undisturbed Nightly Peace',
      description: 'Experience deep rest in a child-friendly, family-welcoming hotel environment designed for sound, worry-free sleep before 10:30 AM check-out.',
      icon: Shield,
      pillar: 'EXPERIENCE',
    },
  ];

  return (
    <section id="concept" className="py-24 bg-[#F5F2EC] relative border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-3">
            <span className="w-5 h-px bg-[#A8875B]" />
            <span>CORE PHILOSOPHY</span>
            <span className="w-5 h-px bg-[#A8875B]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-4">
            "THE ART OF A GOOD STAY"
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#1D1D1B]/80 leading-relaxed font-normal">
            A good hotel stay is not only about a room.
            <br className="hidden sm:inline" />
            It is about{' '}
            <span className="font-medium text-[#1D1D1B] underline decoration-[#A8875B] decoration-2 underline-offset-4">
              CLEANLINESS → COMFORT → SERVICE → LOCATION → EXPERIENCE
            </span>.
          </p>
        </div>

        {/* Visual Storytelling Journey: ARRIVE → SETTLE → RELAX → EXPLORE → REST */}
        <div className="bg-white border border-[#D9D6CF] p-6 sm:p-10 shadow-sm relative">
          
          {/* Progress indicators / horizontal steps */}
          <div className="grid grid-cols-5 gap-2 sm:gap-4 pb-8 mb-8 border-b border-[#D9D6CF]/70 overflow-x-auto">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveStep(index)}
                  className={`flex flex-col items-start p-3 text-left transition-all duration-200 border-l-2 cursor-pointer focus-visible:outline-none ${
                    isActive
                      ? 'border-[#A8875B] bg-[#F5F2EC]'
                      : 'border-transparent hover:border-[#D9D6CF] hover:bg-[#F5F2EC]/50'
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-[#697568]">
                    {item.step}
                  </span>
                  <span className={`text-xs sm:text-sm font-serif tracking-wider font-semibold mt-1 ${isActive ? 'text-[#1D1D1B]' : 'text-[#1D1D1B]/60'}`}>
                    {item.title}
                  </span>
                  <span className="hidden sm:block text-[10px] text-[#A8875B] font-mono uppercase mt-0.5">
                    {item.pillar}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block bg-[#1D1D1B] text-[#F5F2EC] px-3 py-1 text-[11px] font-mono uppercase tracking-widest">
                STAGE {steps[activeStep].step} • {steps[activeStep].pillar}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-medium">
                {steps[activeStep].title}: {steps[activeStep].subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[#1D1D1B]/80 leading-relaxed font-sans">
                {steps[activeStep].description}
              </p>

              {/* Navigation controls */}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="text-xs tracking-wider uppercase font-mono px-3 py-2 border border-[#D9D6CF] hover:border-[#1D1D1B] transition-colors cursor-pointer text-[#1D1D1B]"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="text-xs tracking-wider uppercase font-mono px-4 py-2 bg-[#1D1D1B] text-white hover:bg-[#A8875B] transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Architectural diagram of step */}
            <div className="lg:col-span-5 bg-[#F5F2EC] border border-[#D9D6CF] p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
              <div className="w-14 h-14 bg-white border border-[#D9D6CF] flex items-center justify-center text-[#A8875B] mb-4 shadow-xs">
                {React.createElement(steps[activeStep].icon, { className: 'w-7 h-7' })}
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#697568]">
                THE SIVOY EXPERIENCE
              </div>
              <div className="font-serif text-xl text-[#1D1D1B] mt-1">
                {steps[activeStep].pillar} ORIENTED
              </div>
              <p className="text-xs text-[#1D1D1B]/70 max-w-xs mt-2 italic">
                Clean, modern, comfortable, trustworthy and welcoming hospitality in Bhabua.
              </p>
            </div>

          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#A8875B]" />
          </div>
        </div>

      </div>
    </section>
  );
};
