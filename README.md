# EconTAI Website

**Economics of Transformative AI Initiative**
University of Virginia

Official website for UVA's Economics of Transformative AI (EconTAI) initiative, featuring research, faculty profiles, publications, and insights on AI's economic implications.

---

## Project Overview

**Technology Stack**: HTML/CSS/JavaScript (Vanilla, no build tools or frameworks)
**Hosting**: Reclaim Hosting via FTP (genaiforecon.org)
**Newsletter**: Microsoft Forms with Excel integration
**Contact Form**: Web3Forms API (econtai@virginia.edu)
**Repository**: https://github.com/davidkim5707/temporary_econtai

---

## Project Structure

```
econtai/                          # Website root directory
├── README.md                     # This file - project documentation
├── .git/                         # Git repository
│
├── HTML Pages                    # Main website pages
│   ├── index.html                # Homepage with overview and previews
│   ├── about.html                # Mission, vision, values, strategic objectives
│   ├── insights.html             # News, events, and insights feed
│   ├── research.html             # Research papers grid (20 papers)
│   ├── people.html               # Faculty and team profiles
│   ├── newsletter.html           # Microsoft Forms newsletter signup
│   └── contact-us.html           # Contact information and Web3Forms contact form
│
├── includes/                     # Shared HTML components
│   ├── header.html               # Site header (navigation, search bar)
│   └── footer.html               # Site footer (copyright)
│
├── css/                          # Stylesheets
│   ├── styles.css                # Main stylesheet (navigation, layout, hero, sections)
│   └── components.css            # Component styles (cards, forms, grids)
│
├── js/                           # JavaScript files
│   ├── main.js                   # Core utilities (navigation, active page highlighting)
│   ├── include.js                # Loads shared header/footer components
│   ├── search.js                 # Site-wide keyword search functionality
│   ├── contact-form.js           # Web3Forms submission handler
│   ├── publications-data.js      # Research papers data and rendering
│   ├── news-data.js              # News articles data
│   ├── events-data.js            # Events data
│   ├── events-renderer.js        # Events display logic
│   ├── insights-events.js        # Events integration for insights page
│   ├── insights-news.js          # News integration for insights page
│   └── carousel.js               # Image carousel functionality
│
├── images/                       # Website images and graphics
├── photos/                       # Faculty and event photos
├── logo/                         # EconTAI and UVA logos
├── videos/                       # Video content
├── faculty/                      # Faculty-related content (future expansion)
├── research/                     # Research-related content (future expansion)
├── cgi-bin/                      # Server scripts directory
└── .well-known/                  # Web server configuration
    └── acme-challenge/           # SSL certificate validation
```

---

## Page Architecture

### 1. [index.html](index.html) - Homepage
**Purpose**: Initiative overview with previews of all major sections

**Content**:
- Hero section with full initiative introduction
- Mission overview with preview cards
- Strategic objectives preview (5 objectives)
- Faculty preview (3 featured profiles)
- Research preview (3 recent papers)
- Call-to-action linking to newsletter and contact pages

**Key Features**:
- Dynamic content loading from publications-data.js
- Responsive grid layouts for objectives and previews
- UVA-branded hero section with navy background

---

### 2. [about.html](about.html) - Mission & Vision
**Purpose**: Detailed mission, vision, values, and strategic objectives

**Content**:
- Vision and Mission cards
- "Why EconTAI Exists" section (Challenge, Gap, Response)
- Core values grid (4 values with icons)
- Strategic objectives detailed expansion
- Call-to-action section linking to insights and research

**Key Features**:
- Gradient backgrounds on key sections
- Icon-enhanced value propositions
- Structured content hierarchy for readability

---

### 3. [insights.html](insights.html) - News & Events
**Purpose**: Latest news, events, and community updates

**Content**:
- Combined feed of news articles and events
- Chronological display with category labels
- Date-based organization
- External links to full articles and event details

**Key Features**:
- Dynamic content from news-data.js and events-data.js
- Event status badges (Upcoming, Past)
- Card-based layout with hover effects
- Responsive grid (auto-fit columns)

**Data Sources**:
- [js/news-data.js](js/news-data.js) - News articles
- [js/events-data.js](js/events-data.js) - Events calendar

