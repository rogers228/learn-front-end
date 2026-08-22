## colors 顏色

https://tailwindcss.com/docs/colors



## 顏色類型
bg-sky-500（背景顏色）
text-slate-800（文字顏色）    color
border-slate-200（邊框顏色）  border-color
outline-* 外輪廓



## 顏色
blue (藍色)：最常用的品牌主色、按鈕、連結（例：bg-blue-600）。
indigo (靛青色 / 靛藍)：比 blue 更有質感與科技感（例：text-indigo-500）。
sky (天藍色 / 淺藍)：爽朗、安全的視覺感受。
cyan (青色 / 藍綠)：常用於科技感、數據圖表。
red (紅色)：錯誤提示、刪除按鈕、警告（例：text-red-500）。
amber (琥珀色 / 暖黃)：比純黃色更適合網頁閱讀的警告色（例：bg-amber-100）。
orange (橘色)：活潑、吸引注意力的行動按鈕（CTA）。
yellow (黃色)：警示、星星評分。

green (綠色)：成功狀態、完成、安全（例：text-green-600）。
emerald (祖母綠 / 翠綠)：現代 UI 設計非常受歡迎的高質感綠色。
teal (藍綠色 / 鴨綠)：常用於醫療、健康、質感的品牌色。
lime (萊姆綠 / 螢光綠)：高能量、潮牌、新銳設計感。
purple (紫色)：創意、高貴、社群軟體（例：text-purple-500）。
violet (羅蘭紫 / 偏藍紫)：極具現代感與高級感的紫色。
fuchsia (洋紅色 / 桃紅)：亮眼、極具視覺衝擊力。
pink (粉紅色)：浪漫、女性化、活潑標籤。
rose (玫瑰紅)：
slate (石板灰 - 帶冷藍調)：最推薦！科技感、預設的高級灰色（例：text-slate-700）。
gray (標準灰 - 中性調)：最經典的通用灰色。
zinc (鋅灰 - 微偏冷硬)：適合 Dark Mode（黑夜模式）或簡約工業風。
neutral (純粹中性灰)：不帶任何色彩偏向。
stone (暖石灰 - 帶暖黃/棕調)：適合復古、人文、溫暖風格。



## 顏色階梯數值
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


## 調整不透明度

bg-black/75



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