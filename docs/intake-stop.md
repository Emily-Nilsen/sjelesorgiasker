# Intake-stop / summer-closure runbook

This document explains the **intake-stop** feature: the date-controlled closure of
the "Ta kontakt" booking form, with a waiting-list notice and a site-wide banner.

It is written so that **Claude Code can read it and carry out changes**, and so a
human can understand what was set up. It lives in the repo (not in `public/`), so
it is **never served to visitors** of the website.

---

## What it does

During a configured date range:

- The booking form in the **"Ta kontakt"** section is **removed** and replaced by a
  notice headed **"Venteliste og inntaksstopp"**. (The form is removed, not just
  disabled, so it genuinely cannot be submitted.)
- A fuchsia **banner** appears at the very top of every page with the same message.

Outside that range, the site behaves exactly as normal: the form is shown and the
banner is gone. The transition happens **automatically** on the configured dates —
no deploy is needed for it to switch on or off, as long as the dates are already set.

**Currently configured:** closed from **12 June 2026** through **20 August 2026**
(both days inclusive), reopening automatically on **21 August 2026**. This was a
**one-time** closure for summer 2026 (not recurring) at the client's request.

---

## The files

| File | Role |
|------|------|
| `src/lib/intakeStatus.js` | **The only place dates live.** Holds `CLOSED_FROM` / `CLOSED_UNTIL` and the logic. Edit this to change/disable the closure. |
| `src/components/IntakeBanner.jsx` | The top banner. Edit here to change the banner wording. |
| `src/components/Contact.jsx` | The contact section. The notice text (the box that replaces the form) lives in the `intakeClosed ? (...) : (...)` block. Edit here to change the in-form notice wording. |
| `src/pages/index.jsx` | Renders `<IntakeBanner />` at the top of the page. |

### How the dates are stored

Dates are UTC instants chosen to match **Norwegian local time** (CEST, UTC+2, which
applies all summer). The pattern is `Date.UTC(year, monthIndex, day, hour-2, min)`
where `monthIndex` is **0-based** (January = 0, June = 5, August = 7).

```js
// 12 June 2026, 00:00 Norwegian time  ->  11 June 22:00 UTC
const CLOSED_FROM  = Date.UTC(2026, 5, 11, 22, 0, 0)
// 21 August 2026, 00:00 Norwegian time -> 20 August 22:00 UTC (so 20 Aug is the last closed day)
const CLOSED_UNTIL = Date.UTC(2026, 7, 20, 22, 0, 0)
```

`CLOSED_UNTIL` is the **reopening instant** (exclusive). To keep "through the 20th
inclusive", set it to **00:00 Norwegian time on the day AFTER** the last closed day.

---

## Previewing without changing the live behaviour

Append **`?intake=closed`** to any URL (e.g. `https://<site>/?intake=closed`) to see
the closed state on demand, even outside the configured dates. This is a preview
helper only: it can **force the closed state on**, but it can **never force the form
open** on the live site, so it cannot be used to bypass a real closure. Nothing else
exposes it; a normal visitor will never trigger it by accident.

There is also a **local-only** counterpart, **`?intake=open`**, for previewing the
**reopened form** during a closure (handy for testing the form itself while the
summer stop is active). It works **only under `next dev`** — the production build
ignores it (guarded by `process.env.NODE_ENV === 'production'` in `isPreviewOpen()`),
so it can **never** reopen the form on the deployed site. Use it at
`http://localhost:3000/?intake=open`.

---

## Recipes

After any edit below, **verify and deploy** (see the last two sections).

### A. Take the notice down NOW (reopen early)

The client wants intake reopened before the configured end date.

In `src/lib/intakeStatus.js`, set `CLOSED_UNTIL` to a time **in the past** (or equal
to `CLOSED_FROM`). Simplest: make the whole window already over.

```js
const CLOSED_FROM  = Date.UTC(2026, 5, 11, 22, 0, 0)
const CLOSED_UNTIL = Date.UTC(2026, 5, 11, 22, 0, 0) // same as FROM => never closed
```

The form returns immediately and the banner disappears once deployed.

### B. Extend or shorten the closure (change the end date)

Change only `CLOSED_UNTIL`. Set it to **00:00 Norwegian time on the day after** the
new last-closed day. Example — extend the last closed day to **15 September 2026**:

```js
const CLOSED_UNTIL = Date.UTC(2026, 8, 15, 22, 0, 0) // closed through 15 Sep 2026
```

(September = month index 8.) Then update the **dates shown in the wording** in
`src/components/IntakeBanner.jsx` and `src/components/Contact.jsx` so the text matches
(search for "20. august" and "21. august").

### C. Repeat next summer (or any new range) with different dates

1. In `src/lib/intakeStatus.js`, set both `CLOSED_FROM` and `CLOSED_UNTIL` to the new
   range, following the `Date.UTC(year, monthIndex, day, hour-2, min)` pattern.
   Remember: `CLOSED_FROM` = 00:00 Norwegian time on the first closed day;
   `CLOSED_UNTIL` = 00:00 Norwegian time on the day **after** the last closed day.
   - If the range falls in **winter** (CST, UTC+1) instead of summer, use `hour-1`.
2. Update the visible dates in the wording in `IntakeBanner.jsx` and `Contact.jsx`
   (both the banner line and the notice box mention the period and the reopen date).
3. Verify and deploy.

### D. Change only the wording (not the dates)

- Banner text: `src/components/IntakeBanner.jsx`.
- Notice box (replaces the form): the `intakeClosed ? (...)` branch in
  `src/components/Contact.jsx`.

### E. Remove the feature entirely

If the client never wants this again and you want a clean codebase:

1. In `src/pages/index.jsx`: remove the `<IntakeBanner />` line and its import.
2. In `src/components/Contact.jsx`: remove the `useIntakeClosed` import and the
   `const intakeClosed = useIntakeClosed()` line, and collapse the
   `intakeClosed ? (notice) : (<>form</>)` back to just the form (`<>...</>` contents).
3. Delete `src/components/IntakeBanner.jsx` and `src/lib/intakeStatus.js`.
4. Verify and deploy.

> Easier alternative if it might come back: just apply **Recipe A** to leave it
> dormant, and keep the files.

---

## Verify before deploying

Always confirm a clean production build before pushing (Netlify runs `next build`):

```bash
npx next build      # must finish with no errors
```

Optional visual check while developing:

```bash
npm run dev
# open http://localhost:3000              -> live behaviour for today's date
# open http://localhost:3000/?intake=closed -> preview the closed state
# open http://localhost:3000/?intake=open   -> preview the reopened form (dev only)
```

---

## Deploy

The site is connected to Netlify via GitHub. **Pushing to `main` triggers a
production build and publish** — there is no separate deploy step and no Netlify CLI
in this project.

```bash
git add -A
git commit -m "Adjust summer intake-stop (describe the change)"
git push origin main
```

Netlify picks up the push, runs the build, and publishes automatically (usually a
couple of minutes). Watch the deploy in the Netlify dashboard for this site.
