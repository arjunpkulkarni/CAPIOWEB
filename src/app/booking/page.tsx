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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyan-400">Book Your Consultation</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Ready to start your tattoo journey? Fill out the form below and we'll contact you within 24 hours to schedule your consultation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Consultation Request</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                  onChange={handleChange}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="artist" className="block mb-2">Preferred Artist</label>
                  <select
                    name="artist"
                    id="artist"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                    onChange={handleChange}
                  >
                    <option value="">Select an artist</option>
                    <option value="Marcus Rodriguez">Marcus Rodriguez</option>
                    <option value="Sarah Chen">Sarah Chen</option>
                    <option value="Diego Morales">Diego Morales</option>
                    <option value="Alex Thompson">Alex Thompson</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="style" className="block mb-2">Tattoo Style</label>
                  <select
                    name="style"
                    id="style"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                    onChange={handleChange}
                  >
                    <option value="">Select style</option>
                    <option value="Black & Grey Realism">Black & Grey Realism</option>
                    <option value="Traditional & Neo-Traditional">Traditional & Neo-Traditional</option>
                    <option value="Japanese & Oriental">Japanese & Oriental</option>
                    <option value="Geometric & Dotwork">Geometric & Dotwork</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="size" className="block mb-2">Approximate Size</label>
                  <select
                    name="size"
                    id="size"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                    onChange={handleChange}
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (1-3 inches)</option>
                    <option value="medium">Medium (4-6 inches)</option>
                    <option value="large">Large (7+ inches)</option>
                    <option value="sleeve">Sleeve</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="placement" className="block mb-2">Placement</label>
                  <input
                    type="text"
                    name="placement"
                    id="placement"
                    placeholder="e.g., forearm, shoulder, back"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block mb-2">Describe Your Tattoo Idea *</label>
                <textarea
                  name="description"
                  id="description"
                  rows={5}
                  required
                  placeholder="Please describe your tattoo idea in detail, including any reference images you have in mind..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-cyan-500"
              >
                Submit Request
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">What to Expect</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-bold">Consultation</span><br />
                  We'll discuss your idea, placement, size, and budget to create the perfect design.
                </li>
                <li>
                  <span className="font-bold">Design Process</span><br />
                  Our artist will create a custom design based on your vision and feedback.
                </li>
                <li>
                  <span className="font-bold">Tattoo Session</span><br />
                  Your tattoo will be completed in our sterile, professional studio environment.
                </li>
                <li>
                  <span className="font-bold">Aftercare</span><br />
                  We provide detailed aftercare instructions and support throughout healing.
                </li>
              </ol>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Contact Info</h3>
              <p className="font-bold">Phone</p>
              <p className="mb-2">(713) 555-TATT</p>
              <p className="font-bold">Email</p>
              <p>info@capiotattoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage; 