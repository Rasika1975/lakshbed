import React from 'react';
import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import ProgramsVideos from '../components/common/ProgramsVideos';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <ProgramsVideos />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;