/**
 * EconTAI Events Renderer
 *
 * Handles rendering event cards dynamically from events-data.js
 * Used on both homepage and insights page
 */

/**
 * Render events into a container
 * @param {string} containerId - ID of container element
 * @param {number} count - Number of events to display (default: all events)
 */
function renderEvents(containerId, count = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Events container with id "${containerId}" not found`);
        return;
    }

    // Get events data
    const events = count ? window.getRecentEvents(count) : window.getEventsData();

    // Handle empty events
    if (!events || events.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No events available at this time.</p>';
        return;
    }

    // Render event cards
    const eventsHTML = events.map(event => {
        // Render media if available
        let mediaHTML = '';
        if (event.mediaType === 'youtube' && event.mediaUrl) {
            mediaHTML = `
                <div style="margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                    <iframe width="100%" height="150" src="${event.mediaUrl}"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen style="display: block;"></iframe>
                </div>
            `;
        } else if (event.mediaType === 'image' && event.mediaUrl) {
            mediaHTML = `
                <div style="margin-bottom: 1rem; border-radius: 4px; overflow: hidden;">
                    <img src="${event.mediaUrl}" alt="${event.title}" style="width: 100%; height: 150px; object-fit: cover; display: block;">
                </div>
            `;
        }

        return `
            <article class="unified-card" style="margin-bottom: 1.5rem;">
                <div class="post-label">Event</div>
                ${mediaHTML}
                <h3>${event.title}</h3>
                <div class="meta-info">
                    <span class="date">${event.date}</span>
                </div>
                <p class="description">${event.description}</p>
                ${event.url ? `<a href="${event.url}" target="_blank" class="read-more">${event.linkText || 'Learn More'} →</a>` : ''}
            </article>
        `;
    }).join('');

    container.innerHTML = eventsHTML;
}

// Make function available globally
window.renderEvents = renderEvents;
