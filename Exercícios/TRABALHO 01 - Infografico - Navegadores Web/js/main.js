import { desktopData, mobileData } from './data.js';
import { renderHeader, updateHeaderState } from './components/header.js';
import { renderTimeline } from './components/timeline.js';
import { initPopup } from './components/popup.js';
import { renderCarousel } from './components/carousel.js';
import { renderFooter } from './components/footer.js';
import { initLightbox } from './components/lightbox.js';
import { initArticleModal } from './components/modal-articles.js';

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function handleSwitchTimeline(type) {
  const desktopRoot = document.getElementById('timeline-desktop-root');
  const mobileRoot = document.getElementById('timeline-mobile-root');
  const carouselRoot = document.getElementById('carousel-root'); // Seleciona o carrossel
  
  updateHeaderState(type);

  if (type === 'mobile') {
    desktopRoot.classList.remove('active-timeline');
    mobileRoot.classList.add('active-timeline');
    // Esconde o carrossel na aba mobile
    if (carouselRoot) carouselRoot.classList.add('hide-on-screen'); 
  } else {
    mobileRoot.classList.remove('active-timeline');
    desktopRoot.classList.add('active-timeline');
    // Mostra o carrossel na aba desktop
    if (carouselRoot) carouselRoot.classList.remove('hide-on-screen');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initPopup();
  initArticleModal();
  
  renderHeader('header-root', handleSwitchTimeline);
  renderCarousel('carousel-root');
  renderFooter('footer-root');
  
  renderTimeline('timeline-desktop-root', desktopData, scrollObserver);
  renderTimeline('timeline-mobile-root', mobileData, scrollObserver);
  
  handleSwitchTimeline('desktop');

  setTimeout(() => {
    document.querySelectorAll(".fade-in-section").forEach((el) => {
      scrollObserver.observe(el);
    });
  }, 100);
});