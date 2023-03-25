# svelte_api整理

## 重要
:冒號之後不能空白喔

## 整理
$:     最後執行
$:{}   最後執行區塊
on:    監聽事件
bind:  雙向綁定
bind:this={}  綁定自己
class:name={}   class綁定
class:className(className_&_variable_boolean)
sylye: 內置style屬性寫法
:global() 不處理class
:global{ } 全域  括號裡面可以寫css style

## 特殊
$variable 訂閱store


## 事件
on:click      滑鼠點擊
on:mousemove  滑鼠移動到
on:mousedown  滑鼠點擊按下去
on:mouseup    滑鼠點擊放開

on:introstart  動畫進場開始
on:introend    動畫進場結束
on:outrostart  動畫退場開始
on:outroend    動畫退場結束

on:animationend 元素的動畫結束

## 轉場
transition:mathod         轉場
transition:mathod="{}"   大括號內部為表達式
in:mathod    針對進場
out:mathod   針對退場

## element action做動
use:mathod
use:mathon="{argv}"

<input on:keydown={handleKeydown}> 可省略""雙引號

## svelte html teg
<slot name="address">  插槽

let:child_prop_value={variable_name}  接收子組件的參數
{$$slots.name}檢查取得插槽內文