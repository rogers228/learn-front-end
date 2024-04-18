# include
整個區塊包含進來，引用整個區塊，維護單一位置即可，減少出錯


``` css
@mixin flex_c{
    display: flex;
    flex-direction: column;      // 垂直
    justify-content: flex-start; // 上
    align-items: left;           // 左
}

@mixin flex_csc{
    display: flex;
    flex-direction: column;      // 垂直
    justify-content: flex-start; // 上
    align-items: center;         // 置中
}

body {
    @include flex_csc;
}
```

