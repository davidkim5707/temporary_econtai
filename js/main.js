/**
 * EconTAI - Main JavaScript
 * Shared utilities and navigation
 */

// ============================================
// Active Navigation Highlighting
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Find all navigation links (including dropdown menu items)
    const navLinks = document.querySelectorAll('.nav-links a');

    // Pages that belong to the Contact dropdown
    const contactPages = ['events.html', 'newsletter.html', 'contact-us.html'];

    // Add 'active' class to current page link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // Check if this is the current page
        if (linkHref === currentPage ||
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }

        // If current page is a contact dropdown page, highlight the Contact dropdown toggle
        if (contactPages.includes(currentPage) && link.classList.contains('dropdown-toggle')) {
            link.classList.add('active');
        }
    });

    // Dropdown menu functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');

    if (dropdownToggle && dropdown) {
        // Prevent default link behavior for dropdown toggle
        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
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

const mobileMenuButton = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuButton && navLinksContainer) {
    mobileMenuButton.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });
}
