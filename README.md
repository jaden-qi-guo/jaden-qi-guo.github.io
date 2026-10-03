# Qi Guo's homepage

The site is built from `src/` into `dist/` by a small script with no dependencies, and GitHub Actions publishes it
(`.github/workflows/pages.yml`) on every push to `main`.

| File | What it holds |
|---|---|
| `src/content.mjs` | All the text: profile, news, publications, teaching, supervision, experience, service, the Trencadís page. **This is the file you edit.** |
| `src/build.mjs` | The page templates and the list of tabs. Edit only to change layout or add a page. |
| `src/style.css`, `src/site.js` | Styles and the small menu script. |
| `src/dev.mjs` | The live preview server (local only; not part of the published site). |
| `images/` | Pictures (profile photo, paper figures, screenshots). Copied into the site as is. |
| `files/` | PDFs and other files to link to. |
| `dist/` | The built site. Generated; not in git. |

## Preview

Live, while you edit:

```bash
node src/dev.mjs
```

Then open http://localhost:8124. Every time you save a file in `src/` or `images/`, the site rebuilds and the open page
reloads by itself. If a change breaks the build, the terminal shows the error and the page keeps the last good version.
Ctrl-C stops it.

Once, without the live server:

```bash
node src/build.mjs
```

```bash
open dist/index.html
```

The first command rebuilds every page (it prints `built N pages`); the second opens the result in your browser.
If the build stops with an error, it names the line in `content.mjs`: usually a missing comma between entries, or a
quote inside a string that uses the same kind of quote (write `"CoNEXT '26"` or `` `...` `` instead).

## Publish

Commit and push to `main`. The deploy takes about a minute; its progress is under the repository's Actions tab. If the
build fails there, the live site stays as it was.

## Recipes

Entries in each list appear in the order written, so put new ones **at the top**.

**News item.** In `news`, add a line at the top:

```js
{ date: 'Oct 2026', html: `<i>Paper</i> is accepted to <a href="https://...">Venue 2026</a>!` },
```

The first `newsShown` items (4) are shown; the rest go under "Older news".

**Publication.** In `publications`, copy an entry and change it:

```js
{ short: 'Shortname', icon: 'fa-solid fa-film', kind: 'conference', venue: "CoNEXT '26", title: 'Full title', href: 'https://link-to-pdf',
  authors: ['First Author', 'Qi Guo', 'Last Author'],
  where: 'Full venue name, year' },
```

- `kind` is `conference` (workshops count here) or `journal`. Add `selected: true` to also show it under "Selected publications" on the home page.
- Picture: a figure from the paper, saved in `images/` (about 1000–1200 px wide; the current ones are `pub-*.png`), set with
  `thumb: 'pub-name.png'`. It shows in a small frame left of the entry, with the venue on its corner; a click opens it full size. Without `thumb`, the frame
  shows `icon`.
- Colour: each paper gets one from the palette in list order (the venue label on the figure's corner and the figure's frame); `color: 'pink'` picks one
  (blue, orange, green, purple, pink, gold).
- Optional links and extras: `code`, `slides`, `video`, `website`, `summary` (expandable text), `award`.
- Icons are Font Awesome 6 names (fontawesome.com/icons, free set), written like `fa-solid fa-film`.
- Your name is highlighted in the author list when written exactly as `profile.name` (`Qi Guo`). In `where`, the short name in brackets, e.g. `(ATC)`, is shown in bold (without brackets: the name before the first comma).

**Teaching, supervision, education, industry, service.** Copy an entry in the matching list (`teaching.courses`,
`supervision`, `education`, `industry`, `service`) and change the fields. An education entry can list honours, one line each:
`honors: ['First-Class Honours', 'Ye Peida Elite Class']`.

**Highlighting.** Names of papers and projects in text: `<strong>JANUS</strong>`. Keep it sparing.

**Research focus** (the boxes with coloured icons on the home page): `focus`, with `color` one of blue, orange, green, purple, pink.

**Profile, photo, links:** `profile`. A new photo goes in `images/`; set `photo` to its file name.

**Trencadís page:** the `trencadis` object. To refresh the screenshot, replace `images/trencadis-player.jpg`.

**A new tab.** Add `['newpage.html', 'Tab name']` to `PAGES` in `src/build.mjs`, write the page body next to the others
there (see `trencadisPage`), and add it to `bodies`. A page that should sit under a "More" menu instead goes in `more`
in `content.mjs`.
