let lightboxElement = null;

export function initLightbox() {
  if (lightboxElement) return;
  lightboxElement = document.createElement("div");
  lightboxElement.className = "lightbox-modal";
  lightboxElement.id = "lightbox-modal";
  
  // Note que o botão de fechar saiu de dentro da content para ficar fixo na tela
  lightboxElement.innerHTML = `
    <button class="lightbox-close" id="lightbox-close" title="Fechar (Esc)">&times;</button>
    <div class="lightbox-content">
      <img src="" alt="Imagem ampliada" id="lightbox-img" title="Clique para ampliar ao tamanho real">
      <div class="lightbox-caption" id="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightboxElement);

  const closeBtn = document.getElementById("lightbox-close");
  const imgEl = document.getElementById("lightbox-img");

  // Fechar
  closeBtn.addEventListener("click", closeLightbox);
  lightboxElement.addEventListener("click", (e) => { 
    if (e.target === lightboxElement) closeLightbox(); 
  });
  document.addEventListener("keydown", (e) => { 
    if (e.key === "Escape") closeLightbox(); 
  });

  // 🟢 A MÁGICA ACONTECE AQUI: Adicionar o Zoom Real
  imgEl.addEventListener("click", function(e) {
    e.stopPropagation(); // Evita que clique na imagem feche o modal acidentalmente
    this.classList.toggle("zoomed"); // Ativa/Desativa a classe do tamanho gigante
  });
}

export function openLightbox(imgSrc, captionText) {
  const imgEl = document.getElementById("lightbox-img");
  imgEl.src = imgSrc;
  imgEl.classList.remove("zoomed"); // Sempre abre as imagens no modo ajustado (pequeno)

  document.getElementById("lightbox-caption").innerText = captionText;
  lightboxElement.classList.add("is-visible");
  document.body.style.overflow = "hidden"; // Desliga o scroll da página de trás
}

export function closeLightbox() {
  if (lightboxElement) {
    lightboxElement.classList.remove("is-visible");
    document.body.style.overflow = ""; // Devolve o scroll à página original
  }
}

export function attachLightboxEvents(container) {
  container.querySelectorAll(".zoomable-img").forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      const img = wrapper.querySelector("img");
      openLightbox(img.getAttribute("src"), wrapper.getAttribute("data-caption"));
    });
  });
}