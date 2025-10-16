import React, { useState, useEffect } from 'react';
import type { Release } from '../types';

const MOCK_RELEASES: Release[] = [
  { art: "https://picsum.photos/id/1011/500/500", name: "Cosmic Drift - Starlight", stream: "#", date: "15/07/2024" },
  { art: "https://picsum.photos/id/1012/500/500", name: "Hanoi Nights - Neon Bloom", stream: "#", date: "01/07/2024" },
  { art: "https://picsum.photos/id/1015/500/500", name: "Saigon Sonar - Echoes", stream: "#", date: "20/06/2024" },
  { art: "https://picsum.photos/id/1025/500/500", name: "Mekong Flow - Delta Waves", stream: "#", date: "05/06/2024" },
  { art: "https://picsum.photos/id/103/500/500", name: "Halong Haze - Limestone", stream: "#", date: "22/05/2024" },
  { art: "https://picsum.photos/id/1040/500/500", name: "City Pulse - After Dark", stream: "#", date: "10/05/2024" },
  { art: "https://picsum.photos/id/1043/500/500", name: "Digital Nomad - Wanderer", stream: "#", date: "28/04/2024" },
  { art: "https://picsum.photos/id/1048/500/500", name: "Future Forward - Synthesis", stream: "#", date: "12/04/2024" },
  { art: "https://picsum.photos/id/1050/500/500", name: "River Rhythms - Currents", stream: "#", date: "01/04/2024" },
  { art: "https://picsum.photos/id/1054/500/500", name: "Urban Jungle - Concrete", stream: "#", date: "18/03/2024" },
  { art: "https://picsum.photos/id/1060/500/500", name: "Coastal Call - Tides", stream: "#", date: "04/03/2024" },
  { art: "https://picsum.photos/id/1062/500/500", name: "Mountain Echo - Summit", stream: "#", date: "20/02/2024" },
  { art: "https://picsum.photos/id/1066/500/500", name: "Synthwave Sunset - Horizon", stream: "#", date: "10/02/2024" },
  { art: "https://picsum.photos/id/1067/500/500", name: "Lo-Fi Dreams - Midnight", stream: "#", date: "28/01/2024" },
  { art: "https://picsum.photos/id/1068/500/500", name: "Techno Temple - Ritual", stream: "#", date: "15/01/2024" },
  { art: "https://picsum.photos/id/1069/500/500", name: "Ambient Aura - Calm", stream: "#", date: "01/01/2024" },
];

const ReleaseCard: React.FC<{ release: Release }> = ({ release }) => (
  <a href={release.stream} target="_blank" rel="noopener noreferrer" className="group relative aspect-square block w-full overflow-hidden rounded-lg shadow-xl">
    <img src={release.art} alt={release.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
      <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-white text-lg md:text-xl font-bold">{release.name}</h3>
        <p className="text-gray-300 text-sm">{release.date}</p>
      </div>
    </div>
    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-16 h-16 bg-indigo-600 rounded-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </a>
);

const Releases: React.FC = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchReleases = () => {
      setTimeout(() => {
        // In a real app, you would fetch from your endpoint:
        fetch('https://fuchsia.viiic.net/amvn/releases')
        .then(res => res.json())
        .then(data => setReleases(data))
        .catch(err => console.error("Failed to fetch releases:", err))
        .finally(() => setLoading(false));
        //setReleases(MOCK_RELEASES);
        setLoading(false);
      }, 1000);
    };

    fetchReleases();
  }, []);

  return (
    <section id="releases" className="min-h-screen w-screen snap-start flex flex-col justify-center items-center p-6 pb-24 md:p-8 md:pl-24">
      <div className="w-full max-w-7xl flex flex-col h-full overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center flex-shrink-0">Our Releases</h2>
        {loading ? (
          <div className="text-center text-xl flex-grow flex items-center justify-center">Loading new music...</div>
        ) : (
          <div className="overflow-y-auto flex-grow pr-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {releases.map((release, index) => (
                <ReleaseCard key={index} release={release} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Releases;
