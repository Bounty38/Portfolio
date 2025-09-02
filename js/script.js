// Theme Management System
class ThemeManager {
    constructor() {
        this.currentTheme = 'business-card';
        this.themes = {
            'business-card': document.getElementById('welcomecard'),
            'portfolio': document.getElementById('portfolioTheme')
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupGridAnimation();
        // Old Welcome Card animation is now removed
        this.setupScrollEffects();
        this.setupPortfolioAnimations();
    }

    switchTheme(themeName) {
        if (this.currentTheme === themeName) return;

        const currentThemeEl = this.themes[this.currentTheme];
        const newThemeEl = this.themes[themeName];

        // Animate out current theme
        currentThemeEl.style.opacity = '0';
        currentThemeEl.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            currentThemeEl.classList.remove('active');
            newThemeEl.classList.add('active');
            
            // Reset and animate in new theme
            newThemeEl.style.opacity = '0';
            newThemeEl.style.transform = 'scale(1.05)';
            
            requestAnimationFrame(() => {
                newThemeEl.style.opacity = '1';
                newThemeEl.style.transform = 'scale(1)';
            });
            
            this.currentTheme = themeName;
            this.onThemeChanged(themeName);
        }, 400);
    }

    onThemeChanged(themeName) {
        // Update grid background for different themes
        const gridBg = document.getElementById('gridBg');
        if (themeName === 'portfolio') {
            gridBg.style.opacity = '0.3';
            gridBg.style.background = `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `;
        } else {
            gridBg.style.opacity = '1';
            gridBg.style.background = `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `;
        }
        
        // Trigger theme-specific animations
        if (themeName === 'portfolio') {
            this.animatePortfolioEntry();
        }
    }

    setupEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentTheme === 'portfolio') {
                this.switchTheme('business-card');
            }
            if (e.key === 'Enter' && this.currentTheme === 'business-card') {
                this.switchTheme('portfolio');
            }
        });

        // Scroll-based theme switching with debounce
        let scrollTimeout = null;

        window.addEventListener('wheel', (e) => {
            if (scrollTimeout) return; // debounce

            scrollTimeout = setTimeout(() => {
                scrollTimeout = null;
            }, 800);

            const delta = e.deltaY;
            if (delta > 0 && this.currentTheme === 'business-card') {
                this.switchTheme('portfolio');
            } else if (delta < 0 && this.currentTheme === 'portfolio') {
                // Only switch back to welcome card if at the top of portfolio page
                const portfolioTheme = document.getElementById('portfolioTheme');
                if (portfolioTheme.scrollTop <= 10) {
                    this.switchTheme('business-card');
                }
            }
        }, { passive: true });

        // Header hide/show on scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            const portfolioHeader = document.querySelector('.portfolio-header');
            if (portfolioHeader) {
                if (st > lastScrollTop && st > 100) {
                    portfolioHeader.classList.add('hidden');
                } else {
                    portfolioHeader.classList.remove('hidden');
                }
            }
            lastScrollTop = st <= 0 ? 0 : st;
        });
    }

    setupGridAnimation() {
        const gridBg = document.getElementById('gridBg');
        let animationSpeed = 20;
        
        // Variable speed based on mouse movement
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            const speed = 10 + (mouseX + mouseY) * 20;
            
            gridBg.style.animationDuration = `${speed}s`;
        });
    }

    // Removed 3D Welcome Card tilt, no longer relevant
    setupScrollEffects() {
        // Only apply to portfolio theme
        const portfolioSections = document.querySelectorAll('.portfolio-section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Animate child elements
                    const animatableElements = entry.target.querySelectorAll(
                        '.skill-category, .project-card, .timeline-item, .contact-method'
                    );
                    
                    animatableElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        portfolioSections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    setupPortfolioAnimations() {
        // Parallax effect for portfolio sections
        const portfolioTheme = document.getElementById('portfolioTheme');
        
        portfolioTheme.addEventListener('scroll', () => {
            const scrollTop = portfolioTheme.scrollTop;
            const sections = portfolioTheme.querySelectorAll('.portfolio-section');
            
            sections.forEach((section, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrollTop * speed);
                section.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Typing effect for section titles
        this.setupTypingEffect();
    }

    setupTypingEffect() {
        const typeWriter = (element, text, speed = 100) => {
            element.innerHTML = '';
            let i = 0;
            
            const type = () => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            };
            
            type();
        };

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const title = entry.target;
                    const originalText = title.dataset.originalText || title.textContent;
                    title.dataset.originalText = originalText;
                    
                    setTimeout(() => {
                        typeWriter(title, originalText, 50);
                    }, 300);
                    
                    titleObserver.unobserve(title);
                }
            });
        });

        document.querySelectorAll('.section-title').forEach(title => {
            titleObserver.observe(title);
        });
    }

    animatePortfolioEntry() {
        const portfolioMain = document.querySelector('.portfolio-main');
        portfolioMain.style.opacity = '0';
        portfolioMain.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            portfolioMain.style.transition = 'all 0.8s ease';
            portfolioMain.style.opacity = '1';
            portfolioMain.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Particle System for Background Effects
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = this.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.3';
        document.body.appendChild(canvas);
        return canvas;
    }

    init() {
        this.resizeCanvas();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000);
        
        for (let i = 0; i < numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Smooth scrolling for portfolio navigation
function setupSmoothScrolling() {
    document.querySelectorAll('.portfolio-nav .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Loading animation
function setupLoadingAnimation() {
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease';
            document.body.style.opacity = '1';
            
            // Trigger initial animations
            // old .brand-name and .social-icons now hidden, so no animation needed
        }, 500);
    });
}

// Performance optimization
function setupPerformanceOptimizations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.3s !important;
                transition-duration: 0.2s !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Lazy load heavy animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
            }
        });
    });
    
    document.querySelectorAll('.lazy-animate').forEach(el => {
        observer.observe(el);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme manager
    window.themeManager = new ThemeManager();
    
    // Initialize particle system (only on desktop)
    if (window.innerWidth > 768) {
        new ParticleSystem();
    }
    
    // Setup other features
    setupSmoothScrolling();
    setupLoadingAnimation();
    setupPerformanceOptimizations();
    
    // Add some initial styles for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .skill-category, .project-card, .timeline-item, .contact-method {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
        }
        
        .social-icon {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);
});

    // Handle visibility change for performance
    document.addEventListener('visibilitychange', () => {
        const gridBg = document.getElementById('gridBg');
        if (document.hidden) {
            gridBg.style.animationPlayState = 'paused';
        } else {
            gridBg.style.animationPlayState = 'running';
        }
    });

// Smooth fade-in animation for portfolio sections on scroll
const portfolioSections = document.querySelectorAll('.portfolio-section');

function checkSectionsInView() {
    const triggerBottom = window.innerHeight * 0.85;
    portfolioSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkSectionsInView);
window.addEventListener('load', checkSectionsInView);

// Add easter egg - konami code
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 30000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});