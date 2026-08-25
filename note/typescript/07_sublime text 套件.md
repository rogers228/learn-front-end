


1. 必備套件安裝 (透過 Package Control)
LSP：連線到語言伺服器的橋樑。

LSP-typescript：處理 .ts / .js 檔的防護大腦。

LSP-svelte：處理 .svelte 檔內 Svelte 5 + TS 的防護大腦。

Svelte：單純提供 .svelte 檔案的語法高亮（Syntax Highlighting）。


Preferences ➔ Package Settings ➔ LSP ➔ Settings，加上這些客製化設定，只留下「紅線與提示」：
```
{
  // 只有在滑鼠移上去時才顯示型別彈窗，避免打字時畫面太亂
  "show_diagnostics_hover": true,
  
  // 在右側 Minimap 隱藏診斷標記，讓介面更乾淨
  "show_diagnostics_in_map": false,

  // 打字時自動跳出自動補全選單 (IntelliSense)
  "auto_complete_selector": "source.ts, source.tsx, source.js, source.svelte"
}
```