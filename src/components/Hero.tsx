import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.pixabay.com/video/2024/05/29/213054-949219999_large.mp4"
      ></video>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Experience Elite Tattoo <br /> Artistry in{' '}
          <span className="text-cyan-400 border-2 border-cyan-400 rounded-full px-4">
          Westchester
          </span>
        </h1>
        <p className="mt-8 text-lg">CHECK OUR PORTFOLIO:</p>
        <button className="mt-4 bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg">
          VIEW PORTFOLIO
        </button>
      </div>
    </section>
  );
};

export default Hero; 