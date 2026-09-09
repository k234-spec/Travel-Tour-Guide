'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Sparkles, ArrowRight, Earth } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  region: string;
  season: string;
  tagline: string;
  hubsCount: number;
  hubs: string[];
  extraHubsCount?: number;
  gradient: string;
  description: string;
}

const destinations: Destination[] = [
  {
    id: 'turkey',
    name: 'Turkey',
    region: 'Eurasia & Mediterranean',
    season: 'Apr – Oct',
    tagline: 'Cave Suites & Bosphorus Yacht',
    hubsCount: 5,
    hubs: ['Istanbul', 'Cappadocia', 'Antalya', 'Pamukkale'],
    extraHubsCount: 1,
    gradient: 'from-amber-900/60 via-slate-900/90 to-slate-950',
    description: 'Where East meets West across historic minarets, vibrant Grand Bazaars, surreal hot-air balloon valleys of Cappadocia, and pristine Turquoise Coast shores.',
  },
  {
    id: 'georgia',
    name: 'Georgia',
    region: 'Caucasus & Black Sea',
    season: 'May – Oct',
    tagline: 'Caucasus Lodges & Ancient Vineyards',
    hubsCount: 5,
    hubs: ['Tbilisi', 'Kazbegi', 'Batumi', 'Kakheti'],
    extraHubsCount: 1,
    gradient: 'from-emerald-900/60 via-slate-900/90 to-slate-950',
    description: 'Ancient monasteries perched against towering Caucasus mountain ranges, lush river valleys, cobblestone old town quarters, and warm traditional hospitality.',
  },
  {
    id: 'philippines',
    name: 'Philippines',
    region: 'Southeast Asia & Pacific',
    season: 'Nov – Apr',
    tagline: 'El Nido Lagoons & Coral Atolls',
    hubsCount: 6,
    hubs: ['Manila', 'El Nido', 'Coron', 'Cebu'],
    extraHubsCount: 2,
    gradient: 'from-cyan-900/60 via-slate-900/90 to-slate-950',
    description: 'An emerald archipelago of over seven thousand islands featuring world-renowned limestone lagoons, powdered white sand beaches, and vibrant marine sanctuaries.',
  },
  {
    id: 'egypt',
    name: 'Egypt',
    region: 'North Africa & Middle East',
    season: 'Oct – Apr',
    tagline: 'Nile Private Cruise & Giza Pyramids',
    hubsCount: 6,
    hubs: ['Cairo', 'Giza', 'Luxor', 'Aswan'],
    extraHubsCount: 2,
    gradient: 'from-amber-950/70 via-slate-900/90 to-slate-950',
    description: 'Timeless wonders of antiquity spanning the Great Pyramids of Giza, legendary Nile river cruises, the Valley of the Kings, and Red Sea coastal escapes.',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    region: 'Indian Ocean',
    season: 'Nov – Apr',
    tagline: 'Overwater Sanctuary & Reef Villas',
    hubsCount: 4,
    hubs: ['Malé', 'North Malé Atoll', 'South Ari Atoll', 'Baa Atoll'],
    gradient: 'from-sky-900/60 via-slate-900/90 to-slate-950',
    description: 'Ultra-exclusive overwater villas, crystal clear turquoise lagoons, coral atoll biodiversity, and bespoke private island relaxation.',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'Southeast Asia',
    season: 'Nov – Mar',
    tagline: 'Bespoke Island Villas & Temples',
    hubsCount: 6,
    hubs: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi'],
    extraHubsCount: 2,
    gradient: 'from-teal-900/60 via-slate-900/90 to-slate-950',
    description: 'Glittering golden temples, mist-covered northern rainforest peaks, bustling night markets, and world-famous tropical island cliffs.',
  },
  {
    id: 'uae',
    name: 'UAE',
    region: 'Middle East & Arabian Gulf',
    season: 'Oct – Apr',
    tagline: 'Desert Dunes & Ultra-Luxury Stays',
    hubsCount: 4,
    hubs: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah'],
    gradient: 'from-amber-900/50 via-slate-900/90 to-slate-950',
    description: 'Iconic modern architectural marvels, world-class luxury shopping, desert dune safaris, and premier cultural institutions along the Arabian Gulf.',
  },
  {
    id: 'europe',
    name: 'Europe & beyond',
    region: 'Continental & Transcontinental',
    season: 'Year-Round',
    tagline: 'Alpine Chalets & Historic Capitals',
    hubsCount: 7,
    hubs: ['Paris', 'Rome', 'London', 'Zurich'],
    extraHubsCount: 3,
    gradient: 'from-blue-900/60 via-slate-900/90 to-slate-950',
    description: 'Bespoke multi-city itineraries spanning historic European capitals, Alpine scenic rail journeys, Mediterranean rivieras, and transcontinental expeditions.',
  },
];

export default function DestinationsSection() {
  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#enquiry';
  };

  return (
    <section id="destinations" className="relative py-24 bg-slate-950/70 border-t border-slate-800/80">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/5 blur-[150px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="flex flex-col max-w-3xl mb-12 lg:mb-16 text-center items-center mx-auto">
          <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold tracking-widest uppercase text-amber-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Curated Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            World Portfolios <span className="text-amber-400 font-extrabold">&amp; Expedition Routes</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Immerse in eight handpicked international destinations spanning cultural wonders, Caucasus peaks, and private turquoise atolls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <article
              key={dest.id}
              className="group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md bg-slate-900/80 border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/95 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-950/40"
            >
              <div className={`relative h-48 w-full bg-gradient-to-b ${dest.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-slate-800/80`}>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center font-medium rounded-full tracking-wide uppercase bg-sky-500/15 text-sky-300 border border-sky-500/30 text-[10px] px-2.5 py-0.5">
                    {dest.region}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                    <Calendar className="w-2.5 h-2.5" />
                    {dest.season}
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="text-[11px] font-bold text-sky-200 tracking-tight flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-sky-500/20 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{dest.tagline}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                      {dest.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {dest.hubsCount} Key Hubs
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {dest.hubs.map((hub) => (
                      <span key={hub} className="px-2 py-0.5 rounded-md bg-slate-950/60 border border-slate-800 text-[10px] text-slate-300">
                        {hub}
                      </span>
                    ))}
                    {dest.extraHubsCount && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-950/60 border border-slate-800 text-[10px] text-slate-400">
                        +{dest.extraHubsCount}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                    <button
                      onClick={scrollToEnquiry}
                      className="inline-flex items-center transition-all duration-200 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 rounded-xl h-9 px-3.5 gap-1.5 flex-1 text-xs justify-center cursor-pointer"
                    >
                      <span>Customize Trip</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                    </button>
                    <Link
                      href="/globe"
                      className="inline-flex items-center justify-center font-medium bg-slate-900/80 hover:bg-slate-800 text-slate-200 border rounded-xl backdrop-blur-sm h-9 text-xs gap-1.5 px-2.5 border-slate-700 hover:border-sky-400 transition-colors cursor-pointer"
                      title={`Locate ${dest.name} on 3D Globe`}
                    >
                      <Earth className="w-4 h-4 text-sky-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
