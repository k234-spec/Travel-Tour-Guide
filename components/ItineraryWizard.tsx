'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  RotateCcw,
  Package,
  Plane,
  Building2,
  FileCheck2,
  Ship,
  CarTaxiFront,
  Mountain,
  Earth,
  CheckCircle,
  ArrowRight,
  Send,
  MessageCircle,
  Mail,
  Phone,
  Sparkles,
  ShieldCheck,
  Calendar,
  Users,
  Compass,
  DollarSign,
  BedDouble,
  HeartHandshake,
} from 'lucide-react';
import {
  BUSINESS_EMAIL,
  BUSINESS_WHATSAPP_NUMBER,
  BUSINESS_WHATSAPP_RAW,
  BRAND_LOGO,
  DossierData,
  formatDossierWhatsAppText,
  formatDossierEmailSubject,
  formatDossierEmailBody,
} from '@/lib/constants';

interface WizardOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}

const step1Options: WizardOption[] = [
  {
    id: 'Complete Trip',
    title: 'Complete Trip',
    subtitle: 'Flights + Stays + Tours + Logistics',
    icon: Earth,
    iconColor: 'text-amber-300',
  },
  {
    id: 'Holiday Package',
    title: 'Holiday Package',
    subtitle: 'Curated Multi-Day Destination Route',
    icon: Package,
    iconColor: 'text-amber-400',
  },
  {
    id: 'Flight',
    title: 'Flights',
    subtitle: 'International & Domestic Airfare',
    icon: Plane,
    iconColor: 'text-sky-400',
  },
  {
    id: 'Hotel',
    title: 'Hotels & Resorts',
    subtitle: '5★ Stays, Overwater Villas, Boutique Suites',
    icon: Building2,
    iconColor: 'text-cyan-400',
  },
  {
    id: 'Visa Assistance',
    title: 'Visa Assistance',
    subtitle: 'Expedited Clearance & Processing',
    icon: FileCheck2,
    iconColor: 'text-emerald-400',
  },
  {
    id: 'Cruise',
    title: 'Cruises & Yachts',
    subtitle: 'Luxury Ocean & River Itineraries',
    icon: Ship,
    iconColor: 'text-blue-400',
  },
  {
    id: 'Transfers',
    title: 'Chauffeur & Transfers',
    subtitle: 'Private Airport & Inter-City Luxury Fleet',
    icon: CarTaxiFront,
    iconColor: 'text-teal-400',
  },
  {
    id: 'Activities',
    title: 'Tours & Activities',
    subtitle: 'Guided Excursions, Safaris & VIP Tickets',
    icon: Mountain,
    iconColor: 'text-amber-400',
  },
];

const stepTitles = [
  'Trip Focus',
  'Destination',
  'Travelers',
  'Timing',
  'Duration',
  'Trip Style',
  'Budget',
  'Accommodation',
  'Services',
  'Experiences',
  'Special Requests',
  'Contact Details',
];

const popularDestinations = [
  'Turkey (Istanbul & Cappadocia)',
  'Georgia (Tbilisi & Kazbegi)',
  'Maldives (Overwater Atolls)',
  'Egypt (Nile Cruise & Pyramids)',
  'UAE (Dubai & Abu Dhabi Dunes)',
  'Thailand (Phuket & Bangkok)',
  'Philippines (Palawan & Boracay)',
  'Europe Grand Tour (Italy, France, Switzerland)',
];

const popularStyles = [
  'Ultra-Luxury 5★ Private Leisure',
  'Romantic Honeymoon / Anniversary',
  'Family Holiday & Multigenerational',
  'Heritage, Culture & Gastronomy',
  'Adventure, Wildlife & Scenic Expeditions',
  'Private Yachting, Islands & Coastal Retreat',
];

const budgetRanges = [
  '$2,500 – $5,000 per person',
  '$5,000 – $10,000 per person',
  '$10,000 – $25,000 (Luxury Tier)',
  '$25,000+ (Ultra-Bespoke Presidential)',
];

const durationOptions = [
  '3 – 5 Days (Short Gateway)',
  '5 – 7 Days (Week Escapade)',
  '7 – 10 Days (Comprehensive Tour)',
  '10 – 14 Days (Signature Grand Journey)',
  '15+ Days (Extended Exploration)',
];

