import { attachPopupEvents } from './popup.js';

export function renderTimeline(containerId, data, observer) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Efeito de fade out
  container.style.opacity = 0;
  
  setTimeout(() => {
    container.innerHTML = ""; // Limpa a tela
    
    data.forEach((item) => {
      const timelineItem = document.createElement("div");
      timelineItem.className = "timeline-item fade-in-section";

      const markerDiv = document.createElement("div");
      markerDiv.className = "timeline-marker";
      const yearCircle = document.createElement("div");
      yearCircle.className = "year-circle";
      yearCircle.innerText = item.year;
      markerDiv.appendChild(yearCircle);

      const cardDiv = document.createElement("div");
      cardDiv.className = "card";

      const cardHeader = document.createElement("div");
      cardHeader.className = "card-header";

      const cardTitleDiv = document.createElement("div");
      cardTitleDiv.className = "card-title";
      const titleH3 = document.createElement("h3");
      titleH3.innerText = item.title;
      cardTitleDiv.appendChild(titleH3);

      const cardImgDiv = document.createElement("div");
      cardImgDiv.className = "card-img";
      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = item.title;
      img.onerror = () => {
        img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%232c7cb6" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/%3E%3C/svg%3E';
      };
      cardImgDiv.appendChild(img);

      cardImgDiv.setAttribute("data-popup-img", item.popupImg);
      cardImgDiv.setAttribute("data-popup-title", item.title.replace(/[🌍🖼️⚡🪟🎭📀🦊🍏🔥📦📌📊🚀🔄🆕🍃🤖🌀🧠⚙️]/g, "").trim());
      cardImgDiv.setAttribute("data-popup-fact", item.popupFact);

      cardHeader.appendChild(cardTitleDiv);
      cardHeader.appendChild(cardImgDiv);

      const cardSub = document.createElement("div");
      cardSub.className = "card-sub";
      cardSub.innerText = item.subtitle;

      const descP = document.createElement("p");
      descP.innerText = item.desc;

      cardDiv.appendChild(cardHeader);
      cardDiv.appendChild(cardSub);
      cardDiv.appendChild(descP);

      if (item.isMilestone) {
        cardDiv.classList.add("highlight-card");
        if (item.estiloInteracao && item.barreiraRompida) {
          const analysisDiv = document.createElement("div");
          analysisDiv.className = "interaction-analysis";
          analysisDiv.innerHTML = `
            <div class="analysis-item"><strong>Estilo de Interação:</strong> ${item.estiloInteracao}</div>
            <div class="analysis-item"><strong>Barreira Rompida:</strong> ${item.barreiraRompida}</div>
          `;
          cardDiv.appendChild(analysisDiv);
        }
      }

      const printExtra = document.createElement("div");
      printExtra.className = "print-extra";
      printExtra.innerHTML = `
        <div class="print-image"><img src="${item.popupImg}" alt="Imagem ilustrativa" style="max-width: 100%; max-height: 200px;"></div>
        <div class="print-fact"><strong>Curiosidade:</strong> ${item.popupFact}</div>
      `;
      cardDiv.appendChild(printExtra);

      timelineItem.appendChild(markerDiv);
      timelineItem.appendChild(cardDiv);
      container.appendChild(timelineItem);
    });

    // Reassocia os popups e dispara a animação de scroll
    attachPopupEvents();
    
    container.style.transition = "opacity 0.4s ease";
    container.style.opacity = 1;

    document.querySelectorAll(`#${containerId} .fade-in-section`).forEach((el) => {
      observer.observe(el);
    });
    
  }, 300);
}