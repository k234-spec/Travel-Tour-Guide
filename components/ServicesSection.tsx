'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Plane,
  Building2,
  CarTaxiFront,
  Compass,
  FileCheck2,
  ShieldCheck,
  Ship,
  Mountain,
  UtensilsCrossed,
  KeyRound,
  WalletCards,
  Headphones,
  ArrowRight,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: 'transit' | 'stays' | 'vip';
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  description: string;
  ctaText: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'flights',
    title: 'Flights',
    category: 'transit',
    icon: Plane,
    iconColor: 'text-sky-400',
    description: 'International and domestic flight coordination, cabin optimization, and connection scheduling.',
    ctaText: 'Plan Flights',
  },
  {
    id: 'hotels',
    title: 'Hotels & resorts',
    category: 'stays',
    icon: Building2,
    iconColor: 'text-amber-400',
    description: 'Curated luxury accommodations, private villas, boutique heritage hotels, and premier island resorts.',
    ctaText: 'Curate Stays',
  },
  {
    id: 'transfers',
    title: 'Airport transfers',
    category: 'transit',
    icon: CarTaxiFront,
    iconColor: 'text-cyan-400',
    description: 'Private chauffeur airport pickups, luggage assistance, and executive point-to-point ground logistics.',
    ctaText: 'Arrange Transfers',
  },
  {
    id: 'packages',
    title: 'Tour packages',
    category: 'vip',
    icon: Compass,
    iconColor: 'text-emerald-400',
    description: 'Comprehensive multi-day holiday packages designed from concept to execution with personalized itineraries.',
    ctaText: 'Design Package',
  },
  {
    id: 'visa',
    title: 'Visa assistance',
    category: 'vip',
    icon: FileCheck2,
    iconColor: 'text-amber-400',
    description: 'Document review advisory, checklist preparation, and embassy appointment coordination guidance.',
    ctaText: 'Get Visa Help',
  },
  {
    id: 'insurance',
    title: 'Travel insurance',
    category: 'vip',
    icon: ShieldCheck,
    iconColor: 'text-sky-400',
    description: 'Assistance with comprehensive international travel coverage policies for health, baggage, and trip delays.',
    ctaText: 'Add Coverage',
  },
  {
    id: 'cruises',
    title: 'Cruises',
    category: 'stays',
    icon: Ship,
    iconColor: 'text-cyan-400',
    description: 'Nile river journeys, private island catamaran charters, and ocean cruise itineraries.',
    ctaText: 'Explore Cruises',
  },
  {
    id: 'activities',
    title: 'Activities',
    category: 'vip',
    icon: Mountain,
    iconColor: 'text-amber-400',
    description: 'Pre-arranged guided excursions, hot air balloon flights, desert safaris, and marine adventures.',
    ctaText: 'Book Activities',
  },
  {
    id: 'dining',
    title: 'Meals & dining',
    category: 'vip',
    icon: UtensilsCrossed,
    iconColor: 'text-emerald-400',
    description: 'Arrangements for regional culinary masterclasses, authentic dining reservations, and dietary tailoring.',
    ctaText: 'Plan Dining',
  },
  {
    id: 'car-rental',
    title: 'Car rental',
    category: 'transit',
    icon: KeyRound,
    iconColor: 'text-sky-400',
    description: 'Modern vehicle hire and luxury SUV rentals with insurance options for self-guided exploration.',
    ctaText: 'Rent Vehicle',
  },
  {
    id: 'budget',
    title: 'Budget planning',
    category: 'vip',
    icon: WalletCards,
    iconColor: 'text-amber-400',
    description: 'Transparent itinerary cost structuring, quotation breakdown, and value-optimized travel proposals.',
    ctaText: 'Structure Budget',
  },
  {
    id: 'support',
    title: 'Travel support',
    category: 'vip',
    icon: Headphones,
    iconColor: 'text-emerald-400',
    description: 'Dedicated travel specialist advisory and real-time guidance before and during your journey.',
    ctaText: 'Consult Advisor',
  },
];

export default function ServicesSection() {
  const [filter, setFilter] = useState<'all' | 'transit' | 'stays' | 'vip'>('all');

  const filteredServices =
    filter === 'all'
      ? servicesData
      : servicesData.filter((svc) => svc.category === filter);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#enquiry';
  };

  return (
    <section id="services" className="relative py-24 bg-slate-950/70 border-t border-slate-800/80">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-sky-600/5 blur-[160px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="flex flex-col max-w-3xl mb-12 lg:mb-16 text-center items-center mx-auto">
          <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold tracking-widest uppercase text-amber-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>End-to-End Travel Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Concierge Services <span className="text-amber-400 font-extrabold">&amp; Advisory Pillars</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Every component of your journey meticulously coordinated under a unified itinerary — from intercontinental flights and boutique resorts to private charters and visa clearance.
          </p>
        </div>

        {/* Full Suite Coordination Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950/70 via-slate-900/90 to-amber-950/50 border border-sky-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-medium rounded-full uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[10px] px-2.5 py-0.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Full-Suite Coordination
                </span>
                <span className="text-xs text-sky-300 font-medium">Unified Itinerary Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Plan a Complete, Seamless Journey</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prefer full-service travel management? Combine flights, private airport transfers, luxury resort reservations, curated dining, and guided activities into one harmonized proposal.
              </p>
            </div>
            <button
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 border border-amber-300/40 rounded-xl h-12 px-7 text-sm sm:text-base gap-2.5 font-bold w-full sm:w-auto shrink-0 shadow-xl shadow-amber-500/20 cursor-pointer"
            >
              <span>Plan Complete Journey</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              filter === 'all'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>All</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('transit')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              filter === 'transit'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:text-white'
            }`}
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Aviation &amp; Transit</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('stays')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              filter === 'stays'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Stays &amp; Cruises</span>
          </button>
          <button
            type="button"
            onClick={() => setFilter('vip')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              filter === 'vip'
                ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'text-slate-300 bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VIP Advisory &amp; Logistics</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.id}
                className="group relative rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/95 transition-all duration-300 p-6 flex flex-col justify-between space-y-5 shadow-lg hover:shadow-xl hover:shadow-sky-950/30 backdrop-blur-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-sky-500/50 transition-all duration-200 shadow-inner">
                      <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-amber-400 transition-colors">
                      Concierge
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {svc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/60">
                  <button
                    onClick={scrollToEnquiry}
                    className="inline-flex items-center duration-200 bg-slate-800/90 hover:bg-slate-700/90 text-white border border-slate-700/80 rounded-xl h-9 px-3.5 gap-1.5 w-full text-xs justify-between group-hover:bg-amber-500 group-hover:text-slate-950 group-hover:border-amber-400 transition-all cursor-pointer"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
