import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const heraldic = localFont({
  src: '../../src/assets/fonts/Heraldic-Shadows.otf',
  variable: '--font-heraldic',
});

const luxury = localFont({
  src: '../../src/assets/fonts/Modern-Luxury.ttf',
  variable: '--font-luxury',
});

const arvo = localFont({
  src: [
    {
      path: '../../src/assets/fonts/Arvo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../src/assets/fonts/Arvo-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../src/assets/fonts/Arvo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../src/assets/fonts/Arvo-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-arvo',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://capio.com'),
  title: {
    default: 'Capio Tattoo - Westchester, NY | Premier Tattoo & Piercing Studio',
    template: '%s | Capio Tattoo',
  },
  description: 'Discover premier tattoo and piercing services at Capio Tattoo in Westchester, NY. Our award-winning artists specialize in custom designs, black and grey, and fine line tattoos.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Capio Tattoo - Westchester, NY | Premier Tattoo & Piercing Studio',
    description: 'Discover premier tattoo and piercing services at Capio Tattoo in Westchester, NY. Our award-winning artists specialize in custom designs, black and grey, and fine line tattoos.',
    url: 'https://capio.com',
    siteName: 'Capio Tattoo',
    images: [
      {
        url: 'https://capio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Capio Tattoo Studio in Westchester, NY',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capio Tattoo - Westchester, NY | Premier Tattoo & Piercing Studio',
    description: 'Discover premier tattoo and piercing services at Capio Tattoo in Westchester, NY. Our award-winning artists specialize in custom designs, black and grey, and fine line tattoos.',
    images: ['https://capio.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heraldic.variable} ${luxury.variable} ${arvo.variable}`}>
      <body>
        <Header />
        <main className="pt-20 md:pt-24">
          {children}
        </main>
        {/* <Footer /> */}
        <div className="hidden md:block">
          <Chatbot />
        </div>
      </body>
    </html>
  );
}
