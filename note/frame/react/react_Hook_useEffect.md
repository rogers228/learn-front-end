# useEffect() 使用效果

## 渲染後執行

在 function component 中
可使用 React.useEffect(method) 方法，會在該元件渲染後執行
引數method: 是一個method function 或 一個立即函數()=>{}


## 完整如下

```js
function Example() {
  // 宣告狀態
  const [count, setCount] = useState(0); 

  // 渲染後執行的效果 或 渲染後執行事件
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // 輸出 html
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```