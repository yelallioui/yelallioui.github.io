// ===================================
// SLIDE MANAGEMENT
// ===================================
let currentSlide = 0;
let slides = [];
let totalSlides = 0;

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeSlides();
    setupEventListeners();
    updateSlideCounter();
    updateProgressBar();
});

// ===================================
// INITIALIZE SLIDES
// ===================================
function initializeSlides() {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    
    // Set total slides in counter
    document.getElementById('totalSlides').textContent = totalSlides;
    
    // Show first slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
}

// ===================================
// EVENT LISTENERS
// ===================================
function setupEventListeners() {
    // Navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', previousSlide);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyPress);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                previousSlide();
            }
        }
    }
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================
function handleKeyPress(e) {
    switch(e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
            previousSlide();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            e.preventDefault();
            nextSlide();
            break;
        case 'Home':
            goToSlide(0);
            break;
        case 'End':
            goToSlide(totalSlides - 1);
            break;
    }
}

// ===================================
// SLIDE NAVIGATION FUNCTIONS
// ===================================
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add(index > currentSlide ? 'prev' : 'next');
    
    // Add animation cleanup
    setTimeout(() => {
        slides[currentSlide].classList.remove('prev', 'next');
    }, 500);
    
    // Update current slide
    currentSlide = index;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
    
    // Update UI
    updateSlideCounter();
    updateProgressBar();
    updateNavigationButtons();
    
    // Scroll to top of slide content
    const slideContent = slides[currentSlide].querySelector('.slide-content');
    if (slideContent) {
        slideContent.scrollTop = 0;
    }
}

// ===================================
// UPDATE UI ELEMENTS
// ===================================
function updateSlideCounter() {
    const currentSlideElement = document.getElementById('currentSlide');
    if (currentSlideElement) {
        currentSlideElement.textContent = currentSlide + 1;
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function getSlideByIndex(index) {
    return slides[index];
}

function getCurrentSlideIndex() {
    return currentSlide;
}

function getTotalSlides() {
    return totalSlides;
}

// ===================================
// ANIMATION HELPERS
// ===================================
function addSlideTransition(slide, direction) {
    slide.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
}

// ===================================
// EXPORT FUNCTIONS (if needed for debugging)
// ===================================
window.presentationAPI = {
    goToSlide,
    nextSlide,
    previousSlide,
    getCurrentSlideIndex,
    getTotalSlides
};

// ===================================
// PRINT SUPPORT
// ===================================
window.addEventListener('beforeprint', () => {
    // Show all slides for printing
    slides.forEach(slide => {
        slide.style.display = 'block';
        slide.style.position = 'relative';
        slide.style.opacity = '1';
        slide.style.visibility = 'visible';
        slide.style.pageBreakAfter = 'always';
    });
});

window.addEventListener('afterprint', () => {
    // Restore normal slide display
    slides.forEach((slide, index) => {
        slide.style.display = '';
        slide.style.position = 'absolute';
        if (index !== currentSlide) {
            slide.style.opacity = '';
            slide.style.visibility = '';
        }
    });
});

// ===================================
// FULLSCREEN SUPPORT
// ===================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Add keyboard shortcut for fullscreen (F key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
    }
});

// ===================================
// SLIDE NOTES (for presenter mode - future enhancement)
// ===================================
function showSlideNotes(slideIndex) {
    const slide = slides[slideIndex];
    const notes = slide.dataset.notes;
    if (notes) {
        console.log(`Slide ${slideIndex + 1} Notes:`, notes);
    }
}

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
function announceSlideChange() {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Diapositive ${currentSlide + 1} sur ${totalSlides}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Update goToSlide to include announcement
const originalGoToSlide = goToSlide;
goToSlide = function(index) {
    originalGoToSlide(index);
    announceSlideChange();
};

// ===================================
// AUTO-ADVANCE (optional feature)
// ===================================
let autoAdvanceInterval = null;

function startAutoAdvance(intervalSeconds = 10) {
    stopAutoAdvance(); // Clear any existing interval
    autoAdvanceInterval = setInterval(() => {
        if (currentSlide < totalSlides - 1) {
            nextSlide();
        } else {
            stopAutoAdvance();
        }
    }, intervalSeconds * 1000);
}

function stopAutoAdvance() {
    if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
    }
}

// Stop auto-advance on user interaction
document.addEventListener('click', stopAutoAdvance);
document.addEventListener('keydown', stopAutoAdvance);

// ===================================
// SLIDE THUMBNAILS (for navigation menu - future enhancement)
// ===================================
function generateThumbnails() {
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'thumbnail-nav';
    thumbnailContainer.style.display = 'none'; // Hidden by default
    
    slides.forEach((slide, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.dataset.slideIndex = index;
        thumbnail.addEventListener('click', () => goToSlide(index));
        thumbnailContainer.appendChild(thumbnail);
    });
    
    document.body.appendChild(thumbnailContainer);
}

// ===================================
// SLIDE TIMER (for presentations with time limits)
// ===================================
let presentationStartTime = null;
let slideStartTimes = [];

function startPresentationTimer() {
    presentationStartTime = Date.now();
    slideStartTimes[currentSlide] = Date.now();
}

function getElapsedTime() {
    if (!presentationStartTime) return 0;
    return (Date.now() - presentationStartTime) / 1000; // in seconds
}

function getSlideTime(slideIndex) {
    if (!slideStartTimes[slideIndex]) return 0;
    const endTime = slideStartTimes[slideIndex + 1] || Date.now();
    return (endTime - slideStartTimes[slideIndex]) / 1000; // in seconds
}

// Track slide times
const originalGoToSlideWithTimer = goToSlide;
goToSlide = function(index) {
    if (!presentationStartTime) {
        startPresentationTimer();
    }
    slideStartTimes[index] = Date.now();
    originalGoToSlideWithTimer(index);
};

// ===================================
// CONSOLE LOGGING (for debugging)
// ===================================
console.log(`%c🎓 Présentation PH → PES`, 'color: #1e40af; font-size: 20px; font-weight: bold;');
console.log(`%c📊 ${totalSlides} diapositives chargées`, 'color: #10b981; font-size: 14px;');
console.log(`%c⌨️ Raccourcis clavier:`, 'color: #f59e0b; font-size: 14px;');
console.log(`   ← → : Navigation | Espace : Suivant`);
console.log(`   Home : Première slide | End : Dernière slide`);
console.log(`   F : Mode plein écran`);

// ===================================
// ERROR HANDLING
// ===================================
window.addEventListener('error', (e) => {
    console.error('Erreur dans la présentation:', e.error);
});

// ===================================
// PERFORMANCE MONITORING
// ===================================
if (performance && performance.mark) {
    performance.mark('presentation-loaded');
    
    window.addEventListener('load', () => {
        performance.mark('presentation-ready');
        performance.measure('presentation-init', 'presentation-loaded', 'presentation-ready');
        
        const measure = performance.getEntriesByName('presentation-init')[0];
        console.log(`⚡ Présentation initialisée en ${measure.duration.toFixed(2)}ms`);
    });
}