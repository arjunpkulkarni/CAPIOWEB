import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-amber-400 mb-6">Contact Info</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-amber-400">Phone</p>
              <p>(914) 555-1234</p>
            </div>
            <div>
              <p className="font-bold text-amber-400">Email</p>
              <p>contact@capiotattoo.com</p>
            </div>
            <div>
              <p className="font-bold text-amber-400">Address</p>
              <p>123 Tattoo Ave, Westchester, NY</p>
            </div>
            <div>
              <p className="font-bold text-amber-400">Hours</p>
              <p>Tue-Sat: 12pm - 8pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 