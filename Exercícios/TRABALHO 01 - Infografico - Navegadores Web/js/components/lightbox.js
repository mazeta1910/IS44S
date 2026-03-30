let lightboxElement = null;

export function initLightbox() {
  if (lightboxElement) return;
  lightboxElement = document.createElement("div");
  lightboxElement.className = "lightbox-modal";
  lightboxElement.id = "lightbox-modal";
  
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

  imgEl.addEventListener("click", function(e) {
    e.stopPropagation();
    this.classList.toggle("zoomed");
  });
}

export function openLightbox(imgSrc, captionText) {
  const imgEl = document.getElementById("lightbox-img");
  imgEl.src = imgSrc;
  imgEl.classList.remove("zoomed");

  document.getElementById("lightbox-caption").innerText = captionText;
  lightboxElement.classList.add("is-visible");
  document.body.style.overflow = "hidden";
}

export function closeLightbox() {
  if (lightboxElement) {
    lightboxElement.classList.remove("is-visible");
    document.body.style.overflow = "";
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