---

### 4. [research.html](research.html) - Research Papers
**Purpose**: Comprehensive research publications library

**Content**:
- 20 research papers in responsive grid layout
- Paper details: Title, Authors, Date, Description, URL
- "Recent Paper" badges on top 3 papers
- Category tags for filtering (future feature)

**Key Features**:
- Auto-fit grid layout (450px minimum column width)
- Hover effects with elevation and shadow
- Paper descriptions/abstracts displayed
- External links to paper PDFs
- Grid layout ensures consistent card heights

**Data Source**: [js/publications-data.js](js/publications-data.js)

**Research Areas**:
- Labor Market Transformation
- Macroeconomic Implications
- AI Safety & Economic Governance
- Economic Research Automation
- Financial Sector Implications
- Economics of AI Agents

---

### 5. [people.html](people.html) - Faculty & Team
**Purpose**: Faculty profiles and team member information

**Content**:
- Faculty Director: Professor Anton Korinek (detailed profile)
- Associated Faculty: Basil Halperin, Lee Lockwood (profile cards)
- Graduate Research Assistant: Dawis Kim (simple listing)

**Key Features**:
- Faculty cards with photos and expertise areas
- Research interests and contact information
- Links to personal websites and CVs
- Responsive grid layout for faculty cards
- Professional headshots in photos/ directory

---

### 6. [newsletter.html](newsletter.html) - Newsletter Signup
**Purpose**: Newsletter subscription with automatic Excel integration

**Form Integration**: **Microsoft Forms (Office 365)**
- **Form URL**: https://forms.office.com/Pages/ResponsePage.aspx?id=x4A0ewc3c0iLd-IWczplrDZcKv2pV1JAoC6D_DHQhKlURUdJUDY4MkcwMFlXSVAwODlYTjNMS0sxVi4u
- **Excel File**: Auto-syncs to UVA SharePoint Excel
- **Fields**: First Name, Last Name, Organization, Email

**Key Features**:
- Embedded Microsoft Forms iframe
- Responsive design (full width on mobile, min 350px)
- Automatic Excel data capture (no manual entry needed)
- Quarterly newsletter frequency
- Professional form styling matching website design

**Newsletter Content**:
- Quarterly research updates
- Event announcements
- Key developments in transformative AI economics
- Policy updates
- Community highlights
- Reading recommendations

---

### 7. [contact-us.html](contact-us.html) - Contact & Collaboration
**Purpose**: Contact information and general inquiry form

**Contact Information**:
- **Faculty Director**: Professor Anton Korinek
- **Email**: econtai@virginia.edu
- **Address**: Department of Economics, University of Virginia, Charlottesville, VA 22904

**Contact Form**: **Web3Forms API**
- **Access Key**: `2c92f690-8a06-402f-a672-9de77483e2bb`
- **Email Recipient**: econtai@virginia.edu
- **Fields**: Name, Email, Subject, Message
- **Handler**: [js/contact-form.js](js/contact-form.js)

**Collaboration Opportunities**:
- Researchers: Academic collaboration and joint projects
- Policymakers: Evidence-based policy guidance
- Organizations: Partnership and consulting opportunities
- Students: Research assistant and fellowship opportunities

---

## Navigation System

### Header Structure
**File**: [includes/header.html](includes/header.html)

**Top Banner**:
- University of Virginia link (left)
- Site search bar with keyword search (right)

**Main Navigation**:
```
[EconTAI Logo] | Home | About Us | Insights | Research | People | Contact ▼
```

**Contact Dropdown**:
- Newsletter
- Get In Touch

**Features**:
- Sticky navigation on scroll
- Active page highlighting (orange underline)
- Responsive mobile menu (hamburger icon)
- JavaScript-powered dropdown menus
- Search functionality across all pages

**Navigation JavaScript**: [js/main.js](js/main.js)
- Automatically adds `.active` class to current page link
- Dropdown menu toggle on click
- Mobile menu responsive behavior

---

## Search Functionality

**Implementation**: Client-side JavaScript search
**File**: [js/search.js](js/search.js)

**Search Index**:
- 20+ research papers
- All main pages (About, Insights, Research, People, Contact)
- Topic categories (Labor Markets, AI Safety, etc.)

