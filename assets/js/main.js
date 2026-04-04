/* ==========================================================================
   ZD LLC — main.js
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // Mobile nav toggle
  // --------------------------------------------------------------------------
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // Mark active nav link
  // --------------------------------------------------------------------------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // --------------------------------------------------------------------------
  // Contact form — mailto fallback
  // --------------------------------------------------------------------------
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = form.querySelector('#name').value.trim();
      const email   = form.querySelector('#email').value.trim();
      const subject = form.querySelector('#subject').value;
      const message = form.querySelector('#message').value.trim();

      const body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
      );
      const mailtoLink =
        'mailto:zam@tutamail.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        body;

      window.location.href = mailtoLink;
    });
  }
})();
