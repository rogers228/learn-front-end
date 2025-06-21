# pagination_分頁按鈕

https://bulma.io/documentation/components/pagination/

他是專門呈現，分頁按鈕，例如 1, 2, 3 , 下一頁

```html
<nav class="pagination" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
```

nav.pagination
    a.pagination-previous 上一個
    a.pagination-next   下一個
    ul.pagination-list   清單
    li a.pagination-link   連結
    li span.pagination-ellipsis  刪節號

## 控制

is-current  當前的
html tag disabled  禁用
.is-disabled  僅樣式禁用  不推薦


is-centered  寫在 nav.pagination
is-right

is-rounded 圓形按鈕