'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Plane,
  Briefcase,
  GraduationCap,
  HeartPulse,
  PackageCheck,
  MessageCircle,
  MoveVertical,
  ChevronUp,
  ChevronDown,
  Layers3,
  LayoutGrid,
} from 'lucide-react';
import { BUSINESS_WHATSAPP_RAW } from '@/lib/constants';

interface VisaItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  turnaround: string;
  approvalRate: string;
  highlight: string;
  description: string;
  features: string[];
  supportedRegions: string;
  waPrompt: string;
}

const visaItems: VisaItem[] = [
  {
    id: 'tourist-visa',
    title: 'Tourist & Leisure Visa',
    subtitle: 'Worldwide Holiday & Exploration Visas',
    badge: 'Popular Choice',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    icon: Plane,
    image: '/images/visas/tourist-visa.jpg',
    turnaround: '2 – 4 Days (Fast-Track)',
    approvalRate: '99.4% Approval',
    highlight: '80+ Destinations Supported',
    description:
      'Effortless international holiday visas for individuals, families, and tour groups. From Schengen & UK to UAE, Japan, and Southeast Asia, we handle documentation, appointments, and biometric guidance.',
    features: [
      'Pre-vetted checklist & official embassy document review',
      'Confirmed flight itinerary & luxury hotel reservations for visa',
      'Fast-track biometric appointment booking assistance',
      'Dedicated case manager with real-time submission tracking',
    ],
    supportedRegions: 'Schengen, UK, USA, UAE, Turkey, Japan, Singapore & 70+ Countries',
    waPrompt: 'Hello My Globe Guide, I would like assistance with a Tourist Visa application.',
  },
  {
    id: 'business-visa',
    title: 'Corporate & Business Visa',
    subtitle: 'Executive Delegations & Commercial Travel',
    badge: 'Executive Express',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    icon: Briefcase,
    image: '/images/visas/business-visa.jpg',
    turnaround: '24 – 48 Hours Available',
    approvalRate: '99.8% Approval',
    highlight: 'Priority Embassy Channels',
    description:
      'Expedited visa clearances for corporate executives, investors, and official company delegations attending international symposiums, trade negotiations, and corporate meetings.',
    features: [
      'Chamber of Commerce & corporate invitation letter verification',
      'Priority express consulate interview slots',
      'Multi-entry & long-term commercial visa advisory',
      'Consolidated corporate invoicing & VIP door-to-door courier',
    ],
    supportedRegions: 'Europe, North America, Middle East (GCC), Asia-Pacific',
    waPrompt: 'Hello My Globe Guide, I need fast-track Corporate Business Visa processing.',
  },
  {
    id: 'student-visa',
    title: 'Student & Academic Visa',
    subtitle: 'Study Abroad & University Exchange Programs',
    badge: 'Higher Education',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    icon: GraduationCap,
    image: '/images/visas/student-visa.jpg',
    turnaround: 'Expedited Filing Support',
    approvalRate: '98.9% Success Rate',
    highlight: '1-on-1 Mock Interviews',
    description:
      'Comprehensive study abroad visa mentorship for undergraduate, postgraduate, and exchange scholars. We ensure seamless compliance with complex financial proof and university acceptance standards.',
    features: [
      'I-20, CAS, & university offer letter compliance checks',
      'Financial statement & bank affidavit vetting to prevent delays',
      'Rigorous 1-on-1 embassy mock interview preparation',
      'Pre-departure orientation & dependent student visa guidance',
    ],
    supportedRegions: 'USA (F-1), UK (Student Route), Canada, Germany, Australia',
    waPrompt: 'Hello My Globe Guide, I am applying for a University Student Visa and need guidance.',
  },
  {
    id: 'medical-visa',
    title: 'Medical & Wellness Visa',
    subtitle: 'Cross-Border Healthcare & Companion Clearance',
    badge: 'Priority Clearance',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    icon: HeartPulse,
    image: '/images/visas/medical-visa.jpg',
    turnaround: 'Urgent 24h Processing',
    approvalRate: '99.9% Emergency Rate',
    highlight: 'Patient + Attendant Pairing',
    description:
      'Compassionate, rapid-response medical visa procurement for patients seeking specialized treatments, surgeries, and wellness therapies abroad alongside designated medical attendants.',
    features: [
      'Accredited hospital invitation letter & doctor appointment sync',
      'Simultaneous medical attendant companion visa clearances',
      'Airport tarmac medical assistance & wheelchair transfer logistics',
      'Seamless visa extension support during extended medical treatments',
    ],
    supportedRegions: 'India, UAE, Germany, Thailand, Singapore, Turkey',
    waPrompt: 'Hello My Globe Guide, I require urgent Medical Travel Visa assistance for patient and attendant.',
  },
  {
    id: 'visa-packages',
    title: 'Visa + Tour Package Fast-Track',
    subtitle: 'All-In-One Unified Travel Architecture',
    badge: 'Turnkey Solution',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    icon: PackageCheck,
    image: '/images/visas/visa-consultation.jpg',
    turnaround: 'Harmonized Itinerary',
    approvalRate: 'Complete Protection',
    highlight: 'Zero-Risk Guarantee',
    description:
      'The ultimate hassle-free combination. Book your custom multi-day vacation package and visa processing together under one unified concierge team with zero communication gaps.',
    features: [
      'End-to-end itinerary: luxury resort, flights, transfers & visa bundled',
      'Free re-application guarantee if embassy schedules shift',
      'Single point of contact from first consultation to flight back home',
      'Priority 24/7 WhatsApp emergency assistance throughout your journey',
    ],
    supportedRegions: 'Global Multi-Day Tours & All Supported Continents',
    waPrompt: 'Hello My Globe Guide, I want to book a complete Tour Package bundled with Visa processing.',
  },
];

