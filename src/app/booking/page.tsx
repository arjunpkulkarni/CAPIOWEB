import React from 'react';
import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book Your Appointment',
  description: 'Book your tattoo or piercing appointment at Capio Tattoo in Westchester, NY. Our easy-to-use booking system makes it simple to schedule your next session.',
};

const BookingPage = () => {
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
          <BookingForm />

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
                <li>For any questions, please email us at <a href="mailto:capio.tattoo.studio@gmail.com" className="text-amber-400 hover:underline">capio.tattoo.studio@gmail.com</a>.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
