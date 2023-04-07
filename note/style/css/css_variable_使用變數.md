# css variable

https://w3c.hexschool.com/blog/21985acb
宣告時，使用--variable
引用時，使用var函數包住變數

```css
:root {
  --primary: Aquamarine;
  --background-color: Teal;
}


body {
  background: var(--background-color);
}
```