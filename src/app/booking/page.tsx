"use client";
import React from 'react';

const BookingPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-amber-400 tracking-tight mt-10">
            Book Your Session
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start your tattoo journey? Fill out the form below and we'll
            contact you within 24 hours to schedule your consultation.
          </p>
        </header>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Consultation Form */}
          <div className="lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <h2 className="text-3xl font-semibold text-amber-400 mb-6">
              Consultation Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g., John Doe"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="e.g., john.doe@example.com"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g., (123) 456-7890"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Tattoo Placement */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tattoo Placement</label>
                <input
                  type="text"
                  placeholder="e.g., Left forearm, right bicep"
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Tattoo Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Width (inches)</label>
                  <input
                    type="number"
                    placeholder="e.g., 5"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Height (inches)</label>
                  <input
                    type="number"
                    placeholder="e.g., 3"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe your tattoo idea in detail. Mention style, elements, and any specific requests."
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              {/* Reference Images */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Reference Images</label>
                <input
                  type="file"
                  multiple
                  className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-amber-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-amber-500 transition"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                Our Process
              </h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li><strong>Submit Your Idea:</strong> Fill out the consultation form with as much detail as possible.</li>
                <li><strong>Consultation:</strong> We'll review your submission and contact you to discuss the design, pricing, and scheduling.</li>
                <li><strong>Deposit:</strong> A deposit is required to secure your appointment date.</li>
                <li><strong>Design Finalization:</strong> We'll finalize the design and schedule your tattoo session.</li>
              </ol>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">
                Important Information
              </h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>A <strong>$50 non-refundable deposit</strong> is required to book an appointment.</li>
                <li>You must be 18 or older with a valid government-issued ID.</li>
                <li>Please arrive well-rested and have a meal before your session.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
