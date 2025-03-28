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

// Hero title animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const heroTitle = document.querySelector(".hero-title");
let interval = null;

heroTitle.onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
                
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
        
        iteration += 1/3;
    }, 30);
}

// Track cursor position for dynamic shadow effect
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    
    heroTitle.style.textShadow = `
        ${x - 50}px ${y - 50}px 15px rgba(255,255,255,0.3),
        ${50 - x}px ${y - 50}px 15px rgba(74,144,226,0.3),
        ${x - 50}px ${50 - y}px 15px rgba(44,95,208,0.3)
    `;
});

// Globe cursor interaction
const globe = document.querySelector('.globe');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const moveX = (clientX - centerX) / 25;
    const moveY = (clientY - centerY) / 25;
    
    globe.style.transform = `
        rotate(${Date.now() / 60}deg)
        rotateX(${23 + moveY/2}deg)
        rotateY(${moveX}deg)
    `;
    
    const distance = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2));
    globe.style.boxShadow = `
        inset 0 0 50px rgba(0,0,0,${0.6 + distance/100}),
        0 0 50px rgba(74,144,226,${0.3 + distance/100})
    `;
});

document.addEventListener('mouseleave', () => {
    globe.style.transform = 'rotate(0deg) rotateX(23deg) rotateY(0deg)';
    globe.style.boxShadow = 'inset 0 0 50px rgba(0,0,0,0.6), 0 0 50px rgba(74,144,226,0.3)';
});
