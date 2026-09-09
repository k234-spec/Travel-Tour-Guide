'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  Earth,
  MapPin,
  Sparkles,
  ArrowRight,
  Compass,
  Layers,
  RotateCw,
  Eye,
  CheckCircle2,
  Calendar,
  X,
} from 'lucide-react';

interface GlobeDestination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  lat: number;
  lng: number;
  season: string;
  hubs: string[];
  description: string;
}

const destinations: GlobeDestination[] = [
  {
    id: 'turkey',
    name: 'Turkey',
    region: 'Eurasia & Mediterranean',
    tagline: 'Cave Suites & Bosphorus Yacht',
    lat: 38.9637,
    lng: 35.2433,
    season: 'Apr – Oct',
    hubs: ['Istanbul', 'Cappadocia', 'Antalya', 'Pamukkale'],
    description: 'Where East meets West across historic minarets, surreal hot-air balloon valleys of Cappadocia, and Turquoise Coast shores.',
  },
  {
    id: 'georgia',
    name: 'Georgia',
    region: 'Caucasus & Black Sea',
    tagline: 'Mountain Lodges & Ancient Vineyards',
    lat: 42.3154,
    lng: 43.3569,
    season: 'May – Oct',
    hubs: ['Tbilisi', 'Kazbegi', 'Batumi', 'Kakheti'],
    description: 'Snow-crowned Caucasus peaks, historic cliffside monasteries, and millennia-old subterranean wine traditions.',
  },
  {
    id: 'philippines',
    name: 'Philippines',
    region: 'Southeast Asia',
    tagline: 'Limestone Lagoons & Private Atolls',
    lat: 12.8797,
    lng: 121.774,
    season: 'Nov – May',
    hubs: ['El Nido', 'Coron', 'Boracay', 'Siargao'],
    description: 'Over 7,000 emerald islands, secluded karst lagoons, powdery white sands, and world-class private marine diving sanctuaries.',
  },
  {
    id: 'egypt',
    name: 'Egypt',
    region: 'North Africa & Middle East',
    tagline: 'Nile Dahabiya & Ancient Wonders',
    lat: 26.8206,
    lng: 30.8025,
    season: 'Oct – Apr',
    hubs: ['Cairo', 'Luxor', 'Aswan', 'Hurghada'],
    description: 'Monumental pyramids of Giza, royal tombs in the Valley of the Kings, and timeless private luxury cruises along the Nile.',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Overwater Sanctuaries & Coral Reefs',
    lat: 3.2028,
    lng: 73.2207,
    season: 'Nov – Apr',
    hubs: ['North Malé Atoll', 'Baa Atoll', 'Ari Atoll'],
    description: 'Exclusive private island resorts, overwater villas with glass plunge pools, and bespoke seaplane transfers.',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    region: 'Southeast Asia',
    tagline: 'Bespoke Island Villas & Temples',
    lat: 15.87,
    lng: 100.9925,
    season: 'Nov – Mar',
    hubs: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi'],
    description: 'Glittering golden temples, mist-covered northern rainforest peaks, and world-famous tropical island cliffs.',
  },
  {
    id: 'uae',
    name: 'UAE',
    region: 'Middle East & Arabian Gulf',
    tagline: 'Desert Dunes & Ultra-Luxury Stays',
    lat: 23.4241,
    lng: 53.8478,
    season: 'Oct – Apr',
    hubs: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah'],
    description: 'Iconic architectural marvels, world-class luxury shopping, desert dune safaris, and premier cultural institutions.',
  },
  {
    id: 'europe',
    name: 'Europe & beyond',
    region: 'Continental & Transcontinental',
    tagline: 'Alpine Chalets & Historic Capitals',
    lat: 46.8182,
    lng: 8.2275,
    season: 'Year-Round',
    hubs: ['Paris', 'Rome', 'London', 'Zurich'],
    description: 'Bespoke multi-city itineraries spanning historic European capitals, Alpine scenic rail journeys, and Mediterranean rivieras.',
  },
];

