import React from 'react';

const Hero = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Experience Elite Tattoo <br /> Artistry in{' '}
          <span className="text-cyan-400 border-2 border-cyan-400 rounded-full px-4">
            Houston
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