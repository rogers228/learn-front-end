# Stores整理

有以下三種
1. writable 可讀寫
2. readable 僅可讀及內部寫
3. derived  衍生，依據其他store的資料更新

都有
subscribe訂閱方法，可以使用$variable 等同subscribe



## 訂閱及取消訂閱

subscribe訂閱方法要寫

export const store_bookmarks = writable([]); // store
let s_bookmarks;
store_bookmarks.subscribe((val) => s_bookmarks=val); // s代表 subscripe 訂閱

unsubscribe = store_bookmarks.subscribe((val) => s_bookmarks=val); 訂閱 並 返回取消訂閱方法

onDestroy(() => unsubscribe()); //component銷毀時 執行取消訂閱