/**
 * EconTAI News Data
 *
 * This file contains the data for "In the News" carousel on the front page.
 *
 * To update weekly:
 * 1. Add new news items to the beginning of the newsItems array
 * 2. Each news item should have: title, date, source, url, and excerpt
 * 3. Keep the most recent 10-15 news items for the carousel
 *
 * News Item Structure:
 * {
 *   title: "Headline or title of news coverage",
 *   date: "Month YYYY",
 *   source: "Publication or media outlet name",
 *   url: "https://...",
 *   excerpt: "Brief summary or notable quote (1-2 sentences)"
 * }
 */

const newsItems = [
    // Example news item (replace with actual news when available):
    {
        title: "EconTAI Launch: UVA Leads New Initiative on AI Economics",
        date: "March 2025",
        source: "University of Virginia News",
        url: "#",
        excerpt: "The University of Virginia announces the Economics of Transformative AI Initiative, led by Professor Anton Korinek, to address the economic implications of advanced AI systems."
    },
    {
        title: "Professor Korinek Discusses AI's Impact on Labor Markets",
        date: "March 2025",
        source: "The Economist",
        url: "#",
        excerpt: "UVA economist Anton Korinek explores how transformative AI could reshape employment and economic policy in the coming decades."
    },
    {
        title: "New Research on Public Finance in the AI Age",
        date: "September 2024",
        source: "Academic Journal",
        url: "research/Korinek-Lockwood-Public-Finance-TAI-2025-09-18.pdf",
        excerpt: "Korinek and Lockwood examine the challenges and opportunities for public finance as AI systems transform the economy."
    }
    // Add more news items here as they become available
    // Keep array sorted by date (most recent first) for best user experience
];

/**
 * Get all news items
 * @returns {Array} Array of news item objects
 */
function getNewsItems() {
    return newsItems;
}

/**
 * Get recent news items
 * @param {number} count - Number of items to return
 * @returns {Array} Array of most recent news items
 */
function getRecentNews(count = 5) {
    return newsItems.slice(0, count);
}

// Make functions available globally
window.newsItems = newsItems;
window.getNewsItems = getNewsItems;
window.getRecentNews = getRecentNews;
