'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import image1 from '../portfolio/pictures/1.png';
import image2 from '../portfolio/pictures/2.png';
import image3 from '../portfolio/pictures/3.png';
import image4 from '../portfolio/pictures/4.png';

const portfolioImages = [image1, image2, image3, image4];

const PortfolioPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="container mx-auto py-20 px-4 mt-10">
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-luxury tracking-wider"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-5xl font-heraldic text-center text-white drop-shadow-lg ">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full h-[45vh] overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src={image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default PortfolioPage; 