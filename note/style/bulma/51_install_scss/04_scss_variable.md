# scss 變數（編譯時變數）

在 Sass 編譯階段就會轉為具體的值

```scss
@use "variables" as *;  // 從 variables 匯入所有變數


// 匯入 bulma/sass 底下所有元件
// 便且覆寫變數
@use "bulma/sass" with (
    $primary: $mycolor2
);
```