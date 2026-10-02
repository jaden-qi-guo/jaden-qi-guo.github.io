// site.js: the mobile menu toggle, the "More" dropdown on touch screens, and image zoom. Everything works without JavaScript too.
document.querySelector('.menu')?.addEventListener('click', e => {
  const open = document.body.classList.toggle('nav-open');
  e.currentTarget.setAttribute('aria-expanded', String(open));
});
const drop = document.querySelector('.dropdown');
drop?.querySelector('.drop-btn').addEventListener('click', e => {
  const open = drop.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', e => {
  if (drop && !drop.contains(e.target)) { drop.classList.remove('open'); drop.querySelector('.drop-btn').setAttribute('aria-expanded', 'false'); }
});

// zoom: a link with class "zoom" opens its image enlarged over the page (a click or Esc closes it); without
// JavaScript the link simply opens the image
const box = document.createElement('div'); box.className = 'lightbox'; box.hidden = true;
box.innerHTML = '<img alt=""><button aria-label="Close">&times;</button>';
document.body.append(box);
const closeBox = () => { box.hidden = true; document.body.style.overflow = ''; };
document.addEventListener('click', e => {
  const a = e.target.closest('a.zoom');
  if (a) { e.preventDefault(); box.querySelector('img').src = a.href; box.querySelector('img').alt = a.querySelector('img')?.alt || ''; box.hidden = false; document.body.style.overflow = 'hidden'; }
  else if (!box.hidden && box.contains(e.target)) closeBox();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) closeBox(); });

