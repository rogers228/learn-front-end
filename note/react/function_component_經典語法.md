# function_component_經典語法

```jsx
function Example() {
  // 宣告狀態
  const [count, setCount] = useState(0); 

  // 渲染後執行的效果 或 渲染後執行事件
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // 輸出區段 通常為 html
  // html裡的表達式用 {}
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