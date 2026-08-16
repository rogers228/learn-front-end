
bg-sky-500（背景顏色）

text-slate-800（文字顏色）    color

border-slate-200（邊框顏色）  border-color


50 ~ 950

500 中間值


## 常用語意化顏色角色列表

| 語意類別 (Semantic Token) | 常用 Class 範例 | 說明與典型用途 |
| :--- | :--- | :--- |
| **Background / Foreground** | `bg-background` / `text-foreground` | 全站最基礎的頁面背景色與主要文字顏色。 |
| **Card**                    | `bg-card` / `text-card-foreground` | 卡片、區塊容器、彈窗面板的背景與文字。 |
| **Popover**                 | `bg-popover` / `text-popover-foreground` | 下拉選單 (Dropdown)、Tooltip、浮動選單背景與文字。 |
| **Primary**                 | `bg-primary` / `text-primary-foreground` | 品牌主要顏色、核心行動按鈕（CTA Button）、焦點元件。 |
| **Secondary**               | `bg-secondary` / `text-secondary-foreground` | 次要按鈕、Tag 標籤、輔助視覺區塊。 |
| **Muted**                   | `bg-muted` / `text-muted-foreground` | 弱化/柔和背景（如 Hover 效果）、次要說明文字、Placeholder。|
| **Accent**                   | `bg-accent` / `text-accent-foreground` | 選單選取狀態、高亮強調區塊、Hover 突顯背景。 |
| **Destructive / Error**      | `bg-destructive` / `text-destructive-foreground` | 危險/破壞性操作（如「刪除按鈕」、錯誤狀態提示）。 |
| **Success**                  | `bg-success` / `text-success-foreground` | 操作成功、完成狀態、綠色通關提示。 |
| **Warning**                  | `bg-warning` / `text-warning-foreground` | 警告、注意事項、黃/橘色提示區塊。 |
| **Info**                     | `bg-info` / `text-info-foreground` | 一般訊息通知、藍色資訊提示。 |
| **Border**                   | `border-border` | 卡片、分隔線、通用區塊邊框。 |
| **Input**                    | `border-input` | 表單輸入框（`<input>`、`<select>`）預設邊框。 |
| **Ring**                     | `ring-ring` | 鍵盤 Focusing 或點擊時出現的外圍光環（Focus Ring）。 |



## Tailwind v4 設定方式

``` css src/routes/layout.css

@import "tailwindcss";

@theme {
  --color-background: #ffffff;
  --color-foreground: #0f172a;
  
  --color-primary: #2563eb;
  --color-primary-foreground: #ffffff;
  
  --color-muted: #f1f5f9;
  --color-muted-foreground: #64748b;
  
  --color-destructive: #ef4444;
  --color-destructive-foreground: #ffffff;
  
  --color-border: #e2e8f0;
}

/* 深色模式變數重置 */
.dark {
  --color-background: #0f172a;
  --color-foreground: #f8fafc;
  
  --color-muted: #1e293b;
  --color-muted-foreground: #94a3b8;
  
  --color-border: #334155;
}
```