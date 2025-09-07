document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.nav-items');
    
    if (menuToggle && navItems) {
        menuToggle.addEventListener('click', () => {
            navItems.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.post-hero-image, .post-text > *, .sidebar-section');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            
            if (position < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    const animatedElements = document.querySelectorAll('.post-hero-image, .post-text > *, .sidebar-section');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    const postHero = document.querySelector('.post-hero-image');
    if (postHero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            postHero.style.transform = `translateY(${scrolled * 0.1}px)`;
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});