document.addEventListener('DOMContentLoaded', () => {
    // Populate navbar menu items from data.js
    const navbarMenu = document.querySelector('.navbar-menu');
    
    // Improved positioning for menu items to account for globe
    const navbarLogo = document.querySelector('.navbar-logo');
    const navbarContainer = document.querySelector('.navbar-container');
    const earthGlobe = document.querySelector('.earth-globe-container');
    
    // Dynamically adjust spacing based on available width
    function adjustNavbarLayout() {
        const containerWidth = navbarContainer.offsetWidth;
        const logoWidth = navbarLogo.offsetWidth;
        const earthWidth = earthGlobe.offsetWidth;
        
        // Only apply custom spacing on larger screens
        if (window.innerWidth > 768) {
            // Calculate available width for menu items
            const availableSpace = containerWidth - logoWidth - earthWidth - 80; // 80px for padding
            navbarMenu.style.maxWidth = `${availableSpace / 2}px`;
        } else {
            navbarMenu.style.maxWidth = '';
        }
    }
    
    // Adjust layout on load and resize
    adjustNavbarLayout();
    window.addEventListener('resize', adjustNavbarLayout);
    
    navItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'navbar-item';
        
        const a = document.createElement('a');
        a.href = item.url;
        a.className = 'navbar-link';
        a.id = `nav-${item.id}`;
        // Add custom property for staggered animations
        a.style.setProperty('--item-index', index);
        
        // Include icon if available
        if (item.icon) {
            const icon = document.createElement('i');
            icon.className = `${item.icon} nav-icon`;
            a.appendChild(icon);
            a.innerHTML += ` ${item.text}`;
        } else {
            a.textContent = item.text;
        }
        
        li.appendChild(a);
        navbarMenu.appendChild(li);
    });
    
    // Mobile menu toggle functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.navbar-menu');
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.navbar-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Set active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // Find which section is currently in view
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelector(`.navbar-link[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.navbar-link[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    });
    
    // Create star background
    createStarryBackground();
});

// Function to create starry background with falling stars
function createStarryBackground() {
    const starsContainer = document.getElementById('stars-container');
    const numberOfBackgroundStars = 150;  // Static background stars
    const numberOfFallingStars = 20;      // Animated falling stars
    
    // Create static background stars
    for (let i = 0; i < numberOfBackgroundStars; i++) {
        createBackgroundStar(starsContainer);
    }
    
    // Create initial falling stars
    for (let i = 0; i < numberOfFallingStars; i++) {
        createFallingStar(starsContainer, Math.random() * 10000);  // Stagger the initial delay
    }
    
    // Continuously create new falling stars
    setInterval(() => {
        createFallingStar(starsContainer);
    }, 1000);  // Create a new falling star every second
}

// Create a static background star
function createBackgroundStar(container) {
    const star = document.createElement('div');
    star.classList.add('star', 'background');
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    
    // Random size and animation
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    container.appendChild(star);
}

// Create a falling star
function createFallingStar(container, delay = 0) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Start position (top of screen, random x position)
    const x = Math.random() * 100;
    star.style.left = `${x}%`;
    star.style.top = '0';
    
    // Random size for the star
    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Animation speed and delay
    const duration = Math.random() * 3 + 3;  // 3-6 seconds to fall
    star.style.animationDuration = `${duration}s`;
    
    if (delay > 0) {
        star.style.animationDelay = `${delay}ms`;
    }
    
    // Add to container
    container.appendChild(star);
    
    // Remove star after animation completes
    setTimeout(() => {
        star.remove();
    }, (duration * 1000) + delay + 200);  // Add a little extra time to ensure animation completes
}
