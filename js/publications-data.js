/**
 * EconTAI Publications Data
 *
 * This file contains the data for publications displayed on the front page
 * and eventually on the Research and Insights pages.
 *
 * To add new publications, add objects to the appropriate array with the following structure:
 * {
 *   type: "RESEARCH PAPER" | "INSIGHTS" | "WORKING PAPER",
 *   title: "Publication title",
 *   authors: "Author names",
 *   date: "YYYY-MM-DD",
 *   description: "Brief description of the publication",
 *   url: "Link to publication page or external URL",
 *   pdfUrl: "research/filename.pdf" (optional),
 *   tags: ["objective1", "objective2"] (for filtering)
 * }
 */

const publicationsData = {
    // Research Papers and Working Papers
    research: [
        {
            type: "RESEARCH PAPER",
            title: "Public Finance in the Age of Transformative AI",
            authors: "Anton Korinek, Lee Lockwood",
            date: "2025-09-18",
            description: "Exploring the implications of transformative artificial intelligence for public finance, taxation, and government policy in an AI-transformed economy.",
            url: "research/Korinek-Lockwood-Public-Finance-TAI-2025-09-18.pdf",
            pdfUrl: "research/Korinek-Lockwood-Public-Finance-TAI-2025-09-18.pdf",
            tags: ["policy-translation", "research-excellence", "macroeconomic-implications"]
        },
        {
            type: "RESEARCH PAPER",
            title: "AI Agents for Economic Research",
            authors: "Anton Korinek",
            date: "2025-08-15",
            description: "An introduction to demystify AI agents and a hands-on guide on how to employ them to accelerate economic research. Update of \"Generative AI for Economic Research,\" Journal of Economic Literature.",
            url: "https://www.aeaweb.org/content/file?id=23290",
            pdfUrl: "https://www.aeaweb.org/content/file?id=23290",
            tags: ["research-excellence", "research-automation"]
        }
        // Add more research papers here as they become available
    ],

    // Insights: Blogs, Briefs, In the News, Podcasts
    insights: [
        // Example structure for insights (populate when content is available):
        // {
        //     type: "INSIGHTS",
        //     subtype: "BLOG POST" | "POLICY BRIEF" | "IN THE NEWS" | "PODCAST",
        //     title: "...",
        //     authors: "...",
        //     date: "YYYY-MM-DD",
        //     description: "...",
        //     url: "insights/...",
        //     imageUrl: "images/..." (optional),
        //     tags: ["..."]
        // }
    ]
};

/**
 * Get the most recent publications across all categories
 * @param {number} count - Number of publications to return
 * @returns {Array} Array of publication objects sorted by date (most recent first)
 */
function getRecentPublications(count = 3) {
    // Combine all publications
    const allPublications = [
        ...publicationsData.research,
        ...publicationsData.insights
    ];

    // Sort by date (most recent first)
    allPublications.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Return the requested number
    return allPublications.slice(0, count);
}

/**
 * Get publications by type
 * @param {string} type - Type of publication ("RESEARCH PAPER", "INSIGHTS", "WORKING PAPER")
 * @returns {Array} Array of publications of the specified type
 */
function getPublicationsByType(type) {
    const allPublications = [
        ...publicationsData.research,
        ...publicationsData.insights
    ];

    return allPublications.filter(pub => pub.type === type);
}

/**
 * Get publications by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Array of publications with the specified tag
 */
function getPublicationsByTag(tag) {
    const allPublications = [
        ...publicationsData.research,
        ...publicationsData.insights
    ];

    return allPublications.filter(pub => pub.tags && pub.tags.includes(tag));
}

/**
 * Render publication cards on the page (for homepage)
 * @param {string} containerId - ID of the container element
 * @param {number} count - Number of publications to display
 */
function renderPublications(containerId, count = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const publications = getRecentPublications(count);

    container.innerHTML = publications.map(pub => `
        <article class="publication-item-minimal">
            <p class="publication-date-minimal">${formatDate(pub.date)}</p>
            <h3 class="publication-title-inline">${pub.title} <span class="publication-authors-inline">by ${pub.authors}</span></h3>
            <a href="${pub.url}" ${pub.pdfUrl ? 'target="_blank"' : ''} class="publication-link-simple">Read Paper</a>
        </article>
    `).join('');
}

/**
 * Render all research papers on research page
 * @param {string} containerId - ID of the container element
 * @param {object} options - Rendering options
 */
function renderResearchPapers(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Get all research papers sorted by date (most recent first)
    const papers = [...publicationsData.research].sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = papers.map((paper, index) => `
        <article class="research-paper-item">
            ${index === 0 ? '<div class="paper-badge">Recent Paper</div>' : ''}
            <h3 class="paper-title">
                <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''}>${paper.title}</a>
            </h3>
            <div class="paper-meta">
                <span class="paper-authors">${paper.authors}</span>
                <span class="paper-date">${formatDate(paper.date)}</span>
            </div>
            <p class="paper-description">${paper.description}</p>
            <div class="paper-links">
                <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''} class="paper-link">Read Paper →</a>
            </div>
        </article>
    `).join('');
}

/**
 * Format date from YYYY-MM-DD to "Month YYYY"
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

// Make functions available globally
window.publicationsData = publicationsData;
window.getRecentPublications = getRecentPublications;
window.getPublicationsByType = getPublicationsByType;
window.getPublicationsByTag = getPublicationsByTag;
window.renderPublications = renderPublications;
window.renderResearchPapers = renderResearchPapers;
