export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Adjust for fixed navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};