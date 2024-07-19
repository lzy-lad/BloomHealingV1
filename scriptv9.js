document.addEventListener('DOMContentLoaded', function() {
    // Animated text in hero section
    const animatedText = document.querySelector('.animated-text');
    const phrases = [
        "Are you an overthinker?",
        "Do you think more than you live?",
        "Have you been feeling numb?",
        "Self discovery need not be a tough road",
        "It's only unwinding",
        "No University will give you a course on becoming you"
    ];
    let currentPhraseIndex = 0;

    function animateText() {
        animatedText.style.opacity = 0;
        setTimeout(() => {
            animatedText.textContent = phrases[currentPhraseIndex];
            animatedText.style.opacity = 1;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }, 500);
    }

    setInterval(animateText, 3000);
    animateText(); // Initial call

    // Mobile menu toggle
    const navToggle = document.createElement('button');
    navToggle.innerHTML = '&#9776;';
    navToggle.classList.add('nav-toggle');
    const nav = document.querySelector('nav');
    nav.appendChild(navToggle);

    navToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            form.reset();
            alert('Thank you for your message. We will get back to you soon!');
        });
    }

    // Basic testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;

    function showNextTestimonial() {
        testimonials.forEach(t => t.style.display = 'none');
        testimonials[currentTestimonialIndex].style.display = 'block';
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    }

    if (testimonials.length > 1) {
        showNextTestimonial();
        setInterval(showNextTestimonial, 5000);
    }

    // Simple background animation
    const backgroundEl = document.getElementById('background-animation');
    function animateBackground() {
        backgroundEl.style.background = `
            linear-gradient(
                ${Math.random() * 360}deg,
                hsl(${Math.random() * 360}, 50%, 80%),
                hsl(${Math.random() * 360}, 50%, 80%)
            )
        `;
        backgroundEl.style.transition = 'background 2s ease-in-out';
    }

    setInterval(animateBackground, 5000);
    animateBackground(); // Initial call

    // Handwritten text animation
    const handwrittenTexts = [
        "Discover yourself",
        "Unlock your potential",
        "Transform your life",
        "Embrace change",
        "Find your path"
    ];

    function createHandwrittenText() {
        const textElement = document.createElement('div');
        textElement.className = 'handwritten-text';
        textElement.textContent = handwrittenTexts[Math.floor(Math.random() * handwrittenTexts.length)];
        textElement.style.left = `${Math.random() * 80 + 10}%`;
        textElement.style.top = `${Math.random() * 80 + 10}%`;
        textElement.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        
        document.getElementById('handwritten-text-animation').appendChild(textElement);
        
        setTimeout(() => textElement.style.opacity = 1, 100);
        setTimeout(() => {
            textElement.style.opacity = 0;
            setTimeout(() => textElement.remove(), 2000);
        }, 4000);
    }

    setInterval(createHandwrittenText, 3000);
});