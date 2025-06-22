# field 區塊

https://bulma.io/documentation/form/general/

field  他是一個區塊， 他不是form，也不是 control
field  他是一個區塊，他通常包含了 label, control

field 區塊，為了使所有裝置，所有瀏覽器相同，
bulma使用 field 作為區塊，control 做為控制項容器，使其風格統一

通常是垂直排列，水平排列請參閱下篇



```html
<form>
  <div class="field">
    <label class="label">使用者名稱</label>
    <div class="control">
      <input class="input" type="text" placeholder="請輸入使用者名稱">
    </div>
  </div>

  <div class="field">
    <label class="label">密碼</label>
    <div class="control">
      <input class="input" type="password" placeholder="請輸入密碼">
    </div>
  </div>
</form>

```
## 結構

form 表單 html tag
  field  區塊
    label   標籤
    div.control  控制項(輸入框)
      input   輸入框