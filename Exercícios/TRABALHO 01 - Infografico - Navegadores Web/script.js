const timelineData = [
  {
    year: "1990",
    title: "WorldWideWeb (O Ponto Zero)",
    subtitle: "Tim Berners-Lee • NeXTSTEP",
    desc: "O artefato nasce não como um produto comercial, mas como uma ferramenta acadêmica de leitura e edição. A web era puramente estrutural.",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/NeXTSTEP_logo.svg/1280px-NeXTSTEP_logo.svg.png",
    popupImg: "/imgs/1990_WorldWideWeb.jpg",
    popupFact: "Desenvolvido no CERN. O computador utilizado foi um NeXTcube. O nome 'Nexus' foi usado para evitar ambiguidade com a World Wide Web."
  },
  {
    year: "1993",
    title: "NCSA Mosaic",
    subtitle: "Marc Andreessen • Eric Bina",
    desc: "O primeiro navegador gráfico popular. Democratizou a web ao torná-la visual e acessível ao público leigo.",
    isMilestone: true,
    estiloInteracao: "Apontar e clicar (Point-and-click) em um ambiente misto de texto e imagem.",
    barreiraRompida: "Fim da interface estritamente textual e de comandos complexos. Permitiu que imagens fossem carregadas junto com o texto (inline), transformando a navegação em uma experiência de consumo visual.",
    icon: "https://images.seeklogo.com/logo-png/24/1/ncsa-mosaic-logo-png_seeklogo-247287.png",
    popupImg: "/imgs/1993_Mosaic.jpg",
    popupFact: "Sua interface com imagens e texto lado a lado foi revolucionária e inspirou a criação do Netscape."
  },
  {
    year: "1994",
    title: "Netscape Navigator",
    subtitle: "Netscape Communications",
    desc: "Lançado em 1994 pela Netscape Communications, foi o navegador dominante nos anos 1990, chegando a mais de 80% do mercado. Introduziu tecnologias fundamentais como cookies, frames e, em 1995, a linguagem JavaScript.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Netscape_icon_2007.svg/960px-Netscape_icon_2007.svg.png",
    popupImg: "/imgs/1994_Netscape.jpg",
    popupFact: "Fundado por Marc Andreessen (criador do Mosaic) e Jim Clark. Seu IPO em 1995 foi um marco da bolha da internet. O Netscape Navigator chegou a valer US$ 2,9 bilhões antes de sucumbir ao Internet Explorer da Microsoft."
  },
  {
    year: "1995",
    title: "Internet Explorer 1.0",
    subtitle: "Microsoft • Windows 95 Plus!",
    desc: "Lançado em agosto de 1995 como parte do pacote Windows 95 Plus!, foi a resposta da Microsoft à Netscape. Baseado no código licenciado do Spyglass Mosaic, iniciou a estratégia de empacotamento com o sistema operacional que levaria ao domínio do mercado nos anos seguintes.",
    icon: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Logo_Internet_Explorer_1-pt.PNG?_=20101017225809",
    popupImg: "/imgs/1995_IE1.png",
    popupFact: "O Internet Explorer 1.0 não era gratuito inicialmente – fazia parte do pacote pago Windows 95 Plus!. A guerra dos navegadores que se seguiu mudaria para sempre a indústria da web."
  },
  {
    year: "1996",
    title: "Opera",
    subtitle: "Opera Software",
    desc: "Lançado em 1996 pela Opera Software (versão 2.1), foi pioneiro em recursos como abas, gestos de rato e navegação por voz. Foco em pequeno tamanho e personalização, conquistando um nicho fiel de utilizadores.",
    icon: "https://cdn.simpleicons.org/opera/2c7cb6",
    popupImg: "/imgs/1996_Opera.jpg",
    popupFact: "O Opera surgiu como um projeto de pesquisa da Telenor. Ganhou destaque com abas, que depois se tornaram padrão em todos os navegadores."
  },
  {
    year: "2001",
    title: "Internet Explorer 6",
    subtitle: "Windows XP • 95% de mercado",
    desc: "Apogeu e símbolo de estagnação. Falta de segurança e suporte precário a padrões.",
    icon: "https://cdn.simpleicons.org/internetexplorer/2c7cb6",
    popupImg: "/imgs/2001_IE6.jpg",
    popupFact: "IE 6 foi um dos navegadores mais odiados por desenvolvedores, mas durou mais de 10 anos no mercado corporativo."
  },
  {
    year: "2002",
    title: "Phoenix 0.1 (futuro Firefox)",
    subtitle: "Mozilla Foundation",
    desc: "Projeto leve e independente que nasceu das cinzas do Netscape.",
    icon: "https://cdn.simpleicons.org/firefox/2c7cb6",
    popupImg: "/imgs/2002_Phoenix.jpg",
    popupFact: "Phoenix foi renomeado para Firefox devido a conflitos de marca. O nome 'Firebird' também foi usado brevemente."
  },
  {
    year: "2003",
    title: "Safari",
    subtitle: "Apple • WebKit",
    desc: "Navegador nativo do Mac, baseado no KHTML. Criou o motor WebKit que dominaria os dispositivos móveis.",
    icon: "https://cdn.simpleicons.org/safari/2c7cb6",
    popupImg: "/imgs/2003_Safari.jpg",
    popupFact: "O WebKit do Safari se tornou a base do Chrome, e hoje é o motor por trás de bilhões de dispositivos."
  },
  {
    year: "2004",
    title: "Firefox 1.0",
    subtitle: "Mozilla Foundation",
    desc: "O 'matador' do monopólio do Internet Explorer. Renascimento da web aberta focada em padrões.",
    isMilestone: true,
    estiloInteracao: "Navegação paralela (Abas) e interface modular (Extensões).",
    barreiraRompida: "Rompeu o caos cognitivo das múltiplas janelas e pop-ups. A interação deixou de ser passiva; o utilizador ganhou o poder de modificar a ferramenta às suas necessidades.",
    icon: "https://cdn.simpleicons.org/firefox/2c7cb6",
    popupImg: "/imgs/2004_Firefox1.jpg",
    popupFact: "Baixado mais de 8 milhões de vezes nos primeiros 4 meses, provando que os utilizadores queriam controlo sobre a interface."
  },
  {
    year: "2008",
    title: "Google Chrome",
    subtitle: "Motor V8 • Google",
    desc: "O navegador focado em velocidade extrema e estabilidade com isolamento de processos.",
    isMilestone: true,
    estiloInteracao: "Busca integrada e interface invisível.",
    barreiraRompida: "Destruiu a poluição visual das toolbars dos anos 2000. A criação da 'Omnibox' uniu endereços e pesquisa, mudando o modelo mental: não era mais preciso saber a URL exata. O navegador 'sumiu' para focar no conteúdo.",
    icon: "https://cdn.simpleicons.org/googlechrome/2c7cb6",
    popupImg: "/imgs/2008_Chrome.png",
    popupFact: "Lançado com um manifesto em quadrinhos por Scott McCloud, explicando a revolução do motor V8."
  },
  {
    year: "2010",
    title: "Chrome Web Store",
    subtitle: "Apps e extensões",
    desc: "Ecossistema que transformou o navegador num sistema operativo para aplicações web.",
    icon: "https://cdn.simpleicons.org/googlechrome/2c7cb6",
    popupImg: "/imgs/2010_ChromeWebStore.png",
    popupFact: "A Chrome Web Store foi lançada com centenas de apps e extensões, antecipando o modelo PWA."
  },
  {
    year: "2011",
    title: "Internet Explorer 9",
    subtitle: "Aceleração de Hardware",
    desc: "Melhor suporte a HTML5 e aceleração gráfica, mas perde espaço rapidamente.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Internet_Explorer_9_icon.svg/512px-Internet_Explorer_9_icon.svg.png",
    popupImg: "/imgs/2011_IE9.png",
    popupFact: "Tentativa de modernizar a imagem da Microsoft na web, focando no desempenho puro."
  },
  {
    year: "2015",
    title: "Microsoft Edge (EdgeHTML)",
    subtitle: "Windows 10",
    desc: "Sucessor do IE, com motor moderno. Apesar de avanços, logo foi substituído pela migração ao Chromium.",
    icon: "https://cdn.simpleicons.org/microsoftedge/2c7cb6",
    popupImg: "/imgs/2015_Edge.jpg",
    popupFact: "O EdgeHTML foi um motor promissor, mas a fragmentação web levou a Microsoft a adotar Chromium."
  },
  {
    year: "2016",
    title: "Firefox Quantum",
    subtitle: "Motor Servo / Gecko",
    desc: "Reforma radical: dobra de velocidade, nova interface e forte apelo à privacidade.",
    icon: "https://cdn.simpleicons.org/firefox/2c7cb6",
    popupImg: "/imgs/2016_FirefoxQuantum.png",
    popupFact: "Quantum foi a maior atualização do Firefox em 13 anos, com partes escritas em Rust."
  },
  {
    year: "2018",
    title: "Microsoft adota Chromium",
    subtitle: "Fim do motor próprio",
    desc: "Anúncio histórico: Edge migrará para o projeto Chromium, unificando a web.",
    icon: "https://cdn.simpleicons.org/microsoftedge/2c7cb6",
    popupImg: "https://upload.wikimedia.org/wikipedia/en/e/e9/Microsoft_Edge_Chromium_logo.png",
    popupFact: "Sinalizou o domínio absoluto do ecossistema de renderização da Google."
  },
  {
    year: "2015-2020",
    title: "WebAssembly & Dominância Chromium",
    subtitle: "A Web como Sistema Operativo",
    desc: "Navegadores tornam-se plataformas de execução de alto desempenho. Edge abandona motor próprio e adota Chromium oficialmente em 2020.",
    isMilestone: true,
    estiloInteracao: "Interação de software nativo (Drag and drop complexo, renderização 3D, edição em tempo real).",
    barreiraRompida: "Quebrou a dependência do desktop. O utilizador deixou de apenas 'navegar em páginas' para 'operar softwares pesados' (como Figma) diretamente dentro de uma aba, exigindo zero instalação.",
    icon: "https://cdn.simpleicons.org/webassembly/2c7cb6",
    popupImg: "/imgs/2020_EdgeChromium.jpg",
    popupFact: "O motor Chromium tornou-se o padrão de facto da web, correndo em mais de 80% dos computadores do mundo."
  },
  {
    year: "2021",
    title: "Safari Intelligent Tracking Prevention",
    subtitle: "Apple • Privacidade + Eficiência",
    desc: "Safari reforça bloqueio de rastreamento e destaca-se por economia de bateria.",
    icon: "https://cdn.simpleicons.org/safari/2c7cb6",
    popupImg: "https://cdn.simpleicons.org/safari/2c7cb6",
    popupFact: "Safari foi pioneiro a limitar o fingerprinting e cookies de terceiros, anos antes do movimento geral."
  },
  {
    year: "2023",
    title: "IA integrada nos navegadores",
    subtitle: "Copilot (Edge) • Gemini (Chrome)",
    desc: "Microsoft Edge integra Bing Chat/Copilot. Google Chrome anuncia Gemini e resumos com IA.",
    icon: "https://cdn.simpleicons.org/microsoftbing/2c7cb6",
    popupImg: "/imgs/2023_EdgeCopilot.png",
    popupFact: "A integração de IA generativa marca a transição para verdadeiros assistentes de navegação."
  },
  {
    year: "2024",
    title: "Arc Browser",
    subtitle: "The Browser Company",
    desc: "Navegadores focados em produtividade reimaginam a interface com atalhos de comando e IA on-device.",
    isMilestone: true,
    estiloInteracao: "Linguagem natural, comandos via teclado (Spotlight) e delegação de tarefas para IA.",
    barreiraRompida: "Rompe o paradigma de 'pesquisar, abrir links e ler'. A interação passa a ser baseada em intenção: o utilizador pede um resumo e a máquina faz o gerenciamento semântico do conteúdo.",
    icon: "https://cdn.simpleicons.org/arc/2c7cb6",
    popupImg: "/imgs/2024_ArcBrowser.png",
    popupFact: "Arc reinventa a navegação abolindo a barra de abas superior tradicional e introduzindo espaços de trabalho fluidos."
  },
  {
    year: "2025→2026",
    title: "IA generativa nativa & modelos locais",
    subtitle: "On‑device AI • Privacidade",
    desc: "Chrome, Edge, Firefox e Safari integram pequenos modelos de linguagem a correr localmente.",
    icon: "https://cdn.simpleicons.org/huggingface/2c7cb6",
    popupImg: "/imgs/2025_2026_AI_Trends.jpg",
    popupFact: "Modelos locais permitem resumos e traduções sem enviar dados para a nuvem."
  }
];

