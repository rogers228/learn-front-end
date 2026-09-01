# Zod
Zod 是一個專為 TypeScript 打造的 「數據結構驗證工具 (Schema Declaration and Validation Library)」。

簡單用一句話概括它的任務：「TypeScript 負責在寫程式時（編譯期）預防 Bug，而 Zod 負責在程式真正執行時（運行期）擋下壞資料。」
在開發 Web 應用時，你的程式碼總會遇到「來自外部、無法 100% 信任的資料」，例如：
CMS 輸出的 JSON Payload（正如我們剛才討論的情境）
使用者填寫的表單（Form Inputs）
打第三方 API 或後端回傳的 JSON
網址上的 URL 查詢參數（Query Parameters）


TypeScript 救不了 Runtime：TypeScript 的型別只存在於開發環境。程式打包成 JavaScript 上線後，型別資訊會被完全擦除。如果 API 回傳了 null 但你的 TS 寫 string，程式立刻爆開。

他就是驗證資料的，執行前先拿規則去驗

在沒有 Zod 之前，工程師往往要寫兩次型別宣告：一次給 TS，一次寫runtime if 檢查：
```ts
// 1. 給 TS 看的型別
type User = { name: string; age: number };

// 2. 自己手寫 Runtime 驗證 (非常冗長)
function validateUser(data: any): data is User {
  return typeof data.name === 'string' && typeof data.age === 'number';
}
```

使用 Zod 後的優雅寫法：
你只需要定義一次 Zod Schema，TypeScript 的型別會由 Zod 自動推導出來，不需要寫兩遍！

```ts
import { z } from 'zod';

// 1. 用 Zod 定義 Schema (運行期防護)
export const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18) // 甚至可以直接檢查年齡必須 >= 18
});

// 2. 從 Schema 自動推導出 TypeScript 型別 (編譯期防護)
export type User = z.infer<typeof UserSchema>; 
// 這行等於自動生成了 type User = { name: string; age: number }

```

