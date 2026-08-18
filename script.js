// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple form validation and submission simulation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    const btn = this.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    
    setTimeout(() => {
        btn.textContent = originalText;
        alert('Message sent successfully! Thank you for reaching out.');
        this.reset();
    }, 1500);
});

// Optional: Add a simple parallax effect to the hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (window.scrollY > window.innerHeight / 2) {
        hero.style.opacity = '0.7';
    } else {
        hero.style.opacity = '1';
    }
});
