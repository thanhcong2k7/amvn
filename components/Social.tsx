import React from 'react';

const SocialLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-24 h-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col justify-center items-center gap-2 text-gray-300 hover:text-white hover:bg-indigo-500/30 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
  >
    {children}
    <span className="text-sm">{label}</span>
  </a>
);

const Social: React.FC = () => {
  return (
    <section id="social" className="h-screen w-screen snap-start flex flex-col justify-center items-center p-6 pb-24 md:p-8 md:pl-24">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect With Us</h2>
        <p className="text-gray-300 mb-12">Follow our journey and stay updated with the latest sounds.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <SocialLink href="#" label="Spotify">
            <svg role="img" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.923 17.585c-.21.353-.663.468-.99.258-2.67-1.636-6.018-1.99-9.99-1.086-.414.09-.813-.176-.902-.588-.09-.413.176-.813.588-.902 4.33-.99 8.018-.6 11.018 1.23.325.21.44.662.23 1.008zm1.023-2.312c-.253.42-.802.57-1.222.317-3.038-1.85-7.55-2.386-11.108-1.305-.502.152-.99-.164-1.142-.667-.152-.502.164-.99.667-1.142 3.938-1.2 8.875-.63 12.288 1.472.42.253.57.802.316 1.222zm.088-2.42c-.297.493-.902.678-1.396.38-3.483-2.125-8.718-2.758-12.834-1.508-.572.176-1.153-.208-1.33-.78-.176-.572.208-1.153.78-1.33 4.615-1.404 10.332-.71 14.247 1.765.493.298.678.903.38 1.396z"/></svg>
          </SocialLink>
          <SocialLink href="#" label="YouTube">
            <svg role="img" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </SocialLink>
          <SocialLink href="#" label="Instagram">
            <svg role="img" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.457.718-2.123 1.385S.935 3.356.63 4.14C.333 4.905.13 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913.306.783.718 1.457 1.385 2.123s1.34 1.08 2.123 1.385c.766.298 1.636.498 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.913-.558.783-.306 1.457-.718 2.123-1.385s1.08-1.34 1.385-2.123c.298-.766.498-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.913-.306-.784-.718-1.457-1.385-2.123S20.643.935 19.86.63c-.765-.298-1.636-.498-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.248 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.248 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.38.896-.423.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.248-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.82-1.381-.896-.164-.423-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.06-1.17.25-1.805.413-2.227.217-.562.48-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.175 8.793 2.16 12 2.16zm0 5.48c-3.106 0-5.607 2.502-5.607 5.607S8.894 18.854 12 18.854s5.607-2.502 5.607-5.607-2.501-5.607-5.607-5.607zm0 9.263c-2.022 0-3.655-1.633-3.655-3.655s1.633-3.655 3.655-3.655 3.655 1.633 3.655 3.655-1.633 3.655-3.655 3.655zm4.803-9.522c-.795 0-1.44-.645-1.44-1.44s.645-1.44 1.44-1.44c.795 0 1.44.645 1.44 1.44s-.645 1.44-1.44 1.44z"/></svg>
          </SocialLink>
          <SocialLink href="#" label="Facebook">
            <svg role="img" className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
};

export default Social;