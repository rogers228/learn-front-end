# 拖拉
拖拉的動作有區分 起始 與 目標

## element 要設定可以拖拉
<div draggable=true>


## 起始
on:dragstart： 當使用者開始拖曳時觸發。            ---->1
on:dragend： 當使用者放開物件時觸發。              ---->6

## 目標
on:dragenter：當拖曳物件進入目標元素時觸發。        ---->2
on:dragleave：當拖曳物件離開目標元素時觸發。        ---->4
on:drop：     當拖曳物件放置在目標元素上時觸發。    ---->5
on:dragover： 當被拖曳物件在可拖曳區域內移動時     ---->3


## 行動裝置
on:touchstart - 當使用者開始觸摸時觸發。
on:touchmove - 當使用者在觸摸時移動手指時觸發。
on:touchend - 當使用者放開手指時觸發。


