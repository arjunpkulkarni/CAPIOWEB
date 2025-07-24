import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for booking a tattoo or piercing appointment at Capio Tattoo. Please review our policies before your session.',
  robots: {
    index: false,
    follow: true,
  }
};

const TermsPage = () => (
  <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen py-24">
    <div className="max-w-4xl mx-auto px-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-tight">Terms &amp; Conditions</h1>
        <p className="mt-4 text-lg text-gray-400">
          Please read these terms carefully before booking your appointment.
        </p>
      </header>

      {/* Content Sections */}
      <div className="space-y-10">
        {/* Age Requirements */}
        <article className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-amber-400 mb-4 border-b border-amber-500 pb-2">
            Age Requirements
          </h2>
          <ul className="list-inside space-y-3 text-gray-200">
            <li>• You must be <strong>18 years or older</strong> to get a tattoo.</li>
            <li>• A valid government-issued photo ID is required upon arrival.</li>
            <li>• No exceptions will be made for minors, even with parental consent.</li>
            <li>• We reserve the right to refuse service if ID appears fraudulent.</li>
          </ul>
        </article>

        {/* Health & Safety */}
        <article className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-amber-400 mb-4 border-b border-amber-500 pb-2">
            Health &amp; Safety
          </h2>
          <ul className="list-inside space-y-3 text-gray-200">
            <li>• You must not be under the influence of alcohol or drugs.</li>
            <li>• Inform us of any medical conditions or medications prior to your session.</li>
            <li>• If you have a major medical condition, please consult with your doctor beforehand.</li>
            <li>• If you have skin conditions, consult your doctor before booking.</li>
            <li>• We use single-use, sterile needles and follow strict sanitization protocols.</li>
            <li>• If you feel unwell on your appointment day, please contact us to reschedule.</li>
          </ul>
        </article>

        {/* Booking & Payment */}
        <article className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-amber-400 mb-4 border-b border-amber-500 pb-2">
            Booking &amp; Payment
          </h2>
          <ul className="list-inside space-y-3 text-gray-200">
            <li>• A non-refundable deposit of <strong>$50</strong> is required to reserve your slot.</li>
            <li>• Deposits apply toward the final cost of your tattoo.</li>
            <li>• We accept cash, major credit cards, and Venmo.</li>
            <li>• Full payment is due at the end of your session.</li>
            <li>• Cancellation or reschedule requests must be made at least 48 hours in advance.</li>
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

export default TermsPage;
