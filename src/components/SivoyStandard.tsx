import React from 'react';
import { Sparkles, HeartHandshake, Eye, Check } from 'lucide-react';

export const SivoyStandard: React.FC = () => {
  const standards = [
    {
      word: 'CLEAN',
      summary: 'Clean rooms. Hygienic spaces.',
      feedback: 'place is extremely clean and hygienic... Very clean rooms',
      guestContext: 'Verified guest feedback from Munni Kumari & Santosh Singh',
      number: '01',
      icon: Sparkles,
      details: [
        'Sanitized bathroom and living surfaces',
        'Immaculate linen changes before every check-in',
        'Daily hygiene discipline upheld across all rooms',
      ],
    },
    {
      word: 'SERVICE',
      summary: 'Polite staff and room service.',
      feedback: 'Excellent room service... staff is polite',
      guestContext: 'Verified guest feedback from Munni Kumari & Santosh Singh',
      number: '02',
      icon: HeartHandshake,
      details: [
        'Prompt in-room dining assistance & water delivery',
        'Respectful, courteous staff addressing every inquiry',
        'Laundry service on request',
      ],
    },
    {
      word: 'DETAIL',
      summary: 'Well-maintained interiors.',
      feedback: 'The rooms are well maintained with fantastically done interiors.',
      guestContext: 'Verified guest feedback from Ashutosh Pant',
      number: '03',
      icon: Eye,
      details: [
        'Tasteful modern room appointments',
        'Effective air conditioning and electrical fittings',
        'Thoughtful room proportions suitable for families',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#1D1D1B] text-[#F5F2EC] relative overflow-hidden">
      {/* Subtle background lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/15">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#A8875B] block mb-2">
              UNCOMPROMISING PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white">
              THE SIVOY STANDARD
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-sm">
            <p className="text-xs sm:text-sm text-[#D9D6CF] font-light leading-relaxed">
              Every detail verified through consistent guest experiences in Bhabua.
            </p>
          </div>
        </div>

        {/* 3 Large Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {standards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.word}
                className="relative border border-white/15 bg-white/5 p-8 sm:p-10 flex flex-col justify-between hover:border-[#A8875B] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-[#A8875B] tracking-widest">
                      {item.number} / STANDARD
                    </span>
                    <Icon className="w-5 h-5 text-[#A8875B]" />
                  </div>

                  {/* Large Editorial Word */}
                  <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 group-hover:text-[#A8875B] transition-colors">
                    {item.word}
                  </h3>

                  {/* Subline */}
                  <p className="font-sans text-base sm:text-lg text-white/90 font-medium mb-6">
                    "{item.summary}"
                  </p>

                  {/* Verified Details */}
                  <ul className="space-y-2.5 mb-8">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-[#D9D6CF]">
                        <Check className="w-3.5 h-3.5 text-[#A8875B] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grounded in Guest Feedback */}
                <div className="pt-6 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#A8875B] mb-1">
                    GUEST VERIFICATION
                  </div>
                  <blockquote className="text-xs text-[#D9D6CF] italic">
                    "{item.feedback}"
                  </blockquote>
                  <span className="block text-[10px] font-mono text-white/40 mt-1">
                    {item.guestContext}
                  </span>
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A8875B] transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
