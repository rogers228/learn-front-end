# field 區塊 使用水平排列

field 預設為垂直排列，水平排列要使用 field is-horizontal


```html
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input
          class="input is-static"
          type="email"
          value="me@example.com"
          readonly
        />
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">To</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input" type="email" placeholder="Recipient email" />
      </p>
    </div>
  </div>
</div>
```



## 架構
    field is-horizontal   水平  左右並排
        field-label   左元素  所有左元素會相同寬度
            label.label
        field-body    右元素  會自動稱滿
            field
                p.control
                    input


