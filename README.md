# pouya.buzz

A plain static personal blog. No dependencies or build step.

## Edit it yourself

- Edit `dist/index.html` to change the homepage, notes, links, or about text.
- To publish an essay, copy `dist/writings/a-place-to-put-things.html`, rename it, replace its title/date/body, then add its link under Writings in `dist/index.html`.
- For Persian text, use `<article lang="fa" dir="rtl">`.
- Commit and push your changes to GitHub. Once connected, Cloudflare Pages automatically publishes updates to your production branch.

The initial essay is explicitly marked as a starter post. Replace or delete it before public launch.

## Your handwriting fonts

The shared `dist/fonts.css` is ready for two regular-weight WOFF2 files:

- `dist/fonts/pouya-latin.woff2`: English and Danish, including Æ Ø Å æ ø å and punctuation.
- `dist/fonts/pouya-persian.woff2`: Persian, including پ چ ژ گ ک ی, Persian digits and punctuation, and OpenType shaping/positioning tables for joining and marks.

Export your fonts from FontForge, then supply WOFF2 webfont files under these names (convert exported TTF/OTF to WOFF2 if needed). Only add font files you own or have a web embedding licence for. The site uses standard fallbacks until the files exist.

Use `<article lang="da">` for Danish and `<article lang="fa" dir="rtl">` for Persian. For a Persian paragraph in an English article use `<p lang="fa" dir="rtl">`. Preview Persian joining, mixed Latin text, and zero-width non-joiners before publication. Bold headings use browser-synthesized bold until you add a separate bold font.

## Upload to GitHub

1. Create an empty GitHub repository named `pouya-buzz`.
2. Extract this ZIP. Upload README.md and the entire dist folder to the repository root (not the ZIP itself). Keep the folder structure.
3. Commit the upload.

## Cloudflare Pages

Create a Pages project using Git integration and select this repository.
- Production branch: main (or your repository default branch).
- Framework preset: None.
- Build command: leave empty.
- Build output directory: dist.

After deployment, add pouya.buzz under Custom domains and follow Cloudflare's DNS instructions. The DNS records previously provided for ChatGPT Sites are for a different host. Do not use those records for Cloudflare Pages.

## Preview locally

Open dist/index.html in your browser. No server or package install is needed.

## Files

- dist/index.html: homepage, notes and links.
- dist/writings/a-place-to-put-things.html: starter essay to copy or replace.
- dist/fonts.css: custom font definitions and language-specific fallbacks.
- dist/fonts/: put your WOFF2 files here when ready.

Posts in this version are HTML, not Markdown. Editing files in GitHub and committing changes also triggers deployment once Cloudflare is connected.
