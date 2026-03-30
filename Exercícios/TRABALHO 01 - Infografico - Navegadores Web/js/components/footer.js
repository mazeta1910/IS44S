export function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="conclusion-block fade-in-section">
      <h2>Conclusão</h2>
      <p>A mudança que mais exigiu do utilizador ao longo destas três décadas foi a transição da web baseada em destinos (digitar URLs exatas) para a web baseada em intenção (buscas e comandos de IA). Visualmente, a interface tornou-se drasticamente mais simples — saindo de menus lotados de botões para quase nenhuma borda —, mas essa simplicidade é uma ilusão que apenas ocultou uma complexidade algorítmica gigantesca a correr em segundo plano.</p>
    </div>

    <div class="footer-note">
      🖱️ Passe o mouse sobre os ícones dos navegadores para ver uma imagem ampliada e uma curiosidade! Ao imprimir/salvar PDF, todas as imagens e fatos aparecerão automaticamente.
    </div>

    <div class="github-footer">
      <a href="https://github.com/mazeta1910/IS44S/tree/main/Exercícios/TRABALHO%2001%20-%20Infografico%20-%20Navegadores%20Web" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="github-icon">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        Código-fonte disponível no GitHub
      </a>
    </div>
  `;
}