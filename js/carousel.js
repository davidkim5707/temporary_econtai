/**
 * EconTAI News Carousel
 *
 * Handles the "In the News" carousel functionality with:
 * - Auto-rotation every 6 seconds
 * - Manual navigation (prev/next buttons)
 * - Dot indicators
 * - Pause on hover
 * - Touch/swipe support for mobile
 */

class NewsCarousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Carousel container with id "${containerId}" not found`);
            return;
        }

        this.currentIndex = 0;
        this.newsItems = window.getNewsItems ? window.getNewsItems() : [];
        this.autoRotateInterval = null;
        this.autoRotateDelay = 6000; // 6 seconds

        this.init();
    }

    init() {
        if (this.newsItems.length === 0) {
            this.renderPlaceholder();
            return;
        }

        this.render();
        this.attachEventListeners();
        this.startAutoRotate();
    }

    render() {
        const slidesHTML = this.newsItems.map((item, index) => `
            <div class="news-slide" style="min-width: 100%; padding: 2rem; text-align: center; display: ${index === 0 ? 'block' : 'none'};">
                <p style="color: #E57200; font-weight: 600; font-size: 0.85rem; margin-bottom: 0.5rem; text-transform: uppercase;">${item.source} • ${item.date}</p>
                <h3 style="color: #232D4B; font-size: 1.4rem; margin-bottom: 1rem; line-height: 1.4;">
                    <a href="${item.url}" style="color: #232D4B; text-decoration: none;" ${item.url.startsWith('http') ? 'target="_blank"' : ''}>${item.title}</a>
                </h3>
                <p style="color: #666; font-size: 1rem; line-height: 1.6; max-width: 700px; margin: 0 auto 1.5rem;">${item.excerpt}</p>
                <a href="${item.url}" ${item.url.startsWith('http') ? 'target="_blank"' : ''} style="color: #E57200; text-decoration: none; font-weight: 600; font-size: 0.95rem;">Read More →</a>
            </div>
        `).join('');

        const dotsHTML = this.newsItems.map((_, index) => `
            <button class="carousel-dot" data-index="${index}"
                    style="width: 12px; height: 12px; border-radius: 50%; border: 2px solid #232D4B; background: ${index === 0 ? '#232D4B' : 'transparent'}; margin: 0 0.25rem; cursor: pointer; transition: background 0.3s;"
                    aria-label="Go to slide ${index + 1}"></button>
        `).join('');

        this.container.innerHTML = `
            <div class="carousel-track" style="overflow: hidden; position: relative;">
                <div class="carousel-slides">
                    ${slidesHTML}
                </div>
            </div>
            <div class="carousel-controls" style="text-align: center; margin-top: 1.5rem;">
                <button class="carousel-prev" style="background: #232D4B; color: white; border: none; padding: 0.5rem 1.5rem; margin: 0 0.5rem; border-radius: 4px; cursor: pointer; font-size: 1.2rem; transition: background 0.3s;" aria-label="Previous slide">←</button>
                <div class="carousel-dots" style="display: inline-block; margin: 0 1rem;">
                    ${dotsHTML}
                </div>
                <button class="carousel-next" style="background: #232D4B; color: white; border: none; padding: 0.5rem 1.5rem; margin: 0 0.5rem; border-radius: 4px; cursor: pointer; font-size: 1.2rem; transition: background 0.3s;" aria-label="Next slide">→</button>
            </div>
        `;
    }

    renderPlaceholder() {
        this.container.innerHTML = `
            <div class="carousel-track" style="overflow: hidden;">
                <div class="carousel-slides">
                    <div class="news-slide" style="min-width: 100%; padding: 2rem; text-align: center;">
                        <p style="font-style: italic; color: #666;">News items coming soon. Stay tuned for updates on our research and media coverage.</p>
                    </div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        // Previous button
        const prevBtn = this.container.querySelector('.carousel-prev');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
            prevBtn.addEventListener('mouseenter', () => {
                prevBtn.style.background = '#E57200';
            });
            prevBtn.addEventListener('mouseleave', () => {
                prevBtn.style.background = '#232D4B';
            });
        }

        // Next button
        const nextBtn = this.container.querySelector('.carousel-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
            nextBtn.addEventListener('mouseenter', () => {
                nextBtn.style.background = '#E57200';
            });
            nextBtn.addEventListener('mouseleave', () => {
                nextBtn.style.background = '#232D4B';
            });
        }

        // Dot indicators
        const dots = this.container.querySelectorAll('.carousel-dot');
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                this.goToSlide(index);
            });
        });

        // Pause on hover
        const track = this.container.querySelector('.carousel-track');
        if (track) {
            track.addEventListener('mouseenter', () => this.stopAutoRotate());
            track.addEventListener('mouseleave', () => this.startAutoRotate());
        }

        // Touch/swipe support
        this.addSwipeSupport();
    }

    addSwipeSupport() {
        const track = this.container.querySelector('.carousel-track');
        if (!track) return;

        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        this.handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.next(); // Swipe left
                } else {
                    this.prev(); // Swipe right
                }
            }
        };
    }

    goToSlide(index) {
        if (index < 0 || index >= this.newsItems.length) return;

        // Hide all slides
        const slides = this.container.querySelectorAll('.news-slide');
        slides.forEach(slide => slide.style.display = 'none');

        // Show target slide
        slides[index].style.display = 'block';

        // Update dots
        const dots = this.container.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
            dot.style.background = i === index ? '#232D4B' : 'transparent';
        });

        this.currentIndex = index;
    }

    next() {
        const nextIndex = (this.currentIndex + 1) % this.newsItems.length;
        this.goToSlide(nextIndex);
    }

    prev() {
        const prevIndex = (this.currentIndex - 1 + this.newsItems.length) % this.newsItems.length;
        this.goToSlide(prevIndex);
    }

    startAutoRotate() {
        this.stopAutoRotate(); // Clear any existing interval
        if (this.newsItems.length > 1) {
            this.autoRotateInterval = setInterval(() => this.next(), this.autoRotateDelay);
        }
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }

    destroy() {
        this.stopAutoRotate();
        if (this.container) {
            this.container.innerHTML = '';
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for news-data.js to load
    if (window.getNewsItems) {
        const newsCarousel = new NewsCarousel('in-the-news');
        window.newsCarousel = newsCarousel; // Make accessible globally for debugging
    } else {
        console.warn('news-data.js not loaded. Carousel cannot initialize.');
    }
});

// Make class available globally
window.NewsCarousel = NewsCarousel;
