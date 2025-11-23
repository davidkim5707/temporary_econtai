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
            title: "Transformative AI, existential risk, and real interest rates",
            authors: "Trevor Chow, Basil Halperin, J. Zachary Mazlish",
            date: "2025-10-01",
            description: "The prospect of transformative AI would increase long-term real interest rates. And new empirical evidence that r and g are indeed linked. Coverage: Marginal Revolution, The Economist, Vox (Future Perfect), Open Philanthropy AI Worldviews Contest first prize, Bloomberg (Odd Lots).",
            url: "https://basilhalperin.com/papers/agi_emh.pdf",
            pdfUrl: "https://basilhalperin.com/papers/agi_emh.pdf",
            tags: ["research-excellence", "macroeconomic-implications"]
        },
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
        },
        {
            type: "RESEARCH PAPER",
            title: "Concentrating Intelligence: Scaling and Market Structure in Artificial Intelligence",
            authors: "Anton Korinek, Jai Vipra",
            date: "2025-01-01",
            description: "Examines market concentration in AI, the potential for market tipping, and the risks from vertical integration.",
            url: "https://academic.oup.com/economicpolicy/article/40/121/225/7905140?login=true",
            pdfUrl: "https://academic.oup.com/economicpolicy/article/40/121/225/7905140?login=true",
            tags: ["policy-translation", "research-excellence"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Economic Policy Challenges for the Age of AI",
            authors: "Anton Korinek",
            date: "2025-01-01",
            description: "Discusses the paradigm shift that the Age of AI will generate and examines the resulting challenges for economics and economic policy.",
            url: "https://www.dropbox.com/scl/fi/ubxmal9cw4xplul8oscto/Economic_Policy_Challenges_Age_of_AI.pdf?rlkey=oiabxrg2wixp4414vv9n1azjh&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/ubxmal9cw4xplul8oscto/Economic_Policy_Challenges_Age_of_AI.pdf?rlkey=oiabxrg2wixp4414vv9n1azjh&e=1&dl=0",
            tags: ["policy-translation", "research-excellence", "macroeconomic-implications"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Generative AI for Economic Research: LLMs Learn to Collaborate and Reason",
            authors: "Anton Korinek",
            date: "2024-12-01",
            description: "Hands-on guide for how to use generative AI in economic research, focusing on advances of the past year, especially LLM reasoning and collaborative workspaces.",
            url: "https://www.aeaweb.org/content/file?id=21904",
            pdfUrl: "https://www.aeaweb.org/content/file?id=21904",
            tags: ["research-excellence", "research-automation"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Foundational Challenges in Assuring Alignment and Safety of Large Language Models",
            authors: "Anton Korinek, Usman Anwar, et al.",
            date: "2024-09-01",
            description: "Identifies 18 foundational challenges in assuring the alignment and safety of LLMs, including significant socioeconomic challenges.",
            url: "https://llm-safety-challenges.github.io/",
            pdfUrl: "https://llm-safety-challenges.github.io/",
            tags: ["research-excellence", "ai-safety"]
        },
        {
            type: "RESEARCH PAPER",
            title: "LLMs Level Up—Better, Faster, Cheaper",
            authors: "Anton Korinek",
            date: "2024-06-01",
            description: "Provides updated use cases for large language models in economics as of June 2024.",
            url: "https://www.aeaweb.org/content/file?id=21046",
            pdfUrl: "https://www.aeaweb.org/content/file?id=21046",
            tags: ["research-excellence", "research-automation"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Introduction, Oxford Handbook of AI Governance",
            authors: "Anton Korinek, Justin Bullock, et al.",
            date: "2024-04-01",
            description: "Explores the evolution of our governance eco-system, how we can integrate AI into it, and how AI will transform it.",
            url: "https://www.dropbox.com/scl/fi/qzmlyr89o0i5p7a3fl59c/Introduction.pdf?rlkey=zmrzzv3jzc3w8ijvrnqw4etpt&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/qzmlyr89o0i5p7a3fl59c/Introduction.pdf?rlkey=zmrzzv3jzc3w8ijvrnqw4etpt&e=1&dl=0",
            tags: ["policy-translation", "ai-governance"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Aligned with Whom? Direct and Social Goals for AI Systems",
            authors: "Anton Korinek, Avital Balwit",
            date: "2024-04-01",
            description: "Distinguishes between the direct and social alignment problem and examines the role of AI governance to address social alignment.",
            url: "https://www.brookings.edu/wp-content/uploads/2022/05/Aligned-with-whom-1.pdf",
            pdfUrl: "https://www.brookings.edu/wp-content/uploads/2022/05/Aligned-with-whom-1.pdf",
            tags: ["policy-translation", "ai-governance", "ai-safety"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Preparing for the (Non-Existent?) Future of Work",
            authors: "Anton Korinek, Megan Juelfs",
            date: "2024-04-01",
            description: "If transformative AI makes human labor redundant, what are the economic and social implications, and how can we prepare for it?",
            url: "https://www.brookings.edu/wp-content/uploads/2022/08/2022.08.10_Korinek-Juelfs-Final.pdf",
            pdfUrl: "https://www.brookings.edu/wp-content/uploads/2022/08/2022.08.10_Korinek-Juelfs-Final.pdf",
            tags: ["labor-markets", "policy-translation", "macroeconomic-implications"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Generative AI for Economic Research: Use Cases and Implications for Economists",
            authors: "Anton Korinek",
            date: "2023-12-01",
            description: "Lays out dozens of use cases for large language models in economics and discusses the implications for the future of economic research.",
            url: "https://www.brookings.edu/wp-content/uploads/2024/01/JEL-2023-1736_published_version.pdf",
            pdfUrl: "https://www.brookings.edu/wp-content/uploads/2024/01/JEL-2023-1736_published_version.pdf",
            tags: ["research-excellence", "research-automation"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Scenario Planning for an A(G)I Future",
            authors: "Anton Korinek",
            date: "2023-12-01",
            description: "Makes the case that economists and policymakers need to prepare for the possibility of human-level artificial intelligence.",
            url: "https://www.imf.org/en/Publications/fandd/issues/2023/12/Scenario-Planning-for-an-AGI-future-Anton-korinek",
            pdfUrl: "https://www.imf.org/en/Publications/fandd/issues/2023/12/Scenario-Planning-for-an-AGI-future-Anton-korinek",
            tags: ["policy-translation", "macroeconomic-implications"]
        },
        {
            type: "RESEARCH PAPER",
            title: "AI's Economic Peril to Democracy",
            authors: "Anton Korinek, Stephanie A. Bell",
            date: "2023-10-01",
            description: "Analyzes how AI could erode democracy by amplifying inequality and offers solutions.",
            url: "https://www.dropbox.com/scl/fi/nkug14sy12hrdacgu8ujk/JoD_manuscript.pdf?rlkey=b5s1b4bowav11ikl9kcant79h&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/nkug14sy12hrdacgu8ujk/JoD_manuscript.pdf?rlkey=b5s1b4bowav11ikl9kcant79h&e=1&dl=0",
            tags: ["policy-translation", "inequality"]
        },
        {
            type: "RESEARCH PAPER",
            title: "AI and Shared Prosperity",
            authors: "Anton Korinek, Katya Klinova",
            date: "2021-07-01",
            description: "Develops a framework for AI developers to take into account the impact of their inventions on workers.",
            url: "https://dl.acm.org/doi/10.1145/3461702.3462619",
            pdfUrl: "https://dl.acm.org/doi/10.1145/3461702.3462619",
            tags: ["labor-markets", "policy-translation"]
        },
        {
            type: "RESEARCH PAPER",
            title: "COVID-19 Driven Advances in Automation and AI Risk Exacerbating Economic Inequality",
            authors: "Anton Korinek, Joseph Stiglitz",
            date: "2021-03-01",
            description: "As the COVID-19 pandemic has accelerated automation, we need to renew efforts to steer advances in automation and AI to preserve a gainful role for human workers.",
            url: "https://www.bmj.com/content/372/bmj.n367",
            pdfUrl: "https://www.bmj.com/content/372/bmj.n367",
            tags: ["labor-markets", "inequality", "policy-translation"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Technological Progress, Artificial Intelligence, and Inclusive Growth",
            authors: "Anton Korinek, Joseph Stiglitz",
            date: "2021-01-01",
            description: "Lays out how to pursue inclusive growth when AI and other forms of emerging technologies threaten to reduce labor demand and increase inequality.",
            url: "https://global.oup.com/academic/product/how-to-achieve-inclusive-growth-9780192846938?cc=us&lang=en&",
            pdfUrl: "https://global.oup.com/academic/product/how-to-achieve-inclusive-growth-9780192846938?cc=us&lang=en&",
            tags: ["labor-markets", "inequality", "policy-translation", "macroeconomic-implications"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Integrating Ethical Values and Economic Value to Steer Progress in Artificial Intelligence",
            authors: "Anton Korinek",
            date: "2020-07-01",
            description: "Complementing market incentives with ethical values is crucial to steer progress in AI in a direction that is beneficial for humanity at large.",
            url: "https://academic.oup.com/edited-volume/34287/chapter/290668058?login=true",
            pdfUrl: "https://academic.oup.com/edited-volume/34287/chapter/290668058?login=true",
            tags: ["policy-translation", "ai-governance"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Taxation and the Vanishing Labor Market in the Age of AI",
            authors: "Anton Korinek",
            date: "2020-04-01",
            description: "Discusses how to raise tax revenue when AI displaces labor and observes that the optimal tax rate on labor will go to zero.",
            url: "https://drive.google.com/file/d/1Zp7fW2-UYdSyLGM4V2nXEpTIeC9b82YT/view",
            pdfUrl: "https://drive.google.com/file/d/1Zp7fW2-UYdSyLGM4V2nXEpTIeC9b82YT/view",
            tags: ["policy-translation", "macroeconomic-implications"]
        },
        {
            type: "RESEARCH PAPER",
            title: "Artificial Intelligence and Its Implications for Income Distribution and Unemployment",
            authors: "Anton Korinek, Joseph Stiglitz",
            date: "2019-05-01",
            description: "Provides a systematic overview of the implications of \"worker-replacing\" technological progress for inequality.",
            url: "https://drive.google.com/file/d/1HneWSeHoiPVYAZ7846T5uSlfHf4_EAdk/view",
            pdfUrl: "https://drive.google.com/file/d/1HneWSeHoiPVYAZ7846T5uSlfHf4_EAdk/view",
            tags: ["labor-markets", "inequality", "research-excellence"]
        }
    ],

    // Working Papers on the Economics of AI
    workingPapers: [
        {
            type: "WORKING PAPER",
            title: "The Economics of Transformative AI: A Research Agenda",
            authors: "Anton Korinek, Erik Brynjolfsson, Ajay Agrawal",
            date: "2025-08-01",
            description: "Makes the case for a comprehensive research agenda on the economics of transformative AI",
            url: "https://www.dropbox.com/scl/fi/4isld55shoe639udvdnub/ResearchAgendaofTAI.pdf?rlkey=h4vozxw8w44y0lqmtfibn88lw&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/4isld55shoe639udvdnub/ResearchAgendaofTAI.pdf?rlkey=h4vozxw8w44y0lqmtfibn88lw&e=1&dl=0",
            tags: ["research-excellence", "transformative-ai"]
        },
        {
            type: "WORKING PAPER",
            title: "Scenarios for the Transition to AGI",
            authors: "Anton Korinek, Donghyun Suh",
            date: "2024-03-01",
            description: "Analyzes what the transition to artificial general intelligence would imply for output and wages",
            url: "https://www.dropbox.com/scl/fi/viob7f5yv13zy0ziezlcg/AGI_Scenarios.pdf?rlkey=8hxq9rm82kksocw1zjilcxf8v&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/viob7f5yv13zy0ziezlcg/AGI_Scenarios.pdf?rlkey=8hxq9rm82kksocw1zjilcxf8v&e=1&dl=0",
            slidesUrl: "research/scenarios-transition-agi-slides.pdf",
            tags: ["research-excellence", "agi"]
        },
        {
            type: "WORKING PAPER",
            title: "Economic Growth under Transformative AI",
            authors: "Anton Korinek, Phil Trammell",
            date: "2025-09-01",
            description: "Provides a guide to the vast range of possibilities for output growth, wages, and the labor share under scenarios in which AI is truly transformative",
            url: "https://www.dropbox.com/scl/fi/ezaqemh3lkv3y4df4cc1e/egtai_new.pdf?rlkey=zivxus878jaochwr7z2yq36yz&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/ezaqemh3lkv3y4df4cc1e/egtai_new.pdf?rlkey=zivxus878jaochwr7z2yq36yz&e=1&dl=0",
            tags: ["research-excellence", "economic-growth"]
        },
        {
            type: "WORKING PAPER",
            title: "Valuing AGI and an analysis of OpenAI's capital structure",
            authors: "Anton Korinek",
            date: "2025-04-01",
            description: "Estimates the economic value generated by AGI and applies it to an analysis of OpenAI's capital structure and conversations about its non-profit conversion",
            url: "https://www.genaiforecon.org/ValueAGI.pdf",
            pdfUrl: "https://www.genaiforecon.org/ValueAGI.pdf",
            tags: ["research-excellence", "agi", "valuation"]
        },
        {
            type: "WORKING PAPER",
            title: "How innovation affects labor markets: an impact assessment",
            authors: "Anton Korinek",
            date: "2023-02-01",
            description: "Develops a tangible 5-step framework to evaluate the labor market impact of an innovation and uses it to show that chatbots hurt unskilled workers",
            url: "https://www.dropbox.com/scl/fi/2tdu7e2k2eoc9z2o06kpy/AI-inequality-V6.pdf?rlkey=8h91mfzrtzf6uopkwjags2w41&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/2tdu7e2k2eoc9z2o06kpy/AI-inequality-V6.pdf?rlkey=8h91mfzrtzf6uopkwjags2w41&e=1&dl=0",
            tags: ["labor-markets", "innovation"]
        },
        {
            type: "WORKING PAPER",
            title: "Artificial Intelligence, Globalization, and Strategies for Economic Development",
            authors: "Anton Korinek, Joseph Stiglitz",
            date: "2021-01-01",
            description: "Labor-saving advances in AI may undo the gains from globalization and pose new challenges for economic development",
            url: "https://drive.google.com/file/d/1FSpOhTkIoNXaFpctkHdWNAPtiZUgP56w/view",
            pdfUrl: "https://drive.google.com/file/d/1FSpOhTkIoNXaFpctkHdWNAPtiZUgP56w/view",
            tags: ["globalization", "economic-development"]
        },
        {
            type: "WORKING PAPER",
            title: "Steering Technological Progress",
            authors: "Anton Korinek, Joseph Stiglitz",
            date: "2025-04-01",
            description: "Analyzes how to steer technological progress in directions that complement labor rather than displacing it - cited by The Economist's Free Exchange",
            url: "https://www.dropbox.com/scl/fi/92nty70qh69xm1xavmzbo/SteeringProgressV9.pdf?rlkey=kgpe9qxewax9w4c1axoymt26e&e=1&dl=0",
            pdfUrl: "https://www.dropbox.com/scl/fi/92nty70qh69xm1xavmzbo/SteeringProgressV9.pdf?rlkey=kgpe9qxewax9w4c1axoymt26e&e=1&dl=0",
            slidesUrl: "research/steering-technological-progress-slides.pdf",
            tags: ["labor-markets", "technological-progress"]
        },
        {
            type: "WORKING PAPER",
            title: "The Rise of Artificially Intelligent Agents",
            authors: "Anton Korinek",
            date: "2019-04-01",
            description: "Analyzes an economic future in which humans and machines interact symmetrically and shows the possibility of machine singularity coexisting with human stagnation",
            url: "https://drive.google.com/file/d/16y5UmeTOv5YB9E5ms_ce7WiYNfMAn17J/view",
            pdfUrl: "https://drive.google.com/file/d/16y5UmeTOv5YB9E5ms_ce7WiYNfMAn17J/view",
            slidesUrl: "research/rise-ai-agents-slides.pdf",
            tags: ["ai-agents", "research-excellence"]
        },
        {
            type: "WORKING PAPER",
            title: "Artificial Intelligence, Worker-Replacing Technological Progress, and Income Distribution",
            authors: "Anton Korinek, Joseph Stiglitz",
            date: "2019-01-01",
            description: "Worker-replacing technological progress may super-charge economic growth and inequality; we discuss implications for public policy",
            url: "https://drive.google.com/file/d/1Xuq9hiZWCzmbxilosh7578FDhwO49AkJ/view",
            pdfUrl: "https://drive.google.com/file/d/1Xuq9hiZWCzmbxilosh7578FDhwO49AkJ/view",
            slidesUrl: "research/ai-worker-replacing-slides.pdf",
            tags: ["labor-markets", "inequality", "policy-translation"]
        },
        {
            type: "WORKING PAPER",
            title: "Digitization and the Macro-Economics of Superstars",
            authors: "Anton Korinek, Ding Xuan Ng",
            date: "2018-12-01",
            description: "Digital technologies intrinsically lead to higher markups and a lower labor share, favoring the creation of superstars",
            url: "https://drive.google.com/file/d/1inCe3I17YeWY177U8GA93wB6IkJPMyrc/view",
            pdfUrl: "https://drive.google.com/file/d/1inCe3I17YeWY177U8GA93wB6IkJPMyrc/view",
            tags: ["digitization", "market-structure"]
        }
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
        <div class="publication-card"
             style="background: white; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;"
             onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(0,0,0,0.12)';"
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 3px 10px rgba(0,0,0,0.08)';">
            <div style="color: #E57200; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">${formatDate(pub.date)}</div>
            <h3 style="color: #232D4B; font-size: 1.15rem; margin-bottom: 0.5rem; font-weight: 700; line-height: 1.3;">${pub.title}</h3>
            <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">by ${pub.authors}</p>
            <a href="${pub.url}" ${pub.pdfUrl ? 'target="_blank"' : ''} style="display: inline-block; background: #E57200; color: white; padding: 0.6rem 1.25rem; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: background 0.3s;">Read Paper →</a>
        </div>
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

    // Create grid container wrapper
    const gridHTML = `
        <div class="unified-grid">
            ${papers.map((paper, index) => `
                <article class="unified-card">
                    <div class="post-label">${paper.type || 'Research Paper'}</div>
                    <h3>
                        <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''}>${paper.title}</a>
                    </h3>
                    <div class="meta-info">
                        <span class="authors">${paper.authors}</span> • 
                        <span class="date">${formatDate(paper.date)}</span>
                    </div>
                    <p class="description">${paper.description}</p>
                    <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''} class="read-more">Read Paper →</a>
                </article>
            `).join('')}
        </div>
    `;

    container.innerHTML = gridHTML;
}

/**
 * Format date from YYYY-MM-DD to "Month YYYY"
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date
 */
/**
 * Render working papers into a container
 * @param {string} containerId - ID of the container element
 * @param {object} options - Rendering options
 */
function renderWorkingPapers(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Get all working papers sorted by date (most recent first)
    const papers = [...publicationsData.workingPapers].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Create grid container wrapper
    const gridHTML = `
        <div class="unified-grid">
            ${papers.map((paper, index) => `
                <article class="unified-card">
                    <div class="post-label">${paper.type || 'Working Paper'}</div>
                    <h3>
                        <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''}>${paper.title}</a>
                    </h3>
                    <div class="meta-info">
                        <span class="authors">${paper.authors}</span> • 
                        <span class="date">${formatDate(paper.date)}</span>
                    </div>
                    <p class="description">${paper.description}</p>
                    <a href="${paper.url}" ${paper.url.startsWith('http') ? 'target="_blank"' : ''} class="read-more">Read Paper →</a>
                </article>
            `).join('')}
        </div>
    `;

    container.innerHTML = gridHTML;
}

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
window.renderWorkingPapers = renderWorkingPapers;
