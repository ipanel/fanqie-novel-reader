# 番茄小說閱讀器

<p align="center">
  <img src="https://img.shields.io/github/stars/denniemok/fanqie-novel-reader?style=for-the-badge&color=yellow" alt="Stars">
  <img src="https://img.shields.io/github/v/release/denniemok/fanqie-novel-reader?style=for-the-badge&color=blue" alt="Release">
  <img src="https://img.shields.io/github/license/denniemok/fanqie-novel-reader?style=for-the-badge&color=green" alt="License">
  <img src="https://img.shields.io/badge/demo-fqnr.pages.dev-orange.svg?style=for-the-badge" alt="Demo">
</p>

**中文 | [English](README.en.md)**

**免註冊、免中國手機號、無廣告的番茄小說線上閱讀器。支援手機 / 平板 / 電腦，提供多章節下載、離線閱讀與 TXT 匯出。**

一个免注册、免中国手机号、无广告的番茄小说在线阅读器。支持多章节下载、离线阅读和 TXT 导出，可在手机、平板和电脑上使用。

An ad-free Fanqie Novel online reader with no registration or Chinese phone number required. Supports multi-chapter download, offline reading, and TXT export across mobile and desktop devices.


## 🚀 立即使用

👉 **線上版（免安裝）**：https://fqnr.pages.dev

<p align="center">
  <img src="https://i.imgur.com/OwM0o2ul.png" width="24%" alt="預覽 1">
  <img src="https://i.imgur.com/iUC48s8l.png" width="24%" alt="預覽 2">
  <img src="https://i.imgur.com/JjPwI30l.png" width="24%" alt="預覽 3">
  <img src="https://i.imgur.com/gam1lGpl.png" width="24%" alt="預覽 4">
</p>


## ✨ 功能特點

- **無廣告** — 純粹閱讀，沒有任何干擾  
- **免安裝** — 直接在瀏覽器使用  
- **免註冊** — 無需登入，也不需要中國手機號  
- **跨平台** — 支援電腦、平板與手機  
- **簡潔介面** — 乾淨、直覺、專注閱讀  
- **本地儲存** — 自動保存閱讀進度與歷史  
- **個人化設定** — 字體、大小、亮度可調整  
- **下載管理** — 支援多章節預載，方便離線閱讀  
- **TXT 匯出** — 可將已下載章節匯出為 TXT  
- **追蹤更新** — 查看評分、評論與最新更新  


## 🧩 使用方法


1. 前往 [番茄小說網](https://fanqienovel.com) 找到小說。
2. 從網址複製書籍 ID，例如：

   ```
   https://fanqienovel.com/page/123456789?...
   ```
   書籍 ID 即為 `123456789`。

3. 在首頁輸入 ID 或網址。
4. 點擊「開始閱讀」即可。
5. 歷史紀錄會自動保存，可隨時繼續閱讀。  


## 🛠️ 開發

```bash
npm install
npm run dev
```

- 開啟 `http://localhost:5173` 即可。
- 應用直接呼叫番茄小說 API，無需後端。


## 📦 部署

```bash
npm run build
```

- 靜態檔案位於 `dist/`。
- 可部署至 Vercel、Netlify、GitHub Pages 或 Cloudflare Pages。


## 📁 專案結構

```
src/
├── components/         # UI 元件 (book, catalog, chapter, etc.)
├── contexts/           # 狀態管理 (下載, Toast)
├── hooks/              # 自訂 Hooks
├── pages/              # 頁面元件
├── services/           # API 請求
└── utils/              # 工具函式
```

- 受 [fanqienovel-book](https://github.com/kailous/fanqienovel-book) 啟發重寫。
- API 由 [Fanqie-novel-Downloader](https://github.com/POf-L/Fanqie-novel-Downloader) 提供。


## ⚠️ 注意事項

> [!IMPORTANT]
> **免責聲明**：本專案僅供學習與個人使用，請勿用於商業用途或任何違法行為。使用者須自行承擔使用本程式所產生之法律責任與風險，作者及貢獻者概不負責。

- 使用前請遵守當地法規及相關網站之使用條款。
- 下載內容僅供個人閱讀使用，請勿轉載或散布；閱畢請刪除檔案，以尊重著作權。


## 📄 授權條款

本專案採用 [CC BY-NC-SA 4.0](LICENSE) 授權。使用時請註明出處，禁止商業用途，衍生作品須以相同協議釋出。


## 🐞 問題回報

歡迎至 [GitHub Issues](https://github.com/denniemok/fanqie-novel-reader/issues) 提出建議或回報問題。