**Features**:
- Real-time keyword matching
- Relevance-based ranking (title matches ranked higher)
- Category labels (Research, Page, Topic)
- Results panel with instant display
- Click and Enter key support
- Click outside to close results
- Minimum 2 characters to trigger search

**Search Location**: Top banner (right corner, next to "University of Virginia")

---

## Design System

### UVA Brand Colors
**Primary Colors**:
- **UVA Navy**: `#232D4B` (CSS variable: `--uva-navy`)
- **UVA Orange**: `#E57200` (CSS variable: `--uva-orange`)

**Supporting Colors**:
- Text Dark: `#333`
- Text Gray: `#666`
- Background Light: `#f8f9fa`
- Background White: `#fff`

### Typography
- **Primary Font**: Franklin Gothic
- **Fallback Font**: Arial, sans-serif
- **Line Height**: 1.6 (body text)

### Layout Patterns

**Responsive Breakpoint**: 768px
- Desktop: Multi-column grids
- Mobile: Single-column stacking

**Common Components**:
- **Cards**: White background, rounded corners (8px), box shadow
- **Hover Effects**: translateY(-5px), enhanced shadow
- **Grid Layouts**: CSS Grid with `auto-fit` and `minmax()`
- **Flexbox**: Used for navigation, headers, and horizontal layouts

### Component Styles
**File**: [css/components.css](css/components.css)

**Available Components**:
- `.mission-card` - Mission/vision cards with left orange border
- `.faculty-card` - Faculty profile cards with hover lift effect
- `.research-card` - Research paper cards with hover invert to navy
- `.objective` - Numbered objectives with CSS counter
- `.page-header` - Navy background page headers with white text
- `.paper-badge` - "Recent Paper" badge for top publications

---

## Form Integration

### Newsletter Form (Microsoft Forms)
**Service**: Microsoft Forms (Office 365)
**Data Storage**: Excel on UVA SharePoint (automatic sync)
**Cost**: Free (included with UVA Microsoft 365)

**Configuration**:
- Embedded iframe: 640px × 480px (responsive on mobile)
- Responsive CSS: Full width on mobile (min 350px)
- Excel file auto-updates with each submission
- No manual data entry required

**Microsoft Forms URL**:
https://forms.office.com/Pages/ResponsePage.aspx?id=x4A0ewc3c0iLd-IWczplrDZcKv2pV1JAoC6D_DHQhKlURUdJUDY4MkcwMFlXSVAwODlYTjNMS0sxVi4u

**Excel Storage**:
https://myuva-my.sharepoint.com/:x:/g/personal/frx9uj_virginia_edu/ET5j4OuvmNtOpmanChoJWYoBlhW793arpEkO8EMhlc9ONA

---

### Contact Form (Web3Forms)
**Service**: Web3Forms API (third-party)
**Data Storage**: Email only (sent to econtai@virginia.edu)
**Cost**: Free plan (250 submissions/month)

**Configuration**:
- Access Key: `2c92f690-8a06-402f-a672-9de77483e2bb`
- Email Recipient: econtai@virginia.edu (must remain registered)
- JavaScript Handler: [js/contact-form.js](js/contact-form.js)

**Form Features**:
- Loading state management (button text: "Sending...")
- Success message display (auto-hide after 5 seconds)
- Error handling with user alerts
- Form validation (required fields)
- No data storage (email only)

**Important**: Web3Forms does NOT store submissions - they only send emails. To save contact form data to a spreadsheet, you would need:
1. Web3Forms PRO + Zapier/Make ($8+/month)
2. Switch to Google Forms or Tally.so (free)
3. Custom backend script (technical implementation)

---

## Deployment

### FTP Configuration
**File**: `.vscode/sftp.json` (in parent directory: `EconTAI/`)

**Server Details**:
- **Host**: uvalibraries01.reclaimhosting.com
- **Protocol**: FTP over TLS (port 21, secure/passive mode)
- **Remote Path**: `/` (web root)
- **Upload**: Manual (uploadOnSave: false)

**Security Note**: `.vscode/sftp.json` contains FTP credentials - never commit to public repositories

---

### Deployment Process