export default function VisaServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const [isHoveredSide, setIsHoveredSide] = useState<'left' | 'right' | 'center' | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Drag state for dragging from up to down
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartY, setDragStartY] = useState<number>(0);
  const [dragDeltaY, setDragDeltaY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeVisa = visaItems[activeIndex];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % visaItems.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + visaItems.length) % visaItems.length);
  }, []);

  // Vertical Drag handlers (dragging from up to down or down to up)
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartY(e.clientY);
    setDragDeltaY(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) {
      // Calculate 3D hover tilt when hovering over the card
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: x * 15, y: -y * 15 });

        // Hover side detection
        if (x < -0.15) setIsHoveredSide('left');
        else if (x > 0.15) setIsHoveredSide('right');
        else setIsHoveredSide('center');
      }
      return;
    }

    const delta = e.clientY - dragStartY;
    setDragDeltaY(delta);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // If dragged downward significantly, move to previous card
    if (dragDeltaY > 60) {
      handlePrev();
    }
    // If dragged upward significantly, move to next card
    else if (dragDeltaY < -60) {
      handleNext();
    }
    setDragDeltaY(0);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setDragDeltaY(0);
    setTilt({ x: 0, y: 0 });
    setIsHoveredSide(null);
  };

  // Touch handlers for mobile vertical drag
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartY(e.touches[0].clientY);
    setDragDeltaY(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientY - dragStartY;
    setDragDeltaY(delta);
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDeltaY > 50) {
      handlePrev();
    } else if (dragDeltaY < -50) {
      handleNext();
    }
    setDragDeltaY(0);
  };

  const scrollToEnquiry = (_visaName: string) => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#enquiry';
    }
  };

  return (
    <section
      id="visas"
      className="relative py-24 bg-gradient-to-b from-[#020611] via-[#030814] to-[#040a1a] text-slate-100 overflow-hidden border-t border-slate-800/80"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[650px] h-[450px] bg-sky-600/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Preload all images so 3D cycling is instant with zero flicker */}
      <div className="hidden" aria-hidden="true">
        {visaItems.map((v) => (
          <Image key={v.id} src={v.image} alt="preload" width={10} height={10} priority />
        ))}
      </div>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-[11px] font-bold tracking-widest uppercase text-amber-300 shadow-lg shadow-amber-500/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Core Concierge Pillar · Global Clearances</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Express Visas &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Travel Packages</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Streamlined visa processing backed by verified embassy checklists, fast-track appointments, and seamless integration with our signature multi-day travel packages.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl">
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-extrabold text-amber-400">99.4%</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Approval Rate</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-extrabold text-sky-400">80+ Countries</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Worldwide Reach</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-extrabold text-emerald-400">24–48h</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Express Filing</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-extrabold text-indigo-400">1,200+</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Visas Granted</p>
            </div>
          </div>

          {/* View Mode Switcher */}
          <div className="mt-8 flex items-center gap-2 p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === '3d'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Layers3 className="w-3.5 h-3.5" />
              <span>3D Motion Deck</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Compare All (5)</span>
            </button>
          </div>
        </div>

        {/* ── 3D MOTION DECK VIEW ────────────────────────────────────── */}
        {viewMode === '3d' && (
          <div className="relative max-w-5xl mx-auto select-none">
            {/* Category Selector Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {visaItems.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/20 font-bold scale-105'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                    <span>{item.title.split('&')[0].trim()}</span>
                  </button>
                );
              })}
            </div>

            {/* Drag & Hover Instruction Cue */}
            <div className="flex items-center justify-center gap-2 mb-4 text-xs font-medium text-slate-400">
              <MoveVertical className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
              <span>
                <strong className="text-slate-200">Drag Up / Down</strong> to cycle cards · Hover left &amp; right to tilt in 3D
              </span>
            </div>

            {/* 3D Motion Stage Container */}
            <div
              ref={containerRef}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{
                perspective: '1200px',
                perspectiveOrigin: 'center center',
              }}
              className="relative min-h-[580px] sm:min-h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing p-2"
            >
              {/* Flanking Left Card (Preview incoming from Left on hover) */}
              <div
                onClick={handlePrev}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `
                    translateX(-65%)
                    translateZ(${isHoveredSide === 'left' ? '-10px' : '-80px'})
                    rotateY(${isHoveredSide === 'left' ? '28deg' : '22deg'})
                    scale(${isHoveredSide === 'left' ? '0.94' : '0.88'})
                  `,
                  transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: isHoveredSide === 'left' ? 0.7 : 0.35,
                }}
                className="hidden lg:block absolute left-0 w-[420px] rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-700/60 shadow-2xl backdrop-blur-xl pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={visaItems[(activeIndex - 1 + visaItems.length) % visaItems.length].image}
                    alt="Previous Visa Service"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
                <div className="p-5 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Previous</span>
                  <h4 className="text-base font-bold text-white">
                    {visaItems[(activeIndex - 1 + visaItems.length) % visaItems.length].title}
                  </h4>
                </div>
              </div>

              {/* ACTIVE 3D MAIN CARD (Features dynamic cursor tilt and vertical drag response) */}
              <div
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `
                    translateY(${dragDeltaY * 0.75}px)
                    rotateX(${tilt.y + dragDeltaY * 0.08}deg)
                    rotateY(${tilt.x + (isHoveredSide === 'left' ? 8 : isHoveredSide === 'right' ? -8 : 0)}deg)
                    translateZ(40px)
                    scale(${1 - Math.abs(dragDeltaY) * 0.0008})
                  `,
                  transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="relative w-full max-w-3xl rounded-3xl bg-slate-900/95 border border-amber-500/40 shadow-2xl shadow-slate-950/90 backdrop-blur-2xl overflow-hidden transition-all group"
              >
                {/* Visual Glare Layer */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at ${50 + tilt.x * 2}% ${50 - tilt.y * 2}%, rgba(251, 191, 36, 0.15) 0%, transparent 70%)`,
                  }}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative z-10">
                  {/* Left Column: Image & Badges */}
                  <div className="md:col-span-5 relative min-h-[260px] md:min-h-full overflow-hidden bg-slate-950">
                    <Image
                      src={activeVisa.image}
                      alt={activeVisa.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border backdrop-blur-md ${activeVisa.badgeColor}`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {activeVisa.badge}
                      </span>
                    </div>

                    {/* Bottom Image Stats */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs text-slate-200">
                      <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 backdrop-blur-md">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-semibold">{activeVisa.turnaround}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/30 backdrop-blur-md">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="font-bold">{activeVisa.approvalRate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Details & Fast-Track Actions */}
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                        <span>{activeVisa.subtitle}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                        {activeVisa.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {activeVisa.description}
                      </p>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-2.5 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Concierge Guarantee Includes:
                      </p>
                      <ul className="grid grid-cols-1 gap-2 text-xs text-slate-200">
                        {activeVisa.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Supported Countries tag */}
                    <div className="text-[11px] text-slate-400">
                      <strong className="text-slate-300">Key Geographies:</strong> {activeVisa.supportedRegions}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        onClick={() => scrollToEnquiry(activeVisa.title)}
                        className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 border border-amber-300/40 transition-all cursor-pointer"
                      >
                        <span>Start Visa Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href={`https://wa.me/${BUSINESS_WHATSAPP_RAW}?text=${encodeURIComponent(activeVisa.waPrompt)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
                        title="Direct WhatsApp Visa Advisory"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flanking Right Card (Preview incoming from Right on hover) */}
              <div
                onClick={handleNext}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `
                    translateX(65%)
                    translateZ(${isHoveredSide === 'right' ? '-10px' : '-80px'})
                    rotateY(${isHoveredSide === 'right' ? '-28deg' : '-22deg'})
                    scale(${isHoveredSide === 'right' ? '0.94' : '0.88'})
                  `,
                  transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: isHoveredSide === 'right' ? 0.7 : 0.35,
                }}
                className="hidden lg:block absolute right-0 w-[420px] rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-700/60 shadow-2xl backdrop-blur-xl pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={visaItems[(activeIndex + 1) % visaItems.length].image}
                    alt="Next Visa Service"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
                <div className="p-5 text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Next Up</span>
                  <h4 className="text-base font-bold text-white">
                    {visaItems[(activeIndex + 1) % visaItems.length].title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Vertical Drag & Navigation Controls Bar */}
            <div className="mt-8 flex items-center justify-between gap-4 max-w-xl mx-auto px-4">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 text-slate-300 hover:text-white transition-all shadow-md flex items-center gap-1 text-xs font-semibold"
                aria-label="Previous Visa Category"
              >
                <ChevronUp className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {visaItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm shadow-amber-400/40'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 text-slate-300 hover:text-white transition-all shadow-md flex items-center gap-1 text-xs font-semibold"
                aria-label="Next Visa Category"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronDown className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        )}

        {/* ── ALL VISAS EXPANDED GRID VIEW ─────────────────────────────── */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.id}
                  className="rounded-3xl bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 group"
                >
                  <div>
                    {/* Card Media Banner */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 px-2.5 py-0.5 rounded-lg border border-slate-800 text-[11px] text-amber-300 font-bold">
                        {item.turnaround}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                          <IconComponent className="w-3.5 h-3.5" />
                          <span>{item.subtitle}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>

                      <ul className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                        {item.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => scrollToEnquiry(item.title)}
                      className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer"
                    >
                      <span>Apply for {item.title.split('&')[0].trim()}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`https://wa.me/${BUSINESS_WHATSAPP_RAW}?text=${encodeURIComponent(item.waPrompt)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-emerald-300 border border-slate-700 text-xs font-semibold transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Cross-Link Banner to Travel Packages */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-950/60 via-slate-900/90 to-amber-950/60 border border-amber-500/30 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Unified Travel Logistics</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Already have your visa or need an all-inclusive travel package?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Explore our multi-day curated itineraries for Turkey, Georgia, Maldives, Egypt, Thailand, UAE, and beyond with 5★ luxury stays, private transfers, and personal tour guides.
            </p>
          </div>
          <a
            href="#packages"
            className="shrink-0 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-slate-800/90 hover:bg-amber-400 hover:text-slate-950 text-white border border-slate-700 hover:border-amber-300 text-sm font-bold transition-all shadow-lg cursor-pointer"
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
