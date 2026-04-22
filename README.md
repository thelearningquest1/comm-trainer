# Leadership Communication Trainer (v2)

A 10-minute daily trainer that turns confused over-explainers into concise, commanding communicators over 6 months. Built as a self-contained web app — no server, no dependencies.

## What's new in v2

- **Welcome screen + guided tour.** First launch walks you through every drill, with examples and how-to-use explanations. Tap any drill's ? button later to replay the tour for just that drill.
- **Rich progress dashboard with charts.** Your BLUF score trend over time, a 5-week practice calendar, and a visual word library showing which words you've mastered.
- **Per-tab colour identity.** Each drill has its own visual world — purple for BLUF, amber for Reframe, teal for Word, blue for Listen, coral for Pressure, pink for Presence.
- **Live word counter.** As you type in BLUF and Reframe, a real-time counter shows if you're on track (green under 30, red over).
- **Bigger typography, more visuals.** Higher information density, less scrolling, clearer hierarchy.
- **Streak pill always visible.** The purple streak indicator at the top keeps you aware of your run.

## The six drills

1. **BLUF** (Bottom Line Up Front) — answer first, explain second. Five-signal waffle meter.
2. **Reframe** — cut a waffled paragraph to one sentence + add the "so what".
3. **Word** — one new leadership word per day with spaced repetition (73-word library).
4. **Listen** — a daily question to take into a real conversation.
5. **Pressure** — practise composure under challenge.
6. **Presence** — 1-minute pre-meeting ritual.

## Host on GitHub Pages — get it on your phone

### Upload to GitHub

1. Create a free account at [github.com](https://github.com).
2. Create a new public repository (any name, e.g. `comm-trainer`).
3. Upload all five files: `index.html`, `trainer.js`, `manifest.json`, `icon.svg`, `README.md`.
4. Go to **Settings → Pages** in the repo.
5. Set source to **Deploy from a branch**, branch to `main`, folder to `/ (root)`. Save.
6. Wait ~60 seconds. GitHub will show your live URL (e.g. `https://username.github.io/comm-trainer/`).

### Install on your phone

**iPhone:** Open the URL in Safari → Share → Add to Home Screen.

**Android:** Open in Chrome → three-dot menu → Add to home screen / Install app.

You now have a full-screen app on your home screen. Opens in ~1 second, works offline after the first load.

## Daily routine

Morning (10 min):
- **BLUF** — 2 min
- **Reframe** — 2 min
- **Word** — 2 min (new word or review, the app decides)
- **Listen** — read today's question, take it into your day
- **Pressure** — 1 min
- **Presence** — 1 min before your most important meeting

## 6-month trajectory

- **Months 1–2:** BLUF and Reframe are your focus. Build the habit of leading with the conclusion.
- **Months 3–4:** Listening and vocabulary take over. 60+ words cycling in review.
- **Months 5–6:** Pressure and Presence become primary. Prepared becomes real.

## Your data

Everything saves locally on the device you use — day count, BLUF score history, learned words, active days. Use one device consistently. The Progress tab has an export button if you want a JSON backup.

## Customising

All content (prompts, waffle examples, word list, listening questions, pressure scenarios) lives in arrays at the top of `trainer.js`. Edit freely to fit your own context. Push to GitHub, and your phone version updates within a minute.

## Files

- `index.html` — structure and styling (~19 KB)
- `trainer.js` — all logic, tour content, charts (~26 KB)
- `manifest.json` — enables "add to home screen"
- `icon.svg` — app icon
- `README.md` — this file

No external dependencies. No server required. No accounts. Works offline.
