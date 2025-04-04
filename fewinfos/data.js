// FEWINFOS Website Data

const websiteData = {
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
            technologies: ["React", "Node.js", "Python"]
        },
        {
            icon: "fas fa-code",
            title: "Minor projects",
            description: "Native and cross-platform mobile applications",
            technologies: ["Flutter", "React Native", "Swift"]
        },
        {
            icon: "fas fa-cloud",
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and services",
            technologies: ["AWS", "Azure", "GCP"]
        },
        {
            icon: "fas fa-robot",
            title: "AI Integration",
            description: "Intelligent solutions powered by AI",
            technologies: ["ML", "Deep Learning", "NLP"]
        }
    ],

    // Projects/Products data
    projects: [
        {
            title: "Smart Logger Pro",
            description: "Advanced logging and monitoring solution for enterprise systems",
            features: ["Real-time Monitoring", "AI Analytics", "Cloud Integration"],
            icon: "fas fa-chart-line",
            github: "https://github.com/fewinfos/smart-logger",
            isFeatured: true
        },
        {
            title: "SecureGate",
            description: "Next-generation security management platform",
            features: ["Advanced Encryption", "Threat Detection", "24/7 Protection"],
            icon: "fas fa-shield-alt",
            github: "https://github.com/fewinfos/securegate",
            isFeatured: false
        }
    ],

    // Team members data
    team: {
        leadership: {
            name: "Naveenraj Thiyagarajan",
            position: "Founder & CEO",
            image: "images/naveenraj.jpg",
            socials: {
                github: "#",
                linkedin: "#",
                instagram: "#"
            },
            goals: [
                "To revolutionize digital solutions and empower businesses worldwide",
                "Creating innovative technology solutions that transform ideas into reality"
            ]
        },
        members: [
            {
                name: "Suvitha",
                position: "Lead Developer",
                image: "images/suvitha.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Nureshma",
                position: "UI/UX Designer",
                image: "images/nureshma.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Nirmala",
                position: "Software Engineer",
                image: "images/nirmala.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Nishanthi",
                position: "Backend Developer",
                image: "images/nishanthi.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Sudeep",
                position: "DevOps Engineer",
                image: "images/sudeep.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Shivani",
                position: "Frontend Developer",
                image: "images/shivani.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Ragavi",
                position: "Frontend Developer",
                image: "images/ragavi.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Sudharashanan",
                position: "Backend Developer",
                image: "images/sudharashanan.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
                    instagram: "#"
                }
            },
            {
                name: "Swathi",
                position: "Frontend Developer",
                image: "images/swathi.jpg",
                socials: {
                    github: "#",
                    linkedin: "#",
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
                link: "#",
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

// Activate to test empty columns
testEmptyEventColumns();
