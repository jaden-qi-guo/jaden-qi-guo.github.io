// dev.mjs: live preview while editing. Serves dist/ at http://localhost:8124, rebuilds when anything in src/ or
// images/ changes, and reloads the open pages. No dependencies.
//   node src/dev.mjs [port]
import { spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync, watch } from 'node:fs';
import { dirname, extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url)), REPO = join(HERE, '..'), OUT = join(REPO, 'dist');
const PORT = Number(process.argv[2] || 8124);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.ico': 'image/x-icon', '.PNG': 'image/png' };
const RELOAD = `<script>new EventSource('/__live').onmessage = () => location.reload();</script>`;
const clients = new Set();

function build() {   // the same build as publishing; on an error the last good pages stay up
  const r = spawnSync(process.execPath, [join(HERE, 'build.mjs')], { encoding: 'utf8' });
  const t = new Date().toLocaleTimeString();
  if (r.status === 0) { console.log(`${t}  ${r.stdout.trim()}`); for (const c of clients) c.write('data: reload\n\n'); }
  else console.log(`${t}  build failed, showing the last good version:\n${(r.stderr || r.stdout).trim().split('\n').slice(0, 6).join('\n')}`);
}

let timer;
const changed = () => { clearTimeout(timer); timer = setTimeout(build, 150); };   // editors save in bursts
for (const d of ['src', 'images']) watch(join(REPO, d), { recursive: true }, (_, f) => { if (f && !f.endsWith('dev.mjs')) changed(); });

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path === '/__live') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }); res.write('\n');
    clients.add(res); req.on('close', () => clients.delete(res)); return;
  }
  let f = normalize(join(OUT, path === '/' ? 'index.html' : path));
  if (!f.startsWith(OUT)) { res.writeHead(403).end(); return; }
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404, { 'Content-Type': 'text/plain' }).end('not found'); return; }
  let body = readFileSync(f);
  if (extname(f) === '.html') body = Buffer.from(body.toString().replace('</body>', `${RELOAD}</body>`));
  res.writeHead(200, { 'Content-Type': TYPES[extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-store' }).end(body);
}).listen(PORT, () => { build(); console.log(`live preview: http://localhost:${PORT}  (edit src/content.mjs and save; Ctrl-C stops)`); });
