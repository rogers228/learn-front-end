# 系統主題

使用者的 Dark Mode 切換通常指的是 作業系統的主題設定

淺色模式（Light Mode）：當系統設定為淺色時，prefers-color-scheme: light 會生效。
深色模式（Dark Mode）：當系統設定為深色時，prefers-color-scheme: dark 會生效。
Bulma 內建了對這個媒體查詢的支援，當你的網站應用 Bulma 時，它會自動偵測使用者的系統主題並

```css
:root {
  --bulma-body-background-color: white;
  --bulma-body-text-color: black;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bulma-body-background-color: #121212;
    --bulma-body-text-color: #e0e0e0;
  }
}
```


## 手動控制 dark mode
```
<button id="theme-toggle">切換模式</button>

<script>
  const toggleButton = document.getElementById('theme-toggle');

  toggleButton.addEventListener('click', () => {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

  // 頁面載入時，根據 localStorage 記住使用者的選擇
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
</script>
```


