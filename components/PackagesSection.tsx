'use client';

import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Clock,
  MapPin,
  Building,
  Check,
  ArrowRight,
} from 'lucide-react';

interface PackageItem {
  id: string;
  title: string;
  destination: string;
  region: string;
  days: number;
  durationCategory: string; // '5' | '7' | '10' | '14+'
  tag: string;
  hotel: string;
  milestones: string[];
  inclusions: string[];
}

const packagesData: PackageItem[] = [
  {
    id: 'turkey-5d',
    title: '5-Day Turkey Essential Highlights',
    destination: 'Turkey',
    region: 'Eurasia & Mediterranean',
    days: 5,
    durationCategory: '5',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Bosphorus Sunset Yacht Cruise',
      'Hagia Sophia & Blue Mosque Guided Tour',
      'Grand Bazaar Historic Walk',
    ],
    inclusions: [
      '4 Nights Boutique Hotel Accommodation',
      'Private Airport Transfers',
      'Daily Breakfast & Select Dinners',
      'Licensed English-Speaking Guide',
    ],
  },
  {
    id: 'georgia-7d',
    title: '7-Day Georgia Mountain & Heritage Odyssey',
    destination: 'Georgia',
    region: 'Caucasus & Black Sea',
    days: 7,
    durationCategory: '7',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Old Tbilisi Cableway & Thermal Bath District',
      'Kazbegi High-Altitude Mountain Expedition',
      'Kakheti Valley Artisan Tasting',
    ],
    inclusions: [
      '6 Nights Accommodation in Tbilisi & Stepantsminda',
      'Private 4x4 Mountain Transport',
      'All Entry Tickets & Guided Tours',
      'Dedicated Travel Advisory Support',
    ],
  },
  {
    id: 'philippines-7d',
    title: '7-Day Philippines Emerald Lagoon Escape',
    destination: 'Philippines',
    region: 'Southeast Asia & Pacific',
    days: 7,
    durationCategory: '7',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'El Nido Secret Lagoon Island Hopping',
      'Big Lagoon Kayak Adventure',
      'Coron Twin Lagoons & Kayangan Lake',
    ],
    inclusions: [
      '6 Nights Beachfront Resort Stay',
      'Domestic Speedboat Transfers',
      'Snorkeling Gear & Marine Sanctuary Permits',
      'Dedicated Island Concierge',
    ],
  },
  {
    id: 'egypt-10d',
    title: '10-Day Egypt Pyramids & Classic Nile Expedition',
    destination: 'Egypt',
    region: 'North Africa & Middle East',
    days: 10,
    durationCategory: '10',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Private Giza Plateau & Sphinx Access',
      '4-Night Luxury Nile River Cruise (Luxor to Aswan)',
      'Valley of the Kings & Karnak Temple',
    ],
    inclusions: [
      '5 Nights 5-Star Hotel + 4 Nights Nile Cruise',
      'Domestic Flights (Cairo-Luxor / Aswan-Cairo)',
      'All Sightseeing with Egyptologist Guide',
      'Full Board on Cruise',
    ],
  },
  {
    id: 'maldives-5d',
    title: '5-Day Maldives Luxury Overwater Retreat',
    destination: 'Maldives',
    region: 'Indian Ocean',
    days: 5,
    durationCategory: '5',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Private Overwater Villa with Ocean Lagoon Access',
      'House Reef Sunset Snorkeling',
      'Romantic Sandbank Catamaran Cruise',
    ],
    inclusions: [
      '4 Nights Private Overwater Villa',
      'Round-trip Seaplane / Speedboat Transfers',
      'All-Inclusive Dining & Beverage Package',
      'Personal Island Butler Service',
    ],
  },
  {
    id: 'thailand-10d',
    title: '10-Day Thailand Temples, Jungles & Andaman Shores',
    destination: 'Thailand',
    region: 'Southeast Asia',
    days: 10,
    durationCategory: '10',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Bangkok Grand Palace & Chao Phraya Longtail Boat',
      'Chiang Mai Ethical Elephant Sanctuary & Mountain Temples',
      'Phuket & Phi Phi Island Speedboat Excursion',
    ],
    inclusions: [
      '9 Nights Handpicked Luxury Accommodations',
      'Domestic Inter-City Flights',
      'Private Transfers & Island Excursions',
      'Full-Time Trip Coordinator',
    ],
  },
  {
    id: 'uae-5d',
    title: '5-Day UAE Skyline & Desert Dunes Experience',
    destination: 'UAE',
    region: 'Middle East & Arabian Gulf',
    days: 5,
    durationCategory: '5',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Burj Khalifa & Downtown Dubai Marvels',
      'VIP Arabian Desert Dune Safari & BBQ Camp',
      'Abu Dhabi Louvre & Sheikh Zayed Grand Mosque',
    ],
    inclusions: [
      '4 Nights Luxury Hotel in Downtown Dubai',
      'Private Executive Airport Transfers',
      'All Tour Entries & Safari 4x4 Logistics',
      '24/7 Travel Assistance Support',
    ],
  },
  {
    id: 'europe-14d',
    title: '14+ Day Europe & Beyond Grand Transcontinental Odyssey',
    destination: 'Europe & beyond',
    region: 'Continental & Transcontinental',
    days: 14,
    durationCategory: '14+',
    tag: 'Signature Route',
    hotel: '5★ Luxury Hotels & Boutique Stays',
    milestones: [
      'Historic European Capitals Circuit (Paris, Rome, Vienna)',
      'Swiss Alpine Panoramic Scenic Rail Journey',
      'Mediterranean Riviera Coastline Tour',
    ],
    inclusions: [
      '14 Nights Premier Heritage Hotels',
      'First-Class Eurail Passes & Private Transfers',
      'Curated Private Guided City Circuits',
      'Dedicated Bespoke Travel Concierge',
    ],
  },
];

