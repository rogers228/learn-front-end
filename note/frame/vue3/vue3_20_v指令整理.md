# vue特殊指令

在<template>中

{{ variable}}              綁定 variable 至值  (可為表達式)

v-bind:class="variable"    綁定 variable 至屬性
:class="variable"          等效上  綁定屬性簡寫 :

v-on:click                 事件
@click                     等效上  事件簡寫

v-model 綁定 使用者輸入 與 資料
v-if
v-for


## api
ref()      讓variable即時更新
reactive() 讓object即時更新
computed() 讓variable即時計算ref(), reactive() 後即時更新




關鍵字
mount      山  渲染
props      接收
template   樣板
components 組件