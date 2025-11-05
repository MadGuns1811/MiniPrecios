// JavaScript Document// script.js - theme toggle + active nav highlight + small helpers

// Theme toggle (persist)
(function(){
  const t = localStorage.getItem('ninja-theme');
  if(t === 'dark') document.documentElement.classList.add('dark');
})();
function toggleTheme(){
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('ninja-theme', isDark ? 'dark' : 'light');
}

// Set active nav by pathname (works for separated pages)
function setActiveNav(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const file = path.toLowerCase();
  const anchors = document.querySelectorAll('.nav a');
  anchors.forEach(a=>{
    const href = a.getAttribute('href');
    if(href && file.indexOf(href) !== -1 || (href==='index.html' && (file==='index.html' || file==='') )){
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', setActiveNav);

// Smooth scroller for same-page anchors (if any)
document.addEventListener('click', function(e){
  const a = e.target.closest('a');
  if(!a) return;
  const href = a.getAttribute('href');
  if(!href) return;
  if(href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});
