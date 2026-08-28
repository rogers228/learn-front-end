# setContext

不需要逐層傳遞參數，讓父元件可以直接「廣播」資料，任何下層的子元件都能隨時「接收」。

1. 僅限初始化階段設定 在 script區塊, runtime onclick 無法使用
2. 向下作用（單向樹狀傳播）：資料只會傳給該元件底下的子孫元件，兄弟元件或父元件是拿不到的。
3. Key-Value 對應：第一項參數是自訂的標示（Key，字串或 Symbol），第二項參數是傳遞的內容（Value）。




```
setContext('dev:highlight', () => isHighlight);
```

1. 'dev:highlight' key-vlaue, key就是dev  vaulue就是highlight
2. () => isHighlight  給它一個函數(如何取得)，而不是固定值，它的意思是：「當你呼叫我時，我會去讀取當前最新的 isHighlight 值並回傳給你。




# getContext

```
// 取得傳下來的 Getter 函式
const getIsHighlight = getContext<() => boolean>('dev:highlight');

// 透過 $derived 將函式執行的結果轉化為動態響應
const isHighlight = $derived(getIsHighlight?.() ?? false);
```

<() => boolean> 是 ts型別保護，明確宣告 這是函數(回傳值是boolean)
<T> 必須寫緊隨在函數名稱後方

const isHighlight = $derived(getIsHighlight?.() ?? false);
?.()  代表如果它是 null 或 undefined，就直接停止並回傳 undefined，絕對不要拋出錯誤。 
?? false 代表 「如果左邊算出來的結果是 null 或 undefined，就採用右邊的值；否則就採用左邊的值。」
它像python dict.get('key', None)
千萬不要使用 || ，因為它有bug

因為開發非常容易有 null 或 undefine，getIsHighlight?.() ?? false 完全是一種保護安全的寫法，
乍看之下很花俏

```js 
// 為了避免 TypeError: Cannot read property of undefined 爆頁面
// 必須寫標準安全寫法
let isHighlight = false; // 設定預設值  

if (typeof getIsHighlight === 'function') { // 型別判斷
  const result = getIsHighlight(); // 取值
  if (result !== null && result !== undefined) { // 判斷值
    isHighlight = result; // 賦值
  }
}
```

```js
    getIsHighlight?.() ?? false  // 一行替換以上
```