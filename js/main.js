/**
 * EconTAI - Main JavaScript
 * Shared utilities and navigation
 */

// ============================================
// Active Navigation Highlighting
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Find all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add 'active' class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Check if this is the current page
        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Smooth Scroll for Anchor Links (if any)
// ============================================

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

// ============================================
// Mobile Menu Toggle (future enhancement)
// ============================================

// Placeholder for mobile menu functionality
// Uncomment and customize when adding mobile hamburger menu

/*
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
}
*/
