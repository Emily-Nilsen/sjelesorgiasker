# CLAUDE.md

Project guidance for Claude Code. (Not served to site visitors — repo-only.)

## Project

Marketing site for **Sjelesorg i Asker** — Next.js 13 (pages router) + Tailwind,
content partly from Sanity, deployed to **Netlify**. Deploy = push to `main`
(Netlify auto-builds and publishes; there is no Netlify CLI here).

## Intake-stop (summer closure of the contact form)

The "Ta kontakt" booking form can be closed for a date range, replacing it with a
"Venteliste og inntaksstopp" notice plus a top banner. Dates live **only** in
`src/lib/intakeStatus.js`. Preview any time with `?intake=closed` in the URL.

**If asked to take the notice down early, extend/shorten it, repeat it next summer
with new dates, change the wording, or remove it — follow the step-by-step recipes
in [`docs/intake-stop.md`](docs/intake-stop.md).** That runbook is the source of
truth; keep it updated if the feature changes.

## Before deploying

Run `npx next build` and confirm it succeeds before pushing to `main`.
