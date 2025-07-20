import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gray-900 p-8 rounded-lg max-w-sm">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Info</h3>
          <div className="space-y-4">
            <div>
              <p className="font-bold text-cyan-400">Phone</p>
              <p>(713) 555-TATT</p>
            </div>
            <div>
              <p className="font-bold text-cyan-400">Email</p>
              <p>info@capiotattoo.com</p>
            </div>
            <div>
              <p className="font-bold text-cyan-400">Address</p>
              <p>123 Tattoo Street</p>
              <p>Houston, TX 77001</p>
            </div>
            <div>
              <p className="font-bold text-cyan-400">Hours</p>
              <p>Tue-Sat: 12PM-8PM</p>
              <p>Sun: 12PM-6PM</p>
              <p>Closed Mondays</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 