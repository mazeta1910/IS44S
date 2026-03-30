let articleModalElement = null;

export function initArticleModal() {
  if (articleModalElement) return;

  articleModalElement = document.createElement("div");
  articleModalElement.className = "article-modal-overlay";
  articleModalElement.id = "article-modal-overlay";

  articleModalElement.innerHTML = `
    <div class="article-modal-content">
      <button class="article-modal-close" id="article-modal-close" title="Fechar (Esc)">&times;</button>
      <div class="article-modal-body" id="article-modal-body">
        </div>
    </div>
  `;

  document.body.appendChild(articleModalElement);

  const closeBtn = document.getElementById("article-modal-close");
  
  // Eventos para fechar
  closeBtn.addEventListener("click", closeArticleModal);
  articleModalElement.addEventListener("click", (e) => {
    if (e.target === articleModalElement) closeArticleModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeArticleModal();
  });
}

export function openArticleModal(title, contentHTML) {
  if (!articleModalElement) initArticleModal();
  
  const bodyEl = document.getElementById("article-modal-body");
  bodyEl.innerHTML = `
    <h2>${title}</h2>
    ${contentHTML}
  `;
  
  articleModalElement.classList.add("is-visible");
  document.body.style.overflow = "hidden"; // Desativa o scroll do ecrã de fundo
}

export function closeArticleModal() {
  if (articleModalElement) {
    articleModalElement.classList.remove("is-visible");
    document.body.style.overflow = ""; // Devolve o scroll ao ecrã
  }
}