# useState 使用狀態


```js
function Example() {
	
	// 宣告變數 count
	// 使用array包住 同時設定2個變數 這是javascript解構賦值(備註1)

	const [count, setCount] = useState(0);

}
```

一個小寫     name      變數名
一個小駝峰   setName   set方法

## 說明 useState(argv)  狀態 
useState(argv) 將回傳2個值
1. 目前值
2. 設定值的方法  用來更新
argv: 指定預設值


## 可使用多個狀態
```js
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
```

```html
  <!-- 讀取值 使用聲明式 大括號 -->
  <p>You clicked {count} times</p>

```





javascript 解構賦值
array = str.split(',')
let a = array[0]
let b = array[1]
可使用解構賦值
let [a,b] = str.split(',') // 省略了arr過客