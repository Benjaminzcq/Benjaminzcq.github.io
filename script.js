/* ============================================
   Portfolio Website - Interactive JavaScript
   ============================================ */

(function () {
    'use strict';

    // ============================================
    // Global Variables
    // ============================================
    
    const nav = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ============================================
    // Navigation Scroll Effect
    // ============================================
    
    function handleNavScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    
    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    
    function toggleMobileNav() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    // Close mobile nav when clicking a link
    function closeMobileNav() {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // ============================================
    // Smooth Scroll to Anchor
    // ============================================
    
    function smoothScrollToAnchor(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal anchor links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile nav if open
                if (window.innerWidth <= 768) {
                    closeMobileNav();
                }
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without jumping
                history.pushState(null, null, href);
                
                // Set focus for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        }
    }
    
    // ============================================
    // Active Navigation Link Highlight
    // ============================================
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ============================================
    // Portfolio Filter Functionality
    // ============================================
    
    function initializePortfolioFilter() {
        const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (filterButtons.length === 0) return;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ============================================
    // Article Filter Functionality
    // ============================================
    
    function initializeArticleFilter() {
        const filterButtons = document.querySelectorAll('.article-filters .filter-btn');
        const articleCards = document.querySelectorAll('.article-card');
        
        if (filterButtons.length === 0) return;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter articles
                articleCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ============================================
    // Scroll Animations (AOS - Animate On Scroll)
    // ============================================
    
    function initializeScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-aos]');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, parseInt(delay));
                    
                    // Stop observing after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // ============================================
    // Keyboard Navigation Support
    // ============================================
    
    function initializeKeyboardNavigation() {
        // Handle keyboard navigation for filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach((button, index) => {
            button.addEventListener('keydown', (e) => {
                let targetButton = null;
                
                switch (e.key) {
                    case 'ArrowRight':
                        e.preventDefault();
                        targetButton = filterButtons[index + 1] || filterButtons[0];
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        targetButton = filterButtons[index - 1] || filterButtons[filterButtons.length - 1];
                        break;
                    case 'Home':
                        e.preventDefault();
                        targetButton = filterButtons[0];
                        break;
                    case 'End':
                        e.preventDefault();
                        targetButton = filterButtons[filterButtons.length - 1];
                        break;
                }
                
                if (targetButton) {
                    targetButton.focus();
                }
            });
        });
    }
    
    // ============================================
    // Performance: Throttle Function
    // ============================================
    
    function throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // ============================================
    // Performance: Debounce Function
    // ============================================
    
    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }
    
    // ============================================
    // Lazy Loading Images
    // ============================================
    
    function initializeLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            images.forEach(img => {
                img.src = img.src;
            });
        } else {
            // Fallback for browsers that don't support native lazy loading
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    // ============================================
    // Mouse Parallax Effect on Hero
    // ============================================
    
    function initializeParallaxEffect() {
        const hero = document.querySelector('.hero');
        const orbs = document.querySelectorAll('.gradient-orb');
        
        if (!hero || orbs.length === 0) return;
        
        hero.addEventListener('mousemove', throttle((e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            const moveX = (clientX / innerWidth - 0.5) * 50;
            const moveY = (clientY / innerHeight - 0.5) * 50;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                orb.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
            });
        }, 50));
    }
    
    // ============================================
    // Hide/Show Navigation on Scroll
    // ============================================
    
    let lastScrollTop = 0;
    
    function handleNavVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
    
    // ============================================
    // Loading Animation
    // ============================================
    
    function hideLoadingAnimation() {
        document.body.classList.remove('loading');
    }
    
    // ============================================
    // Handle External Links
    // ============================================
    
    function handleExternalLinks() {
        const links = document.querySelectorAll('a[href^="http"]');
        links.forEach(link => {
            if (!link.hostname.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }
    
    // ============================================
    // Copy to Clipboard Functionality
    // ============================================
    
    function initializeCopyToClipboard() {
        const emailButtons = document.querySelectorAll('[href^="mailto:"]');
        
        emailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const email = button.getAttribute('href').replace('mailto:', '');
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        // Visual feedback
                        const originalText = button.textContent;
                        button.textContent = '已复制!';
                        setTimeout(() => {
                            button.textContent = originalText;
                        }, 2000);
                    });
                }
            });
        });
    }
    
    // ============================================
    // Initialize All Functions
    // ============================================
    
    function init() {
        // Event listeners for navigation
        window.addEventListener('scroll', throttle(handleNavScroll, 100));
        window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
        window.addEventListener('scroll', throttle(handleNavVisibility, 100));
        
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }
        
        navLinks.forEach(link => {
            link.addEventListener('click', smoothScrollToAnchor);
        });
        
        // Initialize features
        initializeScrollAnimations();
        initializePortfolioFilter();
        initializeArticleFilter();
        initializeKeyboardNavigation();
        initializeLazyLoading();
        initializeParallaxEffect();
        handleExternalLinks();
        initializeCopyToClipboard();
        
        // Hide loading state
        hideLoadingAnimation();
        
        // Handle window resize
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth > 768) {
                closeMobileNav();
            }
        }, 250));
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
        
        // Log initialization for debugging
        console.log('Portfolio website initialized successfully! 🚀');
    }
    
    // ============================================
    // Wait for DOM to be fully loaded
    // ============================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // ============================================
    // Service Worker Registration (for PWA support)
    // ============================================
    
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Uncomment to enable service worker
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered:', registration))
            //     .catch(err => console.log('SW registration failed:', err));
        });
    }
    
})();

/* ============================================
   Easter Egg: Console Art
   ============================================ */

console.log('%c' + `
 ____                  _                 _       
|  _ \\                (_)               (_)      
| |_) | ___ _ __  _ __ _ __ _ _ __ ___  _ _ __  
|  _ < / _ \\ '_ \\| '__| / _\` | '_ \` _ \\| | '_ \\ 
| |_) |  __/ | | | |  | | (_| | | | | | | | | | |
|____/ \\___|_| |_|_|  |_|\\__,_|_| |_| |_|_|_| |_|
                                                  
`, 'color: #6366f1; font-weight: bold; font-size: 12px;');

console.log('%cWelcome to my portfolio! 👋', 'color: #a855f7; font-size: 16px; font-weight: bold;');
console.log('%cIf you\'re reading this, you might be a fellow developer. Let\'s connect!', 'color: #06b6d4; font-size: 14px;');

