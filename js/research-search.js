/**
 * EconTAI Research Page Search
 * Client-side filtering for research publications
 */

(function() {
    'use strict';

    let searchTimeout;
    let allPapers = [];

    // Initialize search functionality when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeResearchSearch();
    });

    function initializeResearchSearch() {
        const searchInput = document.getElementById('research-search');
        const clearButton = document.getElementById('research-clear');
        const countDisplay = document.getElementById('research-count');

        if (!searchInput || !clearButton || !countDisplay) {
            console.error('Research search elements not found');
            return;
        }

        // Wait for publications data to load
        if (!window.publicationsData || !window.publicationsData.research) {
            setTimeout(initializeResearchSearch, 100);
            return;
        }

        // Store all papers
        allPapers = window.publicationsData.research;

        // Initial count display
        updateCount(allPapers.length, allPapers.length, '');

        // Search input handler with debouncing
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            const searchTerm = e.target.value.trim();

            // Show/hide clear button
            if (searchTerm) {
                clearButton.style.display = 'block';
            } else {
                clearButton.style.display = 'none';
            }

            // Debounce search
            searchTimeout = setTimeout(() => {
                performSearch(searchTerm);
            }, 300);
        });

        // Clear button handler
        clearButton.addEventListener('click', function() {
            searchInput.value = '';
            clearButton.style.display = 'none';
            performSearch('');
            searchInput.focus();
        });

        // Clear button hover effect
        clearButton.addEventListener('mouseenter', function() {
            clearButton.style.background = '#c25e00';
        });
        clearButton.addEventListener('mouseleave', function() {
            clearButton.style.background = '#E57200';
        });

        // Focus effect on search input
        searchInput.addEventListener('focus', function() {
            searchInput.style.borderColor = '#E57200';
        });
        searchInput.addEventListener('blur', function() {
            searchInput.style.borderColor = '#ddd';
        });
    }

    function performSearch(searchTerm) {
        const filteredPapers = filterPapers(searchTerm);
        renderFilteredPapers(filteredPapers);
        updateCount(filteredPapers.length, allPapers.length, searchTerm);
    }

    function filterPapers(searchTerm) {
        // If no search term, return all papers
        if (!searchTerm || searchTerm === '') {
            return allPapers;
        }

        const term = searchTerm.toLowerCase();

        return allPapers.filter(paper => {
            // Search in title
            const titleMatch = paper.title.toLowerCase().includes(term);

            // Search in authors
            const authorsMatch = paper.authors.toLowerCase().includes(term);

            // Search in description
            const descriptionMatch = paper.description.toLowerCase().includes(term);

            // Search in tags if they exist
            const tagsMatch = paper.tags && paper.tags.some(tag =>
                tag.toLowerCase().includes(term)
            );

            return titleMatch || authorsMatch || descriptionMatch || tagsMatch;
        });
    }

    function renderFilteredPapers(papers) {
        const container = document.getElementById('research-papers-container');
        if (!container) return;

        if (papers.length === 0) {
            // Show "no results" message
            container.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem;">
                    <h3 style="color: #232D4B; margin-bottom: 1rem;">No publications found</h3>
                    <p style="color: #666; font-size: 1.1rem;">Try a different search term or clear the search to see all publications.</p>
                </div>
            `;
            return;
        }

        // Generate HTML for filtered papers using same format as renderResearchPapers
        const gridHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 2rem; margin: 2rem 0;">
                ${papers.map((paper, index) => `
                    <article style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column;"
                             onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.12)';"
                             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)';">
                        ${index < 3 ? '<div class="paper-badge">Recent Paper</div>' : ''}
                        <h3 class="paper-title">
                            <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''}>${paper.title}</a>
                        </h3>
                        <div class="paper-meta">
                            <span class="paper-authors">${paper.authors}</span>
                            <span class="paper-date">${formatDate(paper.date)}</span>
                        </div>
                        <p class="paper-description" style="flex-grow: 1;">${paper.description}</p>
                        <div class="paper-links">
                            <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''} class="paper-link">Read Paper →</a>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;

        container.innerHTML = gridHTML;
    }

    function updateCount(filtered, total, searchTerm) {
        const countDisplay = document.getElementById('research-count');
        if (!countDisplay) return;

        if (!searchTerm || searchTerm === '') {
            countDisplay.textContent = `Showing all ${total} publications`;
        } else {
            countDisplay.textContent = `Showing ${filtered} of ${total} publications matching "${searchTerm}"`;
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }

})();
