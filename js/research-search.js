/**
 * EconTAI Research Page Search
 * Client-side filtering for research publications, news, and events
 */

(function() {
    'use strict';

    let searchTimeout;
    let allPapers = [];
    let allWorkingPapers = [];
    let allNewsItems = [];
    let allEvents = [];
    let activeFilters = new Set(['all']);

    // Initialize search functionality when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit for all data to load
        setTimeout(initializeResearchSearch, 500);
    });

    function initializeResearchSearch() {
        const searchInput = document.getElementById('research-search');
        const clearButton = document.getElementById('research-clear');
        const countDisplay = document.getElementById('research-count');

        if (!searchInput || !clearButton || !countDisplay) {
            console.error('Research search elements not found');
            return;
        }

        // Wait for all data to load
        if (!window.publicationsData || !window.publicationsData.research ||
            !window.publicationsData.workingPapers ||
            !window.newsItems || !window.eventsData) {
            setTimeout(initializeResearchSearch, 100);
            return;
        }

        // Store all items
        allPapers = window.publicationsData.research;
        allWorkingPapers = window.publicationsData.workingPapers;
        allNewsItems = window.newsItems;
        allEvents = window.eventsData;

        // Initial count display
        updateCount(allPapers.length, allWorkingPapers.length, allNewsItems.length, allEvents.length,
                   allPapers.length, allWorkingPapers.length, allNewsItems.length, allEvents.length, '');

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

        // Initialize filter buttons
        initializeFilters();

        // Check for URL filter parameter and activate if present
        const urlFilter = getUrlFilterParameter();
        if (urlFilter !== 'all') {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                handleFilterClick(urlFilter);
            }, 100);
        }
    }

    function getUrlFilterParameter() {
        const urlParams = new URLSearchParams(window.location.search);
        const filter = urlParams.get('filter');

        // Valid filter values
        const validFilters = ['all', 'news', 'events', 'commentaries', 'blogs', 'publications', 'workingpapers'];

        // Return filter if valid, otherwise return 'all'
        return validFilters.includes(filter) ? filter : 'all';
    }

    function initializeFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterType = this.getAttribute('data-filter');
                handleFilterClick(filterType);
            });
        });

        // Apply initial filter state
        applyFilters();
    }

    function handleFilterClick(filterType) {
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Clear all active filters
        activeFilters.clear();

        // Add only the clicked filter (single selection mode)
        activeFilters.add(filterType);

        // Update button states - only clicked button is active
        filterButtons.forEach(btn => {
            const btnFilter = btn.getAttribute('data-filter');
            if (btnFilter === filterType) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Apply filters to sections
        applyFilters();

        // Rerun search if there's an active search term
        const searchInput = document.getElementById('research-search');
        if (searchInput && searchInput.value.trim()) {
            performSearch(searchInput.value.trim());
        } else {
            // Update count display for filtered content
            updateFilteredCount();
        }
    }

    function applyFilters() {
        const sections = document.querySelectorAll('section[data-section]');

        sections.forEach(section => {
            const sectionTypes = section.getAttribute('data-section').split(' ');
            let shouldShow = false;

            // Show if "all" is active or if any section type matches active filters
            if (activeFilters.has('all')) {
                shouldShow = true;
            } else {
                shouldShow = sectionTypes.some(type => activeFilters.has(type));
            }

            // Show/hide section
            section.style.display = shouldShow ? 'block' : 'none';
        });
    }

    function updateFilteredCount() {
        const countDisplay = document.getElementById('research-count');
        if (!countDisplay) return;

        // Get the single active filter
        const activeFilter = Array.from(activeFilters)[0];

        if (activeFilter === 'all') {
            // Show all counts
            const parts = [];
            if (allPapers.length > 0) parts.push(`${allPapers.length} publication${allPapers.length !== 1 ? 's' : ''}`);
            if (allWorkingPapers.length > 0) parts.push(`${allWorkingPapers.length} working paper${allWorkingPapers.length !== 1 ? 's' : ''}`);
            if (allNewsItems.length > 0) parts.push(`${allNewsItems.length} news item${allNewsItems.length !== 1 ? 's' : ''}`);
            if (allEvents.length > 0) parts.push(`${allEvents.length} event${allEvents.length !== 1 ? 's' : ''}`);
            countDisplay.textContent = `Showing ${parts.join(', ')}`;
        } else {
            // Show count for specific filter only
            let count = 0;
            let label = '';

            if (activeFilter === 'publications') {
                count = allPapers.length;
                label = 'publication';
            } else if (activeFilter === 'workingpapers') {
                count = allWorkingPapers.length;
                label = 'working paper';
            } else if (activeFilter === 'news' || activeFilter === 'commentaries' || activeFilter === 'blogs') {
                count = allNewsItems.length;
                label = 'news item';
            } else if (activeFilter === 'events') {
                count = allEvents.length;
                label = 'event';
            }

            countDisplay.textContent = `Showing ${count} ${label}${count !== 1 ? 's' : ''}`;
        }
    }

    function performSearch(searchTerm) {
        const filtered = filterAllContent(searchTerm);
        renderFilteredPapers(filtered.papers);
        renderFilteredWorkingPapers(filtered.workingPapers);
        renderFilteredNews(filtered.news, searchTerm);
        renderFilteredEvents(filtered.events, searchTerm);
        updateCount(filtered.papers.length, filtered.workingPapers.length, filtered.news.length, filtered.events.length,
                   allPapers.length, allWorkingPapers.length, allNewsItems.length, allEvents.length, searchTerm);
    }

    function filterAllContent(searchTerm) {
        if (!searchTerm || searchTerm === '') {
            return {
                papers: allPapers,
                workingPapers: allWorkingPapers,
                news: allNewsItems,
                events: allEvents
            };
        }

        return {
            papers: filterPapers(searchTerm),
            workingPapers: filterWorkingPapers(searchTerm),
            news: filterNews(searchTerm),
            events: filterEvents(searchTerm)
        };
    }

    function filterPapers(searchTerm) {
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

    function filterWorkingPapers(searchTerm) {
        const term = searchTerm.toLowerCase();

        return allWorkingPapers.filter(paper => {
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

    function filterNews(searchTerm) {
        const term = searchTerm.toLowerCase();

        return allNewsItems.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(term);
            const sourceMatch = item.source.toLowerCase().includes(term);
            const summaryMatch = item.summary && item.summary.toLowerCase().includes(term);

            return titleMatch || sourceMatch || summaryMatch;
        });
    }

    function filterEvents(searchTerm) {
        const term = searchTerm.toLowerCase();

        return allEvents.filter(event => {
            const titleMatch = event.title.toLowerCase().includes(term);
            const descriptionMatch = event.description && event.description.toLowerCase().includes(term);
            const locationMatch = event.location && event.location.toLowerCase().includes(term);

            return titleMatch || descriptionMatch || locationMatch;
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
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 2rem 0;">
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
                        <p class="paper-description" style="flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${paper.description}</p>
                        <div class="paper-links">
                            <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''} class="paper-link">Read Paper →</a>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;

        container.innerHTML = gridHTML;
    }

    function renderFilteredWorkingPapers(papers) {
        const container = document.getElementById('working-papers-container');
        if (!container) return;

        if (papers.length === 0) {
            // Show "no results" message
            container.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem;">
                    <h3 style="color: #232D4B; margin-bottom: 1rem;">No working papers found</h3>
                    <p style="color: #666; font-size: 1.1rem;">Try a different search term or clear the search to see all working papers.</p>
                </div>
            `;
            return;
        }

        // Generate HTML for filtered working papers using same format as renderResearchPapers
        const gridHTML = `
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 2rem 0;">
                ${papers.map((paper, index) => `
                    <article style="background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column;"
                             onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.12)';"
                             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)';">
                        <h3 class="paper-title">
                            <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''}>${paper.title}</a>
                        </h3>
                        <div class="paper-meta">
                            <span class="paper-authors">${paper.authors}</span>
                            <span class="paper-date">${formatDate(paper.date)}</span>
                        </div>
                        <p class="paper-description" style="flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${paper.description}</p>
                        <div class="paper-links">
                            <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''} class="paper-link">Read Paper →</a>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;

        container.innerHTML = gridHTML;
    }

    function renderFilteredNews(newsItems, searchTerm) {
        const container = document.getElementById('insights-news-container');
        if (!container) return;

        // Use the existing renderNewsItems function if available
        if (window.renderNewsItems) {
            window.renderNewsItems(newsItems, 'insights-news-container');
        }
    }

    function renderFilteredEvents(events, searchTerm) {
        const container = document.getElementById('insights-events-container');
        if (!container) return;

        // Use the existing renderEvents function if available
        if (window.renderEvents) {
            window.renderEvents(events, 'insights-events-container');
        }
    }

    function updateCount(filteredPapers, filteredWorkingPapers, filteredNews, filteredEvents,
                        totalPapers, totalWorkingPapers, totalNews, totalEvents, searchTerm) {
        const countDisplay = document.getElementById('research-count');
        if (!countDisplay) return;

        const totalFiltered = filteredPapers + filteredWorkingPapers + filteredNews + filteredEvents;
        const totalAll = totalPapers + totalWorkingPapers + totalNews + totalEvents;

        if (!searchTerm || searchTerm === '') {
            countDisplay.textContent = `Showing ${totalPapers} publications, ${totalWorkingPapers} working papers, ${totalNews} news items, and ${totalEvents} events`;
        } else {
            countDisplay.textContent = `Found ${totalFiltered} items matching "${searchTerm}" (${filteredPapers} publications, ${filteredWorkingPapers} working papers, ${filteredNews} news, ${filteredEvents} events)`;
        }
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }

})();
