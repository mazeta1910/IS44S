import { desktopData, mobileData } from './data.js';
import { renderHeader, updateHeaderState } from './components/header.js';
import { renderTimeline } from './components/timeline.js';
import { initPopup } from './components/popup.js';
import { renderCarousel } from './components/carousel.js';
import { renderFooter } from './components/footer.js';
import { initLightbox } from './components/lightbox.js';
import { initArticleModal } from './components/modal-articles.js';

// Configuração do Observer para as animações de entrada (Fade-in)
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

// Função para alternar entre as timelines Desktop e Mobile
function handleSwitchTimeline(type) {
  const timelineRoot = document.getElementById('timeline-root');
  if (!timelineRoot) return;

  updateHeaderState(type);

  if (type === 'mobile') {
    renderTimeline('timeline-root', mobileData, scrollObserver);
  } else {
    renderTimeline('timeline-root', desktopData, scrollObserver);
  }
}

// Inicialização principal quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initPopup();
  initArticleModal(); // Inicializa o modal de artigos aqui
  
  renderHeader('header-root', handleSwitchTimeline);
  renderCarousel('carousel-root');
  renderFooter('footer-root');
  
  // Renderiza a timeline inicial (Desktop)
  handleSwitchTimeline('desktop');

  // Aguarda um pouco para os elementos estarem no DOM e aplica o observer
  setTimeout(() => {
    document.querySelectorAll(".fade-in-section").forEach((el) => {
      scrollObserver.observe(el);
    });
  }, 100);
});