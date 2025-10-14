
import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="h-screen w-screen snap-start flex flex-col justify-center items-center p-8 text-center">
      <div className="max-w-4xl animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-400 mb-4">
          Aurora Music Vietnam
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 font-light">
          Sounds of the new horizon.
        </p>
        <p className="mt-8 max-w-2xl mx-auto text-gray-400">
          We are a Vietnam-based record label dedicated to discovering and promoting innovative electronic music artists. Dive in and explore the future of sound.
        </p>
        <a href="#releases" className="mt-12 inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300">
          Explore Releases
        </a>
      </div>
    </section>
  );
};

export default Home;
