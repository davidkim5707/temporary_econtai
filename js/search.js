/**
 * EconTAI - Site Search Functionality
 * Client-side search for website content
 */

// Initialize search functionality
window.initializeSearch = function() {
    const searchInput = document.getElementById('site-search');
    const searchButton = document.getElementById('search-button');

    if (!searchInput || !searchButton) {
        // Try again after a short delay if header isn't loaded yet
        setTimeout(window.initializeSearch, 100);
        return;
    }

    // Searchable content index
    const searchIndex = [
        // Research papers
        { title: "Transformative AI, existential risk, and real interest rates", url: "research.html", category: "Research", keywords: "AI interest rates transformative economics" },
        { title: "Public Finance in the Age of Transformative AI", url: "research.html", category: "Research", keywords: "public finance taxation government policy" },
        { title: "AI Agents for Economic Research", url: "research.html", category: "Research", keywords: "AI agents research automation economics" },
        { title: "Concentrating Intelligence: Scaling and Market Structure", url: "research.html", category: "Research", keywords: "market concentration AI vertical integration" },

        // Pages
        { title: "About Us", url: "about.html", category: "Page", keywords: "mission vision objectives strategic" },
        { title: "Research", url: "research.html", category: "Page", keywords: "papers publications working papers" },
        { title: "People", url: "people.html", category: "Page", keywords: "faculty team Anton Korinek Basil Halperin Lee Lockwood" },
        { title: "Insights", url: "insights.html", category: "Page", keywords: "news events insights blog" },
        { title: "Contact Us", url: "contact-us.html", category: "Page", keywords: "contact email address collaboration" },
        { title: "Newsletter", url: "newsletter.html", category: "Page", keywords: "newsletter subscribe updates" },

        // Topics
        { title: "Labor Markets", url: "research.html", category: "Topic", keywords: "labor markets employment work automation jobs" },
        { title: "AI Safety & Governance", url: "research.html", category: "Topic", keywords: "AI safety governance policy regulation alignment" },
        { title: "Economic Inequality", url: "research.html", category: "Topic", keywords: "inequality distribution wealth income disparity" },
        { title: "Macroeconomic Implications", url: "research.html", category: "Topic", keywords: "macroeconomics growth productivity GDP economy" },
        { title: "Research Automation", url: "research.html", category: "Topic", keywords: "research automation LLM tools methods" }
    ];

    // Perform search
    function performSearch(query) {
        if (!query || query.trim().length < 2) {
            return [];
        }

        const searchTerm = query.toLowerCase().trim();
        const results = [];

        searchIndex.forEach(item => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm);
            const keywordMatch = item.keywords.toLowerCase().includes(searchTerm);

            if (titleMatch || keywordMatch) {
                results.push({
                    ...item,
                    relevance: titleMatch ? 2 : 1 // Higher relevance for title matches
                });
            }
        });

        // Sort by relevance
        results.sort((a, b) => b.relevance - a.relevance);

        return results;
    }

    // Display search results
    function displayResults(results, query) {
        // Remove existing results panel if any
        const existingPanel = document.getElementById('search-results-panel');
        if (existingPanel) {
            existingPanel.remove();
        }

        if (results.length === 0) {
            showNoResults(query);
            return;
        }

        // Create results panel
        const panel = document.createElement('div');
        panel.id = 'search-results-panel';
        panel.className = 'search-results-panel';

        let resultsHTML = `
            <div class="search-results-header">
                <h3>Search Results for "${query}"</h3>
                <button class="close-search" id="close-search">✕</button>
            </div>
            <div class="search-results-list">
        `;

        results.forEach(result => {
            resultsHTML += `
                <a href="${result.url}" class="search-result-item">
                    <span class="result-category">${result.category}</span>
                    <h4>${result.title}</h4>
                </a>
            `;
        });

        resultsHTML += '</div>';
        panel.innerHTML = resultsHTML;

        // Add to page
        document.body.appendChild(panel);

        // Add close button functionality
        document.getElementById('close-search').addEventListener('click', function() {
            panel.remove();
        });

        // Close on outside click
        document.addEventListener('click', function closeOnOutsideClick(e) {
            if (!panel.contains(e.target) && !searchInput.contains(e.target) && !searchButton.contains(e.target)) {
                panel.remove();
                document.removeEventListener('click', closeOnOutsideClick);
            }
        });
    }

    // Show no results message
    function showNoResults(query) {
        const panel = document.createElement('div');
        panel.id = 'search-results-panel';
        panel.className = 'search-results-panel';

        panel.innerHTML = `
            <div class="search-results-header">
                <h3>No Results Found</h3>
                <button class="close-search" id="close-search">✕</button>
            </div>
            <div class="search-results-list">
                <p style="padding: 1rem; color: #666; text-align: center;">
                    No results found for "${query}". Try different keywords or browse our
                    <a href="research.html" style="color: #E57200;">research</a> and
                    <a href="insights.html" style="color: #E57200;">insights</a> pages.
                </p>
            </div>
        `;

        document.body.appendChild(panel);

        document.getElementById('close-search').addEventListener('click', function() {
            panel.remove();
        });
    }

    // Search on button click
    searchButton.addEventListener('click', function() {
        const query = searchInput.value;
        const results = performSearch(query);
        displayResults(results, query);
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value;
            const results = performSearch(query);
            displayResults(results, query);
        }
    });
};

// Auto-initialize on DOMContentLoaded as fallback
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for header to load
    setTimeout(window.initializeSearch, 200);
});
