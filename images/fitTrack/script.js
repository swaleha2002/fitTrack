// Smooth scrolling for anchor links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  };
  
  // Toggle mobile menu
  const toggleMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  };
  
  // Initialize smooth scrolling and mobile menu toggle
  window.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    toggleMenu();
  });
  