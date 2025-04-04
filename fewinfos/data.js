// FEWINFOS Website Data

const websiteData = {
    // Website keywords for SEO and chatbot
    keywords: {
        main: ["web development", "digital solutions", "AI", "social media management", "mentorship", "tech education"],
        services: ["web design", "app development", "digital marketing", "AI solutions", "mentorship", "coding"],
        technologies: ["React", "Node.js", "Python", "HTML5", "CSS3", "Bootstrap", "SQL"]
    },
    
    // Counters data
    counters: {
        yearsOfExperience: 2,
        happyClients: 15,
        projectsCompleted: 3,
        eventsHosted: 2,
        coursesOffered: 3  // New counter for courses
    },

    // Services data
    services: [
        {
            icon: "fas fa-desktop",
            title: "Web Development",
            description: "Custom web solutions with cutting-edge technologies",
            technologies: ["React", "Node.js", "Python","HTML5","CSS3","Bootstrap"]
        },
        {
            icon: "fas fa-code",
            title: "Minor Projects",
            description: "Web based minor project for students",
            technologies: ["Python","HTML5","CSS3","Bootstrap","SQL"]
        },
        {
            icon: "fab fa-instagram",
            title: "Social Media Management",
            description: "Standard post and reels per months",
            technologies: ["Post per day", "Reel per week", "stories per day"]
        },
        {
            icon: "fas fa-book",
            title: "One To One Mentorship",
            description: "Ideal solutions by our mentors",
            technologies: ["How to code", "How to use AI"]
        }
    ],

    // Projects/Products data
    projects: [
        {
            title: "Seatify",
            description: "Advanced hall arrangement solution for enterprise systems",
            features: ["Real-time Monitoring", "AI Analytics", "Web-based"],
            icon: "fas fa-chart-line",
            github: "https://github.com/fewinfos/smart-logger",
            isFeatured: true
        },
        {
            title: "FewAI CLI",
            description: "Next-generation command line bot",
            features: ["Advanced coding in terminal", "Automated works", "Integraion with the system"],
            icon: "fas fa-shield-alt",
            github: "https://github.com/fewinfos/securegate",
            isFeatured: false
        },
        {
            title: "FewAI BOT",
            description: "Next-generation LLM bot",
            features: ["Coding master", "Real time problem solving"],
            icon: "fas fa-robot",
            github: "https://github.com/fewinfos/securegate",
            isFeatured: true
        }
    ],

    // Team members data
    team: {
        leadership: {
            name: "Naveenraj Thiyagarajan",
            position: "Founder & CEO",
            image: "images/naveenraj.jpg",
            socials: {
                github: "https://github.com/navi-04",
                linkedin: "http://www.linkedin.com/in/navithiyagu",
                instagram: "https://www.instagram.com/suvitha__ramesh?igsh=MW53a3B3NHQ2Yjd4Yg=="
            },
            goals: [
                "To revolutionize digital solutions and empower businesses worldwide",
                "Creating innovative technology solutions that transform ideas into reality"
            ]
        },
        members: [
            {
                name: "Suvitha",
                position: "Co-founder & Lead Developer & Event Manager",
                image: "images/suvitha.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/suvitha-ramesh/",
                    instagram: "#"
                }
            },
            {
                name: "Nureshma",
                position: "Techical Engineer & Clients Manager",
                image: "images/nureshma.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "http://www.linkedin.com/in/nureshma-s-full-stack-developer-a03444290/",
                    instagram: "#"
                }
            },
            {
                name: "Nirmala",
                position: "Socia Media Manager & Technical Engineer",
                image: "images/nirmala.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/nirmala-ramadas-16b081290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    instagram: "#"
                }
            },
            {
                name: "Nishanthi",
                position: "Techical Engineer & Clients Manager",
                image: "images/nishanthi.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/nishanthi-shahana-b471b032b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    instagram: "#"
                }
            },
            {
                name: "Shivani",
                position: "Socia Media Manager & Technical Engineer",
                image: "images/shivani.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/shivani-karthikeyan-400508283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    instagram: "#"
                }
            },
            {
                name: "Sudeep",
                position: "Techical Engineer & Clients Manager",
                image: "images/sudeep.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/sudeep-k-14b442290",
                    instagram: "#"
                }
            },
            {
                name: "Ragavi",
                position: "Event Manager & Technical Engineer",
                image: "images/ragavi.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/ragavi-s-96848925a/",
                    instagram: "#"
                }
            },
            {
                name: "Sudharashanan",
                position: "Techical Engineer & Clients Manager",
                image: "images/sudharashanan.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/sudharshanan-sathish-kumar-625776301/",
                    instagram: "#"
                }
            },
            {
                name: "Swathi",
                position: "Event Manager & Technical Engineer",
                image: "images/swathi.jpg",
                socials: {
                    github: "https://github.com/navi-04",
                    linkedin: "https://www.linkedin.com/in/swathi-sundharaj-2a7242312",
                    instagram: "#"
                }
            }
        ]
    },

    // Events data
    events: {
        liveEvents: [
            // {
            //     title: "Tech Conference 2023",
            //     date: "Oct 15-16, 2023",
            //     location: "Virtual",
            //     description: "Join us for our virtual tech conference with industry leaders discussing the latest innovations.",
            //     link: "#",
            //     buttonText: "Join Stream"
            // }
        ],
        upcomingEvents: [
            {
                title: "AI Innovation Summit",
                date: "Nov 15-17, 2025",
                location: "MKCE - Karur, India",
                description: "Explore the future of AI and machine learning with top experts and thought leaders.",
                link: "#contact",
                buttonText: "Register Now"
            }
        ],
        pastEvents: [
            // {
            //     title: "Web Development Summit",
            //     date: "Aug 10-12, 2023",
            //     location: "Mumbai, India",
            //     description: "An insightful gathering of web developers discussing modern frameworks and methodologies.",
            //     image: "images/event-webdev.jpg",
            //     link: "#",
            //     buttonText: "View Highlights"
            // }
        ]
    },

    // Courses data with enhanced information
    courses: [
        {
            title: "Mobile App Development",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            level: "Intermediate",
            duration: "10 weeks",
            description: "Learn to build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
            features: ["Expert Mentors", "Real-world Projects", "Job Assistance", "Lifetime Access"],
            category: "development",
            isFeatured: true,
            originalPrice: "$179.99",
            price: "$89.99",
            discount: 50,
            rating: 4.7,
            students: 8765
        },
        {
            title: "Data Science Fundamentals",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            level: "Beginner",
            duration: "8 weeks",
            description: "Introduction to data analysis, visualization, and machine learning with Python, Pandas, and scikit-learn.",
            features: ["Live Sessions", "Practical Exercises", "Career Guidance", "Industry Projects"],
            category: "data",
            isFeatured: false,
            originalPrice: "$149.99",
            price: "$74.99",
            discount: 50,
            rating: 4.5,
            students: 5432
        },
        {
            title: "Cloud Computing Essentials",
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            level: "Intermediate",
            duration: "6 weeks",
            description: "Master cloud infrastructure deployment and management using AWS, Azure, and GCP.",
            features: ["Hands-on Labs", "Industry Experts", "Certification Prep", "Real-world Case Studies"],
            category: "infrastructure",
            isFeatured: false,
            originalPrice: "$129.99",
            price: "$69.99",
            discount: 46,
            rating: 4.6,
            students: 3210
        }
    ]
};

// Make data available globally
window.websiteData = websiteData;

// Test function to simulate empty event columns
// Uncomment the sections you want to test as empty
function testEmptyEventColumns() {
    // Test all empty columns
    websiteData.events.liveEvents = [];
    websiteData.events.pastEvents = [];
    
    // Keep one event for testing
    // websiteData.events.upcomingEvents = websiteData.events.upcomingEvents;
}

// Comment out this line to show all events
// testEmptyEventColumns();
