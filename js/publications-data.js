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
 * Render publication cards on the page
 * @param {string} containerId - ID of the container element
 * @param {number} count - Number of publications to display
 */
function renderPublications(containerId, count = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const publications = getRecentPublications(count);

    container.innerHTML = publications.map(pub => `
        <div style="background: #f8f9fa; padding: 2rem; border-radius: 8px; border-left: 4px solid #E57200; transition: transform 0.3s, box-shadow 0.3s;"
             onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)'"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <p style="color: #E57200; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">${pub.type}</p>
            <h4 style="color: #232D4B; margin-bottom: 0.5rem; font-size: 1.1rem; line-height: 1.4;">${pub.title}</h4>
            <p style="color: #666; margin-bottom: 0.75rem; font-size: 0.85rem; font-style: italic;">${pub.authors}</p>
            <p style="color: #666; margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.5;">${pub.description}</p>
            <a href="${pub.url}" ${pub.pdfUrl ? 'target="_blank"' : ''} style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 0.9rem;">Read More →</a>
        </div>
    `).join('');
}

// Make functions available globally
window.publicationsData = publicationsData;
window.getRecentPublications = getRecentPublications;
window.getPublicationsByType = getPublicationsByType;
window.getPublicationsByTag = getPublicationsByTag;
window.renderPublications = renderPublications;
