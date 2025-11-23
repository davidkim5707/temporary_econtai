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

    // ============================================
    // Mobile Menu & Navigation Initialization
    // ============================================

    function initializeNavigation() {
        // Mobile Menu Toggle
        const mobileMenuButton = document.querySelector('.menu-toggle');
        const navLinksContainer = document.querySelector('.nav-links');

        if (mobileMenuButton && navLinksContainer) {
            // Remove old event listeners to prevent duplicates if called multiple times
            const newButton = mobileMenuButton.cloneNode(true);
            mobileMenuButton.parentNode.replaceChild(newButton, mobileMenuButton);

            newButton.addEventListener('click', function () {
                navLinksContainer.classList.toggle('active');
                newButton.classList.toggle('active');
            });
        }

        // Dropdown menu functionality
        const dropdown = document.querySelector('.dropdown');
        const dropdownToggle = document.querySelector('.dropdown-toggle');

        if (dropdownToggle && dropdown) {
            // Remove old event listeners
            const newToggle = dropdownToggle.cloneNode(true);
            dropdownToggle.parentNode.replaceChild(newToggle, dropdownToggle);

            newToggle.addEventListener('click', function (e) {
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
    }

    // Make available globally
    window.initializeNavigation = initializeNavigation;

    // Try to initialize on load (for static pages)
    document.addEventListener('DOMContentLoaded', function () {
        initializeNavigation();
    });
