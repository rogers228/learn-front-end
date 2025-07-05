```js
// 安全載入主程序
if (document.readyState === 'loading') {
    // document.readyState
    // "loading"   網頁還在載入中（DOM 還沒完成）
    // "interactive"   DOM 已完成，但資源（圖片等）可能尚未載入完
    // "complete"  所有 DOM 和資源都已完成載入
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}

function main() {

}
````