export default function PackagesSection() {
  const [filter, setFilter] = useState<'All' | '5' | '7' | '10' | '14+'>('All');

  const filteredPackages =
    filter === 'All'
      ? packagesData
      : packagesData.filter((pkg) => pkg.durationCategory === filter);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#enquiry';
  };

  return (
    <section id="packages" className="relative py-24 bg-slate-950/90 border-t border-slate-800/80">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[350px] bg-sky-500/5 blur-[160px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="flex flex-col max-w-3xl mb-12 lg:mb-16 text-center items-center mx-auto">
          <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold tracking-widest uppercase text-amber-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Curated Itineraries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Customizable Journeys <span className="text-amber-400 font-extrabold">&amp; Multi-Day Packages</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Starting points that can be customized to your journey. Every itinerary is fully bespoke and calibrated to your pace, preferences, and travel style.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', '5', '7', '10', '14+'] as const).map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:text-white'
                }`}
              >
                {cat === 'All' ? (
                  <>
                    <Compass className="w-3.5 h-3.5" />
                    <span>All</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3 h-3" />
                    <span>{cat} Days</span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-900/95 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-950/20 backdrop-blur-md"
            >
              <div className="relative h-48 w-full bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 p-5 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-medium rounded-full uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] px-2.5 py-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {pkg.days} Days
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/15 px-2.5 py-0.5 rounded border border-amber-500/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    {pkg.tag}
                  </span>
                </div>
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-sky-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pkg.destination}</span>
                    <span className="text-slate-400">· {pkg.region}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors line-clamp-1">
                    {pkg.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300">
                    <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{pkg.hotel}</span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Curated Milestones
                    </span>
                    <ul className="space-y-1.5">
                      {pkg.milestones.map((ms, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                          <span className="leading-snug">{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Concierge Inclusions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.inclusions.map((inc, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 flex items-center gap-1"
                        >
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                      Starting Estimate
                    </span>
                    <span className="text-sm font-bold text-amber-400 font-mono">
                      Request a Quote
                    </span>
                  </div>
                  <button
                    onClick={scrollToEnquiry}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold border border-amber-300/40 rounded-xl h-9 px-3.5 gap-1.5 text-xs shadow-md shadow-amber-500/15 cursor-pointer"
                  >
                    <span>Customize</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
