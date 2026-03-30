import { attachLightboxEvents } from "./lightbox.js";
import { openArticleModal } from "./modal-articles.js";
import { trendsArticles, carouselSlidesData } from "../data.js";

let slideIndex = 0;

export function renderCarousel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const infoSlidesHTML = carouselSlidesData.map(slide => {
    if (slide.type === "visual") {
      return `
        <div class="carousel-slide">
          <div class="slide-content visual-summary-style">
            <h3>${slide.title}</h3>
            <figure>
              <div class="zoomable-img" data-caption="${slide.caption}" title="Clique para ampliar">
                <img src="${slide.image}" alt="Gráfico visual" />
                <div class="zoom-hint">Clique para ampliar imagem</div>
              </div>
              <figcaption>Fonte: <a href="${slide.sourceLink}" target="_blank" rel="noopener noreferrer">${slide.sourceName}</a>${slide.sourceAccess}</figcaption>
            </figure>
          </div>
        </div>`;
    } else if (slide.type === "market") {
      const bulletsHTML = slide.bullets.map(b => `<li>${b}</li>`).join("");
      return `
        <div class="carousel-slide">
          <div class="slide-content market-share-style">
            <div class="ms-text">
              <h4>${slide.title}</h4>
              <p>${slide.description}</p>
              <ul>${bulletsHTML}</ul>
              <p class="ms-source">Fonte: <a href="${slide.sourceLink}" target="_blank" rel="noopener noreferrer">${slide.sourceName}</a>${slide.sourceAccess}</p>
            </div>
            <div class="ms-image ${slide.extraImgClass}">
              <div class="zoomable-img" data-caption="${slide.caption}" title="Clique para ampliar">
                <img src="${slide.image}" alt="Gráfico Market Share" />
                <div class="zoom-hint">Clique para ampliar imagem</div>
              </div>
            </div>
          </div>
        </div>`;
    }
  }).join("");

  const trendsCardsHTML = trendsArticles.map(art => `
    <div class="trend-card ${art.id === 6 ? "highlight-trend" : ""}" data-article-id="${art.id}" title="Clique para ler o artigo completo">
      <strong>${art.title}</strong>
      <p class="trend-text">${art.desc}</p>
      <span class="read-more">Ler mais...</span>
      
      <div class="print-article-content">
        <div class="print-evidence">
          <strong>📚 Evidência Acadêmica:</strong>
          <p>${art.evidence}</p>
        </div>
        <p class="print-link"><strong>Acesso Original:</strong> <a href="${art.link}" target="_blank" rel="noopener noreferrer">${art.link}</a></p>
      </div>
    </div>
  `).join("");

  const trendsSlideHTML = `
    <div class="carousel-slide">
      <div class="slide-content trends-style">
        <h3>VISÃO DE FUTURO (2036) • A ERA DA DELEGAÇÃO</h3>
        <div class="trends-grid">
          ${trendsCardsHTML}
        </div>
      </div>
    </div>`;

  container.innerHTML = `
    <div class="carousel-container fade-in-section" id="graphics-carousel">
      <div class="carousel-track">
        ${infoSlidesHTML}
        ${trendsSlideHTML}
      </div>

      <button class="carousel-btn prev-btn">&#10094;</button>
      <button class="carousel-btn next-btn">&#10095;</button>
      
      <div class="carousel-dots">
        <span class="dot active" data-index="0"></span>
        <span class="dot" data-index="1"></span>
        <span class="dot" data-index="2"></span>
        <span class="dot" data-index="3"></span>
      </div>
    </div>
  `;

  setupCarouselEvents(container);

  container.querySelectorAll(".trend-card").forEach((card) => {
    card.addEventListener("click", () => {
      const artId = parseInt(card.getAttribute("data-article-id"));
      const article = trendsArticles.find((a) => a.id === artId);

      const modalContent = `
        <p>${article.desc}</p>
        <div style="margin-top: 1.5rem; padding: 1rem; background: #f8fafc; border-left: 4px solid #facc15; border-radius: 8px;">
          <strong style="color: #0f2b3d; display: block; margin-bottom: 0.5rem;">📚 Evidência Acadêmica:</strong>
          <p style="font-size: 1rem; color: #334155; margin-bottom: 1rem;">${article.evidence}</p>
          <a href="${article.link}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #155a7e; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.9rem;">Acesso ao Artigo Original</a>
        </div>
      `;
      openArticleModal(article.title, modalContent);
    });
  });
}

function setupCarouselEvents(container) {
  container.querySelector(".prev-btn").addEventListener("click", () => moveSlide(-1));
  container.querySelector(".next-btn").addEventListener("click", () => moveSlide(1));
  container.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => currentSlide(parseInt(e.target.dataset.index)));
  });
  attachLightboxEvents(container);
  setTimeout(() => showSlide(0), 50);
}

function moveSlide(n) { showSlide((slideIndex += n)); }
function currentSlide(n) { showSlide((slideIndex = n)); }
function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const track = document.querySelector(".carousel-track");
  if (!track || slides.length === 0) return;
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");
}