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
├── .claude/                      # Claude Code settings directory
├── .playwright-mcp/              # Playwright browser automation cache
│
├── HTML Pages                    # Main website pages (6 pages)
│   ├── index.html                # Homepage with hero video, news carousel, recent papers & events
│   ├── about.html                # Mission, vision, strategic objectives (with infographic)
│   ├── research.html             # Research papers grid with filter/search functionality
│   ├── people.html               # Faculty and team profiles
│   ├── newsletter.html           # Microsoft Forms newsletter signup (embedded iframe)
│   └── contact-us.html           # Contact information and Web3Forms contact form
│
├── includes/                     # Shared HTML components (loaded via include.js)
│   ├── header.html               # Two-tier header (University banner + Lab navigation with dropdown)
│   └── footer.html               # Site footer (copyright)
│
├── css/                          # Stylesheets
│   ├── styles.css                # Main stylesheet (navigation, layout, hero, sections, search)
│   └── components.css            # Component styles (cards, forms, grids, dynamic effects)
│
├── js/                           # JavaScript files (13 files)
│   ├── main.js                   # Core utilities (navigation, active page highlighting, dropdown)
│   ├── include.js                # Loads shared header/footer components
│   ├── search.js                 # Site-wide keyword search functionality
│   ├── contact-form.js           # Web3Forms submission handler for contact page
│   ├── publications-data.js      # Research papers data array and rendering functions
│   ├── research-search.js        # Research page filter and search functionality
│   ├── news-data.js              # News articles data array
│   ├── events-data.js            # Events data array with status tracking
│   ├── events-renderer.js        # Events display logic for homepage
│   ├── insights-events.js        # Events integration (currently unused - no insights page)
│   ├── insights-news.js          # News integration (currently unused - no insights page)
│   ├── insights-search.js        # Insights search (currently unused - no insights page)
│   └── carousel.js               # News carousel functionality for homepage
│
├── images/                       # Website images and graphics
│   ├── econtai-logo.png          # EconTAI logo
│   ├── Strategic Objectives.png           # Old strategic objectives infographic
│   └── Strategic Objectives Update.png    # New strategic objectives infographic (active)
│
├── photos/                       # Faculty and event photos
├── logo/                         # EconTAI and UVA logos
├── videos/                       # Video content
│   └── Rotunda Lawn.mp4          # UVA Rotunda background video (homepage hero)
│
├── faculty/                      # Faculty-related content (future expansion)
├── research/                     # Research-related content (future expansion)
├── cgi-bin/                      # Server scripts directory
└── .well-known/                  # Web server configuration
    └── acme-challenge/           # SSL certificate validation
