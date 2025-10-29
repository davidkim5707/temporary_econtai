/**
 * EconTAI Insights News Renderer
 *
 * Dynamically renders news items on the insights.html page using the same data
 * source as the homepage carousel (js/news-data.js).
 *
 * This ensures both pages stay synchronized - when you update news-data.js,
 * both the homepage carousel and insights page are automatically updated.
 */

/**
 * Render news items into the insights page with professional card layout
 * @param {string} containerId - ID of the container element to render into
 * @param {number} count - Number of news items to display (default: all)
 */
function renderInsightsNews(containerId, count = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Get news items from the global data source
    const items = window.getNewsItems ? window.getNewsItems() : [];
    const newsToRender = count ? items.slice(0, count) : items;

    if (newsToRender.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #666; font-style: italic;">
                <p>No news items available at this time. Check back soon for updates.</p>
            </div>
        `;
        return;
    }

    // Generate HTML for each news item with professional card layout
    const newsHTML = newsToRender.map((item, index) => {
        // Handle items with or without images
        const imageSection = item.image ? `
            <div style="flex-shrink: 0; width: 200px; min-width: 200px;">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 4px;">
                ${item.imageCaption ? `<p style="font-size: 0.75rem; color: #999; margin-top: 0.5rem; font-style: italic;">${item.imageCaption}</p>` : ''}
            </div>
        ` : '';

        return `
            <div style="padding: 2.5rem 0; margin-bottom: 2rem; border-bottom: 1px solid #e0e0e0;">
                <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
                    ${imageSection}
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="color: #232D4B; font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.3;">${item.title}</h3>
                        <p style="color: #333; font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
                            ${item.excerpt}
                        </p>
                        <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 1rem;">
                            Read More →
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = newsHTML;
}

/**
 * Initialize insights news rendering when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Wait for news-data.js to load
    if (window.getNewsItems) {
        renderInsightsNews('insights-news-container');
    } else {
        console.warn('news-data.js not loaded. Unable to render insights news.');
    }
});

/**
 * Render filtered news items by type (news, commentary, blog)
 * @param {string} containerId - ID of the container element to render into
 * @param {Array} types - Array of types to filter by: ["news", "commentary", "blog"]
 * @param {number} count - Number of news items to display (default: all)
 */
function renderFilteredNewsByType(containerId, types = ['news', 'commentary', 'blog'], count = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found`);
        return;
    }

    // Get news items from the global data source
    const allItems = window.getNewsItems ? window.getNewsItems() : [];

    // Filter by types
    const filteredItems = types.includes('all') || types.length === 0
        ? allItems
        : allItems.filter(item => types.includes(item.type));

    const newsToRender = count ? filteredItems.slice(0, count) : filteredItems;

    if (newsToRender.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #666; font-style: italic;">
                <p>No news items available for this filter. Check back soon for updates.</p>
            </div>
        `;
        return;
    }

    // Generate HTML for each news item with professional card layout
    const newsHTML = newsToRender.map((item, index) => {
        // Handle items with or without images
        const imageSection = item.image ? `
            <div style="flex-shrink: 0; width: 200px; min-width: 200px;">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: auto; border-radius: 4px;">
                ${item.imageCaption ? `<p style="font-size: 0.75rem; color: #999; margin-top: 0.5rem; font-style: italic;">${item.imageCaption}</p>` : ''}
            </div>
        ` : '';

        return `
            <div style="padding: 2.5rem 0; margin-bottom: 2rem; border-bottom: 1px solid #e0e0e0;">
                <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
                    ${imageSection}
                    <div style="flex: 1; min-width: 300px;">
                        <h3 style="color: #232D4B; font-size: 1.5rem; margin-bottom: 1rem; line-height: 1.3;">${item.title}</h3>
                        <p style="color: #333; font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
                            ${item.excerpt}
                        </p>
                        <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 1rem;">
                            Read More →
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = newsHTML;
}

// Make functions available globally
window.renderInsightsNews = renderInsightsNews;
window.renderFilteredNewsByType = renderFilteredNewsByType;
