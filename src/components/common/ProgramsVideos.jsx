import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';

const ProgramsVideos = () => {
  const programs = [
    {
      id: 1,
      title: "Hypnotherapy Sessions",
      description: "Deep relaxation and subconscious healing through guided hypnosis techniques.",
      duration: "60-90 minutes",
      videoUrl: "#", // Placeholder for actual video URL
      thumbnail: "https://placehold.co/300x200/e2e8f0/64748b?text=Hypnotherapy+Video"
    },
    {
      id: 2,
      title: "Anxiety Management Program",
      description: "Specialized program to help manage and overcome anxiety disorders.",
      duration: "Series of 5 sessions",
      videoUrl: "#", // Placeholder for actual video URL
      thumbnail: "https://placehold.co/300x200/fef3c7/d97706?text=Anxiety+Program"
    },
    {
      id: 3,
      title: "Depression Recovery Program",
      description: "Comprehensive approach to healing from depression through subconscious work.",
      duration: "8-10 sessions",
      videoUrl: "#", // Placeholder for actual video URL
      thumbnail: "https://placehold.co/300x200/dcfce7/16a34a?text=Depression+Recovery"
    },
    {
      id: 4,
      title: "Relationship Counseling",
      description: "Techniques to improve communication and resolve conflicts in relationships.",
      duration: "50-60 minutes",
      videoUrl: "#", // Placeholder for actual video URL
      thumbnail: "https://placehold.co/300x200/ddd6fe/7c3aed?text=Relationship+Counseling"
    },
    {
      id: 5,
      title: "Stress Management Workshop",
      description: "Learn effective stress management techniques for daily life.",
      duration: "90 minutes workshop",
      videoUrl: "#", // Placeholder for actual video URL
      thumbnail: "https://placehold.co/300x200/fecaca/dc2626?text=Stress+Workshop"
    },
    {
      id: 6,
      title: "Self-Esteem Building Program",
      description: "Build confidence and positive self-image through specialized techniques.",
      duration: "Series of 6 sessions",
      videoUrl: "#", // Placeholder for actual video URL
      thumbnail: "https://placehold.co/300x200/ddd6fe/7c3aed?text=Self+Esteem+Program"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Programs & Videos" 
          subtitle="Transformative Healing Experiences"
          center={true}
        />
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
          Explore our specialized programs and educational videos designed to support your healing journey. 
          Each program combines hypnotherapy, counseling, and subconscious healing techniques.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={program.thumbnail} 
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg hover:scale-110 transform">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.duration}
                  </span>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                    Watch Video
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Programs & Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsVideos;