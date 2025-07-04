# IndexedDB 

瀏覽器專用的本地db，類似mongoDB，
定位是較大的暫存，並非永久DB。

## IndexedDB 架構

```
db 資料庫
--store 類似資料表 table
----js object 類似一筆資料
```

# IndexedDB 概念
Database        資料庫 一個網站下可以建立多個 IndexedDB 資料庫（不常見）
Object Store    資料表（Table）  一個資料庫中可有多個 store，儲存不同類型資料
JS Object        (Record)  一筆資料（Row）   每筆資料是 JSON 格式，會有主鍵（key）與欄位
keyPath         主鍵（Primary Key） 每筆資料必須有唯一 key，可以自動生成或指定欄位
Index           索引（Index）   類似 SQL 的 CREATE INDEX，加速查詢用
Transaction     資料庫交易（Transaction）  所有操作都需要用交易包裝，可選 readonly 或 readwrite