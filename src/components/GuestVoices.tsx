import React from 'react';
import { VERIFIED_REVIEWS, HOTEL_INFO } from '../data/hotelData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export const GuestVoices: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#F5F2EC] border-b border-[#D9D6CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D9D6CF]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#697568] mb-2">
              <span className="w-4 h-px bg-[#A8875B]" />
              <span>TESTIMONIALS & EXPERIENCE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1D1D1B] tracking-tight">
              WHAT GUESTS NOTICE
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-3 bg-white px-5 py-3 border border-[#D9D6CF]">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <div className="border-l border-[#D9D6CF] pl-3 text-left">
              <span className="text-sm font-bold font-serif text-[#1D1D1B] block leading-none">
                {HOTEL_INFO.rating}★ on Google
              </span>
              <span className="text-[10px] font-mono text-[#697568] uppercase tracking-wider">
                {HOTEL_INFO.reviewCount} Verified Reviews
              </span>
            </div>
          </div>
        </div>

        {/* 3 Large Typographic Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_REVIEWS.map((review, index) => (
            <div
              key={review.author}
              className="bg-white border border-[#D9D6CF] p-8 sm:p-10 flex flex-col justify-between relative shadow-xs hover:border-[#A8875B] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-[#A8875B]/30 group-hover:text-[#A8875B] transition-colors" />
                  <span className="text-[10px] font-mono tracking-widest text-[#697568]">
                    0{index + 1}
                  </span>
                </div>

                {/* Exact Supplied Review */}
                <blockquote className="font-serif text-xl sm:text-2xl text-[#1D1D1B] italic leading-snug mb-6">
                  "{review.text}"
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#D9D6CF]/60">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-sans font-semibold text-sm text-[#1D1D1B]">
                      {review.author}
                    </div>
                    <div className="text-[11px] text-[#697568] mt-0.5">
                      Verified Google Reviewer
                    </div>
                  </div>

                  <div className="flex items-center text-[#A8875B] text-xs">
                    <ShieldCheck className="w-4 h-4 mr-1 text-[#A8875B]" />
                    <span className="font-mono text-[11px]">5.0★</span>
                  </div>
                </div>
              </div>

              {/* Top corner accent */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#A8875B] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Source citation */}
        <div className="mt-12 text-center text-xs text-[#697568] font-mono tracking-wider">
          AUTHENTIC GOOGLE MAPS REVIEWS • HOTEL SIVOY, BHABUA, BIHAR
        </div>

      </div>
    </section>
  );
};
