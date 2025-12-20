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
  updateNavigationButtons();
});

// ===================================
// INITIALIZE SLIDES
// ===================================
function initializeSlides() {
  slides = document.querySelectorAll('.slide');
  totalSlides = slides.length;

  const totalSlidesEl = document.getElementById('totalSlides');
  if (totalSlidesEl) totalSlidesEl.textContent = totalSlides;

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

  if (prevBtn) prevBtn.addEventListener('click', previousSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);

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
      if (diff > 0) nextSlide();
      else previousSlide();
    }
  }

  // Fullscreen shortcut (F)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // Print / PDF button (NEW)
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }

  // Commission Mode toggle (NEW)
  const toggleCommissionModeBtn = document.getElementById('toggleCommissionMode');
  if (toggleCommissionModeBtn) {
    toggleCommissionModeBtn.addEventListener('click', () => toggleCommissionMode(toggleCommissionModeBtn));
  }
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================
function handleKeyPress(e) {
  switch (e.key) {
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
  if (currentSlide < totalSlides - 1) goToSlide(currentSlide + 1);
}

function previousSlide() {
  if (currentSlide > 0) goToSlide(currentSlide - 1);
}

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;

  // Remove active class from current slide
  slides[currentSlide].classList.remove('active');
  slides[currentSlide].classList.add(index > currentSlide ? 'prev' : 'next');

  setTimeout(() => {
    slides[currentSlide].classList.remove('prev', 'next');
  }, 500);

  currentSlide = index;

  slides[currentSlide].classList.add('active');

  updateSlideCounter();
  updateProgressBar();
  updateNavigationButtons();

  // Scroll to top of slide content
  const slideContent = slides[currentSlide].querySelector('.slide-content');
  if (slideContent) slideContent.scrollTop = 0;

  announceSlideChange();
}

// ===================================
// UPDATE UI ELEMENTS
// ===================================
function updateSlideCounter() {
  const currentSlideElement = document.getElementById('currentSlide');
  if (currentSlideElement) currentSlideElement.textContent = currentSlide + 1;
}

function updateProgressBar() {
  const progressFill = document.getElementById('progressFill');
  if (!progressFill || totalSlides === 0) return;

  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressFill.style.width = `${progress}%`;
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
}

// ===================================
// ACCESSIBILITY: announce slide change
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
    if (announcement.parentNode) announcement.parentNode.removeChild(announcement);
  }, 800);
}

// ===================================
// FULLSCREEN SUPPORT
// ===================================
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

// ===================================
// COMMISSION MODE (NEW)
// ===================================
function toggleCommissionMode(buttonEl) {
  const isOn = document.body.classList.toggle('commission-mode');

  if (buttonEl) {
    buttonEl.setAttribute('aria-pressed', String(isOn));
    buttonEl.textContent = isOn ? 'Mode Commission : ON' : 'Mode Commission';
  }
}

// ===================================
// PRINT SUPPORT (keep your original logic, but simplified)
// ===================================
window.addEventListener('beforeprint', () => {
  // Ensure all slides are visible for printing
  slides.forEach((slide) => {
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
// Debug logs
// ===================================
console.log('%c🎓 Présentation PH → PES', 'color: #1e40af; font-size: 18px; font-weight: bold;');
console.log('%c⌨️ Raccourcis: ←/→, Espace, Home/End, F plein écran', 'color: #10b981; font-size: 13px;');
