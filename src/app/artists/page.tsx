import React from 'react';
import Image from 'next/image';
import patino from '../artists/marc.png';
import tatiana from '../artists/tati.png';
import nightone from '../artists/nightone.png';

const ArtistsPage = () => {
  const artists = [
    {
      name: 'Marc Patino',
      style: 'Black & Grey Realism',
      experience: '12 Years Experience',
      description: 'Specializing in photorealistic portraits and detailed black and grey work.',
      tags: ['Portraits', 'Realism', 'Black & Grey', 'Fine Line'],
      image: patino,
    },
    {
      name: 'Tatiana Rodriguez',
      style: 'Traditional & Neo-Traditional',
      experience: '8 Years Experience',
      description: 'Master of bold lines and vibrant colors in traditional American style.',
      tags: ['Traditional', 'Neo-Traditional', 'Color Work'],
      image: tatiana,
    },
    {
      name: 'NightOne',
      style: 'Japanese & Oriental',
      experience: '15 Years Experience',
      description: 'Expert in traditional Japanese tattooing techniques and cultural symbolism.',
      tags: ['Japanese', 'Oriental', 'Large Scale'],
      image: nightone,
    },    
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight mt-10">Our Artists</h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the talented artists who bring your visions to life with skill, passion, and creativity.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group relative bg-gray-800 rounded-2xl p-6 overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400 opacity-5 pointer-events-none rounded-2xl"></div>

              <div className="flex flex-col items-center text-center relative">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-cyan-400 object-cover"
                />
                <h2 className="mt-4 text-2xl font-semibold text-white">{artist.name}</h2>
                <p className="mt-1 text-sm text-cyan-300">{artist.style}</p>
                <p className="text-xs text-gray-500">{artist.experience}</p>
                <p className="mt-4 text-gray-300">{artist.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2 relative">
                {artist.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cyan-500 text-black text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistsPage;
