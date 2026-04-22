# Leadership Communication Trainer

A 10-minute daily trainer for becoming a concise, commanding communicator over 6 months. Built for one person's specific profile: over-explaining, repetition to reinforce, limited vocabulary, pre-leadership trajectory.

## What it does

Six drills, ten minutes a day:

1. **BLUF** — bottom line up front. Answer first, context second. Five-signal anti-waffle analyser checks length, fillers, hedged openings, repeated words, and redundant phrases.
2. **Reframe** — read a waffled paragraph, compress to one sharp sentence with an implication ("so what").
3. **Word** — one new leadership-grade word per day, with spaced repetition. 60+ words in the library; the app schedules reviews at 1, 3, 7, 14, 30, and 90 days.
4. **Listen** — a daily question to take into a real conversation. Listening is the leadership skill individual contributors underinvest in.
5. **Pressure** — respond to a challenging scenario (interruption, challenge, being caught off-guard). Trains composure.
6. **Presence** — 2-minute pre-meeting ritual: one message, one question, one physical cue.

Your progress is stored locally in your browser. Works offline. No account, no tracking.

## Setup — get it on your phone via GitHub Pages

This is the cleanest way to run the trainer on your phone: push it to a GitHub repo, enable GitHub Pages, then add the resulting URL to your home screen.

### One-time GitHub setup

1. Create a free account at [github.com](https://github.com) if you don't already have one.
2. Create a new public repository — call it `comm-trainer` or whatever you like.
3. Upload the four files in this folder: `index.html`, `trainer.js`, `manifest.json`, `icon.svg`. You can drag them into the GitHub web uploader.
4. Go to **Settings → Pages** in your repo.
5. Under "Build and deployment", set source to **Deploy from a branch**, branch to **main**, folder to **/ (root)**. Click Save.
6. Wait about 60 seconds. GitHub will give you a URL like `https://YOUR-USERNAME.github.io/comm-trainer/`.

### Install on your phone

**iPhone:**
1. Open the URL in Safari.
2. Tap the Share button (square with an arrow pointing up).
3. Tap **Add to Home Screen**.
4. Name it something short like "Trainer" and tap Add.

**Android:**
1. Open the URL in Chrome.
2. Tap the three-dot menu.
3. Tap **Add to Home screen** or **Install app**.
4. Confirm.

You now have an icon on your home screen. Opening it launches the trainer full-screen — no browser UI, looks like a real app.

## Daily routine

Morning, 10 minutes:

- 2 min: BLUF drill
- 2 min: Reframe
- 2 min: Word (new or review — the app decides)
- Take the Listen question into your day
- 1 min: Pressure drill
- 1 min: Presence prep before your most important meeting

## 6-month trajectory

- **Months 1–2:** BLUF and Reframe are where you spend most of your focus. Build the habit of leading with the conclusion. Waffle meter should hit five greens most days by week 6.
- **Months 3–4:** Listening and vocabulary take over. You'll have 60+ words cycling through review, and the Listen habit will start reshaping how you behave in meetings.
- **Months 5–6:** Pressure and Presence become the focus. This is where prepared becomes real — you're practising the moments where waffling is most tempting.

## Progress data

The trainer stores:
- Day count
- Total reps
- Listening reps
- Words learned (with spaced-repetition level for each)

Everything lives in `localStorage` on the device you use. Use one device consistently.

You can export your progress as JSON from the Progress tab if you want a backup or to transfer between devices.

## Customising

All exercises, waffled paragraphs, word definitions, listening questions, and pressure scenarios live in arrays at the top of `trainer.js`. Edit them to fit your own vocabulary, industry, or situations. Push the change to GitHub, and within a minute your phone version updates.

## Files

- `index.html` — structure and styling
- `trainer.js` — all logic, exercises, and the spaced-repetition engine
- `manifest.json` — enables add-to-home-screen as a standalone app
- `icon.svg` — app icon

Total size: under 50 KB. No external dependencies.
