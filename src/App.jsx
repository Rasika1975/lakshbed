import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookAppointment from './pages/BookAppointment';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import { initAnimations } from './utils/gsapAnimations';
import FloatingElements from './components/common/FloatingElements';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize GSAP animations
    initAnimations();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToTop />
        <Navbar />
        {/* Add spacing for fixed navbar */}
        <div className="h-12 md:h-14"></div>
        <main style={{ marginTop: '48px' }}>
          <FloatingElements />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
