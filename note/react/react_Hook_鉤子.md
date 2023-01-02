# Hook 鉤子
https://reactjs.org/docs/hooks-intro.html

代表用鉤子 勾到東西
應該是說在function component裡
還可以拿到任何其他component裡的狀態，不需要重寫組件
很像函數裡可去取用 公用變數
Hook  讓 component 不用使用class降低門檻


## Hook 鉤子有以下

useState()   使用狀態 this is function 
useEffect()  使用效過 this is method


## 使用時機
1. hook 應寫在最頂層，保證每次一定會執行到。就算內容是空的
2. 僅在function commponent(jsx) 及 自定義hook function 使用，避免再以外的其他javascript function，會引發不如預期的錯誤，難以控制。

## 沒有寫在頂層的範例
```js
 useEffect(function persistForm() {
    // 錯誤寫法 hook 在 if 底下
    // 會導致 無法確保每次都有 執行到 useEffect
    if (name !== '') {
	    useEffect(function persistForm() {
	      localStorage.setItem('formData', name);
	    });
    }
  });
```