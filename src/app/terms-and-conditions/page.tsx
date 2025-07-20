import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyan-400">Terms and Conditions</h1>
          <p className="text-xl mt-4">
            Please read these terms carefully before booking your appointment
          </p>
        </div>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Age Requirements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be 18 years or older to get a tattoo</li>
              <li>Valid government-issued photo ID is required</li>
              <li>No exceptions will be made for minors, even with parental consent</li>
              <li>We reserve the right to refuse service if we suspect fake identification</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Health & Safety</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must not be under the influence of alcohol or drugs</li>
              <li>Inform us of any medical conditions or medications</li>
              <li>If you have any skin conditions, consult your doctor first</li>
              <li>We use single-use needles and maintain strict sterilization protocols</li>
              <li>If you feel unwell on your appointment day, please reschedule</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Booking & Payment</h2>
            {/* Add booking and payment terms here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 