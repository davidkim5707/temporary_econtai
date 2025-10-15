/**
 * EconTAI Events Data
 *
 * This file contains the data for events displayed on the homepage and insights page.
 *
 * To add new events:
 * 1. Add new event objects to the beginning of the eventsData array
 * 2. Each event should have: title, date, dateSort, description, url (optional), linkText (optional)
 * 3. For insights page: add mediaType, mediaUrl, mediaCaption for images/videos
 * 4. Events are automatically sorted by dateSort (most recent first)
 *
 * Event Structure:
 * {
 *   title: "Event name",
 *   date: "Month DD-DD, YYYY" (display format),
 *   dateSort: "YYYY-MM-DD" (for sorting),
 *   description: "Event description (1-3 sentences)",
 *   url: "https://..." (optional - external link),
 *   linkText: "Link text" (optional - defaults to "Learn More"),
 *   mediaType: "youtube" | "image" (optional - for insights page),
 *   mediaUrl: "URL or path" (optional - for insights page),
 *   mediaCaption: "Caption text" (optional - for insights page)
 * }
 */

const eventsData = [
    {
        title: "NBER Economics of Transformative AI Workshop 2025",
        date: "September 18-19, 2025",
        dateSort: "2025-09-18",
        description: "Our team took part in the NBER Economics of Transformative AI Workshop, where Lee Lockwood delivered a presentation on Public Finance in the age of AI. Faculty advisor Basil Halperin also was an active participant in the event, helping to shape conversation. The workshop was co-organized by our director, Anton Korinek.",
        url: "https://www.nber.org/conferences/economics-transformative-ai-workshop-fall-2025",
        linkText: "Read the Papers Here",
        mediaType: "youtube",
        mediaUrl: "https://www.youtube.com/embed/_pC1SxOTY3A",
        mediaCaption: null
    },
    {
        title: "Economic Scenarios for Transformative AI Workshop",
        date: "September 17, 2025",
        dateSort: "2025-09-17",
        description: "Leading economists and researchers came together to engage in scenario planning for different outcomes in an AGI world. Under Chatham House rules, the participants looked at the next 15 years with staggered rates of AI adoption (from maintaining current utilization of AI through a near full workforce replacement) to consider what policy changes would be needed now in order to promote human flourishing. This workshop was co-organized by EconTAI in partnership with Windfall Trust, the Stanford Digital Economy Lab, and the Creative Destruction Lab.",
        url: null,
        linkText: null,
        mediaType: "image",
        mediaUrl: "photos/photo_events/photo_09172025.jpg",
        mediaCaption: null
    }
    // Add more events here as they become available
    // Keep array sorted by dateSort (most recent first) for best user experience
];

/**
 * Get all events
 * @returns {Array} Array of event objects sorted by date (most recent first)
 */
function getEventsData() {
    return eventsData.sort((a, b) => new Date(b.dateSort) - new Date(a.dateSort));
}

/**
 * Get recent events
 * @param {number} count - Number of events to return
 * @returns {Array} Array of most recent events
 */
function getRecentEvents(count = 2) {
    return getEventsData().slice(0, count);
}

// Make functions available globally
window.eventsData = eventsData;
window.getEventsData = getEventsData;
window.getRecentEvents = getRecentEvents;
