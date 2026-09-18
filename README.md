# Cosmic-Oracle (web)

Static website version of the Windows Cosmic-Oracle app.

The original zip contained only `CosmicOracle.exe` (Python 3.12 + tkinter, packed with PyInstaller). This folder is the public-web recreation of that app: same colors, same five readings, same question-and-omen flow.

## Put it on the internet

### Option A — Netlify (easiest)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page
3. You get a live URL such as `https://random-name.netlify.app`

Or connect a GitHub repo and deploy from there.

### Option B — GitHub Pages
1. Create a GitHub repository
2. Upload these files to the root (or a `docs` folder)
3. Settings → Pages → Deploy from branch

You will get `https://YOURUSER.github.io/REPO/`

### Option C — Vercel
1. https://vercel.com/new
2. Import the folder or repo
3. Deploy

## Appear on Google
Google does not list a site just because it exists. After you have a live URL:

1. Replace `YOUR-DOMAIN` in `robots.txt`, `sitemap.xml`, and the canonical tag in `index.html`
2. Open https://search.google.com/search-console
3. Add the property (your URL)
4. Verify ownership
5. Submit the sitemap: `https://YOUR-DOMAIN/sitemap.xml`
6. Use “URL inspection” on the homepage and request indexing

Ranking still takes time and depends on other people linking to the page. This site is prepared to be indexed; it is not guaranteed a position.

## What this version does
- Runs entirely in the browser
- Picks one of the five original oracles at random
- Appends the same “current of possibility and personal growth” line
- Needs no API key and no Windows executable
