import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <img 
                src="/assets/images/sir-profile.jpg" 
                alt="Dr. Lakshyabhed - Mental Wellness Specialist" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <SectionTitle 
              title="About Our Center" 
              subtitle="Our Story"
            />
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Lakshyabhed Gurukul is a leading hypnosis and subconscious healing center dedicated to helping individuals overcome mental health challenges and achieve personal transformation. Our approach combines traditional therapy with modern hypnotherapy techniques.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We believe in the power of the subconscious mind to heal and transform. Our certified practitioners use personalized treatment plans to address each client's unique needs, ensuring the best possible outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button variant="primary" size="lg">
                  Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;