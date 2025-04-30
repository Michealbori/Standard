// DOM Elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const backToTopBtn = document.getElementById('back-to-top');

// Toggle Mobile Menu
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
}

// Initialize or Refresh AOS
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,   // Allow animation on scroll again
      mirror: true,  // Re-animate when scrolling back up
      disableMutationObserver: false, // Helps with dynamic content
      throttleDelay: 99,              // Performance optimization
      offset: 120     // Increase visibility threshold
    });
  }
}

// Initialize AOS after page load
window.addEventListener('load', () => {
  setTimeout(initAOS, 100);
});

// Refresh AOS on scroll (for performance & dynamic loading)
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking && typeof AOS !== 'undefined') {
    window.requestAnimationFrame(() => {
      AOS.refresh();
      ticking = false;
    });
    ticking = true;
  }

  // Show/Hide Back to Top Button
  if (backToTopBtn) {
    window.scrollY > 300
      ? backToTopBtn.classList.add('show')
      : backToTopBtn.classList.remove('show');
  }
});

// Smooth Scroll to Top
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}