import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle 
          title="Disclaimer" 
          subtitle="Important Information"
          center={true}
        />
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Medical Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            The information provided by Lakshyabhed Gurukul Hypnosis & Subconscious Healing Center ("we", "us", or "our") on our website and in our services is for general informational and therapeutic purposes only.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Not Medical Advice</h2>
          <p className="text-gray-600 mb-6">
            All information on this site and our services are not intended as medical advice and should not be used as a substitute for professional medical diagnosis, treatment, or advice from a qualified healthcare provider. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or treatment.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Services</h2>
          <p className="text-gray-600 mb-6">
            Our hypnosis and counselling services are provided by trained professionals but are complementary to, not a replacement for, traditional medical care. Our services are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Results May Vary</h2>
          <p className="text-gray-600 mb-6">
            Individual results may vary. The effectiveness of hypnotherapy and counselling can depend on various factors including the individual's willingness to participate, the nature of the issue being addressed, and other personal circumstances.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Situations</h2>
          <p className="text-gray-600 mb-6">
            If you are experiencing a medical emergency, crisis situation, or having thoughts of self-harm, please contact emergency services immediately or go to your nearest emergency room. Our services are not a substitute for emergency care.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Limitation of Liability</h2>
          <p className="text-gray-600">
            Lakshyabhed Gurukul Hypnosis & Subconscious Healing Center shall not be liable for any damages arising from the use of or inability to use our services or information provided on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;