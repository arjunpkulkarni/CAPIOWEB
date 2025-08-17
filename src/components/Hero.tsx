'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative -mt-20 md:-mt-24 h-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
      />

      {/* Overlay for legibility */}
      {/* Feel free to swap for a gradient:
          bg-gradient-to-t from-black/80 via-black/50 to-transparent */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

      {/* Foreground content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 text-white drop-shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-heraldic leading-tight tracking-tight"
        >
          Experience Elite Tattoo <br />
          Artistry in{' '}
          <span className="inline-block text-amber-400 border-2 border-amber-400 rounded-full px-4 py-1">
            Westchester
          </span>
        </motion.h1>

        <Link href="/portfolio">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-4 inline-block bg-amber-400/90 hover:bg-amber-300 mt-10 text-black font-heraldic text-xl py-3 px-10 rounded-lg transition-colors duration-200 tracking-wider"
          >
            VIEW PORTFOLIO
          </motion.button>
        </Link>
      </motion.div>

      <motion.a
        href="https://www.instagram.com/capiotattoostudio"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          type: 'spring',
          stiffness: 120,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-28 right-8 z-20 flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 text-white shadow-lg"
      >
        <Instagram className="h-7 w-7" />
        <span className="font-luxury text-md font-semibold tracking-wider pr-2">
          Follow for latest deals!
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
