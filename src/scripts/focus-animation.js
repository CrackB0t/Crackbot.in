// FocusAreas scroll animation
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('[data-area]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    const delay = i * 100;
    card.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;
    observer.observe(card);
  });
});