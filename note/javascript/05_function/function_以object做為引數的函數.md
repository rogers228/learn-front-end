# 以object做為引數的函數

當我維護舊專案時，經常要先了解以下：引數有幾個，有何用途，引數index位置，是否有預設值，這些都是必須閱讀研判，非常吃力，如果採用object做為引數，就能很清楚的判讀。

推薦此寫法

1. 允許改變引數位置
2. 輕鬆設定預設值
3. 可讀性強，物件須強制寫key

```js
function func(obj) {
  // 檢查傳遞的物件中是否有特定的鍵，如果沒有則設置預設值
  obj.key1 = obj.key1 || 'default1';
  obj.key2 = obj.key2 || 'default2';
  
  // 如果物件中有 'a' 和 'b' 鍵，將它們的值互換
  if ('a' in obj && 'b' in obj) {
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
  }

  return obj;
}

// 範例使用
func({ key1: 'value1', key2: 'value2', a: 1, b: 2 });
```

## 預設值
```js
function printUserInfo({ name = 'Unknown', age = 0, email = 'N/A', ...rest }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
  console.log('Other info:', rest);
}

預設值（避免 key 不存在時報錯）

收集其他欄位到 rest（例如 gender）

printUserInfo({ name: 'Bob', gender: 'male' });

```