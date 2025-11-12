/* script.js - tema persistente, menu móvil, modal de cotización, filtros */
/* THEME */
(function(){
  const t = localStorage.getItem('mp-theme');
  if(t === 'light') document.documentElement.setAttribute('data-theme','light');
})();
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme');
  if(cur === 'light'){ document.documentElement.removeAttribute('data-theme'); localStorage.setItem('mp-theme','dark'); }
  else { document.documentElement.setAttribute('data-theme','light'); localStorage.setItem('mp-theme','light'); }
}

/* MOBILE MENU */
function toggleMobileMenu(){
  const nav = document.querySelector('.nav');
  if(!nav) return;
  const visible = getComputedStyle(nav).display !== 'none' && nav.style.display === 'flex';
  if(visible){ nav.style.display = ''; }
  else {
    nav.style.display = 'flex';
    nav.style.position = 'absolute';
    nav.style.right = '18px';
    nav.style.top = '72px';
    nav.style.background = 'var(--surface)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = 'var(--soft-shadow)';
    nav.style.flexDirection = 'column';
  }
}

/* QUOTE MODAL */
function openQuoteModal(product='', price=''){
  const bd = document.getElementById('modalBackdrop');
  const m = document.getElementById('quoteModal');
  if(!bd || !m) return;
  bd.style.display = 'block'; m.style.display = 'block';
  document.getElementById('q-product').value = product + (price ? ` — $${price} MXN` : '');
  document.getElementById('quoteForm').style.display = 'block';
  document.getElementById('quoteSuccess').style.display = 'none';
  // focus:
  setTimeout(()=>document.getElementById('q-name').focus(),100);
}
function closeQuoteModal(){
  const bd = document.getElementById('modalBackdrop');
  const m = document.getElementById('quoteModal');
  if(!bd || !m) return;
  bd.style.display = 'none'; m.style.display = 'none';
}

/* FORM SUBMIT (simulado) */
function submitQuote(e){
  e.preventDefault();
  const required = ['q-product','q-name','q-email','q-phone','q-msg'];
  for(const id of required){
    if(!document.getElementById(id).value.trim()){ alert('Completa todos los campos.'); return; }
  }
  document.getElementById('quoteForm').style.display = 'none';
  document.getElementById('quoteSuccess').style.display = 'block';
  setTimeout(()=>{ document.getElementById('quoteForm').reset(); closeQuoteModal(); }, 1800);
}

/* Close modal ESC & backdrop */
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeQuoteModal(); });
document.addEventListener('click', (e)=>{ if(e.target && e.target.id === 'modalBackdrop') closeQuoteModal(); });

/* FILTERS: data-cat on card, filterCategory('freidoras') */
function filterCategory(cat){
  document.querySelectorAll('.filter-pill').forEach(p=>p.classList.toggle('active', p.dataset.cat===cat));
  document.querySelectorAll('.card').forEach(card=>{
    if(cat==='all' || (card.dataset.cat && card.dataset.cat===cat)) card.style.display = '';
    else card.style.display = 'none';
  });
}

/* small helper: add fade-up to elements on load */
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.fade-up').forEach((el,i)=>{ setTimeout(()=>el.classList.add('fade-up--shown'), 60*i); });
});
