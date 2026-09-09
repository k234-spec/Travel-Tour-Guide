'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

interface ReviewItem {
  id: string;
  name: string;
  location: string;
  destination: string;
  date: string;
  quote: string;
  photo: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Marcus & Olivia Sterling',
    location: 'London, United Kingdom',
    destination: 'Turkey (Istanbul & Cappadocia)',
    date: 'Travelled May 2026',
    photo: '/images/testimonials/client-1.jpg',
    quote:
      'My Globe Guide orchestrated every detail flawlessly. From our private Bosphorus yacht charter to our sunrise Cappadocia hot air balloon flight and museum cave suite, we never had to worry about logistics. The on-trip WhatsApp support was instant.',
  },
  {
    id: 'rev-2',
    name: 'Dr. Tariq Al-Mansoor',
    location: 'Dubai, United Arab Emirates',
    destination: 'Georgia (Tbilisi & Kazbegi)',
    date: 'Travelled June 2026',
    photo: '/images/testimonials/client-2.jpg',
    quote:
      'The helicopter transfers and boutique mountain lodge in Kazbegi were spectacular. Having a dedicated advisor on WhatsApp made last-minute itinerary adjustments effortless. Truly bespoke concierge travel at its finest.',
  },
  {
    id: 'rev-3',
    name: 'Elena & David Chen',
    location: 'Singapore',
    destination: 'Maldives (Baa Atoll)',
    date: 'Travelled July 2026',
    photo: '/images/testimonials/client-3.jpg',
    quote:
      'We wanted an exclusive overwater sanctuary with private reef diving. My Globe Guide delivered rates and room upgrades we could not find on public booking sites. Seamless seaplane coordination from start to finish.',
  },
];

export default function ReviewsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="reviews" className="relative py-24 bg-slate-950/80 border-t border-slate-800/80 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[350px] bg-sky-500/5 blur-[160px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        <div className="flex flex-col max-w-3xl mb-12 lg:mb-16 text-center items-center mx-auto">
          <div className="mb-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold tracking-widest uppercase text-amber-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Verified Client Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-[1.15]">
            Traveler Stories <span className="text-amber-400 font-bold">&amp; Concierge Reviews</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Read how our destination architects crafted unforgettable international journeys for couples, families, and private travelers worldwide.
          </p>
        </div>

        {/* 3-Column Grid on Desktop, Horizontal Swipeable Carousel on Mobile */}
        <div className="relative mb-12">
          <div
            className="flex md:grid md:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 scrollbar-none"
            onScroll={(e) => {
              const el = e.currentTarget;
              const index = Math.round(el.scrollLeft / (el.offsetWidth * 0.85));
              setActiveIdx(Math.min(reviewsData.length - 1, Math.max(0, index)));
            }}
          >
            {reviewsData.map((rev) => (
              <div
                key={rev.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-auto"
              >
                <TestimonialCard
                  name={rev.name}
                  location={rev.location}
                  destination={rev.destination}
                  date={rev.date}
                  quote={rev.quote}
                  photo={rev.photo}
                />
              </div>
            ))}
          </div>

          {/* Mobile Swipe Pagination Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4">
            {reviewsData.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIdx === i ? 'w-6 bg-amber-400' : 'w-1.5 bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Assurance Desk Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm text-slate-300 text-left font-light">
              Every journey backed by our <strong className="text-white font-semibold">100% Customization Promise</strong> and <strong className="text-white font-semibold">24/7 Dedicated WhatsApp Support</strong>.
            </span>
          </div>
          <span className="text-xs font-bold text-amber-400 tracking-wider uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 shrink-0">
            Verified Advisory Desk
          </span>
        </div>
      </div>
    </section>
  );
}
