'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  location: string;
  destination: string;
  date: string;
  quote: string;
  photo: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  location,
  destination,
  date,
  quote,
  photo,
  rating = 5,
}: TestimonialCardProps) {
  const [imageError, setImageError] = useState(false);
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div className="overflow-hidden bg-slate-950/60 backdrop-blur-md border h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl border-slate-800/90 hover:border-amber-500/40 hover:bg-slate-900/95 transition-all duration-300 relative group shadow-xl">
      <div>
        {/* Star Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-slate-700 group-hover:text-amber-400/40 transition-colors" />
        </div>

        {/* Destination Tag */}
        <div className="flex items-center gap-1.5 text-xs text-sky-300 font-semibold mb-3">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{destination}</span>
        </div>

        {/* Quote Body */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
          “{quote}”
        </p>
      </div>

      {/* Client Profile Row (64-80px Circular Photo + Details) */}
      <div className="pt-5 border-t border-slate-800/70 flex items-center gap-4">
        {/* 64-80px Circular Client Avatar */}
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-amber-400/50 shrink-0 bg-slate-900 shadow-md">
          {!imageError ? (
            <Image
              src={photo}
              alt={name}
              width={72}
              height={72}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-900 text-amber-400 font-serif font-bold text-sm">
              {initials}
            </div>
          )}
        </div>

        {/* Name, Location, Verified Status & Travel Date */}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-white tracking-tight flex items-center gap-1.5 text-xs sm:text-sm">
            <span className="truncate">{name}</span>
            <span title="Verified Traveler" className="inline-flex">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </span>
          </div>
          <p className="text-[11px] text-slate-400 truncate mt-0.5">{location}</p>
          <p className="text-[10px] text-slate-400 font-mono mt-1.5 inline-block bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}
