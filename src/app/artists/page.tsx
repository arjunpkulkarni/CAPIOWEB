import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import patino from '../artists/marc.png';
import tatiana from '../artists/tati.png';
import nightone from '../artists/nightone.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Artists',
  description: 'Meet the talented tattoo artists at Capio Tattoo. Our team specializes in a variety of styles, from black and grey to fine line and custom designs.',
};

const ArtistsPage = () => {
  const artists = [
    {
      name: 'Marc Patino',
      style: 'Black & Grey Realism',
      experience: '8 Years Experience',
      description: 'Specializing in photorealistic portraits and detailed black and grey work.',
      tags: ['Black & Grey', 'Realism', 'Color-Realism'],
      image: patino,
    },
    {
      name: 'Tatiana Rodriguez',
      style: 'Traditional & Neo-Traditional',
      experience: '6 Years Experience',
      description: 'Master of bold lines and vibrant colors in traditional American style.',
      tags: ['Black & Grey Realism', 'Traditional', 'Neo-Traditional', 'Fine Line', 'Re-Works'],
      image: tatiana,
    },
    {
      name: 'NightOne',
      style: 'Japanese & Oriental',
      experience: '5 Years Experience',
      description: 'Expert in traditional Japanese tattooing techniques and cultural symbolism.',
      tags: ['Color-Realism', 'Cover-Up', 'Anime', 'Japanese-Traditional', 'Piercings'],
      image: nightone,
    },    
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-heraldic text-amber-400 tracking-tight mt-10">Our Artists</h1>
          <p className="mt-4 text-lg text-gray-400">
            Meet the creative minds behind our ink.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="relative group bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400 opacity-5 pointer-events-none rounded-2xl"></div>

              {/* Artist Info */}
              <div className="relative z-10 flex flex-col items-center">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={200}
                  height={200}
                  className="h-[200px] w-[200px] rounded-full border-4 border-amber-400 object-cover"
                />
                <h2 className="mt-4 text-2xl font-luxury text-white">{artist.name}</h2>
                <p className="mt-1 text-sm text-amber-300">{artist.style}</p>
                <p className="mt-4 text-gray-400 text-sm">{artist.description}</p>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 relative">
                {artist.tags.map((tag) => (
                  <span
                    key={tag}
                    className={
                      tag === 'Piercings'
                        ? 'bg-fuchsia-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg shadow-fuchsia-500/50'
                        : 'bg-amber-500 text-black text-xs font-medium px-3 py-1 rounded-full'
                    }
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
