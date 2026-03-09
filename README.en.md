# Fanqie Novel Reader

<p align="center">
  <img src="https://img.shields.io/github/stars/denniemok/fanqie-novel-reader?style=for-the-badge&color=yellow" alt="Stars">
  <img src="https://img.shields.io/github/v/release/denniemok/fanqie-novel-reader?style=for-the-badge&color=blue" alt="Release">
  <img src="https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/demo-fqnr.pages.dev-orange.svg?style=for-the-badge" alt="Demo">
</p>

**[中文](README.md) | English**

An ad-free Fanqie Novel online reader with no registration or Chinese phone number required. Supports multi-chapter download and TXT export across mobile and desktop devices.

> [!NOTE]
> This site does not have MTL yet. Use Google Translate or AI translation plugins in your browser as an alternative. **We plan to add MTL in the future — stay tuned!**

<details>
<summary><b>TomatoMTL vs FQNR</b></summary>

While TomatoMTL is powerful, it requires login and contains ads. FQNR is a lightweight, ad-free alternative that doesn't require registration. It focuses on providing fast access to raw text directly from Fanqie Novel. Though you will need to find your own ways to do the translations at the moment.
</details>


## 📢 Quick Start

👉 Try it here: <https://fqnr.pages.dev>

<p align="center">
  <img src="https://i.imgur.com/OwM0o2ul.png" width="24%" alt="Preview 1">
  <img src="https://i.imgur.com/iUC48s8l.png" width="24%" alt="Preview 2">
  <img src="https://i.imgur.com/JjPwI30l.png" width="24%" alt="Preview 3">
  <img src="https://i.imgur.com/gam1lGpl.png" width="24%" alt="Preview 4">
</p>


## ✨ Features

- **Ad-Free**: No ads, just reading.
- **No Install**: Runs entirely in your browser.
- **No Login**: No sign-up or Chinese phone number required.
- **Responsive**: Works great on desktop, tablet, and mobile.
- **Clean UI**: Simple design to help you focus on the story.
- **Local Storage**: Your history and progress stay in your browser.
- **Customizable**: Adjust font size, type, and brightness.
- **Batch Download**: Preload chapters and manage them in the catalog.
- **TXT Export**: Save your downloaded chapters as TXT files.
- **Stay Updated**: See ratings, comments, and the latest updates.


## 🧩 Usage

1. Visit [Fanqie Novel](https://fanqienovel.com) and find a book of your interest.
2. Copy the numeric ID from the URL, for example:
   ```
   https://fanqienovel.com/page/123456789?...
   ```
   The Book ID is `123456789`.

3. Paste the Book ID or full URL into the textbox on the homepage.
4. Click "Start Reading".
5. Your reading history appears on the homepage, so you can continue where you left off.


## 🛠️ Development

```bash
npm install
npm run dev
```

- Visit `http://localhost:5173`.
- The app calls the Fanqie API directly — no backend needed.


## 🚢 Deployment

```bash
npm run build
```

- Static files are in `dist/`.
- Deploy them to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.


## 📁 Structure

```
src/
├── components/         # UI parts (book, catalog, chapter, etc.)
├── contexts/           # State management (downloads, toasts)
├── hooks/              # Custom React hooks
├── pages/              # Main pages
├── services/           # API calls
└── utils/              # Helper functions
```

- Inspired by [fanqienovel-book](https://github.com/kailous/fanqienovel-book).
- API provided by [Fanqie-novel-Downloader](https://github.com/POf-L/Fanqie-novel-Downloader).


## ⚠️ Notes

> [!IMPORTANT]
> **Disclaimer**: This project is for personal use only. Do not use it commercially or for any illegal purposes. You are solely responsible for any risks or legal consequences. The author and contributors are not liable for any loss or damage resulting from its use.

- Please follow local laws and the terms of use of the source website.
- Downloaded content is for personal reading only. Delete files after reading and do not repost or distribute them to respect copyright.


## 📋 License

This project is licensed under the [MIT License](LICENSE). You may use the source code with attribution and include the license notice.


## 💬 Feedback

Have a question or suggestion? Open an issue on [GitHub Issues](https://github.com/denniemok/fanqie-novel-reader/issues).
