import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Releases from './components/Releases';
import Usage from './components/Usage';
import Contact from './components/Contact';
import Social from './components/Social';
import Submission from './components/Submission';

const App: React.FC = () => {

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(https://iili.io/fATCvnf.jpg)` }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/60"></div>
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
