/**
 * EconTAI Insights Page Search
 * Client-side filtering for news items and events
 */

(function() {
    'use strict';

    let searchTimeout;
    let allNewsItems = [];
    let allEvents = [];

    // Initialize search functionality when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Wait a bit for insights-news.js and insights-events.js to initialize
        setTimeout(initializeInsightsSearch, 500);
    });

    function initializeInsightsSearch() {
        const searchInput = document.getElementById('insights-search');
        const clearButton = document.getElementById('insights-clear');
        const countDisplay = document.getElementById('insights-count');

        if (!searchInput || !clearButton || !countDisplay) {
            console.error('Insights search elements not found');
            return;
        }

        // Wait for data to load
        if (!window.newsItems || !window.eventsData) {
            setTimeout(initializeInsightsSearch, 100);
            return;
        }

        // Store all items
        allNewsItems = window.newsItems;
        allEvents = window.eventsData;

        // Initial count display
        updateCount(allNewsItems.length, allEvents.length, allNewsItems.length, allEvents.length, '');

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
        const filteredData = filterNewsAndEvents(searchTerm);
        renderFilteredNews(filteredData.news, searchTerm);
        renderFilteredEvents(filteredData.events, searchTerm);
        updateCount(filteredData.news.length, filteredData.events.length, allNewsItems.length, allEvents.length, searchTerm);
    }

    function filterNewsAndEvents(searchTerm) {
        // If no search term, return all items
        if (!searchTerm || searchTerm === '') {
            return {
                news: allNewsItems,
                events: allEvents
            };
        }

        const term = searchTerm.toLowerCase();

        // Filter news items
        const filteredNews = allNewsItems.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(term);
            const sourceMatch = item.source.toLowerCase().includes(term);
            const excerptMatch = item.excerpt.toLowerCase().includes(term);
            const dateMatch = item.date.toLowerCase().includes(term);

            return titleMatch || sourceMatch || excerptMatch || dateMatch;
        });

        // Filter events
        const filteredEvents = allEvents.filter(event => {
            const titleMatch = event.title.toLowerCase().includes(term);
            const descriptionMatch = event.description.toLowerCase().includes(term);
            const dateMatch = event.date.toLowerCase().includes(term);

            return titleMatch || descriptionMatch || dateMatch;
        });

        return {
            news: filteredNews,
            events: filteredEvents
        };
    }

    function renderFilteredNews(newsItems, searchTerm) {
        const container = document.getElementById('insights-news-container');
        if (!container) return;

        if (newsItems.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem 2rem;">
                    <p style="color: #666; font-size: 1.1rem;">No news items found${searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
                </div>
            `;
            return;
        }

        // Generate HTML for filtered news items
        const newsHTML = newsItems.map(item => `
            <article style="background: white; padding: 2rem; margin-bottom: 2rem; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;"
                     onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.12)';"
                     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)';">
                ${item.image ? `
                    <div style="margin-bottom: 1.5rem;">
                        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 8px;">
                        ${item.imageCaption ? `<p style="color: #666; font-size: 0.85rem; margin-top: 0.5rem; font-style: italic;">${item.imageCaption}</p>` : ''}
                    </div>
                ` : ''}
                <div style="color: #E57200; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">${item.source} • ${item.date}</div>
                <h3 style="color: #232D4B; font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;">
                    <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} style="color: #232D4B; text-decoration: none;">${item.title}</a>
                </h3>
                <p style="color: #555; font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem;">${item.excerpt}</p>
                <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 1rem;">Read Article →</a>
            </article>
        `).join('');

        container.innerHTML = newsHTML;
    }

    function renderFilteredEvents(events, searchTerm) {
        const container = document.getElementById('insights-events-container');
        if (!container) return;

        if (events.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem 2rem;">
                    <p style="color: #666; font-size: 1.1rem;">No events found${searchTerm ? ` matching "${searchTerm}"` : ''}.</p>
                </div>
            `;
            return;
        }

        // Generate HTML for filtered events (using same format as events-renderer.js)
        const eventsHTML = events.map(event => {
            // Render media if available
            let mediaHTML = '';
            if (event.mediaType === 'youtube' && event.mediaUrl) {
                mediaHTML = `
                    <div style="margin-bottom: 1rem; border-radius: 8px; overflow: hidden;">
                        <iframe width="100%" height="315" src="${event.mediaUrl}"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen style="display: block;"></iframe>
                        ${event.mediaCaption ? `<p style="color: #666; font-size: 0.85rem; margin-top: 0.5rem; font-style: italic;">${event.mediaCaption}</p>` : ''}
                    </div>
                `;
            } else if (event.mediaType === 'image' && event.mediaUrl) {
                mediaHTML = `
                    <div style="margin-bottom: 1rem; border-radius: 8px; overflow: hidden;">
                        <img src="${event.mediaUrl}" alt="${event.title}" style="width: 100%; height: auto; display: block;">
                        ${event.mediaCaption ? `<p style="color: #666; font-size: 0.85rem; margin-top: 0.5rem; font-style: italic;">${event.mediaCaption}</p>` : ''}
                    </div>
                `;
            }

            return `
                <div class="event-card"
                     style="background: white; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;"
                     onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.12)';"
                     onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)';">
                    <div style="color: #E57200; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">${event.date}</div>
                    <h3 style="color: #232D4B; font-size: 1.25rem; margin-bottom: 1rem; font-weight: 700;">${event.title}</h3>
                    ${mediaHTML}
                    <p style="color: #666; font-size: 0.95rem; line-height: 1.6; margin-bottom: ${event.url ? '1rem' : '0'};">${event.description}</p>
                    ${event.url ? `<a href="${event.url}" target="_blank" style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 0.95rem;">${event.linkText || 'Learn More'} →</a>` : ''}
                </div>
            `;
        }).join('');

        container.innerHTML = eventsHTML;
    }

    function updateCount(newsFiltered, eventsFiltered, newsTotal, eventsTotal, searchTerm) {
        const countDisplay = document.getElementById('insights-count');
        if (!countDisplay) return;

        if (!searchTerm || searchTerm === '') {
            countDisplay.textContent = `Showing all ${newsTotal} news items and ${eventsTotal} events`;
        } else {
            const parts = [];
            if (newsFiltered > 0) {
                parts.push(`${newsFiltered} news item${newsFiltered !== 1 ? 's' : ''}`);
            }
            if (eventsFiltered > 0) {
                parts.push(`${eventsFiltered} event${eventsFiltered !== 1 ? 's' : ''}`);
            }

            if (parts.length === 0) {
                countDisplay.textContent = `No items found matching "${searchTerm}"`;
            } else {
                countDisplay.textContent = `Found ${parts.join(' and ')} matching "${searchTerm}"`;
            }
        }
    }

})();