**Step 1: Test Locally**
- Open HTML files in browser
- Verify CSS/JS paths are correct (relative paths)
- Test all navigation links
- Check responsive design (mobile/desktop)

**Step 2: Upload via FTP**
Use SFTP extension to upload changed files to Reclaim Hosting:
- All 7 HTML pages (index, about, insights, research, people, newsletter, contact-us)
- includes/ directory (header.html, footer.html)
- css/ directory (styles.css, components.css)
- js/ directory (all 11 JavaScript files)
- images/, photos/, logo/, videos/ directories (as needed)

**Step 3: Verify Deployment**
- Visit genaiforecon.org
- Test navigation between all pages
- Test search functionality
- Test newsletter form submission (verify Excel update)
- Test contact form submission (verify email receipt)
- Check responsive layout on mobile devices

---

### Git Version Control

**Repository Structure**:
- The `econtai/` directory is a separate git repository
- Git remote: https://github.com/davidkim5707/temporary_econtai.git
- Branch: main

**Commit Workflow**:
```bash
cd econtai/
git status
git add .
git commit -m "Descriptive commit message"
git push origin main
```

**Important**: Commit changes to git BEFORE deploying via FTP for version history

---

## Testing Checklist

### Pre-Deployment Testing

**Navigation**:
- [ ] Test navigation between all 7 pages
- [ ] Verify active page highlighting (orange underline on current page)
- [ ] Check Contact dropdown menu functionality
- [ ] Test mobile hamburger menu (responsive navigation)

**Forms**:
- [ ] Newsletter form submission (verify Excel receives data)
- [ ] Contact form submission (verify email to econtai@virginia.edu)
- [ ] Form validation (required fields)
- [ ] Success messages display correctly

**Search**:
- [ ] Search bar appears in top banner (right corner)
- [ ] Keyword search returns relevant results
- [ ] Results panel displays with proper formatting
- [ ] Click outside to close results panel

**Content**:
- [ ] All internal links work (page navigation)
- [ ] All external links work (research papers, faculty websites)
- [ ] Email links open mail client (econtai@virginia.edu)
- [ ] Images load correctly (faculty photos, logos)

**Responsive Design**:
- [ ] Desktop layout (>768px): Multi-column grids
- [ ] Mobile layout (<768px): Single-column stacking
- [ ] Microsoft Forms iframe responsive (full width on mobile)
- [ ] Navigation collapses to hamburger menu on mobile

