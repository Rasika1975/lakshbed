import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle 
          title="Privacy Policy" 
          subtitle="Your Privacy Matters"
          center={true}
        />
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Introduction</h2>
          <p className="text-gray-600 mb-6">
            This Privacy Policy describes how Lakshyabhed Gurukul Hypnosis & Subconscious Healing Center ("we", "us", or "our") collects, uses, and shares your personal information when you visit our website or receive our services.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Health and medical information related to your treatment</li>
            <li>Appointment scheduling information</li>
            <li>Communication preferences</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Provide and improve our hypnosis and counselling services</li>
            <li>Schedule and manage your appointments</li>
            <li>Communicate with you about your treatment</li>
            <li>Send you relevant updates and information</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Confidentiality</h2>
          <p className="text-gray-600 mb-6">
            We maintain the highest standards of confidentiality. All personal and medical information is kept strictly confidential and is not shared with third parties without your explicit consent, except as required by law.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to the processing of your information</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, please contact us at info@lakshyabhedgurukul.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;