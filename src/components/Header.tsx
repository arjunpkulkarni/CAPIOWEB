import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube } from 'lucide-react';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 text-white backdrop-blur-lg">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      {/* Logo + tagline */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="Capio Tattoo Logo" width={40} height={40} className="rounded-full" />
        <div className="leading-none">
          <h1 className="text-sm font-extrabold tracking-wider">CAPIO TATTOO</h1>
          <p className="text-[10px] font-medium text-gray-300">YOUR&nbsp;SKIN,&nbsp;OUR&nbsp;ART</p>
        </div>
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/" className="nav-link">HOME</Link>        
        <Link href="/our-artists" className="nav-link">ARTISTS</Link>
        <Link href="/booking" className="nav-link">BOOKING</Link>
        <Link href="/terms-and-conditions" className="nav-link">TERMS &amp; CONDITIONS</Link>
      </nav>

      {/* Social icons */}
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Instagram" className="social-link">
          <Instagram size={22} />
        </a>
        <a href="#" aria-label="YouTube" className="social-link">
          <Youtube size={22} />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
