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

    // Generate HTML for each news item with unified card layout
    const newsHTML = `
        <div class="unified-grid">
            ${newsToRender.map((item) => `
                <article class="unified-card">
                    <div class="post-label">${item.type || 'News'}</div>
                    ${item.image ? `
                        <div style="margin-bottom: 1rem;">
                            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;">
                        </div>
                    ` : ''}
                    <h3>
                        <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''}>${item.title}</a>
                    </h3>
                    <div class="meta-info">
                        <span class="source">${item.source}</span> • 
                        <span class="date">${item.date}</span>
                    </div>
                    <p class="description">${item.excerpt}</p>
                    <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} class="read-more">Read More →</a>
                </article>
            `).join('')}
        </div>
    `;

    container.innerHTML = newsHTML;
}

/**
 * Initialize insights news rendering when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
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

    // Generate HTML for each news item with unified card layout
    const newsHTML = `
        <div class="unified-grid">
            ${newsToRender.map((item) => `
                <article class="unified-card">
                    <div class="post-label">${item.type || 'News'}</div>
                    ${item.image ? `
                        <div style="margin-bottom: 1rem;">
                            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px;">
                        </div>
                    ` : ''}
                    <h3>
                        <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''}>${item.title}</a>
                    </h3>
                    <div class="meta-info">
                        <span class="source">${item.source}</span> • 
                        <span class="date">${item.date}</span>
                    </div>
                    <p class="description">${item.excerpt}</p>
                    <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} class="read-more">Read More →</a>
                </article>
            `).join('')}
        </div>
    `;

    container.innerHTML = newsHTML;
}

// Make functions available globally
window.renderInsightsNews = renderInsightsNews;
window.renderFilteredNewsByType = renderFilteredNewsByType;
