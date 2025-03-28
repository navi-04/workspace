const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Add scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateX(-50%)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = 'translate(-50%, -100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateX(-50%)';
    }
    lastScroll = currentScroll;
});

const heroContent = document.querySelector('.hero-content');
const hexagons = document.querySelectorAll('.hexagon');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Parallax effect for hero content
    const moveX = (clientX - innerWidth / 2) / 30;
    const moveY = (clientY - innerHeight / 2) / 30;
    heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // Move hexagons
    hexagons.forEach((hex, index) => {
        const speed = index * 0.2 + 1;
        hex.style.transform = `
            translate(
                ${moveX * speed}px,
                ${moveY * speed}px
            ) rotate(${moveX + moveY}deg)
        `;
    });
});

// Glitch effect on hover
const glitchTexts = document.querySelectorAll('.glitch');
glitchTexts.forEach(text => {
    text.addEventListener('mouseover', () => {
        text.style.animation = 'none';
        text.offsetHeight; // Trigger reflow
        text.style.animation = 'glitchText 0.3s infinite';
    });
    
    text.addEventListener('mouseleave', () => {
        text.style.animation = 'glitchText 3s infinite';
    });
});

// Tech elements hover effect
const elements = document.querySelectorAll('.element');
elements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = element.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        element.style.transform = `
            perspective(1000px)
            rotateX(${(y - 0.5) * 10}deg)
            rotateY(${(x - 0.5) * 10}deg)
            scale(1.1)
        `;
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'none';
    });
});
