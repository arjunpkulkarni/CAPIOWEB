import React from 'react';
import { Star, Shield, Heart } from 'lucide-react';

const Values = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Excellence */}
          <div>
            <div className="flex justify-center mb-4">
              <Star size={40} className="text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Excellence</h3>
            <p className="text-gray-400">
              We are committed to the highest standards of artistic and technical
              excellence in every tattoo we create.
            </p>
          </div>
          {/* Safety */}
          <div>
            <div className="flex justify-center mb-4">
              <Shield size={40} className="text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Safety</h3>
            <p className="text-gray-400">
              Your health and safety are our top priority. We adhere to the
              strictest sterilization and hygiene protocols.
            </p>
          </div>
          {/* Respect */}
          <div>
            <div className="flex justify-center mb-4">
              <Heart size={40} className="text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Respect</h3>
            <p className="text-gray-400">
              We create a welcoming and inclusive space where every client is
              treated with respect and understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values; 