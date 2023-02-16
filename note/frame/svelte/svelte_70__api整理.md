# svelte_api整理
:冒號之後不能空白喔


$:     最後執行
$:{}   最後執行區塊
on:    監聽事件
bind:  雙向綁定
bind:this={}  綁定自己
class:name={}   class綁定

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

## 轉場
transition:mathod         轉場
transition:mathod="{}"   大括號內部為表達式
in:mathod    針對進場
out:mathod   針對退場