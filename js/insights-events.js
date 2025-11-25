/**
 * EconTAI Insights Events Renderer
 *
 * Dynamically renders events on the insights.html page matching the "In the News" format.
 * Uses the same data source as the homepage (js/events-data.js) but renders with
 * media support (YouTube embeds and images).
 *
 * This ensures both pages stay synchronized - when you update events-data.js,
 * both the homepage and insights page are automatically updated.
 */

/**
 * Render events into the insights page with "In the News" layout
 * @param {string} containerId - ID of the container element to render into
 * @param {number} limit - Number of events to display initially (default: 3, null for all)
 */
function renderInsightsEvents(containerId, limit = 3) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Get events from the global data source
    const allItems = window.getEventsData ? window.getEventsData() : [];
    const totalItems = allItems.length;
    const showAll = limit === null;
    const eventsToRender = showAll ? allItems : allItems.slice(0, limit);
    const hasMore = !showAll && totalItems > limit;

    if (eventsToRender.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #666; font-style: italic;">
                <p>No events available at this time. Check back soon for updates.</p>
            </div>
        `;
        return;
    }

    // Generate HTML for each event with unified card layout
    const eventsHTML = `
        <div class="unified-grid">
            ${eventsToRender.map((event) => {
        // Media section (YouTube or Image)
        let mediaSection = '';
        if (event.mediaType === 'youtube' && event.mediaUrl) {
            mediaSection = `
                        <div style="margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                            <iframe
                                width="100%"
                                height="150"
                                src="${event.mediaUrl}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                style="display: block;">
                            </iframe>
                        </div>
                    `;
        } else if (event.mediaType === 'image' && event.mediaUrl) {
            mediaSection = `
                        <div style="margin-bottom: 1rem;">
                            <img src="${event.mediaUrl}" alt="${event.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;">
                        </div>
                    `;
        }

        return `
                    <article class="unified-card">
                        <div class="post-label">Event</div>
                        ${mediaSection}
                        <h3>${event.title}</h3>
                        <div class="meta-info">
                            <span class="date">${event.date}</span>
                        </div>
                        <p class="description">${event.description}</p>
                        ${event.url ? `<a href="${event.url}" target="_blank" class="read-more">${event.linkText || 'Learn More'} →</a>` : ''}
                    </article>
                `;
    }).join('')}
        </div>
        ${hasMore ? `
            <div style="text-align: center; margin-top: 2rem;">
                <button onclick="renderInsightsEvents('${containerId}', null)"
                    style="display: inline-block; background: #E57200; color: white; padding: 0.75rem 2rem; border: none; border-radius: 4px; font-weight: 600; font-size: 1rem; cursor: pointer; transition: background 0.3s; text-transform: none;">
                    View more here (${totalItems - limit} more)
                </button>
            </div>
        ` : ''}
    `;

    container.innerHTML = eventsHTML;
}

/**
 * Initialize insights events rendering when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    // Wait for events-data.js to load
    if (window.getEventsData) {
        renderInsightsEvents('insights-events-container', 3);
    } else {
        console.warn('events-data.js not loaded. Unable to render insights events.');
    }
});

// Make function available globally
window.renderInsightsEvents = renderInsightsEvents;
