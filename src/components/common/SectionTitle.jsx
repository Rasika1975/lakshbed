import React from 'react';

const SectionTitle = ({ title, subtitle, center = false, className = '' }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-blue-600 font-semibold mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h2>
      {!subtitle && <div className="w-20 h-1 bg-blue-600 mb-4 mx-auto"></div>}
      {subtitle && <div className="w-20 h-1 bg-blue-600 mb-4 mx-auto"></div>}
    </div>
  );
};

export default SectionTitle;