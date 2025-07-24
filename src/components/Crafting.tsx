import React from 'react';
import Image from 'next/image';

const Crafting = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-amber-400 mb-4">
          Crafting Your Vision
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          At Capio Tattoo, we believe that every tattoo tells a story. Our team of
          world-class artists combines traditional techniques with modern innovation to
          create masterpieces that will last a lifetime. From intricate black and grey
          work to vibrant color pieces, we bring your vision to life with
          uncompromising quality and attention to detail.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto mb-12">
          {/* Text content */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">
              From Consultation to Masterpiece
            </h3>
            <p className="mb-4">
              Our process is collaborative. We start with a detailed
              consultation to understand your idea, style, and placement.
            </p>
            <p>
              We then bring your vision to life with a custom design, ensuring
              every detail is perfect before the tattooing begins.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/tattoo3.jpg"
              alt="Tattoo design process"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <button className="border-2 border-amber-400 text-amber-400 font-bold py-3 px-6 rounded-lg hover:bg-amber-400 hover:text-black">
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

export default Crafting; 