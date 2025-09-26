// JavaScript for Portfolio Website
document.addEventListener('DOMContentLoaded', () => {
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
        
        // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Project Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        navLinks.style.display = 'none';
                    }
                }
            });
        });
        
        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animations
        gsap.to('.hero h1', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2
        });
        
        gsap.to('.hero .tagline', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.4
        });
        
        gsap.to('.hero-btns', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.6
        });
        
        gsap.to('.hero-image', {
            opacity: 1,
            duration: 1,
            delay: 0.8
        });
        
        // About section animations
        gsap.to('.about-image', {
            scrollTrigger: {
                trigger: '.about-image',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8
        });
        
        gsap.to('.about-text', {
            scrollTrigger: {
                trigger: '.about-text',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8
        });
        
        gsap.to('.skill-card', {
            scrollTrigger: {
                trigger: '.skills',
                start: 'top 80%',
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2
        });
        
        gsap.to('.stat', {
            scrollTrigger: {
                trigger: '.stats',
                start: 'top 80%',
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2
        });
        
        // Project cards animation
        gsap.to('.project-card', {
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%',
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2
        });
        
        // Timeline animation
        gsap.to('.timeline-item', {
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.3
        });
        
        // Contact section animations
        gsap.to('.contact-info', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8
        });
        
        gsap.to('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
            },
            opacity: 1,
            x: 0,
            duration: 0.8
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
});
  