// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 130,
            density: {
                enable: true,
                value_area: 700
            }
        },
        color: {
            value: ["#2c5fd0", "#4a90e2", "#1a1a1a"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#2c5fd0",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: ["grab", "bubble"]
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.8
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 0.3,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when nav links are clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
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

// Chatbot functionality
const chatToggle = document.querySelector('.chat-toggle');
const chatbot = document.querySelector('.chatbot');
const closeChat = document.querySelector('.close-chat');
const sendMessage = document.querySelector('.send-message');
const messageInput = document.querySelector('.chat-input input');
const chatMessages = document.querySelector('.chat-messages');

chatToggle.addEventListener('click', () => {
    chatbot.classList.add('active');
});

closeChat.addEventListener('click', () => {
    chatbot.classList.remove('active');
});

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.innerHTML = `
        <i class="fas fa-${isUser ? 'user' : 'robot'}"></i>
        <p>${message}</p>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendMessage.addEventListener('click', sendUserMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendUserMessage();
});

function sendUserMessage() {
    const message = messageInput.value.trim();
    if (!message) return;
    
    addMessage(message, true);
    messageInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        addMessage('Thank you for your message. Our team will get back to you soon!');
    }, 1000);
}

// Service contact buttons
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const serviceCard = e.target.closest('.service-card');
        const serviceName = serviceCard.querySelector('h3').textContent;
        addMessage(`I'm interested in your ${serviceName} service. Can you tell me more?`, true);
        
        // Show chatbot
        chatbot.classList.add('active');
        
        // Simulate bot response after delay
        setTimeout(() => {
            addMessage(`Thank you for your interest in our ${serviceName} service. One of our specialists will contact you shortly.`);
        }, 1000);
    });
});

