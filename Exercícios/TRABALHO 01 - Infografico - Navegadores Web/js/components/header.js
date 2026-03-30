export function renderHeader(containerId, onSwitchTimeline) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = `
    <header class="academic-header">
      <div class="header-content">
        <div class="university-brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/UTFPR_logo.svg" alt="Logo UTFPR" class="utfpr-logo-inverted" />
          <p>Universidade Tecnológica Federal do Paraná - Campus Pato Branco</p>
        </div>
        <div class="academic-details">
          <p><strong>Disciplina:</strong> Interação Ser Humano-Computador</p>
          <p><strong>Professora:</strong> Drª. Soelaine Rodrigues Ascari</p>
          <p><strong>Acadêmicos:</strong> Matheus C. P. Santos & Tiago A. Sanguanini</p>
        </div>
      </div>
    </header>

    <div class="header">
      <h1 id="main-title">EVOLUÇÃO DOS NAVEGADORES WEB - PCs</h1>
      <p>Do WorldWideWeb de 1990 aos navegadores com IA de 2026 — passe o mouse sobre os ícones para ver imagens e curiosidades.</p>
      <div class="badge-era">
        <span class="badge">1990–1999: GÊNESE</span>
        <span class="badge">2000–2009: GUERRA & RENOVAÇÃO</span>
        <span class="badge">2010–2019: DOMÍNIO CHROME</span>
        <span class="badge">2020–2026: PRIVACIDADE + IA</span>
      </div>

      <div class="timeline-controls fade-in-section">
        <button id="btn-desktop" class="control-btn active">💻 Navegadores Desktop</button>
        <button id="btn-mobile" class="control-btn">📱 Navegadores Mobile</button>
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

  if (type === 'mobile') {
    mainTitle.innerText = "EVOLUÇÃO DOS NAVEGADORES WEB - MOBILE";
    btnMobile.classList.add('active');
  } else {
    mainTitle.innerText = "EVOLUÇÃO DOS NAVEGADORES WEB - PCs";
    btnDesktop.classList.add('active');
  }
}