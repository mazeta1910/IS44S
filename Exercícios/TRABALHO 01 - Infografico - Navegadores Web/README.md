# Infográfico Interativo: Evolução dos Navegadores Web

Este projeto é um infográfico interativo desenvolvido como parte da disciplina de **Interação Ser Humano-Computador (IHC)** na **UTFPR - Campus Pato Branco**. O objetivo é explorar a evolução histórica dos navegadores web para Desktop e Mobile, destacando marcos de usabilidade, mudanças nos paradigmas de interação e tendências futuras impulsionadas por IA.

---

## 👥 Acadêmicos e Disciplina
* **Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR-PB)
* **Disciplina:** Interação Ser Humano-Computador
* **Docente:** Drª. Soelaine Rodrigues Ascari
* **Autores:** Matheus C. P. Santos & Tiago A. Sanguanini

---

## 🚀 Funcionalidades Principais
* **Timeline Dupla:** Alternância dinâmica entre as linhas do tempo de navegadores Desktop e Mobile.
* **Marcos de IHC:** Destaque visual para eventos que romperam barreiras de interação (ex: Mosaic, Firefox 1.0, Chrome e Mobile Safari).
* **Pop-ups Informativos:** Visualização de curiosidades e interfaces históricas com ajuste inteligente de imagem (`object-fit: contain`) para evitar cortes.
* **Carrossel de Dados:** Gráficos interativos sobre market share, motores de busca e a árvore genealógica dos navegadores com suporte a zoom (Lightbox).
* **Visão de Futuro (2036):** Artigos fundamentados com evidências acadêmicas sobre as tendências e riscos da navegação guiada por IA.
* **Otimização para Impressão:** O código foi estruturado com regras de CSS `@media print` para gerar um PDF completo, garantindo que as duas linhas do tempo e os conteúdos dos modais sejam exibidos sem cortes.

---

## 🛠️ Tecnologias Utilizadas
O projeto foi construído utilizando tecnologias web puras (Vanilla), seguindo uma arquitetura modular para facilitar a manutenção:
* **HTML5 & CSS3:** Semântica avançada, Flexbox, Grid e animações de entrada via `Intersection Observer`.
* **JavaScript (ES6+):** Arquitetura baseada em **Componentes** e módulos (`import/export`), separando a lógica de renderização dos dados.
* **Arquitetura de Dados:** Centralização de todo o conteúdo textual e referências acadêmicas em um arquivo de dados dedicado (`data.js`).

---

## 📂 Estrutura de Pastas
/
├── index.html          # Estrutura principal da página
├── README.md           # Este arquivo de documentação
├── css/                # Estilos modulares (global, header, timeline, etc.)
├── js/                 # Lógica da aplicação
│   ├── main.js         # Inicialização e controle de estado (Desktop/Mobile)
│   ├── data.js         # Repositório central de dados e textos
│   └── components/     # Scripts de renderização de cada seção da interface
└── imgs/               # Ativos visuais (ícones, gráficos e capturas de tela)

## 🖥️ Como Executar
Extraia o conteúdo do arquivo .rar.

Como o projeto utiliza Módulos JavaScript, é necessário um servidor local para que o navegador carregue os arquivos corretamente.

No VS Code, utilize a extensão Live Server ou Live Preview:

Clique com o botão direito no arquivo index.html.

Selecione "Open with Live Server".

Para gerar o PDF acadêmico conforme solicitado, utilize o comando Ctrl + P no navegador. O layout está configurado para "desenrolar" todo o conteúdo interativo automaticamente para o papel.

Este trabalho reflete o estudo da evolução das interfaces web e o impacto da tecnologia na experiência do usuário ao longo das décadas.