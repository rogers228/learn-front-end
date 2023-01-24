# pug語法 attr屬性

## tag(props...)
tat(a="" b="" c="")
用雙引號 "、單引號 '、反引號 \`   都行，只要它在 JavaScript 能表示合法字串。

## 單一屬性
input(type='text')
<input type="text">

## 多屬性
button(id='btn1' class='btn_m')button
<buttion id="btn1" class="btn_m">
    button
</buttion>

# 兼容css寫法

## #代表id=
button#btn1
<buttion id="btn1"></buttion>

button(id='btn1')
<buttion id="btn1"></buttion>

## #id 可再省略標籤 預設帶入為div
#btn1
<div id="btn1"></div>

## .代表class=
.btn_m
<div class="btn_m"> 

## 多個class
.btn_m .hide
<div class="btn_m hide"> 

## 布林屬性
在html中 布林屬性採用簡單寫法 有寫代表true並不會寫 disabled=true
input(disabled)
<input disabled>

## 屬性自訂一
button("data-lg"="en")
<button data-lg="en"></button>

## 函數引數 使用字串相加+
button(type='button' onclick='gotoBlog(' + val.link + ')')
