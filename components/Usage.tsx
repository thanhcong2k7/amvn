
import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
    <h3 className="text-xl font-semibold text-indigo-400 mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{children}</p>
  </div>
);

const Usage: React.FC = () => {
  return (
    <section id="usage" className="min-h-screen w-screen snap-start flex flex-col justify-center items-center p-6 pb-24 md:p-8 md:pl-24">
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Copyright & Usage</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="For Personal Use">
            Feel free to stream our music on any platform for your personal enjoyment. Sharing links to our official releases on social media is highly encouraged and appreciated!
          </InfoCard>
          <InfoCard title="Content Creators (YouTube, Twitch, etc.)">
            You can use our music in your videos/streams. Please provide credit in your description by linking to the track on Spotify or our website. Some tracks may be registered with Content ID, which might result in a claim but will not cause a strike.
          </InfoCard>
          <InfoCard title="Commercial Licensing">
            For use in advertisements, films, games, or any other commercial project, you must obtain a license from us. Please use the contact form to get in touch with your project details, and we'll get back to you with a quote.
          </InfoCard>
          <InfoCard title="Sampling & Remixes">
            Unauthorized sampling or remixing of our tracks is not permitted. If you are an artist and wish to officially remix one of our releases, please reach out to us via the submission portal with your portfolio.
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default Usage;
