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
 * @param {number} count - Number of events to display (default: all)
 */
function renderInsightsEvents(containerId, count = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Get events from the global data source
    const items = window.getEventsData ? window.getEventsData() : [];
    const eventsToRender = count ? items.slice(0, count) : items;

    if (eventsToRender.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #666; font-style: italic;">
                <p>No events available at this time. Check back soon for updates.</p>
            </div>
        `;
        return;
    }

    // Generate HTML for each event with "In the News" layout
    const eventsHTML = eventsToRender.map((event) => {
        // Media section (YouTube or Image) - matches insights-news.js format
        let mediaSection = '';
        if (event.mediaType === 'youtube' && event.mediaUrl) {
            mediaSection = `
                <div style="flex-shrink: 0; width: 200px; min-width: 200px;">
                    <iframe
                        width="200"
                        height="113"
                        src="${event.mediaUrl}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        style="border-radius: 4px;">
                    </iframe>
                    ${event.mediaCaption ? `<p style="font-size: 0.75rem; color: #999; margin-top: 0.5rem; font-style: italic;">${event.mediaCaption}</p>` : ''}
                </div>
            `;
        } else if (event.mediaType === 'image' && event.mediaUrl) {
            mediaSection = `
                <div style="flex-shrink: 0; width: 200px; min-width: 200px;">
                    <img src="${event.mediaUrl}" alt="${event.title}" style="width: 100%; height: auto; border-radius: 4px;">
                    ${event.mediaCaption ? `<p style="font-size: 0.75rem; color: #999; margin-top: 0.5rem; font-style: italic;">${event.mediaCaption}</p>` : ''}
                </div>
            `;
        }

        return `
            <div style="padding: 2.5rem 0; margin-bottom: 2rem; border-bottom: 1px solid #e0e0e0;">
                <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
                    ${mediaSection}
                    <div style="flex: 1; min-width: 300px;">
                        <div style="color: #E57200; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">${event.date}</div>
                        <h3 style="color: #232D4B; font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.3;">${event.title}</h3>
                        <p style="color: #333; font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
                            ${event.description}
                        </p>
                        ${event.url ? `<a href="${event.url}" target="_blank" style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 1rem;">${event.linkText || 'Learn More'} →</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = eventsHTML;
}

/**
 * Initialize insights events rendering when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Wait for events-data.js to load
    if (window.getEventsData) {
        renderInsightsEvents('insights-events-container');
    } else {
        console.warn('events-data.js not loaded. Unable to render insights events.');
    }
});

// Make function available globally
window.renderInsightsEvents = renderInsightsEvents;
