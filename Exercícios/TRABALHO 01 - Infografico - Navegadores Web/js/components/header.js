import { headerData } from '../data.js';

export function renderHeader(containerId, onSwitchTimeline) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Gera os spans das badges dinamicamente
  const badgesHTML = headerData.badges
    .map(badge => `<span class="badge">${badge}</span>`)
    .join('');

  container.innerHTML = `
    <header class="academic-header">
      <div class="header-content">
        <div class="university-brand">
          <img src="${headerData.university.logoUrl}" alt="${headerData.university.logoAlt}" class="utfpr-logo-inverted" />
          <p>${headerData.university.name}</p>
        </div>
        <div class="academic-details">
          <p><strong>Disciplina:</strong> ${headerData.academicDetails.discipline}</p>
          <p><strong>Professora:</strong> ${headerData.academicDetails.professor}</p>
          <p><strong>Acadêmicos:</strong> ${headerData.academicDetails.students}</p>
        </div>
      </div>
    </header>

    <div class="header">
      <h1 id="main-title">${headerData.title.desktop}</h1>
      <p>${headerData.description}</p>
      <div class="badge-era">
        ${badgesHTML}
      </div>

      <div class="timeline-controls fade-in-section">
        <button id="btn-desktop" class="control-btn active">${headerData.controls.desktopBtn}</button>
        <button id="btn-mobile" class="control-btn">${headerData.controls.mobileBtn}</button>
      </div>
    </div>
  `;

  document.getElementById('btn-desktop').addEventListener('click', () => onSwitchTimeline('desktop'));
  document.getElementById('btn-mobile').addEventListener('click', () => onSwitchTimeline('mobile'));
}

export function updateHeaderState(type) {
  const mainTitle = document.getElementById('main-title');
  const btnDesktop = document.getElementById('btn-desktop');
  const btnMobile = document.getElementById('btn-mobile');

  if (!mainTitle || !btnDesktop || !btnMobile) return;

  btnDesktop.classList.remove('active');
  btnMobile.classList.remove('active');

  // 🟢 Usa os dados do objeto em vez de strings fixas ('hardcoded')
  if (type === 'mobile') {
    mainTitle.innerText = headerData.title.mobile;
    btnMobile.classList.add('active');
  } else {
    mainTitle.innerText = headerData.title.desktop;
    btnDesktop.classList.add('active');
  }
}