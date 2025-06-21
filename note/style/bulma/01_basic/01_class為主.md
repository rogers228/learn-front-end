# class為主

Bulma 使用「class-based」方式，所有樣式都需要手動加 class，例如 title 或 subtitle

# BEM 命名規則

BEM（Block-Element-Modifier）是一種命名規則與組織方式，用來撰寫結構清晰、可重複使用、好維護的 CSS 類別名稱。

bulma不完全依照，但風格相似

| 部分           | 說明                                                             |
| ------------ | -------------------------------------------------------------- |
| `block`      | 區塊，表示一個**獨立模組或功能單元**（例如：menu、button、card）                      |
| `__element`  | 元素，是這個區塊中的**子部件**，不能單獨存在（例如：menu\_\_item）                      |
| `--modifier` | 修飾詞，用來表達**狀態**或**變體**（例如：button--primary、menu\_\_item--active） |


```css
.block__element--modifier
```
主部件__子元素--修飾(變體)

```html

<nav class="menu">
  <ul class="menu__list">
    <li class="menu__item menu__item--active">首頁</li>
    <li class="menu__item">關於我們</li>
  </ul>
</nav>
```