import React from 'react';

const Values = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Excellence</h3>
            <p>
              We never compromise on quality. Every piece we create meets the highest
              standards of artistry and craftsmanship.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Safety</h3>
            <p>
              Your health and safety are our top priorities. We maintain the strictest
              hygiene standards and use only the best equipment.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Respect</h3>
            <p>
              We honor each client's vision and story, treating every project with the
              respect and attention it deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values; 