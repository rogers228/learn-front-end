# 選項式與組合式api
在SFC裡寫控制區段是使用<script>包覆，它有2種寫法
1. 選項式 API (Options API)
2. 組合式 API (Composition API)

## 選項式
採用舊式。類似class寫法，具有強烈的程式邏輯風格，就多了難度
sfc裡variable需要包在class裡，裡面的函數取用外部variable，需使用this.variable (class寫法)

## 組合式(Composition)
採用較為親切的方式。沒有class寫法
新手就建議使用組合式了
只需要標籤改為<script setup>
sfc裡的函數就能取用外部的variable (vue幫你處理了)
