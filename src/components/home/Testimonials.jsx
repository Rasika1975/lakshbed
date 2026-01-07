import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Patient",
      content: "The hypnotherapy sessions helped me overcome my anxiety and regain control of my life. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Patient",
      content: "After years of struggling with depression, I finally found relief. The therapist is incredibly skilled and compassionate.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Patient",
      content: "The family counselling sessions helped resolve long-standing conflicts in our family. Our relationships have improved significantly.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Client Success Stories" 
          subtitle="Testimonials"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;