export default function ItineraryWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<{
    whatsappUrl: string;
    mailtoUrl: string;
  } | null>(null);

  // Form State
  const [formData, setFormData] = useState<DossierData>({
    tripFocus: 'Complete Trip',
    destination: '',
    travelers: '2 Adults',
    timing: 'Next 1–3 Months',
    duration: '7 – 10 Days (Comprehensive Tour)',
    tripStyle: 'Ultra-Luxury 5★ Private Leisure',
    budget: '$5,000 – $10,000 per person',
    accommodation: '5★ Luxury Beach Resort / Cave Suite',
    services: 'All-Inclusive: Flights, Transfers, Stays & Tours',
    experiences: 'Private Yacht, Helicopter Flight, Gourmet Dining',
    specialRequests: '',
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    preferredContact: 'WhatsApp (+91 7827169606 preferred)',
  });

  const progressPercent = Math.round((currentStep / 12) * 100);

  const resetWizard = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setDispatchResult(null);
    setFormData({
      tripFocus: 'Complete Trip',
      destination: '',
      travelers: '2 Adults',
      timing: 'Next 1–3 Months',
      duration: '7 – 10 Days (Comprehensive Tour)',
      tripStyle: 'Ultra-Luxury 5★ Private Leisure',
      budget: '$5,000 – $10,000 per person',
      accommodation: '5★ Luxury Beach Resort / Cave Suite',
      services: 'All-Inclusive: Flights, Transfers, Stays & Tours',
      experiences: 'Private Yacht, Helicopter Flight, Gourmet Dining',
      specialRequests: '',
      fullName: '',
      email: '',
      phone: '',
      cityCountry: '',
      preferredContact: 'WhatsApp (+91 7827169606 preferred)',
    });
  };

  const handleNext = () => {
    if (currentStep < 12) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please provide your Full Name, Email, and WhatsApp/Phone number in Step 12 to submit.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to Next.js API route
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      const waText = formatDossierWhatsAppText(formData);
      const emailSubj = formatDossierEmailSubject(formData);
      const emailBody = formatDossierEmailBody(formData);

      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP_RAW}?text=${encodeURIComponent(waText)}`;
      const mailUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
        emailSubj
      )}&body=${encodeURIComponent(emailBody)}`;

      setDispatchResult({
        whatsappUrl: waUrl,
        mailtoUrl: mailUrl,
      });

      setIsSubmitted(true);

      // Automatically launch WhatsApp with pre-filled query for instant reception at +91 7827169606
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      // Fallback direct dispatch
      const waText = formatDossierWhatsAppText(formData);
      const emailSubj = formatDossierEmailSubject(formData);
      const emailBody = formatDossierEmailBody(formData);

      const waUrl = `https://wa.me/${BUSINESS_WHATSAPP_RAW}?text=${encodeURIComponent(waText)}`;
      const mailUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
        emailSubj
      )}&body=${encodeURIComponent(emailBody)}`;

      setDispatchResult({ whatsappUrl: waUrl, mailtoUrl: mailUrl });
      setIsSubmitted(true);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-[#030814] border-t border-slate-800/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-amber-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl relative z-10">
        
        {/* ── Brand Crest & Section Header ───────────────────────────── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          {/* Official Brand Crest Banner */}
          <div className="mb-6 relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-sky-500/30 via-amber-400/20 to-emerald-500/30 p-[2px] shadow-2xl shadow-sky-500/10">
              <div className="w-full h-full bg-[#020611] rounded-[14px] overflow-hidden flex items-center justify-center p-1.5">
                <Image
                  src={BRAND_LOGO}
                  alt="My Globe Guide - Your Journey, Our Passion"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain rounded-xl"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-slate-700 text-[9px] font-bold uppercase tracking-widest text-amber-400 whitespace-nowrap shadow-md">
              Your Journey, Our Passion
            </div>
          </div>

          <div className="mt-2 mb-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold tracking-widest uppercase text-amber-400 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Itinerary Architect</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-serif">
            Custom Travel Dossier <span className="text-amber-400">&amp; Direct Inquiry</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-light">
            Build your tailored journey in minutes. Submissions automatically route directly to our concierge hotline{' '}
            <strong className="text-emerald-400 font-semibold">{BUSINESS_WHATSAPP_NUMBER}</strong> and central advisory desk{' '}
            <strong className="text-sky-400 font-semibold">{BUSINESS_EMAIL}</strong> for immediate quotation.
          </p>

          {/* Quick trust badges matching official emblem services */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">✈️ Flights</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">🏨 5★ Hotels</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">🚐 Transfers</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">🛂 Visa Assistance</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">🛡️ Insurance</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">🚢 Cruises</span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">🌴 24/7 Support</span>
          </div>
        </div>

        {/* ── Wizard Main Container ─────────────────────────────────── */}
        <div className="rounded-3xl overflow-hidden bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 max-w-3xl mx-auto p-6 sm:p-10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* ── SUCCESS STATE SCREEN ──────────────────────────────── */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
                  Dossier Successfully Prepared!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your custom travel requirements have been generated and dispatched to our primary channels:
                </p>
              </div>

              {/* Delivery Channels Notification Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 text-left space-y-4 max-w-lg mx-auto">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white">Business WhatsApp Hot-Desk</div>
                    <div className="text-xs text-emerald-400 font-mono font-semibold">{BUSINESS_WHATSAPP_NUMBER}</div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white">Direct Advisory Inbox</div>
                    <div className="text-xs text-sky-400 font-mono font-semibold truncate">{BUSINESS_EMAIL}</div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                    Queued
                  </span>
                </div>
              </div>

              {/* Summary details card */}
              <div className="bg-slate-950/90 border border-slate-800/80 rounded-xl p-4 text-left text-xs text-slate-400 max-w-lg mx-auto space-y-1.5 font-mono">
                <div className="text-slate-300 font-bold font-sans text-xs mb-1">Dossier Summary:</div>
                <div>• <strong className="text-slate-200">Traveler:</strong> {formData.fullName} ({formData.phone})</div>
                <div>• <strong className="text-slate-200">Destination:</strong> {formData.destination || 'To be tailored'}</div>
                <div>• <strong className="text-slate-200">Focus:</strong> {formData.tripFocus}</div>
                <div>• <strong className="text-slate-200">Travelers:</strong> {formData.travelers}</div>
                <div>• <strong className="text-slate-200">Timing:</strong> {formData.timing} · {formData.duration}</div>
                <div>• <strong className="text-slate-200">Budget:</strong> {formData.budget}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
                {dispatchResult?.whatsappUrl && (
                  <a
                    href={dispatchResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat (+91 7827169606)</span>
                  </a>
                )}

                {dispatchResult?.mailtoUrl && (
                  <a
                    href={dispatchResult.mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Send Copy via Email</span>
                  </a>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetWizard}
                  className="text-xs text-slate-500 hover:text-slate-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Another Itinerary Request</span>
                </button>
              </div>
            </div>
          ) : (
            /* ── ACTIVE FORM WIZARD ────────────────────────────────── */
            <>
              {/* Header with Step indicator */}
              <div className="space-y-4 border-b border-slate-800/80 pb-6 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-400 font-mono font-bold text-xs">
                      STEP {String(currentStep).padStart(2, '0')} / 12
                    </div>
                    <span className="text-sm font-bold text-white hidden sm:inline">
                      {stepTitles[currentStep - 1]}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-400 font-medium font-mono">{progressPercent}% Completed</span>
                    <button
                      type="button"
                      onClick={resetWizard}
                      className="text-slate-500 hover:text-slate-300 flex items-center gap-1 transition-colors cursor-pointer"
                      title="Reset wizard"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Reset</span>
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-950 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-amber-400 to-emerald-400 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                {/* Step Pills Navigation */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-thin">
                  {stepTitles.map((title, idx) => {
                    const stepNum = idx + 1;
                    const isCurrent = stepNum === currentStep;
                    const isPassed = stepNum < currentStep;
                    return (
                      <button
                        key={stepNum}
                        type="button"
                        onClick={() => isPassed && setCurrentStep(stepNum)}
                        disabled={!isPassed && !isCurrent}
                        className={`h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-all shrink-0 flex items-center gap-1 ${
                          isCurrent
                            ? 'bg-amber-400 text-slate-950 font-bold shadow-sm ring-1 ring-amber-300'
                            : isPassed
                            ? 'bg-slate-900 text-amber-300 hover:bg-slate-800 cursor-pointer'
                            : 'bg-slate-950/40 text-slate-600 cursor-not-allowed'
                        }`}
                      >
                        <span>{stepNum}</span>
                        <span className="hidden md:inline font-normal opacity-80">· {title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wizard Body Form */}
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="min-h-[280px]">
                  
                  {/* STEP 1: Trip Focus */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-1 text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">What are you looking for?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Choose <strong>Complete Trip</strong> for end-to-end luxury journey management or select a specialized service.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {step1Options.map((opt) => {
                          const Icon = opt.icon;
                          const isSelected = formData.tripFocus === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, tripFocus: opt.id })}
                              className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2.5 cursor-pointer group relative ${
                                isSelected
                                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-400'
                                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-sky-500/50 hover:bg-slate-900 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 group-hover:scale-105 transition-transform">
                                  <Icon className={`w-4 h-4 ${opt.iconColor}`} />
                                </div>
                                {isSelected && (
                                  <CheckCircle className="w-4 h-4 text-amber-400" />
                                )}
                              </div>
                              <div>
                                <span className="font-bold text-xs sm:text-sm leading-tight block text-white">{opt.title}</span>
                                <span className="text-[10px] text-slate-400 line-clamp-2 leading-snug mt-0.5">
                                  {opt.subtitle}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Destination */}
                  {currentStep === 2 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Where would you like to travel?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Select a featured destination or enter custom regions.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {popularDestinations.map((dest) => (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => setFormData({ ...formData, destination: dest })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.destination === dest
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            📍 {dest}
                          </button>
                        ))}
                      </div>
                      <div className="pt-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Or Enter Custom Destination(s):</label>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="e.g. Switzerland Alps & Italian Lakes, Japan Cherry Blossom..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Travelers */}
                  {currentStep === 3 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Who is traveling?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Help us size accommodations, private vehicles, and guides.</p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {['Solo Traveler', 'Couple (2 Adults)', 'Family (2 Adults + 1 Child)', 'Family (2 Adults + 2 Children)', 'Group (4–6 Adults)', 'Large Private Party (8+)'].map((group) => (
                          <button
                            key={group}
                            type="button"
                            onClick={() => setFormData({ ...formData, travelers: group })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.travelers === group
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            👥 {group}
                          </button>
                        ))}
                      </div>
                      <div className="pt-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Exact Breakdown (Optional):</label>
                        <input
                          type="text"
                          value={formData.travelers}
                          onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                          placeholder="e.g. 2 Adults, 1 Child (Age 6), 1 Infant"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Timing */}
                  {currentStep === 4 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">When are you planning to travel?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Choose your approximate departure window.</p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {['Next 30 Days (Urgent / Immediate)', 'Within 1 – 3 Months', '3 – 6 Months from now', 'Holiday Season (Christmas / NYE)', 'Next Year (Advance Planning)', 'Dates Flexible'].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, timing: time })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.timing === time
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            📅 {time}
                          </button>
                        ))}
                      </div>
                      <div className="pt-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Specific Dates or Month (Optional):</label>
                        <input
                          type="text"
                          value={formData.timing}
                          onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                          placeholder="e.g. Oct 15 – Oct 28, 2026"
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Duration */}
                  {currentStep === 5 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Expected Journey Duration?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Select how many days you would like your itinerary to span.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {durationOptions.map((dur) => (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => setFormData({ ...formData, duration: dur })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.duration === dur
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            ⏳ {dur}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 6: Trip Style */}
                  {currentStep === 6 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">What style of travel inspires you?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">This shapes our hotel curations, pacing, and private excursions.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {popularStyles.map((style) => (
                          <button
                            key={style}
                            type="button"
                            onClick={() => setFormData({ ...formData, tripStyle: style })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.tripStyle === style
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            ✨ {style}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 7: Budget */}
                  {currentStep === 7 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Anticipated Budget Range?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Helps us curate the exact class of suite, chauffeur, and logistics.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {budgetRanges.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`p-4 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.budget === b
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            💳 {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 8: Accommodation */}
                  {currentStep === 8 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Accommodation Preferences</h3>
                        <p className="text-xs sm:text-sm text-slate-400">All properties are personally inspected and 5★ vetted.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          '5★ Luxury Beachfront Resorts & Spas',
                          'Private Overwater Atoll Villas',
                          'Historic Cave Suites (Cappadocia Style)',
                          'Ultra-Boutique City Suites & Penthouses',
                          'Private Estate Villa with Dedicated Butler',
                          '5★ River / Ocean Luxury Cruise Suite',
                        ].map((acc) => (
                          <button
                            key={acc}
                            type="button"
                            onClick={() => setFormData({ ...formData, accommodation: acc })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.accommodation === acc
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            🏨 {acc}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 9: Services */}
                  {currentStep === 9 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Which services do you need bundled?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Full coordination or selective assistance.</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          'All-Inclusive: Flights + Hotels + Transfers + Tours',
                          'Hotels & Private Chauffeur Fleet Only',
                          'Curated Itinerary + VIP Guides + Excursions',
                          'Flights & Visa Expedited Assistance Only',
                          'Private Yacht Charter & Island Logistics',
                        ].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setFormData({ ...formData, services: srv })}
                            className={`p-3.5 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.services === srv
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            🛎️ {srv}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 10: Experiences */}
                  {currentStep === 10 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Highlight Experiences & Wishlist</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Signature moments you would like included in your schedule.</p>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          'Sunrise Hot Air Ballooning',
                          'Private Luxury Yacht Charter',
                          'Helicopter Transfers / Scenic Tour',
                          'Desert Safari with VIP Glamping',
                          'Michelin Star / Private Chef Dining',
                          'Scuba Diving & Marine Safari',
                        ].map((exp) => (
                          <button
                            key={exp}
                            type="button"
                            onClick={() => setFormData({ ...formData, experiences: exp })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                              formData.experiences === exp
                                ? 'bg-amber-500/15 border-amber-400 text-white ring-1 ring-amber-400'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            🌟 {exp}
                          </button>
                        ))}
                      </div>
                      <div className="pt-2">
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Other Wishlist Items:</label>
                        <input
                          type="text"
                          value={formData.experiences}
                          onChange={(e) => setFormData({ ...formData, experiences: e.target.value })}
                          placeholder="e.g. Scuba certification, wine tasting, private museum access..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 11: Special Requests */}
                  {currentStep === 11 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Special Requests & Notes</h3>
                        <p className="text-xs sm:text-sm text-slate-400">Dietary requirements, celebrations, accessibility, or flight seat preferences.</p>
                      </div>
                      <textarea
                        rows={5}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        placeholder="Tell us any details (e.g. celebrating 10th anniversary, vegetarian meals, prefer Emirates Business Class, need adjoining rooms)..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>
                  )}

                  {/* STEP 12: Contact Details (SUBMISSION STEP) */}
                  {currentStep === 12 && (
                    <div className="space-y-5">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Where should we deliver your itinerary?</h3>
                        <p className="text-xs sm:text-sm text-slate-400">
                          Your request is dispatched instantly to our business WhatsApp{' '}
                          <strong className="text-emerald-400">{BUSINESS_WHATSAPP_NUMBER}</strong> and inbox{' '}
                          <strong className="text-sky-400">{BUSINESS_EMAIL}</strong>.
                        </p>
                      </div>

                      {/* Routing banner */}
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-slate-300">
                            Automatic routing to <span className="text-emerald-400 font-semibold">{BUSINESS_WHATSAPP_NUMBER}</span> &amp; <span className="text-sky-300 font-semibold">{BUSINESS_EMAIL}</span>
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">24/7 Concierge</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Full Name <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Alexander Vance"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Email Address <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. alexander@example.com"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            WhatsApp / Phone Number <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. +1 (555) 123-4567"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            City &amp; Country of Departure
                          </label>
                          <input
                            type="text"
                            value={formData.cityCountry}
                            onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                            placeholder="e.g. London, UK or New York, USA"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Actions Bar */}
                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div>
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="inline-flex items-center justify-center font-medium bg-transparent hover:bg-slate-800/60 rounded-xl h-9 px-3.5 gap-1.5 text-slate-400 hover:text-white text-xs transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {currentStep < 12 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold border border-amber-300/40 rounded-xl h-11 px-5 text-sm gap-2 shadow-lg shadow-amber-500/15 cursor-pointer"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold border border-emerald-300/40 rounded-xl h-12 px-6 text-sm gap-2 shadow-xl shadow-emerald-500/25 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Dispatching Dossier...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Dossier &amp; Route to Concierge</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
