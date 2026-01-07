import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import heroImg from '../../assets/images/hero.jpg';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Life", "Mind", "Future", "Relationships", "Health"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-stone-50 pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      <style>{`
        @keyframes flip {
          0% { transform: rotateX(90deg); opacity: 0; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }
        .animate-flip {
          animation: flip 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          transform-origin: 50% 50%;
          display: inline-block;
        }
      `}</style>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
              Heal Your Mind. <br />
              <span className="text-indigo-600">
                Transform Your{' '}
                <span key={currentWord} className="animate-flip">
                  {words[currentWord]}.
                </span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-lg leading-relaxed">
              Anxiety, stress, phobias, habits — personalized hypnosis & counselling for lasting transformation and mental wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-appointment">
                <Button variant="primary" size="lg" className="!bg-stone-700 hover:!bg-stone-800 !text-white !rounded-full !pl-6 !pr-2 !py-2 flex items-center gap-3 group transition-all shadow-lg hover:shadow-xl">
                  <span className="font-medium">Book Session</span>
                  <div className="bg-white text-stone-700 w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-stone-200 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImg}
                  alt="Healing and transformation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">1000+</p>
                    <p className="text-gray-600">Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;