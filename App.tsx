import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Releases from './components/Releases';
import Usage from './components/Usage';
import Contact from './components/Contact';
import Social from './components/Social';
import Submission from './components/Submission';

const App: React.FC = () => {
  // Replace this URL with your custom background image
  const backgroundImageUrl = 'aurora.jpg';

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* This div creates a dark overlay for better text readability */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>
      
      {/* All content is placed above the overlay */}
      <div className="relative z-10">
        <Navbar />
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <Home />
          <Releases />
          <Usage />
          <Contact />
          <Social />
          <Submission />
        </main>
      </div>
    </div>
  );
};

export default App;
