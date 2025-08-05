# snippet 程式碼片段

svelte5 後 使用 snippet 取代 solt，

它比 solt 插槽 更強大，solt 僅限 整塊插入

snippet 可以插入參數

https://svelte.dev/docs/svelte/snippet


## 函數插值
用 snippet 就像 function 一樣可以使用 object 作為引數，還能是訂預設值

```html
      {#snippet field({ caption, label, value, placeholder, type, disabled = false })}
        <div class="field">
          <label class="label">{caption}
            <div class="control">
              <input class="input" {type} data-label={label} {value} {placeholder} {disabled}
                oninput={() => handle_input(event)}/>
            </div>
          </label>
        </div>
      {/snippet}


      {@render field({ caption: 'URL', label: 'url', value: url, placeholder: 'https://example.com', type: 'url', disabled: true })}
      {@render field({ caption: '標題', label: 'title', value: title, placeholder: '網站標題', type: 'text' })}
      {@render field({ caption: '標籤', label: 'labels_str', value: labels_str, placeholder: '多個標籤可用逗號分隔', type: 'text' })}
```