const timelineContainer = document.getElementById("timeline");

function buildTimeline() {
  timelineContainer.innerHTML = "";
  timelineData.forEach((item) => {
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

    // Injeta a Análise de Interação se for um marco IHC
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

    // Bloco extra para impressão em PDF
    const printExtra = document.createElement("div");
    printExtra.className = "print-extra";
    printExtra.innerHTML = `
      <div class="print-image">
        <img src="${item.popupImg}" alt="Imagem ilustrativa" style="max-width: 100%; max-height: 200px;">
      </div>
      <div class="print-fact">
        <strong>Curiosidade:</strong> ${item.popupFact}
      </div>
    `;
    cardDiv.appendChild(printExtra);

    timelineItem.appendChild(markerDiv);
    timelineItem.appendChild(cardDiv);
    timelineContainer.appendChild(timelineItem);
  });
}

buildTimeline();

// Sistema de pop-up flutuante
let popupElement = null;

function createPopup() {
  const popup = document.createElement("div");
  popup.className = "img-popup";
  popup.style.display = "none";
  document.body.appendChild(popup);
  return popup;
}

function showPopup(target, imgUrl, title, fact) {
  if (!popupElement) popupElement = createPopup();

  popupElement.innerHTML = `
    <img src="${imgUrl}" alt="Imagem ilustrativa" onerror="this.src='https://cdn.simpleicons.org/internetarchive/cccccc'">
    <div class="popup-title">📸 ${title}</div>
    <div class="popup-desc">✨ ${fact}</div>
  `;

  const rect = target.getBoundingClientRect();
  const popupWidth = 800;
  let left = rect.right + 15;
  let top = rect.top + rect.height / 2 - 100;

  if (left + popupWidth > window.innerWidth) {
    left = rect.left - popupWidth - 15;
  }
  if (top < 10) top = 10;
  if (top + 400 > window.innerHeight) top = window.innerHeight - 410;

  popupElement.style.left = `${left}px`;
  popupElement.style.top = `${top}px`;
  popupElement.style.display = "flex";
}

