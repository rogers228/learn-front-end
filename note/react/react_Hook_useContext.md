# useContext() 使用內文

可以取得其他component的內文資料(html)，不必props傳入 (隔山打牛)

## 說明
```jsx
// a component
const value = useContext(SomeContextObject)
// value = useContext的值
// SomeContextObject 在任何component設定 就能將值傳過來了

```

## Context Object?
它是由 React.createContext()方法所建立的

ContextObject 底下有兩個方法()
1. Provider: 傳遞者
2. Consumer: 接收者

Context.Provider包覆一個來源component就可以傳值
Context.Consumer包覆一個所在component就可以接收來源component的值
包覆是指在return區端 使用html tag包覆

# 傳遞端
```jsx
	const ThemeContext = React.createContext()  // 建立物件名稱
	return (
		<div>
			<ThemeContext.Provider value={dark}>  //包裹住要傳遞的東西(匿名)
			  <FunctionComponent /> // 指定要傳給誰
			  <ClassComponent />    // 可以指定多個
			</ThemeContext.Provider>
		</div>
	)
```

# 接收端 使用 Consumer 接收
```jsx
	return (
		<ThemeContext.Consumer>
			<button style={dark}>
				Class Component
			</button>
		</ThemeContext.Consumer>
	)
```

# 接收端 使用 hook useContext
```jsx
 const value_class = useContext(ThemeContext) // 接收這麼簡單 僅指定物件

 return (
	<button className={value_class}> //簡化的html 
		Class Component
	</button>
 )
```