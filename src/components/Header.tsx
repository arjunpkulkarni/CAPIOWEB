'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['HOME', 'ARTISTS', 'BOOKING', 'POLICY', 'AFTERCARE'];

  const hrefFor = (label: string) =>
    label === 'HOME'
      ? '/'
      :
        '/' +
          label
            .toLowerCase()
            .replace(/ & /g, '-and-')
            .replace(/ /g, '-')
  ;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Tagline */}
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Capio Tattoo Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="leading-none">
            <h1 className="text-lg font-extrabold tracking-widest uppercase">CAPIO TATTOO</h1>
            <p className="text-xs font-medium text-gray-400 uppercase">YOUR SKIN, OUR ART</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
          {links.map((label) => (
            <Link
              key={label}
              href={hrefFor(label)}
              className="text-base font-medium text-gray-300 uppercase tracking-wide hover:text-amber-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social + Mobile Toggle */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/capiotattoostudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-300 hover:text-amber-400 transition-colors"
          >
            <Instagram size={26} />
          </a>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-gray-200 hover:text-amber-400 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {links.map((label) => (
              <Link
                key={label}
                href={hrefFor(label)}
                onClick={closeMenu}
                className="block py-2 text-sm font-medium text-gray-200 uppercase tracking-wide hover:text-amber-400"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
