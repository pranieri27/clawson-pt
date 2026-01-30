/* ========================================
   CLAWSON PT - COMPLETE JAVASCRIPT
   Copy this entire file and save as:
   - js/main.js
   ======================================== */

(function() {
  'use strict';

  // Mobile menu toggle
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('mobile-open');
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        if (nav.classList.contains('mobile-open')) {
          toggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('mobile-open');
          document.body.style.overflow = '';
        }
      }
    });

    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('mobile-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('mobile-open');
        document.body.style.overflow = '';
      }
    });
  }

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  console.log('Clawson PT - Site loaded');
})();
