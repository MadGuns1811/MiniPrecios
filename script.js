// 🌗 Modo oscuro persistente
function toggleTheme() {
  document.body.classList.toggle('dark');
  const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  // 📱 Menú hamburguesa
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});

// 🌀 Splash Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 1000);
    }, 1000);
  }
});

// 📩 Formulario de contacto (si aplica)
function enviarMensaje(e) {
  e.preventDefault();
  const confirm = document.getElementById('confirmacion');
  if (confirm) {
    confirm.style.display = 'block';
    setTimeout(() => (confirm.style.display = 'none'), 4000);
  }
  e.target.reset();
}
