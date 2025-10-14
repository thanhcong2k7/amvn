import React from 'react';

const Submission: React.FC = () => {
  return (
    <section id="submission" className="h-screen w-screen snap-start flex flex-col justify-center items-center p-6 pb-24 md:p-8 md:pl-24">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Demo Submission</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Are you an artist with a unique sound? We'd love to hear what you're working on. Please use the form below to send us your demos.
        </p>
        <div className="aspect-video w-full bg-gray-900/50 rounded-xl border-2 border-dashed border-white/20 flex flex-col justify-center items-center text-gray-400 p-8">
            {/* 
              To embed your Typeform:
              1. Go to your Typeform's "Share" panel.
              2. Click on "Embed in a web page".
              3. Choose the "Standard" embed option.
              4. Copy the provided iframe code snippet.
              5. Replace this entire div with that iframe snippet.
              6. You may need to adjust the iframe's width and height attributes to '100%'.
            */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <h3 className="text-2xl font-semibold text-white">Embed Your Typeform Here</h3>
            <p className="mt-2">Replace this placeholder with your Typeform embed code.</p>
        </div>
      </div>
    </section>
  );
};

export default Submission;