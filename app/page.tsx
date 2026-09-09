import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyBookWithUs from '../components/WhyBookWithUs';
import DestinationsSection from '../components/DestinationsSection';
import PartnerLogoGrid from '../components/PartnerLogoGrid';
import PackagesSection from '../components/PackagesSection';
import ServicesSection from '../components/ServicesSection';
import ReviewsSection from '../components/ReviewsSection';
import ItineraryWizard from '../components/ItineraryWizard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030814] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation Header with Top Utility Bar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="relative">
        {/* Full-Bleed Video Hero & Dedicated Stats Strip */}
        <Hero />

        {/* Why Book With Us Section (Directly after Hero/Stats strip and before Destinations) */}
        <WhyBookWithUs />

        {/* Curated Destinations Section */}
        <DestinationsSection />

        {/* Our Travel Partners Section (Directly after Destinations and before Packages) */}
        <PartnerLogoGrid />

        {/* Multi-Day Signature Packages */}
        <PackagesSection />

        {/* Concierge Services */}
        <ServicesSection />

        {/* Verified Traveler Reviews */}
        <ReviewsSection />

        {/* 12-Step Progressive Itinerary Wizard */}
        <ItineraryWizard />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
