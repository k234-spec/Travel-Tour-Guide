export const BUSINESS_PHONE = '+1 (800) 555-4562';
export const BUSINESS_PHONE_TEL = 'tel:+18005554562';

export const BUSINESS_EMAIL = 'infomyglobeguide@gmail.com';
export const BUSINESS_EMAIL_MAILTO = 'mailto:infomyglobeguide@gmail.com';

export const BUSINESS_WHATSAPP_NUMBER = '+91 7827169606';
export const BUSINESS_WHATSAPP_RAW = '917827169606';
export const BUSINESS_WHATSAPP_URL =
  'https://wa.me/917827169606?text=Hello%20My%20Globe%20Guide%2C%20I%20would%20like%20to%20plan%20a%20custom%20trip.';

export const BRAND_LOGO = '/images/brand-emblem.png';

export interface DossierData {
  tripFocus: string;
  destination: string;
  travelers: string;
  timing: string;
  duration: string;
  tripStyle: string;
  budget: string;
  accommodation: string;
  services: string;
  experiences: string;
  specialRequests: string;
  fullName: string;
  email: string;
  phone: string;
  cityCountry?: string;
  preferredContact?: string;
}

export function formatDossierWhatsAppText(data: DossierData): string {
  return `*New Travel Dossier - My Globe Guide*
----------------------------------------
*Traveler:* ${data.fullName || 'N/A'}
*Email:* ${data.email || 'N/A'}
*Phone:* ${data.phone || 'N/A'}
*Origin City:* ${data.cityCountry || 'Not specified'}
*Focus:* ${data.tripFocus}
*Destination:* ${data.destination}
*Travelers:* ${data.travelers}
*Timing:* ${data.timing} (${data.duration})
*Trip Style:* ${data.tripStyle}
*Budget Range:* ${data.budget}
*Accommodation:* ${data.accommodation}
*Services:* ${data.services}
*Experiences:* ${data.experiences}
*Special Requests:* ${data.specialRequests || 'None'}
----------------------------------------
*Direct Dispatch:* infomyglobeguide@gmail.com & +91 7827169606`;
}

export function formatDossierEmailSubject(data: DossierData): string {
  return `New Custom Trip Dossier: ${data.fullName || 'Traveler'} - ${data.destination} (${data.tripFocus})`;
}

export function formatDossierEmailBody(data: DossierData): string {
  return `New Travel Dossier Submission - My Globe Guide

TRAVELER DETAILS:
- Full Name: ${data.fullName}
- Email: ${data.email}
- Phone: ${data.phone}
- City / Country: ${data.cityCountry || 'Not specified'}
- Preferred Contact: ${data.preferredContact || 'WhatsApp / Email'}

ITINERARY REQUIREMENTS:
- Trip Focus: ${data.tripFocus}
- Destination: ${data.destination}
- Number of Travelers: ${data.travelers}
- Timing / Travel Window: ${data.timing}
- Duration: ${data.duration}
- Travel Style: ${data.tripStyle}
- Budget Range: ${data.budget}
- Preferred Accommodation: ${data.accommodation}
- Required Services: ${data.services}
- Desired Experiences: ${data.experiences}
- Special Notes / Requests: ${data.specialRequests || 'None'}

----------------------------------------
Auto-routed to:
Business WhatsApp: +91 7827169606
Business Email: infomyglobeguide@gmail.com`;
}
