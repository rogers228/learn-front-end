# dropdown_下拉選單

https://bulma.io/documentation/components/dropdown/

一個下拉式選單，不依賴html select，能乘載更多元素，

select在不同的瀏覽器，風格並不一致，無法客製細節樣式，例如箭頭，間距


```html
    <div class="dropdown is-active"> <!-- 下拉選單的控制使用 is-active-->
      <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu"> <!-- 下拉選單的按鈕 -->
          <span>Dropdown button</span>  <!-- 預設標題 -->
          <span class="icon is-small"> <!-- 下拉圖式 -->
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu"> <!-- 下拉選單的菜單 -->
        <div class="dropdown-content"> <!-- 下拉選單的菜單內容 -->
          <a href="#" class="dropdown-item"> Dropdown item </a> <!-- 下拉選單的菜單項目 -->
          <a class="dropdown-item"> Other dropdown item </a>    <!-- 下拉選單的菜單項目 -->
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>  <!-- 下拉選單的菜單項目 -->
          <a href="#" class="dropdown-item"> Other dropdown item </a>  <!-- 下拉選單的菜單項目 -->
          <hr class="dropdown-divider" />  <!-- 分隔線 -->
          <a href="#" class="dropdown-item"> With a divider </a> <!-- 下拉選單的菜單項目 -->
        </div>
      </div>
    </div>

```


dropdown    📦 主容器，整個 dropdown 組件都包在這裡
    dropdown-trigger    🎯 觸發按鈕的容器，放一個 <button> 用來觸發顯示/隱藏 menu
    dropdown-menu      下拉選單的外殼，預設隱藏（靠 is-active class 顯示）
        dropdown-content    📦 下拉內容容器，有白底 + 陰影效果，用來包 item
            dropdown-item   📌 每一個項目（通常是 <a> 或 <div>），可以點選
            dropdown-divider    ➖ 項目分隔線，用來區分選項群組


dropdown-item div 可以容納更多元素

is-active     選定開啟
is-hoverable  懸停開起