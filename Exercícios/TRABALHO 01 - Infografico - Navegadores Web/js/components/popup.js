let popupElement = null;

export function initPopup() {
  if (!popupElement) {
    popupElement = document.createElement("div");
    popupElement.className = "img-popup";
    popupElement.style.display = "none";
    document.body.appendChild(popupElement);
  }
}

function showPopup(target, imgUrl, title, fact) {
  if (!popupElement) initPopup();

  popupElement.innerHTML = `
    <img src="${imgUrl}" alt="Imagem ilustrativa" onerror="this.src='https://cdn.simpleicons.org/internetarchive/cccccc'">
    <div class="popup-title">📸 ${title}</div>
    <div class="popup-desc">✨ ${fact}</div>
  `;

  popupElement.style.display = "flex";
  popupElement.style.visibility = "hidden"; 

  setTimeout(() => {
    const rect = target.getBoundingClientRect();
    const popupWidth = popupElement.offsetWidth;
    const popupHeight = popupElement.offsetHeight;
    const padding = 20;

    let viewTop = rect.top; 
    let viewLeft = rect.right + 15;

    if (viewLeft + popupWidth > window.innerWidth - padding) {
      viewLeft = rect.left - popupWidth - 15;
    }
    if (viewTop + popupHeight > window.innerHeight - padding) {
      viewTop = window.innerHeight - popupHeight - padding;
    }
    if (viewTop < padding) {
      viewTop = padding;
    }

    popupElement.style.left = `${viewLeft + window.scrollX}px`;
    popupElement.style.top = `${viewTop + window.scrollY}px`;
    popupElement.style.visibility = "visible";
    popupElement.style.opacity = "1";
  }, 0);
}

function hidePopup() {
  if (popupElement) {
    popupElement.style.display = "none";
    popupElement.style.opacity = "0";
  }
}

export function attachPopupEvents() {
  document.querySelectorAll(".card-img").forEach((imgDiv) => {
    // Remove eventos antigos para evitar duplicação ao trocar de timeline
    imgDiv.replaceWith(imgDiv.cloneNode(true)); 
  });

  document.querySelectorAll(".card-img").forEach((imgDiv) => {
    imgDiv.addEventListener("mouseenter", () => {
      const imgUrl = imgDiv.getAttribute("data-popup-img");
      const title = imgDiv.getAttribute("data-popup-title");
      const fact = imgDiv.getAttribute("data-popup-fact");
      if (imgUrl && title && fact) showPopup(imgDiv, imgUrl, title, fact);
    });
    imgDiv.addEventListener("mouseleave", hidePopup);
  });
}