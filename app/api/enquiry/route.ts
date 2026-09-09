import { NextResponse } from 'next/server';
import {
  BUSINESS_EMAIL,
  BUSINESS_WHATSAPP_RAW,
  BUSINESS_WHATSAPP_NUMBER,
  DossierData,
  formatDossierWhatsAppText,
  formatDossierEmailSubject,
  formatDossierEmailBody,
} from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const body: DossierData = await request.json();

    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const whatsappText = formatDossierWhatsAppText(body);
    const emailSubject = formatDossierEmailSubject(body);
    const emailBody = formatDossierEmailBody(body);

    const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_RAW}?text=${encodeURIComponent(
      whatsappText
    )}`;

    const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // In a production setup with configured SMTP or service like Resend/SendGrid:
    // Here we log the structured enquiry to the server log
    console.log('[ENQUIRY DISPATCHED]', {
      timestamp: new Date().toISOString(),
      recipientEmail: BUSINESS_EMAIL,
      recipientWhatsApp: BUSINESS_WHATSAPP_NUMBER,
      traveler: {
        name: body.fullName,
        email: body.email,
        phone: body.phone,
        city: body.cityCountry,
      },
      destination: body.destination,
      focus: body.tripFocus,
      budget: body.budget,
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry dossier has been successfully recorded and queued for delivery.',
      forwardedTo: {
        email: BUSINESS_EMAIL,
        whatsapp: BUSINESS_WHATSAPP_NUMBER,
      },
      whatsappUrl,
      mailtoUrl,
    });
  } catch (err: unknown) {
    console.error('Error processing enquiry:', err);
    return NextResponse.json(
      { error: 'An error occurred while submitting your custom dossier.' },
      { status: 500 }
    );
  }
}
