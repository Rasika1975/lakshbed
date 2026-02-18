import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Icon from '../components/common/Icon';
import sirProfileImg from '../assets/images/sirprofile.png';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Our Center" 
          subtitle="Our Story"
          center={true}
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src={sirProfileImg}
              alt="Practitioner Profile" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Lakshyabhed Gurukul is a leading hypnosis and subconscious healing center dedicated to helping individuals overcome mental health challenges and achieve personal transformation. Our approach combines traditional therapy with modern hypnotherapy techniques.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We believe in the power of the subconscious mind to heal and transform. Our certified practitioners use personalized treatment plans to address each client's unique needs, ensuring the best possible outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-700">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionTitle 
            title="Our Approach" 
            subtitle="How We Help"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon type="health" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hypnotherapy</h3>
              <p className="text-gray-600">
                Access the subconscious mind to address deep-rooted issues and promote positive change.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon type="family" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Counselling</h3>
              <p className="text-gray-600">
                Professional guidance to address mental health challenges and emotional well-being.
              </p>
            </div
              import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
            
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon type="anxiety" className="w-8 h-8 text-blue-600" />
              </div>
               <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon type="anxiety" className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                Individualized treatment plans tailored to your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default About;
