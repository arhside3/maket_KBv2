document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.hero-content, .kb-news-item, .news-item');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      
      if (position < windowHeight - 100) {
        element.classList.add('animate');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
  
  const kbNewsItems = document.querySelectorAll('.kb-news-item');
  kbNewsItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate');
    }, index * 200);
  });
  
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
  
  menuToggle.addEventListener('click', () => {
    navItems.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
  
  const indicators = document.querySelectorAll('.indicator');
  let currentIndicator = 0;
  
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndicator) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
    
    currentIndicator = (currentIndicator + 1) % indicators.length;
  }
  

  document.querySelectorAll('.news-item, .read-more').forEach(element => {
  element.addEventListener('click', function(e) {
    if (!this.getAttribute('href')) {
      window.location.href = 'post-detail.html';
    } 
    });
  });
  setInterval(updateIndicators, 3000);
});