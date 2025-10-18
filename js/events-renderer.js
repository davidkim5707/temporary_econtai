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

// Make function available globally
window.renderEvents = renderEvents;
