import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to create floating corner animations
export const createFloatingAnimation = (selector) => {
  gsap.utils.toArray(selector).forEach(element => {
    gsap.to(element, {
      y: -20,
      rotation: 5,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
};

// Function to create scroll-triggered fade-in animations
export const createFadeInAnimation = (selector) => {
  gsap.utils.toArray(selector).forEach(element => {
    gsap.fromTo(element,
      { 
        opacity: 0,
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });
};

// Function to create glassmorphism effect on scroll
export const createGlassMorphismEffect = (selector) => {
  gsap.utils.toArray(selector).forEach(element => {
    gsap.to(element, {
      backdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom top',
        scrub: true
      }
    });
  });
};

// Function to initialize all animations
export const initAnimations = () => {
  // Fade in animations for content
  createFadeInAnimation('.animate-on-scroll');
  
  // Glassmorphism effects
  createGlassMorphismEffect('.glass-effect');
  
  // Floating animations for corner elements
  createFloatingAnimation('.float-element');
};