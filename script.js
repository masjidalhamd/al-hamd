// Smooth interactions and carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // ====== Mobile Menu Toggle ======
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      // Smooth animation
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.animation = 'slideDown 0.3s ease-out';
      }
    });

    // Close menu when link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // ====== Image Carousel ======
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselDots = document.querySelectorAll('.carousel-dot');

  let currentSlide = 0;
  const totalSlides = 3;
  let autoplayInterval;

  function updateCarousel() {
    const offset = currentSlide * -100;
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    carouselDots.forEach((dot, index) => {
      dot.classList.toggle('bg-emerald-600', index === currentSlide);
      dot.classList.toggle('bg-gray-300', index !== currentSlide);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
    resetAutoplay();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoplay();
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5s
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Dot navigation
    carouselDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
        resetAutoplay();
      });
    });

    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    carousel.addEventListener('mouseleave', startAutoplay);

    // Start autoplay
    startAutoplay();

    // Initial update
    updateCarousel();
  }

  // ====== Smooth Scroll for Anchor Links ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ====== Intersection Observer for Fade-in Animations ======
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in animation to cards
  document.querySelectorAll('.group, .border-t-4').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // ====== Header Shadow on Scroll ======
  const header = document.querySelector('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 0) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
  });

  // ====== Form Interactions (if needed) ======
  // Add smooth focus effects to all inputs
  document.querySelectorAll('input, textarea, button').forEach(el => {
    el.addEventListener('focus', function() {
      this.style.boxShadow = '0 0 0 3px rgba(5, 150, 105, 0.1)';
    });
    el.addEventListener('blur', function() {
      this.style.boxShadow = '';
    });
  });

  // ====== Utility: Log loaded ======
  console.log('✨ Website loaded smoothly!');
});

// ====== Global Smooth Behavior ======
// Add loading state handler
if ('loading' in document) {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
      console.log('📄 DOM ready');
    }
  });
}

// Prevent FOUC (Flash of Unstyled Content)
document.documentElement.style.opacity = '1';
