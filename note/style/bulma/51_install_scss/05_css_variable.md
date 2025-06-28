# css variable（執行時變數）

## runtime edit
bulma 從1.0後使用了 CSS variable 變數
讓style 可以在 runtime 修改，加強了只能在scss編譯時期修改的做法，
這是非常現代化的方法，故可以更方便的逕行切換

## 變數覆寫

在link bulma 之後寫style，就能蓋掉bulma的 css變數了

```html
<head>
  <meta charset="UTF-8">
  <title>button</title>
  <link rel="stylesheet" href="/bulma-custom-full.css">
  <style>
    :root {
      --bulma-primary-h: 200deg;
      --bulma-primary-s: 100%;
      --bulma-primary-l: 30%;
    }
  </style>

</head>
```

