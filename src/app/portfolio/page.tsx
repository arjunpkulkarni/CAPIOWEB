'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const portfolioImages = [
  { src: '/tattoo1.jpg', alt: 'Abstract black and grey tattoo' },
  { src: '/tattoo2.jpg', alt: 'Fine line floral tattoo' },
  { src: '/tattoo3.jpg', alt: 'Geometric sleeve tattoo' },
  { src: '/tattoo4.jpg', alt: 'Detailed portrait tattoo' },
];

const PortfolioPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="container mx-auto py-20 px-4">
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-luxury tracking-wider"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-heraldic text-center text-white drop-shadow-lg">
            Our Portfolio
          </h1>
          <div className="w-24"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full h-[60vh] overflow-hidden rounded-lg shadow-xl group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-luxury text-lg tracking-wider drop-shadow-md">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default PortfolioPage; 