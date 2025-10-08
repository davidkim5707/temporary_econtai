/**
 * EconTAI - Shared Component Loader
 * Loads header and footer on all pages
 */

// Function to load HTML content from external files
async function loadComponent(componentPath, targetId) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}`);
        }
        const html = await response.text();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    // Load header
    await loadComponent('includes/header.html', 'header-placeholder');

    // Load footer
    await loadComponent('includes/footer.html', 'footer-placeholder');

    // After header loads, highlight active page in navigation
    highlightActivePage();
});

// Function to highlight the active page in navigation
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}
