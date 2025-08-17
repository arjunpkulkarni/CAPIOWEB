'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import image1 from '../portfolio/pictures/1.png';
import image2 from '../portfolio/pictures/2.png';
import image3 from '../portfolio/pictures/3.png';

import image5 from '../portfolio/pictures/5.png';
import image6 from '../portfolio/pictures/6.png';
import image7 from '../portfolio/pictures/7.png';
import image8 from '../portfolio/pictures/8.png';
import image9 from '../portfolio/pictures/9.png';
import image10 from '../portfolio/pictures/10.png';
import image11 from '../portfolio/pictures/11.png';
import image12 from '../portfolio/pictures/12.png';
import image13 from '../portfolio/pictures/13.png';
import image14 from '../portfolio/pictures/14.png';

import image16 from '../portfolio/pictures/16.png';
import image17 from '../portfolio/pictures/17.png';
import image18 from '../portfolio/pictures/18.png';
import image19 from '../portfolio/pictures/19.png';
import image20 from '../portfolio/pictures/20.png';
import image21 from '../portfolio/pictures/21.png';
import image22 from '../portfolio/pictures/22.png';
import image23 from '../portfolio/pictures/23.png';
import image24 from '../portfolio/pictures/24.png';
import image25 from '../portfolio/pictures/25.png';
import image26 from '../portfolio/pictures/26.png';
import image27 from '../portfolio/pictures/27.png';
import image28 from '../portfolio/pictures/28.png';

const portfolioImages = [image1, image2, image3, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28];

const PortfolioPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="container mx-auto py-20 px-4 mt-10">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-luxury tracking-wider"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-heraldic text-center text-white drop-shadow-lg ">
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
              className="relative w-full h-[45vh] sm:h-[40vh] md:h-[35vh] overflow-hidden rounded-lg shadow-xl"
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