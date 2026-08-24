# shadcn-svelte Components 分類與複雜度排序清單

本清單將 shadcn-svelte 官網的元件依照「功能屬性」進行分類，並在每個分類中按照「簡單到複雜」的維度進行排序。

---

## 1. 基礎與通用 (Basic & General)
最基本的 UI 原子 elements，主要用於內容展現、操作點擊或視覺分割。

* **Badge** - 標籤 / 徽章
* **Button** - 按鈕
* **Separator** - 分隔線
* **Avatar** - 頭像
* **Kbd** - 鍵盤快捷鍵標示
* **Skeleton** - 骨架屏 / 加載占位圖
* **Aspect Ratio** - 等比例容器

---

## 2. 表單與輸入 (Form & Inputs)
用於收集使用者輸入資料，從單一標籤到複合型驗證表單。

* **Label** - 表單標籤
* **Input** - 單行輸入框
* **Textarea** - 多行文字輸入框
* **Checkbox** - 複選框
* **Radio Group** - 單選按鈕組
* **Switch** - 開關按鈕
* **Slider** - 滑桿
* **Native Select** - 原生選擇器
* **Toggle** - 切換按鈕
* **Toggle Group** - 切換按鈕組
* **Input OTP** - 一次性驗證碼輸入框
* **Select** - 自訂下拉選擇器
* **Form** - 表單（含驗證整合）

---

## 3. 資料展示與結構 (Data Display & Structure)
用於排版、資訊區塊化以及結構化資料展示。

* **Card** - 卡片容器
* **Alert** - 警示提示框
* **Accordion** - 折疊面板 / 手風琴
* **Collapsible** - 可折疊區塊
* **Table** - 資料表格
* **Carousel** - 輪播圖
* **Data Table** - 進階資料表格（支援排序、篩選、分頁）

---

## 4. 導覽與選單 (Navigation & Menus)
引導使用者在網站不同頁面或功能模組間切換。

* **Breadcrumb** - 麵包屑導航
* **Tabs** - 標籤頁
* **Pagination** - 分頁列
* **Menubar** - 頂部選單列
* **Navigation Menu** - 導航選單
* **Sidebar** - 側邊欄導航

---

## 5. 懸浮、對話框與疊加層 (Overlays & Modals)
浮動於主要內容之上的互動元件，包含簡單提示到複雜的彈窗。

* **Tooltip** - 文字提示框
* **Hover Card** - 懸停預覽卡片
* **Popover** - 氣泡彈窗
* **Dropdown Menu** - 下拉功能選單
* **Context Menu** - 右鍵選單
* **Alert Dialog** - 確認對話框
* **Dialog** - 對話框 / 彈窗
* **Sheet** - 側邊滑出面板
* **Drawer** - 抽屜式面板

---

## 6. 反饋與通知 (Feedback & Status)
向使用者呈現即時系統狀態、進度或通知訊息。

* **Progress** - 進度條
* **Spinner** - 載入中轉圈指示器
* **Sonner** - 吐司通知 (Toast)

---

## 7. 高級互動與佈局 (Advanced Interactive & Layout)
包含複合型操控、拖曳排版或圖表呈現等高複雜度元件。

* **Resizable** - 可調整大小版面 (Panel)
* **Calendar** - 日曆
* **Range Calendar** - 日期範圍選擇日曆
* **Date Picker** - 日期選擇器
* **Command** - 快速指令面板 (Cmd+K)
* **Chart** - 圖表組件



# 容器類 

## 1. 區塊與邊框容器 (Structural Containers)


### Card（卡片）
使用習慣：最萬用的資訊區塊。通常包含 Header（標題）、Content（內容主體）與 Footer（底部按鈕群）。

常見內容：統計數據、產品資訊、登入表單、設定選項。

### AspectRatio（等比例容器）

使用習慣：用來強制子元件（例如圖片、影片、Map、Canvas）保持固定寬高比（如 16:9 或 1:1），避免圖片載入時引發頁面排版跳動（Layout Shift）。

### Resizable（可調整大小版面）

使用習慣：用於主從式介面（Master-Detail），讓使用者透過拖拽分隔線自由調整左右或上下區塊的寬度（如 IDE 編輯器、Email 郵件內文預覽區）。


## 2. 摺疊與隱藏容器 (Disclosure Containers)

### Accordion（手風琴）

使用習慣：適合多組平行且同類型的內容（如 FAQ、多層級篩選）。使用者通常一次只關注其中一區。

### Collapsible（可折疊區塊）

使用習慣：比 Accordion 更輕量，適用於單一區塊的展開/收合（如：「顯示更多細節」、「查看歷史紀錄」）。

### Tabs（標籤頁容器）

使用習慣：適合在同一個空間內，根據分類切換不同的完整視圖（如：個人設定裡的「帳號 / 安全性 / 通知」）。


## 3. 浮動與彈窗容器 (Overlay & Modal Containers)

### Dialog（對話框 / Modal）

使用習慣：需要使用者高度專注的任務。開啟時背景會被遮罩（Backdrop）鎖定。內部常塞入：修改資料表單、確認刪除警告、詳細資料檢視。

### Sheet / Drawer（側邊抽屜 / 底部抽屜）

使用習慣：比 Dialog 擁有更多空間。適合複雜的長表單或側邊輔助功能（如：購物車清單、高級篩選條件、行動裝置上的導航選單）。

### Popover（氣泡彈窗）

使用習慣：非破壞性的輕量彈窗，通常指向觸發點旁邊。內部常塞入：日期選擇器 (Date Picker)、顏色選擇器、小型快速設定選單。

###  Tooltip / Hover Card（提示與懸停卡片）

使用習慣：僅用於唯讀（Read-only）資訊展示（如：使用者頭像懸停出現個人名片、按鈕懸停出現說明文字）。內部不建議放置可互動的表單輸入框。