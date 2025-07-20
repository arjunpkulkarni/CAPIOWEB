import React from 'react';

const ArtistsPage = () => {
  const artists = [
    {
      name: 'Marc Patino',
      style: 'Black & Grey Realism',
      experience: '12 Years Experience',
      description: 'Specializing in photorealistic portraits and detailed black and grey work.',
      tags: ['Portraits', 'Realism', 'Black & Grey', 'Fine Line'],
    },
    {
      name: 'Tatiana Rodriguez',
      style: 'Traditional & Neo-Traditional',
      experience: '8 Years Experience',
      description: 'Master of bold lines and vibrant colors in traditional American style.',
      tags: ['Traditional', 'Neo-Traditional', 'Color Work', 'Bold Lines'],
    },
    {
      name: 'NightOne',
      style: 'Japanese & Oriental',
      experience: '15 Years Experience',
      description: 'Expert in traditional Japanese tattooing techniques and cultural symbolism.',
      tags: ['Japanese', 'Oriental', 'Large Scale'],
    },    
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyan-400">Our Artists</h1>
          <p className="text-xl mt-4">
            Meet the talented artists who bring your visions to life with skill, passion, and creativity
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {artists.map((artist) => (
            <div key={artist.name} className="bg-gray-900 rounded-lg p-6 flex">
              <div className="w-1/3 text-center pr-6">
                <p className="font-bold text-lg">Photo Coming Soon</p>
              </div>
              <div className="w-2/3">
                <h2 className="text-3xl font-bold text-cyan-400">{artist.name}</h2>
                <p className="text-lg font-semibold">{artist.style}</p>
                <p className="text-sm text-gray-400 mb-4">{artist.experience}</p>
                <p className="mb-4">{artist.description}</p>
                <div className="flex flex-wrap gap-2">
                  {artist.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-cyan-400 text-cyan-400 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage; 