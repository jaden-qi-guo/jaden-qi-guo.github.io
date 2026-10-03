// build.mjs: renders the site from content.mjs into dist/, with a copy of images/. No dependencies.
//   node src/build.mjs
import { copyFileSync, cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as C from './content.mjs';

const HERE = dirname(fileURLToPath(import.meta.url)), REPO = join(HERE, '..'), OUT = join(REPO, 'dist');
const IMG = 'images/';
mkdirSync(join(OUT, 'assets'), { recursive: true });
cpSync(join(REPO, 'images'), join(OUT, 'images'), { recursive: true });
copyFileSync(join(HERE, 'style.css'), join(OUT, 'assets', 'style.css'));
copyFileSync(join(HERE, 'site.js'), join(OUT, 'assets', 'site.js'));

const PAGES = [
  ['index.html', 'Home'], ['publications.html', 'Publications'], ['teaching.html', 'Teaching'], ['experience.html', 'Experience'], ['trencadis.html', 'Trencadís'],
];
// the Trencadís tab: the platform's mosaic logo, small and faded so the tab does not outshine the others
const LOGO = `<svg class="nav-logo" viewBox="0 0 24 24" aria-hidden="true"><defs><clipPath id="nl"><rect width="24" height="24" rx="6"/></clipPath></defs><g clip-path="url(#nl)" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><rect width="24" height="24" fill="#fff"/><polygon points="0,0 13,0 10,9 0,11" fill="#1f4fa8"/><polygon points="13,0 24,0 24,10 15,15 10,9" fill="#0e8c8c"/><polygon points="0,11 10,9 15,15 9,24 0,24" fill="#d0901a"/><polygon points="15,15 24,10 24,24 19,24" fill="#d2553f"/><polygon points="9,24 15,15 19,24" fill="#3f8f3a"/></g></svg>`;
const MORE = C.more.filter(m => m.show);   // pages listed under the "More" menu
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function page(file, title, body) {
  const cur = f => f === file ? ' class="active" aria-current="page"' : '';
  const nav = PAGES.map(([f, t]) => `<a href="${f}"${cur(f)}>${f === 'trencadis.html' ? LOGO : ''}${t}</a>`).join('') + (MORE.length ? `
    <div class="dropdown${MORE.some(m => m.file === file) ? ' active' : ''}">
      <button class="drop-btn" aria-expanded="false" aria-haspopup="true">More<i class="fa-solid fa-chevron-down"></i></button>
      <div class="drop-menu">${MORE.map(m => `<a href="${m.file}"${cur(m.file)}><i class="${m.icon} c-${m.color}"></i>${m.title}</a>`).join('')}</div>
    </div>` : '');
  return `<!doctype html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VFF15G0N57"></script>
<script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VFF15G0N57');</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${title === 'Home' ? `${C.profile.name}'s Homepage` : `${title} · ${C.profile.name}`}</title>
<meta name="author" content="${C.profile.name}">
<meta name="description" content="${C.profile.name}'s Homepage">
<meta name="keywords" content="computer networks, distributed systems, video streaming, machine learning, ${C.profile.name}">
<link rel="icon" type="image/x-icon" href="${IMG}logo.ico">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header class="topbar"><div class="wrap">
  <a class="brand" href="index.html">${C.profile.name}</a>
  <button class="menu" aria-label="Menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
  <nav>${nav}</nav>
</div></header>
<main class="wrap">
${body}
</main>
<footer class="wrap"><div class="foot">© ${new Date().getFullYear()} ${C.profile.name}</div></footer>
<script src="assets/site.js"></script>
</body>
</html>
`;
}

// color: one of the palette names in style.css (blue, orange, green, purple, pink)
const section = (id, icon, color, title, inner) => `<section id="${id}">\n<h2><span class="badge b-${color}"><i class="${icon}"></i></span>${title}</h2>\n${inner}\n</section>`;

function headerCard() {
  const p = C.profile;
  return `<section class="card hero">
  <img class="photo" src="${IMG}${p.photo}" alt="Photo of ${p.name}">
  <div class="hero-text">
    <h1>${p.name} <span class="local">${p.nameLocal}</span></h1>
    ${p.titles.map(t => `<div class="title">${t}</div>`).join('')}
    <div class="aff">${p.affiliation.map(a => `<a href="${a.href}">${a.text}</a>`).join('<span class="sep">·</span>')}</div>
    <div class="contact"><span><i class="fa-regular fa-envelope"></i><a href="mailto:${p.email}">${p.email}</a></span><span><i class="fa-solid fa-location-dot"></i>${p.location}</span></div>
    <div class="social">${p.links.map(l => `<a class="s-${l.label.toLowerCase().replace(/\W+/g, '')}" href="${l.href}"><i class="${l.icon}"></i>${l.label}</a>`).join('')}</div>
  </div>
</section>`;
}

function newsList() {
  const item = n => `<li><span class="date">${n.date}</span><span class="text">${n.html}</span></li>`;   // a dot on a line; style.css
  const shown = C.news.slice(0, C.newsShown), older = C.news.slice(C.newsShown);
  return `<ul class="news">${shown.map(item).join('')}</ul>` +
    (older.length ? `<details class="older"><summary>Older news</summary><ul class="news">${older.map(item).join('')}</ul></details>` : '');
}

// each paper's colour (venue chip and figure frame): p.color, or the palette in list order, so neighbours differ and a
// paper looks the same on every page
const PUB_COLORS = ['blue', 'orange', 'green', 'purple', 'pink', 'gold'];
// the venue's short name in bold: "(ATC)" in "… Conference (ATC), 2026", else the name before the first comma
const venueLine = w => /\(([^()]+)\)/.test(w) ? w.replace(/\(([^()]+)\)/, '(<strong>$1</strong>)') : w.replace(/^([^,]+)/, '<strong>$1</strong>');
function pub(p) {
  const color = p.color || PUB_COLORS[C.publications.indexOf(p) % PUB_COLORS.length];
  const authors = p.authors.map(a => a === C.profile.name ? `<span class="me">${a}</span>` : a).join(', ');
  const link = (href, icon, label) => href ? `<a href="${href}"><i class="${icon}"></i>${label}</a>` : '';
  const links = [link(p.href, 'fa-regular fa-newspaper', 'Paper'), link(p.code, 'fa-solid fa-laptop-code', 'Code'), link(p.slides, 'fa-solid fa-person-chalkboard', 'Slides'),
    link(p.video, 'fa-solid fa-video', 'Video'), link(p.website, 'fa-solid fa-link', 'Project page')].filter(Boolean);
  const tag = `<span class="vtag">${p.venue}</span>`;   // the venue on the figure's corner
  const visual = p.thumb ? `<a class="fig zoom" href="${IMG}${p.thumb}" title="Figure from the paper (click to enlarge)">${tag}<img src="${IMG}${p.thumb}" alt="A figure from ${esc(p.title)}" loading="lazy"></a>`
    : `<span class="fig fig-empty">${tag}<i class="${p.icon || 'fa-regular fa-newspaper'}" aria-hidden="true"></i></span>`;
  return `<article class="pub" style="--pc: var(--${color}); --pc-soft: var(--${color}-soft)">
  ${visual}
  <div class="pub-body">
    <h3>${p.href ? `<a href="${p.href}">${esc(p.title)}</a>` : esc(p.title)}</h3>
    <div class="authors">${authors}</div>
    <div class="where">${venueLine(p.where)}${p.award ? ` <span class="award"><i class="fa-solid fa-trophy"></i>${p.award}</span>` : ''}</div>
    ${links.length ? `<div class="links">${links.join('')}</div>` : ''}
    ${p.summary ? `<details class="summary"><summary>Read summary</summary><p>${p.summary}</p></details>` : ''}
  </div>
</article>`;
}

// ---------- pages ----------
const home = [
  headerCard(),
  section('about', 'fa-regular fa-user', 'blue', 'About me', C.about.map(p => `<p>${p}</p>` + (/:\s*$/.test(p) ?
    `<div class="focus">${C.focus.map(f => `<div class="focus-tile b-${f.color}"><i class="${f.icon}"></i><span>${f.text}</span></div>`).join('')}</div>` : '')).join('\n')),
  section('news', 'fa-solid fa-bullhorn', 'orange', 'Recent news', newsList()),
  section('selected', 'fa-solid fa-lightbulb', 'green', 'Selected publications',
    C.publications.filter(p => p.selected).map(pub).join('\n') + `\n<p class="more"><a href="publications.html">All publications <i class="fa-solid fa-arrow-right"></i></a></p>`),
].join('\n');

const pubs = [
  `<h1 class="page-title">Publications</h1>`,
  `<p class="lead">See my <a href="${C.profile.links[0].href}">Google Scholar</a> for the full publication list.</p>`,
  section('conference', 'fa-solid fa-people-group', 'green', 'Conference &amp; workshop papers', C.publications.filter(p => p.kind === 'conference').map(pub).join('\n')),
  section('journal', 'fa-solid fa-book', 'purple', 'Journal papers', C.publications.filter(p => p.kind === 'journal').map(pub).join('\n')),
].join('\n');

const teachingPage = [
  `<h1 class="page-title">Teaching &amp; Supervision</h1>`,
  section('teaching', 'fa-solid fa-chalkboard-user', 'purple', `Teaching at ${C.teaching.where}`,
    `<ul class="rows">${C.teaching.courses.map(c => `<li><span class="row-main">${c.href ? `<a href="${c.href}">${c.name}</a>` : c.name}</span><span class="row-note">${c.note}</span></li>`).join('')}</ul>`),
  section('supervision', 'fa-solid fa-user-graduate', 'pink', 'Thesis supervision',
    `<ul class="rows">${C.supervision.map(s => `<li><span class="row-main"><span class="tag">${s.level}</span>${s.topic}</span><span class="row-note">${s.student}, ${s.where} (${s.when}), ${s.co}.</span></li>`).join('')}</ul>`),
].join('\n');

const experiencePage = [
  `<h1 class="page-title">Experience</h1>`,
  section('education', 'fa-solid fa-graduation-cap', 'blue', 'Education',
    `<ul class="rows">${C.education.map(e => `<li><span class="row-main"><strong>${e.degree}</strong><span class="when">${e.when}</span></span><span class="row-note">${e.html}</span>${(e.honors || []).map(h => `<span class="row-note honors"><i class="fa-solid fa-medal"></i>${h}</span>`).join('')}</li>`).join('')}</ul>`),
  section('industry', 'fa-solid fa-briefcase', 'orange', 'Industry',
    `<ul class="rows">${C.industry.map(e => `<li><span class="row-main"><strong>${e.role}</strong>, ${e.org}<span class="when">${e.when}</span></span><span class="row-note">${e.where}</span></li>`).join('')}</ul>`),
  section('service', 'fa-solid fa-hands-helping', 'green', 'Academic service',
    `<ul class="rows">${C.service.map(s => `<li><span class="row-main"><span class="tag">${s.venue}</span>${s.role}</span></li>`).join('')}</ul>`),
].join('\n');

const T = C.trencadis;
const trencadisPage = [
  `<h1 class="page-title">${T.title}</h1>`,
  `<p class="lead">${T.tagline}</p>`,
  `<p class="status"><span class="pill live"><i class="fa-solid fa-circle"></i>${T.status}</span> <a class="btn-link" href="${T.url}">${T.url.replace('https://', '')} <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>`,
  T.intro.map(p => `<p>${p}</p>`).join('\n'),
  `<figure class="shot"><a class="zoom" href="${IMG}${T.image}"><img src="${IMG}${T.image}" alt="The Trencadís player: a video playing, with quality, buffer and picture-quality statistics beside it" loading="lazy"></a><figcaption>${T.caption}</figcaption></figure>`,
  `<p class="links">${T.links.map(l => `<a class="btn-link" href="${l.href}"><i class="${l.icon}"></i> ${l.text}</a>`).join('')}</p>`,
].join('\n');

const bodies = { 'index.html': home, 'publications.html': pubs, 'teaching.html': teachingPage, 'experience.html': experiencePage, 'trencadis.html': trencadisPage };
const all = [...PAGES, ...MORE.map(m => [m.file, m.title])];
for (const [file, title] of all) writeFileSync(join(OUT, file), page(file, title, bodies[file]));
writeFileSync(join(OUT, '.nojekyll'), '');
console.log(`built ${all.length} pages into ${OUT}`);
