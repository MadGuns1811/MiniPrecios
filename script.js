// ==============================
// MODO OSCURO
// ==============================
function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Mantener tema seleccionado
window.addEventListener('DOMContentLoaded', () => {
  const tema = localStorage.getItem('theme');
  if (tema === 'dark') document.body.classList.add('dark');
});

// ==============================
// FORMULARIO DE CONTACTO
// ==============================
function enviarMensaje(e) {
  e.preventDefault();
  const confirmacion = document.createElement('p');
  confirmacion.textContent = "¡Mensaje enviado con éxito!";
  confirmacion.style.color = "green";
  e.target.appendChild(confirmacion);
  e.target.reset();
  setTimeout(() => confirmacion.remove(), 4000);
}
