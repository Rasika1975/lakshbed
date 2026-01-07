import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Take the first step towards mental wellness and personal transformation with our expert hypnosis and counselling services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/book-appointment">
            <Button variant="primary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book an Appointment
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;