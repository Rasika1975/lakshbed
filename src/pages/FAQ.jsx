import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { faqData } from '../data/faqData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Common Queries"
          center={true}
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;