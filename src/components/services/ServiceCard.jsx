import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="flex justify-center mb-6">
        <Icon type={service.iconType} className="w-12 h-12 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <div className="mb-4">
        <p className="font-semibold text-gray-700">What you'll achieve:</p>
        <ul className="text-gray-600 text-sm mt-2 space-y-1">
          {service.outcomes && service.outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
      {service.price && (
        <p className="text-blue-600 font-bold mb-4">Starting from: {service.price}</p>
      )}
      <Link to={`/book-appointment?service=${service.id}`}>
        <Button variant="primary" className="w-full">
          Book Session
        </Button>
      </Link>
    </Card>
  );
};

export default ServiceCard;