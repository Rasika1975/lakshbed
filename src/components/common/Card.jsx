import React from 'react';

const Card = ({ children, className = '', header, footer, image, alt = '', ...props }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg ${className}`}
      {...props}
    >
      {image && (
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-48 object-cover"
        />
      )}
      {header && (
        <div className="px-6 py-4 border-b border-gray-200">
          {header}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;