import React, { useState, useEffect } from 'react';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { X, Calendar, Users, Phone, ExternalLink, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AvailabilityModal: React.FC<AvailabilityModalProps> = ({ isOpen, onClose }) => {
  const [checkInDate, setCheckInDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [checkOutDate, setCheckOutDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });

  const [guestCount, setGuestCount] = useState<number>(HOTEL_INFO.defaultGuests);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="bg-[#F5F2EC] w-full max-w-2xl border border-[#D9D6CF] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#1D1D1B] text-[#F5F2EC] flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#A8875B] uppercase block">
              HOTEL SIVOY • BHABUA
            </span>
            <h3 id="modal-title" className="font-serif text-2xl text-white font-medium">
              Check Room Availability
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#D9D6CF] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Room Visual Preview Banner */}
          <div className="relative aspect-[16/6] w-full overflow-hidden border border-[#D9D6CF] bg-[#1D1D1B]">
            <img
              src={HOTEL_IMAGES.room}
              alt="Hotel Sivoy room interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-2.5 left-3 right-3 text-white flex justify-between items-end">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#A8875B] block">
                  AZAD NAGAR • BHABUA
                </span>
                <span className="font-serif text-sm sm:text-base">
                  Air-Conditioned Accommodation & Free Wi-Fi
                </span>
              </div>
              <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 border border-white/20">
                4.3★ Rating
              </span>
            </div>
          </div>

          {/* Date & Guest Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white p-3.5 border border-[#D9D6CF]">
              <label htmlFor="modal-checkin" className="flex items-center text-[10px] font-mono uppercase tracking-wider text-[#697568] mb-1">
                <Calendar className="w-3 h-3 mr-1 text-[#A8875B]" />
                Check-in
              </label>
              <input
                id="modal-checkin"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full text-xs font-medium text-[#1D1D1B] bg-transparent focus:outline-none"
              />
              <span className="text-[10px] text-[#A8875B] font-mono">{HOTEL_INFO.checkIn}</span>
            </div>

            <div className="bg-white p-3.5 border border-[#D9D6CF]">
              <label htmlFor="modal-checkout" className="flex items-center text-[10px] font-mono uppercase tracking-wider text-[#697568] mb-1">
                <Calendar className="w-3 h-3 mr-1 text-[#A8875B]" />
                Check-out
              </label>
              <input
                id="modal-checkout"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full text-xs font-medium text-[#1D1D1B] bg-transparent focus:outline-none"
              />
              <span className="text-[10px] text-[#A8875B] font-mono">{HOTEL_INFO.checkOut}</span>
            </div>

            <div className="bg-white p-3.5 border border-[#D9D6CF]">
              <label htmlFor="modal-guests" className="flex items-center text-[10px] font-mono uppercase tracking-wider text-[#697568] mb-1">
                <Users className="w-3 h-3 mr-1 text-[#A8875B]" />
                Guests
              </label>
              <select
                id="modal-guests"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full text-xs font-medium text-[#1D1D1B] bg-transparent focus:outline-none py-0.5"
              >
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests (Default)</option>
                <option value={3}>3 Guests</option>
                <option value={4}>4 Guests</option>
              </select>
              <span className="text-[10px] text-[#697568] font-mono">Child Friendly</span>
            </div>
          </div>

          {/* Booking Options: Direct vs Partner */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#697568]">
              DIRECT HOTEL RESERVATION CHANNELS
            </div>

            {/* Official Hotel Website */}
            <div className="p-4 bg-white border border-[#D9D6CF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-serif text-lg font-medium text-[#1D1D1B]">
                  Official Hotel Sivoy Portal
                </div>
                <div className="text-xs text-[#697568]">
                  Direct room availability inquiry at {HOTEL_INFO.website}
                </div>
              </div>

              <a
                href={HOTEL_INFO.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#1D1D1B] hover:bg-[#A8875B] text-white px-5 py-2.5 text-xs font-mono tracking-wider transition-colors shrink-0"
              >
                <span>OPEN OFFICIAL SITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone Call */}
            <div className="p-4 bg-white border border-[#D9D6CF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-serif text-lg font-medium text-[#1D1D1B]">
                  Direct Reception Desk Call
                </div>
                <div className="text-xs text-[#697568]">
                  Instant confirmation & group bookings via hotel front desk
                </div>
              </div>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center space-x-2 border border-[#1D1D1B] hover:bg-[#1D1D1B] text-[#1D1D1B] hover:text-white px-5 py-2.5 text-xs font-mono tracking-wider transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#A8875B]" />
                <span>CALL {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Current Listed Comparison */}
          <div className="border border-[#D9D6CF] bg-white p-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A8875B] mb-2">
              LISTED COMPARISON (DATE-DEPENDENT)
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {HOTEL_INFO.priceComparison.map((item) => (
                <div key={item.platform} className="p-3 bg-[#F5F2EC] border border-[#D9D6CF]/70">
                  <div className="text-[#697568]">{item.platform}</div>
                  <div className="font-mono text-base font-bold text-[#1D1D1B] mt-0.5">
                    {item.price}
                  </div>
                  <div className="text-[10px] text-[#697568]">Listed platform rate</div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-start space-x-2 text-[11px] text-[#697568]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A8875B] shrink-0 mt-0.5" />
              <span>{HOTEL_INFO.priceDisclaimer}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#EAE7DF] border-t border-[#D9D6CF] flex items-center justify-between text-xs text-[#697568]">
          <span>Ward No. 3, Azad Nagar, Bhabua</span>
          <button
            onClick={onClose}
            className="text-[#1D1D1B] font-mono uppercase tracking-wider hover:underline cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
