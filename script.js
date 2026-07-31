// BROS Dental Clinics - Interactive Script Helper
document.addEventListener('DOMContentLoaded', () => {
  console.log('BROS Dental Clinic website initialized.');
  
  // Smooth scroll handler for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