// Add smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle service cards scrolling
const servicesGrid = document.querySelector('.services-grid');
if (servicesGrid && window.innerWidth <= 768) {
    let startX;
    let scrollLeft;
    let isDown = false;

    servicesGrid.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - servicesGrid.offsetLeft;
        scrollLeft = servicesGrid.scrollLeft;
    });

    servicesGrid.addEventListener('mouseleave', () => {
        isDown = false;
    });

    servicesGrid.addEventListener('mouseup', () => {
        isDown = false;
    });

    servicesGrid.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - servicesGrid.offsetLeft;
        const walk = (x - startX) * 2;
        servicesGrid.scrollLeft = scrollLeft - walk;
    });

    const prevBtn = document.querySelector('.prev-service');
    const nextBtn = document.querySelector('.next-service');
    const cardWidth = servicesGrid.querySelector('.service-card').offsetWidth;
    const scrollAmount = cardWidth + 24; // card width + gap

    nextBtn.addEventListener('click', () => {
        servicesGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        servicesGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Touch handling
    servicesGrid.addEventListener('touchstart', e => {
        startX = e.touches[0].pageX - servicesGrid.offsetLeft;
        scrollLeft = servicesGrid.scrollLeft;
    }, { passive: true });

    servicesGrid.addEventListener('touchmove', e => {
        if (!startX) return;
        const x = e.touches[0].pageX - servicesGrid.offsetLeft;
        const walk = (startX - x) * 2;
        servicesGrid.scrollLeft = scrollLeft + walk;
    }, { passive: true });

    servicesGrid.addEventListener('touchend', () => {
        startX = null;
    });
}

// Service navigation functionality
const prevBtnNav = document.querySelector('.prev-service');
const nextBtnNav = document.querySelector('.next-service');
const servicesGridNav = document.querySelector('.services-grid');

if (prevBtnNav && nextBtnNav && servicesGridNav) {
    const scrollAmountNav = window.innerWidth <= 768 ? servicesGridNav.clientWidth * 0.85 + 24 : 0;

    nextBtnNav.addEventListener('click', () => {
        servicesGridNav.scrollBy({
            left: scrollAmountNav,
            behavior: 'smooth'
        });
    });

    prevBtnNav.addEventListener('click', () => {
        servicesGridNav.scrollBy({
            left: -scrollAmountNav,
            behavior: 'smooth'
        });
    });

    // Hide navigation buttons on desktop
    function updateNavVisibility() {
        const isMobile = window.innerWidth <= 768;
        prevBtnNav.style.display = isMobile ? 'flex' : 'none';
        nextBtnNav.style.display = isMobile ? 'flex' : 'none';
    }

    // Initial check and listen for window resize
    updateNavVisibility();
    window.addEventListener('resize', updateNavVisibility);
}

// Scroll animations
function createObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.scroll-animate').forEach(element => {
        element.classList.add('scroll-hidden');
        observer.observe(element);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', createObserver);

// Team slider functionality with improved touch support
const teamSlider = document.querySelector('.team-members');
const prevTeamBtn = document.querySelector('.prev-team');
const nextTeamBtn = document.querySelector('.next-team');

if (teamSlider && prevTeamBtn && nextTeamBtn) {
    const cards = Array.from(teamSlider.querySelectorAll('.member-card'));
    
    // Set animation delay for staggered appearance
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
    
    // Calculate the correct card width including gap
    const cardWidth = cards[0].offsetWidth;
    const cardGap = parseInt(window.getComputedStyle(teamSlider).columnGap || '32');
    const slideAmount = cardWidth + cardGap;
    
    // Calculate how many cards to show based on viewport width
    const getVisibleCards = () => {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 768) return 1;
        if (viewportWidth <= 1024) return 2;
        return 3;
    };
    
    let currentPosition = 0;
    let maxScroll;
    
    // Touch variables
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let startPosition = 0;
    let startTime = 0;
    let isTouchScrolling = false;
    
    // Function to update maxScroll based on current viewport
    const updateMaxScroll = () => {
        const visibleCards = getVisibleCards();
        maxScroll = Math.max(0, (cards.length - visibleCards) * slideAmount);
    };
    
    updateMaxScroll();
    
    // Update slider position and enable/disable buttons
    const updateSliderPosition = (useTransition = true) => {
        if (useTransition) {
            teamSlider.style.transition = 'transform 0.3s ease';
        } else {
            teamSlider.style.transition = 'none';
        }
        
        teamSlider.style.transform = `translateX(${-currentPosition}px)`;
        
        // Enable/disable buttons based on position
        prevTeamBtn.disabled = currentPosition <= 0;
        nextTeamBtn.disabled = currentPosition >= maxScroll;
        
        // Visual feedback for disabled buttons
        prevTeamBtn.style.opacity = prevTeamBtn.disabled ? "0.5" : "1";
        nextTeamBtn.style.opacity = nextTeamBtn.disabled ? "0.5" : "1";
        
        // Reset transition after animation completes
        if (useTransition) {
            setTimeout(() => {
                teamSlider.style.transition = '';
            }, 300);
        }
    };
    
    // Initialize button state
    updateSliderPosition(false);
    
    // Add scroll indicator for mobile
    if (window.innerWidth <= 768) {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        teamSlider.parentNode.appendChild(indicator);
    }
    
    // Navigation event handlers
    nextTeamBtn.addEventListener('click', () => {
        if (currentPosition < maxScroll) {
            currentPosition += slideAmount;
            if (currentPosition > maxScroll) currentPosition = maxScroll;
            updateSliderPosition();
        }
    });
    
    prevTeamBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition -= slideAmount;
            if (currentPosition < 0) currentPosition = 0;
            updateSliderPosition();
        }
    });
    
    // Touch event handlers for mobile
    teamSlider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        startPosition = currentPosition;
        startTime = Date.now();
        isDragging = true;
        isTouchScrolling = true;
        
        // Add active class for visual feedback
        teamSlider.classList.add('dragging');
        updateSliderPosition(false); // Disable transition during drag
    }, { passive: true });
    
    teamSlider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        touchEndX = e.touches[0].clientX;
        const diffX = touchStartX - touchEndX;
        let newPosition = startPosition + diffX;
        
        // Add resistance when dragging beyond limits
        if (newPosition < 0) {
            newPosition = -Math.pow(-newPosition, 0.7);
        } else if (newPosition > maxScroll) {
            const overScroll = newPosition - maxScroll;
            newPosition = maxScroll + Math.pow(overScroll, 0.7);
        }
        
        currentPosition = newPosition;
        teamSlider.style.transform = `translateX(${-currentPosition}px)`;
        
        // Update pointer events
        cards.forEach(card => {
            card.style.pointerEvents = 'none';
        });
    }, { passive: true });
    
    teamSlider.addEventListener('touchend', () => {
        if (!isDragging) return;
        
        isDragging = false;
        
        // Remove active class
        teamSlider.classList.remove('dragging');
        
        // Get velocity for flick/swipe detection
        const endTime = Date.now();
        const timeElapsed = endTime - startTime;
        const touchDiff = touchStartX - touchEndX;
        const velocity = Math.abs(touchDiff / timeElapsed);
        
        if (velocity > 0.5) {
            // Fast swipe - move in the direction of the swipe
            if (touchDiff > 50) {
                // Swipe left - move right
                currentPosition += slideAmount;
            } else if (touchDiff < -50) {
                // Swipe right - move left
                currentPosition -= slideAmount;
            }
        } else {
            // Slow drag - snap to nearest card
            const cardIndex = Math.round(currentPosition / slideAmount);
            currentPosition = cardIndex * slideAmount;
        }
        
        // Ensure we don't go beyond bounds
        if (currentPosition < 0) currentPosition = 0;
        if (currentPosition > maxScroll) currentPosition = maxScroll;
        
        // Apply smooth transition for snapping
        updateSliderPosition(true);
        
        // Re-enable pointer events after a short delay
        setTimeout(() => {
            cards.forEach(card => {
                card.style.pointerEvents = '';
            });
            isTouchScrolling = false;
        }, 300);
    });
    
    // Prevent clicking during touch scroll
    teamSlider.addEventListener('click', (e) => {
        if (isTouchScrolling) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);
    
    // Recalculate on window resize
    window.addEventListener('resize', () => {
        updateMaxScroll();
        
        // Reset position if we're past the maximum scroll
        if (currentPosition > maxScroll) {
            currentPosition = maxScroll;
        }
        
        updateSliderPosition(false);
        
        // Update scroll indicator visibility
        const indicator = document.querySelector('.scroll-indicator');
        if (indicator) {
            indicator.style.display = window.innerWidth <= 768 ? 'block' : 'none';
        }
    });
}
