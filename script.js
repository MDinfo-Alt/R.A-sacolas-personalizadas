// script.js - controla o menu do botão flutuante do WhatsApp
document.addEventListener('DOMContentLoaded', function () {
  const waToggle = document.getElementById('waToggle');
  const waMenu = document.getElementById('waMenu');

  if (!waToggle || !waMenu) return;

  let open = false;

  waToggle.addEventListener('click', function () {
    open = !open;
    waMenu.style.display = open ? 'flex' : 'none';
    waMenu.setAttribute('aria-hidden', String(!open));
    waToggle.setAttribute('aria-expanded', String(open));
  });

  // Fecha o menu se clicar fora
  document.addEventListener('click', function (ev) {
    const target = ev.target;
    if (!waMenu.contains(target) && target !== waToggle && open) {
      open = false;
      waMenu.style.display = 'none';
      waMenu.setAttribute('aria-hidden', 'true');
      waToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
