# calc 說明


calc()函數裡面的引數預設為字串，
固運算子 + - * / 左有應有空格
字串插值 使用 #{expression},  花括號內可帶入運算式, 變數為$header_height

```scss
height: calc(100% - #{$header_height});
```