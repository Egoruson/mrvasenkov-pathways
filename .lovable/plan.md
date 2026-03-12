

## Plan: Cookie Consent Banner with Yandex.Metrika Blocking

### Approach

The key requirement is that Yandex.Metrika must NOT load until the user consents. This means the script must be removed from `index.html` and loaded dynamically only after consent.

### Changes

**1. `index.html`** — Remove the Yandex.Metrika script from `<head>`. Keep the `<noscript>` tag in `<body>`.

**2. New `src/components/CookieConsent.tsx`** — A fixed bottom-right banner:
- Background `#0F2240`, rounded corners, cookie emoji 🍪, text matching the screenshot
- "Хорошо" button (light/white style) to accept
- On accept: save consent to `localStorage`, load Yandex.Metrika dynamically, hide banner
- On mount: check `localStorage` — if already consented, load Metrika immediately and don't show banner

**3. `src/App.tsx`** — Import and render `<CookieConsent />`.

### Cookie Consent Logic
```
if localStorage("cookie_consent") === "true":
  → load YM immediately, no banner
else:
  → show banner, block YM
  → on "Хорошо" click: set localStorage, load YM, hide banner
```

### Banner Design (per screenshot)
- Fixed bottom-right, small card, `#0F2240` bg, white text
- Cookie emoji + text about cookies and analytics
- "куки" as a link (underlined)
- "Хорошо" button on the right side

