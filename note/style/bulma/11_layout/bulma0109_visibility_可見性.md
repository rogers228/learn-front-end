# visibility 可見性
根據裝置的螢幕寬度，自動「隱藏」或「顯示」某些 HTML 元素，不需要自己寫 media query！

## 隱藏
.is-hidden-mobile   在手機上「隱藏」
.is-hidden-tablet   在平板上「隱藏」
.is-hidden-desktop  在桌機上「隱藏」
.is-hidden-widescreen   在超寬螢幕上「隱藏」
.is-hidden-touch    在觸控裝置（手機＋平板）上隱藏
.is-hidden-fullhd   在全高清螢幕上隱藏
.is-hidden  永遠隱藏（等同於 display: none;）

## 顯示
.is-block-mobile    僅在手機上顯示為區塊元素
.is-inline-tablet   僅在平板上顯示為 inline 元素
.is-inline-desktop  僅在桌機上顯示為 inline 元素

## size
mobile  < 768px
tablet  ≥ 769px
desktop ≥ 1024px
widescreen  ≥ 1216px
fullhd  ≥ 1408px
touch   mobile + tablet（<1024px）