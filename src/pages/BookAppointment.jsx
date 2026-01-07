import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import AppointmentForm from '../components/booking/AppointmentForm';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Book an Appointment" 
          subtitle="Schedule Your Session"
          center={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Choose Service</h3>
                <p className="text-gray-600">Select the service that best fits your needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Pick Time & Date</h3>
                <p className="text-gray-600">Choose a convenient time and date for your session</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Get confirmation and prepare for your session</p>
              </div>
            </div>
          </div>
          
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;