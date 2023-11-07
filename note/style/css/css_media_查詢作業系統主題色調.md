# css media 查詢作業系統主題色調

`prefers-color-scheme`媒體查詢有三個可能的值：

1. `light`：表示用戶系統設置為較亮的顏色主題。
2. `dark`：表示用戶系統設置為較暗的顏色主題。
3. `no-preference`：表示用戶沒有明確的顏色方案偏好，或系統沒有設置特定的顏色方案。

這些值可以幫助開發人員根據用戶的顏色偏好調整網頁的外觀和感覺。使用這些值，開發人員可以在網頁上應用適合用戶偏好的主題，提供更好的用戶體驗。

```css
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```