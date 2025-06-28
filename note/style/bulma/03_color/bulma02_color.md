# bulma color

is-primary  基本的 標準的
is-link     連結
is-info     資訊
is-success  成功
is-warning  錯誤
is-danger   危險


## 文字顏色
class="has-text-primary"

## 背景顏色
class="has-background-info"

## 按鈕 按鈕、標籤、通知的 顏色
class="button is-primary">


# 自訂色
可以使用scss來自訂顏色，一次改變整個網站

## 顏色設定
bulma 1.0以後 使用 SHL 顏色，也就是h色調，s飽和度，l亮度，
#ff6600 已經不再支援，故修改顏色應使用
hsl(24, 100%, 50%)
$primary-h: 24;
$primary-s: 100%;
$primary-l: 50%;