export default function GlobePage() {
  const [selectedDest, setSelectedDest] = useState<GlobeDestination | null>(destinations[0]);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto rotation effect
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isRotating]);

  // Canvas drawing for interactive 3D Globe representation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const radius = Math.min(width, height) * 0.38;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // Deep space backdrop glow
    const radialGrad = ctx.createRadialGradient(centerX, centerY, radius * 0.2, centerX, centerY, radius * 1.3);
    radialGrad.addColorStop(0, '#0c2242');
    radialGrad.addColorStop(0.7, '#030814');
    radialGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = radialGrad;
    ctx.fillRect(0, 0, width, height);

    // Globe Sphere base
    const sphereGrad = ctx.createRadialGradient(
      centerX - radius * 0.3,
      centerY - radius * 0.3,
      radius * 0.1,
      centerX,
      centerY,
      radius
    );
    sphereGrad.addColorStop(0, '#1a3a60');
    sphereGrad.addColorStop(0.5, '#0b1d38');
    sphereGrad.addColorStop(0.85, '#050f20');
    sphereGrad.addColorStop(1, '#020712');

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = sphereGrad;
    ctx.fill();

    // Atmosphere Ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Subtle longitude & latitude grid rings
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 1;

    // Latitude rings
    [-0.5, -0.25, 0, 0.25, 0.5].forEach((latOffset) => {
      const ringY = centerY + radius * latOffset;
      const ringRadius = Math.sqrt(Math.max(0, radius * radius - Math.pow(radius * latOffset, 2)));
      ctx.beginPath();
      ctx.ellipse(centerX, ringY, ringRadius, ringRadius * 0.25, 0, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Longitude rings rotated over time
    for (let i = 0; i < 6; i++) {
      const angle = ((rotationAngle + i * 30) * Math.PI) / 180;
      const xOffset = Math.cos(angle) * radius;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, Math.abs(xOffset), radius, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw Destination Marker Pins
    destinations.forEach((dest) => {
      // Approximate 3D projection onto rotating sphere
      const radLng = ((dest.lng + rotationAngle) * Math.PI) / 180;
      const radLat = (dest.lat * Math.PI) / 180;

      const cosLat = Math.cos(radLat);
      const sinLat = Math.sin(radLat);
      const cosLng = Math.cos(radLng);
      const sinLng = Math.sin(radLng);

      // Only show markers on the visible hemisphere
      if (cosLng > -0.2) {
        const projX = centerX + radius * cosLat * sinLng;
        const projY = centerY - radius * sinLat;
        const isSelected = selectedDest?.id === dest.id;

        // Glow ring
        ctx.beginPath();
        ctx.arc(projX, projY, isSelected ? 12 : 7, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(251, 191, 36, 0.4)' : 'rgba(56, 189, 248, 0.25)';
        ctx.fill();

        // Pin core
        ctx.beginPath();
        ctx.arc(projX, projY, isSelected ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#fbbf24' : '#38bdf8';
        ctx.fill();

        // Label for selected destination
        if (isSelected) {
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px sans-serif';
          ctx.fillText(dest.name, projX + 12, projY + 4);
        }
      }
    });
  }, [rotationAngle, selectedDest]);

  return (
    <div className="relative min-h-screen bg-[#030814] text-slate-100 selection:bg-amber-500 selection:text-slate-950 flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1 pt-28 sm:pt-32 pb-16 flex flex-col">
        {/* Top Control Strip */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold tracking-wider uppercase text-accentGold mb-2">
                <Earth className="w-3.5 h-3.5 text-accentGold" />
                <span>Interactive 3D Satellite Explorer</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white tracking-tight">
                Explore The World In 3D
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRotating(!isRotating)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border text-xs font-semibold transition-all ${
                  isRotating
                    ? 'bg-slate-900 text-amber-300 border-amber-400/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800'
                }`}
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                <span>{isRotating ? 'Auto-Rotate ON' : 'Auto-Rotate PAUSED'}</span>
              </button>

              <Link
                href="/#enquiry"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-accentGold hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md"
              >
                <span>Plan My Trip</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Destination Pill Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none">
            {destinations.map((d) => {
              const active = selectedDest?.id === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDest(d)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <MapPin className={`w-3 h-3 ${active ? 'text-slate-950' : 'text-amber-400'}`} />
                  <span>{d.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Main Area: Canvas + Info Drawer */}
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl flex-1 flex flex-col lg:flex-row gap-8 items-center justify-between">
          {/* 3D Canvas Centerpiece */}
          <div className="relative w-full lg:w-3/5 flex items-center justify-center min-h-[380px] sm:min-h-[500px]">
            <canvas
              ref={canvasRef}
              width={700}
              height={560}
              className="max-w-full h-auto drop-shadow-2xl cursor-grab active:cursor-grabbing"
              onClick={() => {
                // Cycle to next destination on canvas tap
                const currentIdx = destinations.findIndex((d) => d.id === selectedDest?.id);
                const nextIdx = (currentIdx + 1) % destinations.length;
                setSelectedDest(destinations[nextIdx]);
              }}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[11px] text-slate-500 bg-slate-950/80 px-4 py-1.5 rounded-full border border-slate-800 pointer-events-none">
              Click globe or pills to focus destination coordinates
            </div>
          </div>

          {/* Destination Details Card */}
          {selectedDest && (
            <div className="w-full lg:w-2/5 p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {selectedDest.region}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {selectedDest.season}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                {selectedDest.name}
              </h2>
              <p className="text-xs sm:text-sm text-sky-400 font-medium mt-1">
                {selectedDest.tagline}
              </p>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
                {selectedDest.description}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Curated Regional Hubs
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDest.hubs.map((hub) => (
                    <span
                      key={hub}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs border border-slate-800"
                    >
                      {hub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/#enquiry"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-accentGold hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-lg"
                >
                  <span>Customize {selectedDest.name} Trip</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/#packages"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
                >
                  View Packages
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
