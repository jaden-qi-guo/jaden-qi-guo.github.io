// site.js: the mobile menu toggle and the "More" dropdown on touch screens. Everything else works without JavaScript.
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
