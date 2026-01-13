import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import Icon from '../common/Icon';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "Stress & Anxiety Management",
      description: "Personalized hypnotherapy sessions to help you overcome stress and anxiety, promoting mental peace and emotional balance.",
      iconType: "anxiety"
    },
    {
      id: 2,
      title: "Depression Counselling",
      description: "Compassionate therapy sessions designed to help you overcome depression and regain joy and motivation in life.",
      iconType: "depression"
    },
    {
      id: 3,
      title: "Family & Relationship Counselling",
      description: "Professional guidance to improve communication, resolve conflicts, and strengthen family bonds and relationships.",
      iconType: "family"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="What We Offer"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="text-center p-8 hover:shadow-xl transition-shadow animate-on-scroll">
              <div className="flex justify-center mb-6">
                <Icon type={service.iconType} className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;