```

---

## Page Architecture

### 1. [index.html](index.html) - Homepage
**Purpose**: Initiative overview with dynamic content and multimedia hero

**Content**:
- Hero section with UVA Rotunda Lawn background video
- "In the News" carousel with news articles
- Two-column layout: Recent Events (left, 2/3 width) + Recent Papers (right, 1/3 width)
- Call-to-action linking to newsletter subscription

**Key Features**:
- Background video (videos/Rotunda Lawn.mp4) with dark overlay for readability
- Dynamic news carousel powered by carousel.js
- Publications rendered from publications-data.js (3 recent papers)
- Events rendered from events-data.js (2 recent events)
- Responsive grid layout with vertical divider
- UVA-branded hero (Navy #232D4B with Orange #E57200 accents)

---

### 2. [about.html](about.html) - About Us / Mission & Vision
**Purpose**: Detailed mission, vision, motivation, and strategic objectives

**Content**:
- "Our Motivation" section explaining UVA's unique positioning
- Side-by-side Mission & Vision (two-column grid with vertical divider)
- Strategic Objectives infographic (images/Strategic Objectives Update.png)
- Call-to-action linking to newsletter subscription

**Key Features**:
- Dynamic Strategic Objectives image with CSS animations:
  - Fade-in on page load (fadeInUp animation, 0.8s)
  - Hover effects (scale 1.02, lift 4px, enhanced shadow)
  - Responsive styling (reduced effects on mobile)
  - CSS class: `.strategic-objectives-image` in components.css
- Two-column layout with gradient vertical divider
- Clean, accessible content structure
- Professional polish matching UVA brand

---

### 3. [research.html](research.html) - Research Papers
**Purpose**: Comprehensive research publications library with filtering

**Content**:
- Filter buttons: All, Publications, Events, News (active filter highlighted in orange)
- Research papers displayed in responsive grid layout
- Paper details: Title, Authors, Date, Description, Links (Paper/PDF/Code)
- Paper descriptions limited to 3 lines with ellipsis for consistent card heights

**Key Features**:
- **Filter functionality** powered by research-search.js
- Auto-fit grid layout (350px minimum column width)
- Hover effects with elevation and shadow
- External links to paper PDFs, GitHub repos, arXiv
- Dynamic rendering from publications-data.js
- Search functionality within filtered results

**Data Source**: [js/publications-data.js](js/publications-data.js)

**Research Areas Covered**:
- Labor Market Transformation
- Macroeconomic Implications
- AI Safety & Economic Governance
- Economic Research Automation
- Financial Sector Implications
- Economics of AI Agents

---

### 4. [people.html](people.html) - Faculty & Team
**Purpose**: Faculty profiles and team member information

**Content**:
- Faculty Director: Professor Anton Korinek (detailed profile with photo)
- Associated Faculty: Basil Halperin, Lee Lockwood (profile cards with photos)
- Graduate Research Assistant: Dawis Kim (simple text listing)

**Key Features**:
- Profile cards with professional headshots (from photos/ directory)
- Research interests and expertise areas
- Links to personal websites, CVs, and Google Scholar profiles
- LinkedIn integration with SVG icons
- Responsive grid layout (stacks on mobile)
- Professional photo borders (3px UVA Orange)

---

### 5. [newsletter.html](newsletter.html) - Newsletter Signup
**Purpose**: Newsletter subscription with automatic Excel integration

**Form Integration**: **Microsoft Forms (Office 365)**
- **Form URL**: https://forms.office.com/Pages/ResponsePage.aspx?id=x4A0ewc3c0iLd-IWczplrDZcKv2pV1JAoC6D_DHQhKlURUdJUDY4MkcwMFlXSVAwODlYTjNMS0sxVi4u
- **Excel File**: Auto-syncs to UVA SharePoint Excel
- **Fields**: First Name, Last Name, Organization, Email

**Key Features**:
- Embedded Microsoft Forms iframe (640px × 480px)
- Responsive design (full width on mobile, min 350px)
- Automatic Excel data capture (no manual entry, no JavaScript needed)
- Quarterly newsletter frequency
- Newsletter description with bullet points

**Newsletter Content** (Quarterly):
- Research updates and new publications
- Event announcements (conferences, seminars, workshops)
- Policy developments in transformative AI economics
- Community highlights
- Reading recommendations

---

### 6. [contact-us.html](contact-us.html) - Contact & Collaboration
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

### 2025-10-27 - Strategic Objectives Image Update
- **Updated Strategic Objectives infographic** in [about.html](about.html)
- Changed from `Strategic Objectives.png` to `Strategic Objectives Update.png`
- **Added dynamic CSS styling** for Strategic Objectives image:
  - Fade-in animation on page load (fadeInUp, 0.8s)
  - Hover effects: scale 1.02, lift 4px, enhanced shadow
  - Responsive mobile adjustments (reduced effects)
  - Professional polish with rounded corners and shadows
- CSS implementation in [css/components.css](css/components.css) (lines 749-789)

### 2025-01-15 - Microsoft Forms Integration
- Replaced Web3Forms newsletter with Microsoft Forms
- Added automatic Excel integration for newsletter signups
- Updated [newsletter.html](newsletter.html) with embedded Microsoft Forms iframe
- Added responsive CSS for Microsoft Forms display
- Removed Web3Forms JavaScript dependency from newsletter page

### Previous Updates
- **Removed insights.html page** (consolidated into homepage news carousel)
- Added 20+ research papers to research page with filter/search functionality
- Implemented site-wide search functionality in top banner
- Added Graduate Research Assistant section to people page
- Redesigned contact page with professional layout
- Fixed contact dropdown menu functionality
- Added paper descriptions/abstracts with 3-line ellipsis
- Implemented homepage hero with UVA Rotunda Lawn background video
- Added news carousel to homepage (carousel.js)
- Created two-column Recent Events + Recent Papers layout on homepage

---

## License

© 2025 University of Virginia - Economics of Transformative AI Initiative
All rights reserved.
