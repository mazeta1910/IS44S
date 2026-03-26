const timelineData = [
  {
    year: "1990",
    title: "WorldWideWeb (O Ponto Zero)",
    subtitle: "Tim Berners-Lee • NeXTSTEP",
    desc: "Criado por Tim Berners-Lee no CERN, foi o primeiro navegador e editor visual da história. Inicialmente chamado de “WorldWideWeb”, depois renomeado para “Nexus” para evitar confusão com o próprio nome da web. Rodava no sistema NeXTSTEP, da NeXT (empresa de Steve Jobs), e permitia não apenas navegar, mas também editar páginas – uma ideia revolucionária para a época. Embora não exibisse imagens inline, abriu as portas para a internet como a conhecemos hoje.",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/NeXTSTEP_logo.svg/1280px-NeXTSTEP_logo.svg.png",
    popupImg: "/imgs/popups/1990_WorldWideWeb.jpg",
    popupFact:
      "Curiosidade:<br>O navegador original chamava-se “WorldWideWeb”. Mais tarde, foi renomeado para “Nexus” para evitar confusão com o próprio nome da web. Rodava em um computador NeXTcube e, além de navegar, permitia editar páginas – uma funcionalidade que só voltaria a se popularizar décadas depois.",
  },
  {
    year: "1993",
    title: "NCSA Mosaic",
    subtitle: "Marc Andreessen • Eric Bina",
    desc: "Lançado pelo National Center for Supercomputing Applications (NCSA), foi o primeiro navegador gráfico popular a exibir imagens inline junto com o texto. Criado por Marc Andreessen e Eric Bina, democratizou a web ao tornar a navegação visual e intuitiva. Embora não fosse comercial, sua interface revolucionária inspirou diretamente o Netscape Navigator e deu início à era da internet acessível ao público em geral.",
    isMilestone: true,
    estiloInteracao:
      "Apontar e clicar (Point-and-click) em um ambiente misto de texto e imagem.",
    barreiraRompida:
      "Fim da interface estritamente textual e de comandos complexos. Permitiu que imagens fossem carregadas junto com o texto (inline), transformando a navegação em uma experiência de consumo visual.",
    icon: "https://images.seeklogo.com/logo-png/24/1/ncsa-mosaic-logo-png_seeklogo-247287.png",
    popupImg: "/imgs/popups/1993_Mosaic.jpg",
    popupFact:
      "Curiosidade:<br>O Mosaic foi o primeiro navegador a exibir imagens inline junto ao texto, tornando a web visualmente atraente. Criado por Marc Andreessen e Eric Bina no NCSA, ele não era comercial, mas inspirou diretamente o Netscape Navigator, que dominou o mercado nos anos seguintes.",
  },
  {
    year: "1994",
    title: "Netscape Navigator",
    subtitle: "Netscape Communications",
    desc: "Fundado por Marc Andreessen (criador do Mosaic) e Jim Clark, foi o navegador que dominou a web nos anos 1990, chegando a mais de 80% do mercado. Introduziu tecnologias que se tornaram padrões: cookies, frames e, em 1995, a linguagem JavaScript. Seu IPO em 1995 foi um marco da bolha da internet, mas a guerra contra o Internet Explorer da Microsoft acabou levando a Netscape à derrota comercial – seu código, porém, deu origem ao Mozilla Firefox.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Netscape_icon_2007.svg/960px-Netscape_icon_2007.svg.png",
    popupImg: "/imgs/popups/1994_Netscape.jpg",
    popupFact:
      "Curiosidade:<br>Fundado por Marc Andreessen (criador do Mosaic) e Jim Clark, o Netscape Navigator foi o primeiro navegador a introduzir cookies, frames e JavaScript. Seu IPO em 1995 foi um marco da bolha da internet, atingindo valor de mercado bilionário em minutos.",
  },
  {
    year: "1995",
    title: "Internet Explorer 1.0",
    subtitle: "Microsoft • Windows 95 Plus!",
    desc: "Lançado em agosto de 1995 como parte do pacote Windows 95 Plus!, foi a resposta da Microsoft ao Netscape Navigator. Baseado no código licenciado do Spyglass Mosaic, iniciou a estratégia de empacotar o navegador com o sistema operacional – uma tática que levaria ao domínio absoluto do Internet Explorer na virada do século. Embora ainda rudimentar, marcou o começo da guerra dos navegadores que moldaria a indústria da web.",
    icon: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Logo_Internet_Explorer_1-pt.PNG?_=20101017225809",
    popupImg: "/imgs/popups/1995_IE1.png",
    popupFact:
      "O Internet Explorer 1.0 não era gratuito inicialmente – fazia parte do pacote pago Windows 95 Plus!. A guerra dos navegadores que se seguiu mudaria para sempre a indústria da web.",
  },
  {
    year: "1996",
    title: "Opera",
    subtitle: "Opera Software",
    desc: "Nascido como um projeto de pesquisa da Telenor, na Noruega, o Opera foi lançado comercialmente em 1996 (versão 2.1) e rapidamente se destacou por recursos inovadores: foi o primeiro navegador a popularizar as abas, além de oferecer gestos de mouse, navegação por voz e um tamanho extremamente reduzido. Enquanto a guerra entre Netscape e IE dominava as manchetes, o Opera conquistou um nicho fiel de usuários que valorizavam personalização e eficiência. Suas abas, hoje onipresentes, eram uma visão futurista que só se tornaria padrão anos depois.",
    icon: "/imgs/icons/1996_Opera.png",
    popupImg: "/imgs/popups/1996_Opera.jpg",
    popupFact:
      "O Opera foi o primeiro navegador a adotar atalhos visuais (gestos de mouse):<ul><li>← (arrastar para a esquerda): voltar</li><li>→ (arrastar para a direita): avançar</li><li>↑ (para cima): recarregar</li><li>↓ (para baixo): abrir nova janela</li><li>L (formato de “L”): fechar a aba</li></ul>",
  },
  {
    year: "2001",
    title: "Internet Explorer 6",
    subtitle: "Windows XP • 95% de mercado",
    desc: "Lançado com o Windows XP em 2001, o Internet Explorer 6 atingiu o ápice do domínio da Microsoft, chegando a cerca de 95% do mercado global. Porém, esse sucesso veio acompanhado de estagnação: durante anos, poucas atualizações foram lançadas, e o navegador se tornou símbolo de falta de segurança e desrespeito aos padrões web. Seu longo reinado atrasou a evolução da web, mas também motivou a criação de alternativas como Firefox e Chrome, que romperam o monopólio e impulsionaram a inovação. Mesmo após o fim do suporte oficial em 2016, o IE 6 ainda é lembrado como um divisor de águas – tanto pelo domínio absoluto quanto pelas lições sobre os riscos da centralização no mercado de navegadores.",
    icon: "/imgs/icons/2001_IE6.png",
    popupImg: "/imgs/popups/2001_IE6.jpg",
    popupFact:
      "IE 6 foi um dos navegadores mais odiados por desenvolvedores, mas durou mais de 10 anos no mercado corporativo.",
  },
  {
    year: "2002",
    title: "Phoenix 0.1 (futuro Firefox)",
    subtitle: "Mozilla Foundation",
    desc: "Após o colapso da Netscape, a Mozilla Foundation iniciou um projeto para criar um navegador leve, independente e focado no usuário. Em setembro de 2002, surgiu o Phoenix 0.1, que logo se destacou pela interface simples, abas e bloqueador de pop‑ups – recursos revolucionários para a época. Com o nome provisório (depois alterado para Firefox por questões de marca), o Phoenix representou a esperança de quebrar o monopólio do Internet Explorer 6, oferecendo velocidade, segurança e respeito aos padrões web. O sucesso foi imediato: em poucos anos, o Firefox conquistaria dezenas de milhões de usuários e reacenderia a competição no mercado de navegadores.",
    icon: "/imgs/icons/2002_Phoenix.png",
    popupImg: "/imgs/popups/2002_Phoenix.jpg",
    popupFact:
      "Phoenix foi renomeado para Firefox devido a conflitos de marca. O nome 'Firebird' também foi usado brevemente.",
  },
  {
    year: "2003",
    title: "Safari",
    subtitle: "Apple • WebKit",
    desc: "Lançado pela Apple em janeiro de 2003 para o Mac, o Safari foi o primeiro navegador nativo do sistema operacional macOS. Baseado no motor WebKit (um fork do KHTML), trouxe elegância, velocidade e eficiência energética para a navegação. Sua interface minimalista e integração com o ecossistema Apple marcaram o início da consolidação de um navegador próprio, rompendo com a dependência do Internet Explorer no Mac. Mais tarde, o WebKit se tornaria a base do Google Chrome, influenciando bilhões de dispositivos e consolidando a arquitetura de navegadores modernos. Até hoje, o Safari mantém seu papel central no ecossistema da Apple, sendo referência em privacidade e performance.",
    icon: "https://cdn.simpleicons.org/safari/2c7cb6",
    popupImg: "/imgs/popups/2003_Safari.jpg",
    popupFact:
      "O WebKit do Safari se tornou a base do Chrome, e hoje é o motor por trás de bilhões de dispositivos.",
  },
  {
    year: "2004",
    title: "Firefox 1.0",
    subtitle: "Mozilla Foundation",
    desc: "Lançado em novembro de 2004 pela Mozilla Foundation, o Firefox 1.0 foi o navegador que quebrou o monopólio do Internet Explorer. Nascido das cinzas do Netscape, conquistou milhões de usuários em poucos meses com recursos inovadores: abas, bloqueador de pop-ups, gerenciador de downloads e uma poderosa sistema de extensões. Seu sucesso foi tão grande que chegou a ser baixado mais de 8 milhões de vezes nos primeiros quatro meses, reacendendo a competição no mercado e forçando a Microsoft a retomar o desenvolvimento do Internet Explorer. O Firefox representou o renascimento da web aberta e dos padrões.",
    isMilestone: true,
    estiloInteracao:
      "Navegação paralela (Abas) e interface modular (Extensões).",
    barreiraRompida:
      "Rompeu o caos cognitivo das múltiplas janelas e pop-ups. A interação deixou de ser passiva; o utilizador ganhou o poder de modificar a ferramenta às suas necessidades.",
    icon: "/imgs/icons/2004_Firefox1.png",
    popupImg: "/imgs/popups/2004_Firefox1.jpg",
    popupFact:
      "Baixado mais de 8 milhões de vezes nos primeiros 4 meses, provando que os utilizadores queriam controlo sobre a interface.",
  },
  {
    year: "2008",
    title: "Google Chrome",
    subtitle: "Motor V8 • Google",
    desc: "Lançado em setembro de 2008 pela Google, o Chrome revolucionou a navegação com simplicidade, velocidade e segurança. Seu motor JavaScript V8 acelerou drasticamente a execução de aplicações web, e o isolamento de abas em processos independentes trouxe estabilidade inédita. O navegador também apresentava uma interface minimalista, com a barra de endereços unificada (Omnibox) e foco em tornar a web mais rápida e fluida. Em poucos anos, o Chrome conquistou o mercado, tornando-se o navegador mais usado do mundo e estabelecendo novos padrões de performance e inovação.",
    isMilestone: true,
    estiloInteracao: "Busca integrada e interface invisível.",
    barreiraRompida:
      "Destruiu a poluição visual das toolbars dos anos 2000. A criação da 'Omnibox' uniu endereços e pesquisa, mudando o modelo mental: não era mais preciso saber a URL exata. O navegador 'sumiu' para focar no conteúdo.",
    icon: "/imgs/icons/2008_Chrome.png",
    popupImg: "/imgs/popups/2008_Chrome.png",
    popupFact:
      "Lançado com um manifesto em quadrinhos por Scott McCloud, explicando a revolução do motor V8.",
  },
  {
    year: "2010",
    title: "Chrome Web Store",
    subtitle: "Apps e extensões",
    desc: "Lançada em dezembro de 2010, a Chrome Web Store transformou o navegador em uma plataforma de aplicações, permitindo a instalação de apps, extensões e temas diretamente do navegador. Foi um passo fundamental para o modelo de PWAs (Progressive Web Apps), antecipando a ideia de que a web poderia rivalizar com lojas de aplicativos nativos. Com centenas de extensões disponíveis nos primeiros meses, a loja consolidou o ecossistema do Chrome e mudou a forma como os usuários interagem com o navegador, tornando-o mais personalizável e poderoso.",
    icon: "/imgs/icons/2010_ChromeWebStore.png",
    popupImg: "/imgs/popups/2010_ChromeWebStore.png",
    popupFact:
      "A Chrome Web Store foi lançada com centenas de apps e extensões, antecipando o modelo PWA.",
  },
  {
    year: "2011",
    title: "Internet Explorer 9",
    subtitle: "Aceleração de Hardware",
    desc: "Lançado em março de 2011, o Internet Explorer 9 representou um marco de renovação para a Microsoft. Após anos de estagnação com o IE6, a empresa apostou em suporte a HTML5, aceleração por hardware e uma interface mais limpa e minimalista. Pela primeira vez, o IE abandonou o legado do passado, exigindo Windows Vista ou 7 e deixando de lado o Windows XP. Embora já estivesse atrás do Chrome e Firefox em participação, o IE9 recuperou parte do respeito dos desenvolvedores com sua evolução técnica e foco em padrões modernos.",
    icon: "/imgs/icons/2011_IE9.jpg",
    popupImg: "/imgs/popups/2011_IE9.png",
    popupFact:
      "Tentativa de modernizar a imagem da Microsoft na web, focando no desempenho puro.",
  },
  {
    year: "2015",
    title: "Microsoft Edge (EdgeHTML)",
    subtitle: "Windows 10",
    desc: "Lançado com o Windows 10, o Microsoft Edge foi a aposta da Microsoft para substituir o Internet Explorer. Com um motor moderno (EdgeHTML), trouxe recursos como integração com a Cortana, modo de leitura, suporte a anotações em páginas e melhor desempenho. Embora tecnicamente superior ao IE, sua exclusividade no Windows 10 e a rápida ascensão do Chrome limitaram sua adoção. Em 2018, a Microsoft anunciou o abandono do motor próprio para migrar o Edge ao Chromium – um movimento que marcou o fim de uma era de navegadores proprietários.",
    icon: "/imgs/icons/2015_EdgeHTML.png",
    popupImg: "/imgs/popups/2015_Edge.jpg",
    popupFact:
      "O EdgeHTML foi um motor promissor, mas a fragmentação web levou a Microsoft a adotar Chromium.",
  },
  {
    year: "2016",
    title: "Firefox Quantum",
    subtitle: "Motor Servo / Gecko",
    desc: "Lançado em novembro de 2016, o Firefox Quantum foi a maior atualização do navegador em mais de uma década. Com um novo motor paralelo escrito em Rust (projeto Servo), entregou velocidade até duas vezes maior que a versão anterior, além de uma interface redesenhada (Photon) e forte apelo à privacidade com o Enhanced Tracking Protection. O Quantum marcou o renascimento do Firefox, consolidando seu lugar como a principal alternativa independente ao domínio do Chromium.",
    icon: "/imgs/icons/2016_FirefoxQuantum.png",
    popupImg: "/imgs/popups/2016_FirefoxQuantum.png",
    popupFact:
      "Quantum foi a maior atualização do Firefox em 13 anos, com partes escritas em Rust.",
  },
  {
    year: "2018",
    title: "Microsoft adota Chromium",
    subtitle: "Fim do motor próprio",
    desc: "Em dezembro de 2018, a Microsoft anunciou que abandonaria seu motor EdgeHTML para adotar o Chromium como base do novo Microsoft Edge. Foi o fim de uma era de motores proprietários e um marco na consolidação da web sob o código aberto do Google. A mudança permitiu que o Edge se tornasse multiplataforma (Windows, macOS, Linux), melhorasse a compatibilidade com sites e acelerasse o ritmo de atualizações. O novo Edge, lançado em 2020, conquistou espaço e hoje é o segundo navegador mais usado no desktop.",
    icon: "/imgs/icons/2018_Chromium.png",
    popupImg:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Microsoft_Edge_Chromium_logo.png",
    popupFact:
      "Sinalizou o domínio absoluto do ecossistema de renderização da Google.",
  },
  {
    year: "2015-2020",
    title: "WebAssembly & Dominância Chromium",
    subtitle: "A Web como Sistema Operativo",
    desc: "Neste período, a web atingiu maturidade como plataforma de aplicações. WebAssembly (2017) permitiu executar código de alto desempenho (C, C++, Rust) no navegador, viabilizando apps como Figma, AutoCAD e jogos AAA. Simultaneamente, a dominância do Chromium se consolidou: com a migração do Microsoft Edge para o motor do Google em 2018, mais de 80% dos navegadores desktop passaram a compartilhar a mesma base, unificando a web, mas também levantando preocupações sobre diversidade e concorrência.",
    isMilestone: true,
    estiloInteracao:
      "Interação de software nativo (Drag and drop complexo, renderização 3D, edição em tempo real).",
    barreiraRompida:
      "Quebrou a dependência do desktop. O utilizador deixou de apenas 'navegar em páginas' para 'operar softwares pesados' (como Figma) diretamente dentro de uma aba, exigindo zero instalação.",
    icon: "/imgs/icons/2015-2020_WebAssembly.png",
    popupImg: "/imgs/popups/2020_EdgeChromium.jpg",
    popupFact:
      "O motor Chromium tornou-se o padrão de facto da web, correndo em mais de 80% dos computadores do mundo.",
  },
  {
    year: "2021",
    title: "Safari Intelligent Tracking Prevention",
    subtitle: "Apple • Privacidade + Eficiência",
    desc: "A Apple intensificou sua estratégia de privacidade com o Intelligent Tracking Prevention, recurso que bloqueia cookies de terceiros e técnicas de fingerprinting por padrão. Introduzido em 2017, o ITP foi aprimorado em 2021 para restringir ainda mais o rastreamento entre sites, estabelecendo um novo padrão na indústria. A medida forçou anunciantes e desenvolvedores a repensarem a coleta de dados e influenciou outros navegadores, como Firefox e Brave, a adotarem proteções semelhantes. Com o Safari ITP, a Apple consolidou seu posicionamento como defensora da privacidade no ecossistema web..",
    icon: "/imgs/icons/2021_SarafiTP.jpg",
    popupImg: "https://cdn.simpleicons.org/safari/2c7cb6",
    popupFact:
      "Safari foi pioneiro a limitar o fingerprinting e cookies de terceiros, anos antes do movimento geral.",
  },
  {
    year: "2023",
    title: "IA integrada nos navegadores",
    subtitle: "Copilot (Edge) • Gemini (Chrome)",
    desc: "A inteligência artificial deixou de ser apenas um conceito e se tornou funcionalidade nativa nos principais navegadores. O Microsoft Edge integrou o Copilot (antigo Bing Chat) diretamente na barra lateral, permitindo resumos de páginas, redação assistida e conversas contextuais. O Google Chrome anunciou o Gemini embutido, trazendo sugestões inteligentes, traduções aprimoradas e organização automática de abas. A tendência marcou o início da era dos assistentes de navegação com IA generativa, transformando o navegador em um agente proativo e personalizado.",
    icon: "/imgs/icons/2023_IA_Integrada.png",
    popupImg: "/imgs/2023_EdgeCopilot.png",
    popupFact:
      "A integração de IA generativa marca a transição para verdadeiros assistentes de navegação.",
  },
  {
    year: "2024",
    title: "Arc Browser",
    subtitle: "The Browser Company",
    desc: "Desenvolvido pela The Browser Company, o Arc surgiu como uma reinvenção radical da navegação web. Diferente dos navegadores tradicionais, substituiu abas por um sistema de espaços verticais, comandos universais (atalho estilo Spotlight) e ferramentas de organização com IA. Sua interface minimalista, foco em produtividade e personalização profunda conquistaram uma base fiel de usuários, especialmente entre designers, desenvolvedores e entusiastas de tecnologia. O Arc representou a primeira grande tentativa de repensar o navegador desde a era Chrome, provando que ainda há espaço para inovação na experiência de navegação.",
    isMilestone: true,
    estiloInteracao:
      "Linguagem natural, comandos via teclado (Spotlight) e delegação de tarefas para IA.",
    barreiraRompida:
      "Rompe o paradigma de 'pesquisar, abrir links e ler'. A interação passa a ser baseada em intenção: o utilizador pede um resumo e a máquina faz o gerenciamento semântico do conteúdo.",
    icon: "/imgs/icons/2024_ArcBrowser.webp",
    popupImg: "/imgs/2024_ArcBrowser.png",
    popupFact:
      "Arc reinventa a navegação abolindo a barra de abas superior tradicional e introduzindo espaços de trabalho fluidos.",
  },
  {
    year: "2025→2026",
    title: "IA generativa nativa & modelos locais",
    subtitle: "On‑device AI • Privacidade",
    desc: "A inteligência artificial migrou da nuvem para o dispositivo. Navegadores como Chrome, Edge, Firefox e Safari passaram a integrar pequenos modelos de linguagem (SLMs) rodando localmente – como Gemini Nano e Phi-3 –, permitindo resumos instantâneos de páginas, traduções em tempo real, preenchimento inteligente de formulários e até agentes de navegação personalizados, tudo sem enviar dados para servidores externos. Brave e DuckDuckGo também aderiram, reforçando a privacidade como pilar. A era dos navegadores como assistentes proativos e offline finalmente se consolidou, transformando a web em uma experiência mais ágil, segura e inteligente.",
    icon: "/imgs/icons/2025-2026_IA_Generativa.png",
    popupImg: "/imgs/2025_2026_AI_Trends.jpg",
    popupFact:
      "Modelos locais permitem resumos e traduções sem enviar dados para a nuvem.",
  },
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
      img.src =
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%232c7cb6" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/%3E%3C/svg%3E';
    };
    cardImgDiv.appendChild(img);

    cardImgDiv.setAttribute("data-popup-img", item.popupImg);
    cardImgDiv.setAttribute(
      "data-popup-title",
      item.title
        .replace(/[🌍🖼️⚡🪟🎭📀🦊🍏🔥📦📌📊🚀🔄🆕🍃🤖🌀🧠⚙️]/g, "")
        .trim(),
    );
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
  if (!popupElement) {
    popupElement = document.createElement("div");
    popupElement.className = "img-popup";
    document.body.appendChild(popupElement);
  }

  popupElement.innerHTML = `
    <img src="${imgUrl}" alt="Imagem ilustrativa" onerror="this.src='https://cdn.simpleicons.org/internetarchive/cccccc'">
    <div class="popup-title">📸 ${title}</div>
    <div class="popup-desc">✨ ${fact}</div>
  `;

  // Força o display para conseguir medir o tamanho real
  popupElement.style.display = "flex";
  popupElement.style.visibility = "hidden"; 

  // Timeout para garantir que o navegador renderizou o conteúdo e sabe o tamanho
  setTimeout(() => {
    const rect = target.getBoundingClientRect();
    const popupWidth = popupElement.offsetWidth;
    const popupHeight = popupElement.offsetHeight;
    const padding = 20;

    // Posição baseada na janela (viewport) para facilitar o cálculo
    let viewTop = rect.top; 
    let viewLeft = rect.right + 15;

    // AJUSTE HORIZONTAL: Se estourar a direita
    if (viewLeft + popupWidth > window.innerWidth - padding) {
      viewLeft = rect.left - popupWidth - 15;
    }

    // AJUSTE VERTICAL: Se o fundo do pop-up estourar o limite inferior da JANELA
    if (viewTop + popupHeight > window.innerHeight - padding) {
      // Empurra para cima o necessário para caber na tela
      viewTop = window.innerHeight - popupHeight - padding;
    }

    // Se mesmo assim estourar o topo da janela
    if (viewTop < padding) {
      viewTop = padding;
    }

    // Agora convertemos a posição da "janela" para a posição da "página" (absolute)
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
  rootMargin: "0px",
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

setTimeout(() => {
  document.querySelectorAll(".fade-in-section").forEach((el) => {
    observer.observe(el);
  });
}, 100);
