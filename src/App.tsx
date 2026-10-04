/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneyStory } from './components/JourneyStory';
import { SignatureInteraction } from './components/SignatureInteraction';
import { RoomStory } from './components/RoomStory';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { SivoyStandard } from './components/SivoyStandard';
import { GuestVoices } from './components/GuestVoices';
import { BookingExperience } from './components/BookingExperience';
import { CheckinTimeline } from './components/CheckinTimeline';
import { LocationExperience } from './components/LocationExperience';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AvailabilityModal } from './components/AvailabilityModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EC] text-[#1D1D1B] selection:bg-[#A8875B] selection:text-white flex flex-col font-sans">
      {/* Sticky Minimal Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hotel Hero with Trust Strip */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* The Art of a Good Stay: ARRIVE → SETTLE → RELAX → EXPLORE → REST */}
        <JourneyStory />

        {/* Signature Interactive Section: WHAT MATTERS MOST TO YOU? */}
        <SignatureInteraction />

        {/* Room Story: A ROOM THAT FEELS RIGHT. */}
        <RoomStory onOpenBooking={handleOpenBooking} />

        {/* Confirmed Amenities Smart Grid */}
        <AmenitiesGrid />

        {/* The Sivoy Standard: CLEAN, SERVICE, DETAIL */}
        <SivoyStandard />

        {/* Guest Voices: WHAT GUESTS NOTICE */}
        <GuestVoices />

        {/* Booking Experience: PLAN YOUR SIVOY STAY */}
        <BookingExperience onOpenBooking={handleOpenBooking} />

        {/* Check-in / Check-out Journey Timeline */}
        <CheckinTimeline />

        {/* Location Experience: IN THE HEART OF BHABUA */}
        <LocationExperience />

        {/* Final CTA: GOOD STAYS START HERE. */}
        <FinalCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer with RoadsideDeveloper Credits */}
      <Footer />

      {/* Check Availability Modal */}
      <AvailabilityModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
