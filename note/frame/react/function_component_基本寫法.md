# function component

像一個函數寫法的UI組件
運作概念就像函數一樣簡單

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```jsx
function some(){
	// 在jsx引用
	const element = <Welcome name="Sara" />;
}
```



引用
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
````

1. 以上是寫在jsx裡面
2. 函數命名方式規則是大駝峰 首字大寫

