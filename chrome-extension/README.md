# Bloomberg Interview Resources

A simple Chrome extension for stashing the URLs you care about while prepping for a Bloomberg (or any) interview. Paste a link, hit save, and it shows up as a clickable list right inside the popup.

## What it does

- Adds a toolbar button that opens a small popup.
- Type or paste a URL into the input box.
- Click **SAVE INPUT** to add it to your list.
- Each saved URL becomes a clickable link that opens in a new tab.

It's intentionally tiny — no accounts, no sync, no tracking. Just a quick scratchpad for interview-prep links (LeetCode problems, system-design articles, company pages, etc.).

## Install it (load unpacked)

Chrome doesn't require the Web Store for personal extensions — you can load this folder directly:

1. Download or clone this repo so you have the `chrome-extension/` folder on your machine.
2. Open Chrome and go to `chrome://extensions`.
3. Turn on **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked**.
5. Select the `chrome-extension/` folder.
6. The "Bloomberg Interview Resources" icon appears in your toolbar. Pin it for easy access (click the puzzle-piece icon → pin).

The same steps work in Edge and Brave via their respective `extensions` pages.

## How to use it

1. Click the extension icon to open the popup.
2. Paste a URL (e.g. `https://leetcode.com/problems/two-sum`).
3. Click **SAVE INPUT**.
4. Click any saved link to open it in a new tab.

## Heads up: saved links are not persistent (yet)

Right now the saved URLs are kept in an in-memory list. **When you close the popup, the list is cleared.** This makes it good for collecting links during a single session, but it won't remember them across sessions.

Want them to stick around? Swap the in-memory array for `chrome.storage.local` (or `localStorage`) in [index.js](index.js) — load saved leads on open and write them on save. That's the natural next improvement.

## Project structure

| File | Purpose |
| --- | --- |
| [manifest.json](manifest.json) | Extension config (Manifest V3) — name, version, popup, icon. |
| [index.html](index.html) | The popup markup: input, save button, and the link list. |
| [index.js](index.js) | Handles saving input and rendering the clickable links. |
| [index.css](index.css) | Popup styling. |
| [images/bloomberg-icon.svg](images/bloomberg-icon.svg) | Toolbar icon. |

## Built with

Plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.
