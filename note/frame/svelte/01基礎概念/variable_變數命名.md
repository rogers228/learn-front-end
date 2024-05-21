# 命名原則

## Store
可以用來傳遞，引用，建議以 store_ 開頭 符合 store字面，
字面意義明確，可以來使用

第二以儲存的用途類型，資料data，狀態state，介面ui

store_data_user  store 專門用來儲存data user
store_state_
store_ui_

## Subscript
在template中用來即時反應store，建議以 s_ 開頭，字節簡短，來表取自store的subscript
字面意義明確，為subscript

第二以簡單為主

store_data_user // store
let s_user; store_data_user.subscript(s_user => val = s_user);


# static 靜態文件
來源是靜態的，例如js, head 通常為 const 不可變資料，建議以 static_ 開頭 符合 static字面，
static_groups


## alias 別名 簡寫
通常用來簡寫，建議以 a_ 開頭 符合 alias字面，
例如  let a_pg = use_prop.cmd_group; //別名
