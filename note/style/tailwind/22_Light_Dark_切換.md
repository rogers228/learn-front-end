# Light/Dark 主題


## 在 src/layout.css   app.css 定義主題變數：
```
@import "tailwindcss";

@theme {
  --color-surface: #ffffff;
  --color-surface-text: #0f172a;
}

/* 透過 .dark class 翻轉變數值 */
.dark {
  --color-surface: #0f172a;
  --color-surface-text: #f8fafc;
}
```

## . 在 Svelte 5 元件中直接套用：

```
<!-- ThemeSwitcher.svelte -->
<script>
  let isDark = $state(false);

  function toggleTheme() {
    isDark = !isDark;
    // 切換 <html> 標籤上的 dark class
    document.documentElement.classList.toggle('dark', isDark);
  }
</script>

<div class="bg-(--color-surface) text-(--color-surface-text) min-h-32 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors">
  <div class="flex items-center justify-between">
    <span>當前模式：{isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</span>
    <button 
      onclick={toggleTheme}
      class="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl cursor-pointer"
    >
      切換主題
    </button>
  </div>
</div>
```