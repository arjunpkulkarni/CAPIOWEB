"use client";
import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    artist: '',
    style: '',
    size: '',
    placement: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-cyan-400 tracking-tight mt-10">
            Book Your Consultation
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to start your tattoo journey? Fill out the form below and we'll
            contact you within 24 hours to schedule your consultation.
          </p>
        </header>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          {/* Consultation Form */}
          <div className="lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
              Consultation Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    onChange={handleChange}
                    className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                    className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  onChange={handleChange}
                  className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="artist" className="block mb-2">
                    Preferred Artist
                  </label>
                  <select
                    name="artist"
                    id="artist"
                    onChange={handleChange}
                    className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select an artist</option>
                    <option value="Marcus Rodriguez">Marcus Rodriguez</option>
                    <option value="Sarah Chen">Sarah Chen</option>
                    <option value="Diego Morales">Diego Morales</option>
                    <option value="Alex Thompson">Alex Thompson</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="style" className="block mb-2">
                    Tattoo Style
                  </label>
                  <select
                    name="style"
                    id="style"
                    onChange={handleChange}
                    className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select style</option>
                    <option value="Black & Grey Realism">Black & Grey Realism</option>
                    <option value="Traditional & Neo-Traditional">
                      Traditional & Neo-Traditional
                    </option>
                    <option value="Japanese & Oriental">Japanese & Oriental</option>
                    <option value="Geometric & Dotwork">Geometric & Dotwork</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="size" className="block mb-2">
                    Approximate Size
                  </label>
                  <select
                    name="size"
                    id="size"
                    onChange={handleChange}
                    className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (1-3 inches)</option>
                    <option value="medium">Medium (4-6 inches)</option>
                    <option value="large">Large (7+ inches)</option>
                    <option value="sleeve">Sleeve</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="placement" className="block mb-2">
                    Placement
                  </label>
                  <input
                    type="text"
                    name="placement"
                    id="placement"
                    placeholder="e.g., forearm, shoulder, back"
                    onChange={handleChange}
                    className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block mb-2">
                  Describe Your Tattoo Idea *
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={5}
                  required
                  placeholder="Please describe your tattoo idea in detail, including any reference images you have in mind..."
                  onChange={handleChange}
                  className="w-full bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                What to Expect
              </h3>
              <ol className="list-decimal list-inside space-y-4 text-gray-300">
                <li>
                  <strong>Consultation</strong><br /> We'll discuss your idea,
                  placement, size, and budget to create the perfect design.
                </li>
                <li>
                  <strong>Design Process</strong><br /> Our artist will create a
                  custom design based on your vision and feedback.
                </li>
                <li>
                  <strong>Tattoo Session</strong><br /> Your tattoo will be
                  completed in our sterile, professional studio environment.
                </li>
                <li>
                  <strong>Aftercare</strong><br /> We provide detailed aftercare
                  instructions and support throughout healing.
                </li>
              </ol>
            </div>

            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-md">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Contact Info
              </h3>
              <p className="text-gray-300">
                <strong>Phone:</strong> (713) 555-TATT
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong> info@capiotattoo.com
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
