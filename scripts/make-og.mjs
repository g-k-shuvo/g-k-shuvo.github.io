/**
 * Generates the Open Graph share card at public/og.jpg.
 *
 * Rendered in a real browser rather than composed in code, so it uses the same
 * Geist webfont, the same tokens and the same portrait treatment as the page.
 * Run it after a build (the card pulls the portrait out of dist/), then commit
 * the result:
 *
 *   npm run build && node scripts/make-og.mjs
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist/assets';
const W = 1200;
const H = 630;

const b64 = (file, mime) =>
	`data:${mime};base64,${readFileSync(join(DIST, file)).toString('base64')}`;

const files = readdirSync(DIST);
const pick = (re) => files.find((f) => re.test(f));

// Largest emitted portrait variant, so the card is sharp at 1200x630.
const portraitFile = files
	.filter((f) => /^01-profile.*\.webp$/.test(f))
	.sort((a, b) => readFileSync(join(DIST, b)).length - readFileSync(join(DIST, a)).length)[0];

const portrait = b64(portraitFile, 'image/webp');
const sans = b64(pick(/^geist-latin-wght-normal.*\.woff2$/), 'font/woff2');
const noise = `data:image/png;base64,${readFileSync('public/noise.png').toString('base64')}`;
const mark = readFileSync('public/favicon.svg', 'utf8');

const html = `<!doctype html><meta charset="utf-8">
<style>
  @font-face { font-family: 'Geist'; src: url('${sans}') format('woff2-variations');
               font-weight: 100 900; font-display: block; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: ${W}px; height: ${H}px; overflow: hidden;
         background: #0b0b0e; color: #f4f4f5;
         font-family: 'Geist', system-ui, sans-serif;
         -webkit-font-smoothing: antialiased; display: flex; }
  .grain { position: absolute; inset: 0; opacity: .05; z-index: 5;
           background-image: url('${noise}'); background-size: 128px 128px; }
  .left { flex: 1; padding: 64px 0 64px 72px; display: flex; flex-direction: column; }
  .mark { width: 52px; height: 52px; border-radius: 12px; overflow: hidden; }
  .mark svg { width: 100%; height: 100%; display: block; }
  h1 { margin-top: auto; font-size: 82px; font-weight: 600; letter-spacing: -.038em;
       line-height: .96; }
  .role { margin-top: 14px; font-size: 27px; font-weight: 450; letter-spacing: -.02em;
          color: #a5a5ae; }
  .status { margin-top: 34px; display: flex; align-items: center; gap: 11px;
            font-size: 19px; color: #a5a5ae; }
  .dot { width: 9px; height: 9px; border-radius: 50%; background: #4ade80; }
  .frame { width: 430px; margin: 56px 56px 56px 40px; border-radius: 18px; padding: 8px;
           background: #1c1c22; border: 1px solid rgba(255,255,255,.085);
           box-shadow: inset 0 1px 0 rgba(255,255,255,.10), 0 22px 50px -22px #000; }
  .frame img { width: 100%; height: 100%; object-fit: cover; border-radius: 11px;
               filter: grayscale(.5) contrast(1.05) brightness(1.02); }
</style>
<div class="grain"></div>
<div class="left">
  <div class="mark">${mark}</div>
  <h1>Golam<br>Kibria</h1>
  <div class="role">Software Engineer</div>
  <div class="status"><span class="dot"></span>Open to full-time roles and freelance work</div>
</div>
<div class="frame"><img src="${portrait}" alt=""></div>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
const shot = await page.screenshot({ type: 'png' });
await browser.close();

// Rendered at 2x for crisp type, then down to the 1200x630 every platform
// actually wants. A share card is fetched by crawlers, so weight matters.
const out = await sharp(shot).resize(W, H).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
writeFileSync('public/og.jpg', out);

console.log(`public/og.jpg written — ${W}x${H}, ${(out.length / 1024).toFixed(0)}KB`);
