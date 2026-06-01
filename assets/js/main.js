// MSCREATIVE.SYSTEMS™ — scripts
// Estrutura inicial. Adicione interações aqui.

// Ano dinâmico no rodapé
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
