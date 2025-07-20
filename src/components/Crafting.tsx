import React from 'react';
import Image from 'next/image';

const Crafting = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          Crafting Art That Lives Forever
        </h2>
        <p className="max-w-3xl mx-auto mb-12">
          At Capio Tattoo, we believe that every tattoo tells a story. Our team of
          world-class artists combines traditional techniques with modern innovation to
          create masterpieces that will last a lifetime. From intricate black and grey
          work to vibrant color pieces, we bring your vision to life with
          uncompromising quality and attention to detail.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Image
            src="/tattoo1.jpg"
            alt="Tattoo 1"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/tattoo2.jpg"
            alt="Tattoo 2"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/tattoo3.jpg"
            alt="Tattoo 3"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/tattoo4.jpg"
            alt="Tattoo 4"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <button className="border-2 border-cyan-400 text-cyan-400 font-bold py-3 px-6 rounded-lg hover:bg-cyan-400 hover:text-black">
          LEARN MORE ABOUT US
        </button>
      </div>
    </section>
  );
};

export default Crafting; 