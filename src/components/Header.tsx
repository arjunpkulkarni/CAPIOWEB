import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center mr-2">
          <span className="text-black font-bold text-lg">C</span>
        </div>
        <div>
          <h1 className="font-bold">CAPIO TATTOO</h1>
          <p className="text-xs">YOUR SKIN, OUR ART</p>
        </div>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:text-cyan-400">HOME</Link>
        <a href="#" className="hover:text-cyan-400">ABOUT US</a>
        <Link href="/our-artists" className="hover:text-cyan-400">OUR ARTISTS</Link>
        <Link href="/booking" className="hover:text-cyan-400">BOOKING</Link>
        <Link href="/terms-and-conditions" className="hover:text-cyan-400">TERMS AND CONDITIONS</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-cyan-400">
          <Instagram size={24} />
        </a>
        <a href="#" className="hover:text-cyan-400">
          <Youtube size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header; 