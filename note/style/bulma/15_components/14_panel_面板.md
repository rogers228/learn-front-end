# panel 面板

https://bulma.io/documentation/components/panel/

靈活的將組件組合，使其看起來像一個操作面板，區域集合，
尤其像一個Sidebar

```html
<nav class="panel">
  <p class="panel-heading">
    群組標題
  </p>

  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input" type="text" placeholder="搜尋">
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>

  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    所有內容
  </a>

  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    收藏項目
  </a>

  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-code-branch" aria-hidden="true"></i>
    </span>
    標籤分類
  </a>

  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-star" aria-hidden="true"></i>
    </span>
    重要內容
  </a>

  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      新增
    </button>
  </div>
</nav>

```

## 架構
nav.panel
    p.panel-heading  頭部
    panel-block   區塊 每個區塊都有分隔線
    panel-block is-active   高亮顯示目前選中的選項
    panel-icon  用來放 icon，通常是 Font Awesome

## 控制
is-active 加在 panel-block 代表目前
