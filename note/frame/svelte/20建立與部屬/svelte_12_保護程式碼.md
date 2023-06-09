# 保護程式碼

## 預設為開發模式
svelte預設會採用開發模式，這會使得瀏覽器可以查看完整的程式架構及程式碼，目的是方便偵錯。

若需要保護程式碼，應使用生產模式

## svelte編譯選項
--format：這個選項用於指定編譯後的程式碼的格式。可以選擇的值有：
- esm：生成 ES 模塊（ES Modules）格式的程式碼，這是在現代瀏覽器中使用的預設格式。
- umd：生成通用模塊定義（UMD）格式的程式碼，可以在瀏覽器和其他環境中使用。


--minify：這個選項用於最小化編譯後的程式碼。它會將程式碼中的空格、注釋和不必要的字符進行壓縮和刪除，從而減少程式碼的大小。這有助於提高應用程式的加載速度和性能。


--sourcemap：這個選項用於生成 sourcemap 文件。sourcemap 是一個包含原始程式碼和編譯後程式碼之間對映關係的文件，它可以在除錯時幫助你追踪和定位問題。在生產環境中，建議禁用 sourcemap，因為它可能暴露你的原始程式碼。



## 編譯
```
    npx svelte compile --format esm --minify --sourcemap src/App.svelte > dist/App.js
```
在這個例子中，--format 被設置為 esm，--minify 被啟用，--sourcemap 被生成。編譯後的程式碼將被輸出到 dist/App.js 文件中。

## 引用
將原來的index.html中
<script defer src='/build/bundle.js'></script>
改為你的App.js即可，要注意路徑要對






Regenerate response