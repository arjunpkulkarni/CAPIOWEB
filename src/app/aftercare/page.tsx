import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tattoo & Piercing Aftercare Guide',
  description: 'Learn how to care for your new tattoo or piercing with our comprehensive aftercare guide. Follow our expert advice to ensure proper healing and a beautiful result.',
};

const AftercarePage = () => (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-400 tracking-tight">Aftercare Guide</h1>
          <p className="mt-4 text-lg text-gray-400">
            Proper aftercare is crucial for the healing and longevity of your new tattoo or piercing.
          </p>
        </header>
  
        {/* Content Sections */}
        <div className="space-y-10">
          {/* Tattoo Aftercare */}
          <article className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-semibold text-amber-400 mb-4 border-b border-amber-500 pb-2">
              Tattoo Aftercare
            </h2>
            <ul className="list-inside space-y-3 text-gray-200">
              <li>• Leave the bandage on for at least <strong>3-4 hours</strong>.</li>
              <li>• Gently wash the tattoo with unscented antibacterial soap and lukewarm water.</li>
              <li>• Pat dry with a clean paper towel and let it air dry for a few minutes.</li>
              <li>• Apply a thin layer of recommended aftercare ointment 2-3 times a day.</li>
              <li>• Avoid soaking in baths, pools, or hot tubs for at least two weeks.</li>
              <li>• Keep the tattoo out of direct sunlight and avoid tanning beds.</li>
              <li>• Do not pick or scratch at the scabs that may form.</li>
              <li>• For more detailed information, visit <a href="https://www.healthline.com/health/tattoo-aftercare" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Healthline&apos;s Tattoo Aftercare Guide</a>.</li>
            </ul>
          </article>
  
          {/* Piercing Aftercare */}
          <article className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-3xl font-semibold text-amber-400 mb-4 border-b border-amber-500 pb-2">
              Piercing Aftercare
            </h2>
            <ul className="list-inside space-y-3 text-gray-200">
              <li>• Clean the piercing twice a day with a sterile saline solution.</li>
              <li>• Wash your hands thoroughly before touching the piercing.</li>
              <li>• Avoid rotating or moving the jewelry excessively.</li>
              <li>• Be mindful of the piercing when dressing or sleeping to avoid snagging.</li>
              <li>• Avoid swimming pools, hot tubs, and bodies of water until fully healed.</li>
              <li>• Do not use alcohol, hydrogen peroxide, or antibacterial ointments.</li>
              <li>• For oral piercings, rinse with an alcohol-free mouthwash after meals.</li>
              <li>• Learn more from the <a href="https://www.safepiercing.org/aftercare.php" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Association of Professional Piercers</a>.</li>
            </ul>
          </article>
        </div>
  
        {/* Back to Top Link */}
        <div className="text-center mt-12">
          <a href="#top" className="text-amber-400 hover:underline">
            Back to Top
          </a>
        </div>
      </div>
    </section>
  );
  
  export default AftercarePage; 