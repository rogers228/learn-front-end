# 檢查slot插槽內容
https://svelte.dev/tutorial/optional-slots

在子組件中可以使用 $$slots 內建variable,
它是一個objecct, 其key為 slot的name

取得slot中特定name的內文
```
$$slots.name
```

這樣一來就可以判斷了。
該網址範例是判斷class blooean