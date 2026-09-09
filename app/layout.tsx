import type { Metadata } from 'next';
import './globals.css';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'My Globe Guide | Bespoke Luxury Travel & Concierge',
  description:
    'From historic valleys to private turquoise atolls, we craft bespoke luxury vacation packages and seamless travel logistics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030814] text-slate-100 font-sans antialiased min-h-screen">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