**Brand Consistency**:
- [ ] UVA colors correct (Navy #232D4B, Orange #E57200)
- [ ] Hover states working (card elevation, color changes)
- [ ] Typography consistent (Franklin Gothic primary)
- [ ] Footer copyright year is current

**Performance**:
- [ ] Page load times acceptable
- [ ] No console errors in browser DevTools
- [ ] CSS and JS files loading correctly
- [ ] Images optimized and loading efficiently

---

## Content Management

### Adding New Research Papers
**File**: [js/publications-data.js](js/publications-data.js)

**Add to `research` array**:
```javascript
{
    type: "RESEARCH PAPER",
    title: "Paper Title Here",
    authors: "Author Names",
    date: "2025-01-15",
    description: "Abstract or description here",
    url: "https://link-to-paper.pdf",
    pdfUrl: "https://link-to-paper.pdf",
    tags: ["research-excellence", "macroeconomic-implications"]
}
```

**Paper Badge**: Top 3 papers (index < 3) automatically get "Recent Paper" badge

---

### Adding News Articles
**File**: [js/news-data.js](js/news-data.js)

**Add to `newsData` array**:
```javascript
{
    title: "News Article Title",
    date: "2025-01-15",
    description: "Brief description or excerpt",
    link: "https://external-link.com",
    linkText: "Read More"
}
```

---

### Adding Events
**File**: [js/events-data.js](js/events-data.js)

**Add to `eventsData` array**:
```javascript
{
    title: "Event Title",
    date: "2025-03-20",
    time: "2:00 PM - 4:00 PM EST",
    location: "Monroe Hall, Room 130",
    description: "Event description",
    registrationLink: "https://registration-link.com",
    status: "upcoming" // or "past"
}
```

---

### Updating Faculty Profiles
**File**: [people.html](people.html)

**Faculty Card Structure**:
```html
<div class="faculty-card">
    <img src="photos/faculty-name.jpg" alt="Faculty Name">
    <div class="faculty-info">
        <h3>Faculty Name</h3>
        <p class="title">Title/Position</p>
        <p class="research">Research interests...</p>
        <div class="faculty-links">
            <a href="website-url">Website</a>
            <a href="cv-url">CV</a>
        </div>
    </div>
</div>
```

**Photo Requirements**:
- Location: `photos/` directory
- Format: JPG or PNG
- Dimensions: Square aspect ratio (e.g., 300x300px)
- Professional headshot quality

---

## Future Expansion Opportunities

### Content Expansion
- **Faculty Profiles**: Individual faculty pages in `faculty/` directory
- **Research Projects**: Detailed project pages in `research/` directory
- **Publications**: Dedicated publications page with research outputs
- **Events**: Full events calendar with registration system
- **Blog/News**: News section for research updates and announcements

### Feature Enhancements
- **Mobile Menu**: Implement hamburger menu for mobile navigation
- **Search Filters**: Add filtering to search results by category
- **Paper Filtering**: Filter research papers by tag/category
- **Event Calendar**: Interactive calendar view for events
- **Faculty Directory**: Advanced search and filtering for faculty
- **Newsletter Archive**: Display past newsletter editions
- **Social Media**: Integration with Twitter, LinkedIn feeds

### Technical Improvements
- **Build Tools**: Implement build process for minification
- **Image Optimization**: Automated image compression pipeline
- **Service Worker**: Offline functionality with PWA
- **Analytics**: Google Analytics or privacy-focused alternative
- **Accessibility**: WCAG 2.1 AA compliance audit
- **Performance**: Lazy loading for images and content
- **SEO**: Enhanced meta tags and structured data

---

## Important Notes

### Security Considerations
- **FTP Credentials**: `.vscode/sftp.json` contains credentials - keep secure
- **Web3Forms Key**: Access key exposed in HTML (acceptable for free tier)
- **Microsoft Forms**: Public form URL (anyone can submit if they have link)
- **Email Exposure**: econtai@virginia.edu publicly visible (intended)

### Data Privacy
- **Newsletter**: Data stored in UVA Microsoft Excel (secure)
- **Contact Form**: Email only - no persistent storage
- **Search**: Client-side only - no data collection
- **Analytics**: Currently none - no user tracking

### Maintenance Requirements
- **Content Updates**: Edit JavaScript data files (publications-data.js, news-data.js, events-data.js)
- **Form Management**: Monitor Microsoft Forms Excel file and econtai@virginia.edu inbox
- **Regular Checks**: Test forms monthly to ensure functionality
- **SSL Certificate**: Reclaim Hosting manages - check annually
- **Domain Renewal**: genaiforecon.org - check expiration annually

### Technical Dependencies
- **Microsoft Forms**: Requires UVA Office 365 account access
- **Web3Forms**: Free tier (250/month) - monitor usage
- **Reclaim Hosting**: FTP access required for deployment
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **JavaScript Required**: Site requires JS enabled for full functionality

---

## Support & Contact

**Technical Issues**: Contact UVA IT or Reclaim Hosting support
**Content Updates**: Contact EconTAI team at econtai@virginia.edu
**GitHub Repository**: https://github.com/davidkim5707/temporary_econtai
**Website**: https://genaiforecon.org

---

## Changelog

### 2025-01-15 - Microsoft Forms Integration
- Replaced Web3Forms newsletter with Microsoft Forms
- Added automatic Excel integration for newsletter signups
- Updated [newsletter.html](newsletter.html) with embedded Microsoft Forms iframe
- Added responsive CSS for Microsoft Forms display
- Removed Web3Forms JavaScript dependency from newsletter page

### Previous Updates
- Added 20 research papers to research page with grid layout
- Implemented site-wide search functionality
- Added Graduate Research Assistant section to people page
- Redesigned contact page with professional layout
- Fixed contact dropdown menu functionality
- Updated navigation with search bar in top banner
- Added paper descriptions/abstracts to main page

---

## License

© 2025 University of Virginia - Economics of Transformative AI Initiative
All rights reserved.
