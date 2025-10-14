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
    {
        title: "Anton Korinek: The 100 Most Influential People in AI 2025",
        date: "April 2025",
        source: "TIME",
        url: "https://time.com/collections/time100-ai-2025/7305827/anton-korinek/",
        excerpt: "EconTAI Director Anton Korinek, recently named to Time's Top 100 Most Influential People in AI, explores how AGI could transform the economy by shifting the engine of growth from labor to computation—and why policymakers must prepare now.",
        image: "photos/photo_news/Anton-Korinek_times.webp",
        imageCaption: "Photo-illustration by TIME."
    },
    {
        title: "Searching for Signals of Soonish Superintelligence",
        date: "April 2025",
        source: "American Enterprise Institute",
        url: "https://www.aei.org/articles/searching-for-signals-of-soonish-superintelligence/",
        excerpt: "In a new AEI article — featuring research from UVA's Basil Halperin — the authors hunt for early signals that \"soonish\" superintelligence might be nearer than we think, exploring what clues we could spot today and what they'd imply for our economy and society.",
        image: "photos/photo_news/Basil_news.jpg",
        imageCaption: "Photo-illustration from AEI article."
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
