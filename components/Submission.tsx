import React from 'react';

const Submission: React.FC = () => {
  return (
    <section id="submission" className="h-screen w-screen snap-start flex flex-col justify-center items-center p-6 pb-24 md:p-8 md:pl-24">
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Demo Submission</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Are you an artist with a unique sound? We'd love to hear what you're working on. Please use the form below to send us your demos.
        </p>
        <link rel="stylesheet" href="https://fuchsia.viiic.net/amvn/assets/button.css" />
        <a href="https://aurora.viiic.net/demo">
          <button class="button">
            Go to our submission portal!
            <div class="hoverEffect">
              <div></div>
            </div>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Submission;