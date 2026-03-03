// ==UserScript==
// @name         RainForest 番茄閱讀助手
// @namespace    https://books.rainforest.org.cn/
// @version      1.0
// @description  一鍵跳轉到 Rainforest 番茄閱讀器，沒有廣告，更純淨。 可以在網頁端閱讀所有章節，不過如果遇到特別喜歡的，還是建議去官方支持一下作者哈。如果遇到無法存取的問題，可能是網路原因，最近發現部分地區的網路服務商屏蔽了網域，可以嘗試更換網路。（ 服務是使用 vercel 部署的，目前沒有解決方法，因為眾所周知的原因。 ）
// @author       RainForest
// @match        https://fanqienovel.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fanqienovel.com
// @grant        none
// ==/UserScript==

window.onload = function () {
    'use strict';

    // 獲取當前頁面的 URL
    const url = window.location.href;

    // 獲取 URL 中的數字
    const num = url.match(/\d+/g);

    // SVG 圖標
    const svgIcon = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="6.25" fill="#000F99"/>
            <path d="M13.1119 11.7833C13.9859 10.9572 14.5312 9.78708 14.5312 8.48956C14.5312 5.98702 12.5025 3.95831 10 3.95831H6.67708C6.25413 3.95831 6.04265 3.95831 5.8811 4.04063C5.739 4.11303 5.62347 4.22856 5.55106 4.37066C5.46875 4.53221 5.46875 4.74369 5.46875 5.16665V14.8333C5.46875 15.2563 5.46875 15.4677 5.55106 15.6293C5.62347 15.7714 5.739 15.8869 5.8811 15.9593C6.04265 16.0416 6.25413 16.0416 6.67708 16.0416H12.8549C13.4209 16.0416 13.7039 16.0416 13.8897 15.9232C14.0523 15.8194 14.169 15.6574 14.216 15.4704C14.2697 15.2567 14.1802 14.9882 14.0012 14.4512L13.1119 11.7833Z" fill="white"/>
        </svg>
    `;

    // 判斷連結類型（如連結中包含 page 則為書籍詳情頁，如連結中包含 reader 則為章節內容頁）
    if (url.indexOf('fanqienovel.com/page') !== -1) {
        // alert('這是書籍詳情頁');

        // 創建跳轉連結
        const newUrl = 'https://books.rainforest.org.cn/?bookId=' + num; // 書籍詳情頁

        // 創建一個 a 標籤
        const a = document.createElement('a');
        a.className = '';
        a.style = '';
        // 設置 a 標籤的 href 屬性
        a.href = newUrl;

        // 創建一個 div 標籤
        const div = document.createElement('div');
        div.className = 'float-wrapper-item float-wrapper-helper';

        // 設置 div 的 innerHTML 為 SVG 代碼
        div.innerHTML = svgIcon;

        // 創建另外一個 div 標籤
        const div2 = document.createElement('div');
        div2.className = '';
        div2.textContent = '閱讀助手';

        // 按照 a > div > svg + div 的順序包裹元素
        a.appendChild(div);
        div.appendChild(div2);

        // 找到要插入按鈕的 div.float-wrapper 元素
        const divInfo = document.querySelector('div.float-wrapper');

        // 將按鈕插入到 div.info 中
        if (divInfo) {
            divInfo.appendChild(a);
        }
    } else if (url.indexOf('fanqienovel.com/reader') !== -1) {
        // alert('這是章節內容頁');
        // 創建點擊事件函數
        function handleButtonClick() {
            window.location.href = newUrl;
        }

        // 創建跳轉連結
        const newUrl = 'https://books.rainforest.org.cn/chapter?itemId=' + num; // 章節內容頁

        // 找到閱讀工具欄
        const toolbar = document.querySelector('#app .reader-toolbar > div');

        // 創建按鈕
        const autoScrollBtn = document.createElement('div');
        autoScrollBtn.className = 'reader-toolbar-item rainforest';
        autoScrollBtn.title = '閱讀助手';
        autoScrollBtn.innerHTML = svgIcon + '<div style="font-size: 12px;">閱讀助手</div>';

        // 補充樣式
        autoScrollBtn.style.gap = '5px';
        autoScrollBtn.style.justifyContent = 'center';
        autoScrollBtn.style.cursor = 'pointer';

        // 將按鈕插入閱讀工具欄
        toolbar.appendChild(autoScrollBtn);

        // 給按鈕添加點擊事件
        autoScrollBtn.addEventListener('click', handleButtonClick);
    }
};
