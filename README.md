# Anisur Rahman Sajal — Digital Card

Mobile-first bio website for an NFC card. Plain HTML/CSS/JS, no build step.

## Live site (GitHub Pages)
1. Push to GitHub.
2. Repo → **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
3. Site opens at `https://sakib69alive.github.io/Anisur-Rahman/`.

## NFC card
Write the live URL above to the card as a **URL/Web link** record (any NFC writer app, e.g. *NFC Tools*).

## Editing
Everything lives in [`js/config.js`](js/config.js):

- **Add a contact app** (Facebook, email, imo, Viber, …): paste its link in that entry's `href`. It appears on the page and in the saved contact automatically.
- **Add cars / properties**: fill the `listings` array of that business (photos go in `assets/`).
- Change text, roles, about, phone — same file.

The QR code uses the page's real address automatically, so it stays correct if the domain changes.
