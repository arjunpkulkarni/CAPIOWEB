"use client";

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  placement: string;
  width: string;
  height: string;
  description: string;
  files: File[];
}

const BookingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    placement: '',
    width: '',
    height: '',
    description: '',
    files: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prevData) => ({
        ...prevData,
        files: Array.from(e.target.files as FileList),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach(key => {
        if (key === 'files') {
            formData.files.forEach(file => {
                data.append('files', file);
            });
        } else {
            data.append(key, formData[key as keyof Omit<FormData, 'files'>]);
        }
    });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Inquiry sent successfully!');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            placement: '',
            width: '',
            height: '',
            description: '',
            files: [],
        });
      } else {
        alert('Failed to send inquiry.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="lg:col-span-2 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <h2 className="text-3xl font-semibold text-amber-400 mb-6">
        Consultation Request
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="e.g., John Doe"
            required
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g., john.doe@example.com"
            required
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g., (123) 456-7890"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Tattoo Placement */}
        <div>
          <label htmlFor="placement" className="block text-sm font-medium text-gray-300 mb-2">Tattoo Placement</label>
          <input
            id="placement"
            name="placement"
            type="text"
            placeholder="e.g., Left forearm, right bicep"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={formData.placement}
            onChange={handleChange}
          />
        </div>

        {/* Tattoo Size */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-300 mb-2">Width (inches)</label>
            <input
              id="width"
              name="width"
              type="number"
              placeholder="e.g., 5"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={formData.width}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-2">Height (inches)</label>
            <input
              id="height"
              name="height"
              type="number"
              placeholder="e.g., 3"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Describe your tattoo idea in detail. Mention style, elements, and any specific requests."
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Reference Images */}
        <div>
          <label htmlFor="files" className="block text-sm font-medium text-gray-300 mb-2">Reference Images</label>
          <input
            id="files"
            name="files"
            type="file"
            multiple
            className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-amber-500"
            onChange={handleFileChange}
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
  );
};

export default BookingForm; 