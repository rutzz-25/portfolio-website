// Mobile menu toggle
const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