function hidePopup() {
  if (popupElement) popupElement.style.display = "none";
}

document.querySelectorAll(".card-img").forEach((imgDiv) => {
  imgDiv.addEventListener("mouseenter", () => {
    const imgUrl = imgDiv.getAttribute("data-popup-img");
    const title = imgDiv.getAttribute("data-popup-title");
    const fact = imgDiv.getAttribute("data-popup-fact");
    if (imgUrl && title && fact) showPopup(imgDiv, imgUrl, title, fact);
  });
  imgDiv.addEventListener("mouseleave", hidePopup);
});

// Injetar Bloco de Conclusão antes do Footer
const trendsSection = document.querySelector(".trends");
const conclusionHTML = `
  <div class="conclusion-block fade-in-section">
    <h2>Conclusão da Evolução da IHC</h2>
    <p>A mudança que mais exigiu do utilizador ao longo destas três décadas foi a transição da web baseada em destinos (digitar URLs exatas) para a web baseada em intenção (buscas e comandos de IA). Visualmente, a interface tornou-se drasticamente mais simples — saindo de menus lotados de botões para quase nenhuma borda —, mas essa simplicidade é uma ilusão que apenas ocultou uma complexidade algorítmica gigantesca a correr em segundo plano. Com o passar do tempo, a interação ficou, de facto, mais intuitiva, deixando de exigir que o humano aprendesse a linguagem da máquina para forçar a máquina a entender as necessidades humanas.</p>
  </div>
`;
trendsSection.insertAdjacentHTML("afterend", conclusionHTML);
trendsSection.classList.add("fade-in-section");

// Lógica do Intersection Observer para Animação de Scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

setTimeout(() => {
  document.querySelectorAll('.fade-in-section').forEach(el => {
    observer.observe(el);
  });
}, 100);