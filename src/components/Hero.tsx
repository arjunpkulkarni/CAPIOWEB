import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
      />

      {/* Overlay for legibility */}
      {/* Feel free to swap for a gradient:
          bg-gradient-to-t from-black/80 via-black/50 to-transparent */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-4 text-white drop-shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Experience Elite Tattoo <br />
          Artistry in{' '}
          <span className="inline-block text-cyan-400 border-2 border-cyan-400 rounded-full px-4 py-1">
            Westchester
          </span>
        </h1>

        <p className="mt-8 text-lg md:text-xl font-medium">CHECK OUR PORTFOLIO:</p>

        <button className="mt-4 inline-block bg-cyan-400/90 hover:bg-cyan-300 text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
          VIEW PORTFOLIO
        </button>
      </div>
    </section>
  );
};

export default Hero;
