# 物件與介面 (Interface & Type)

## 使用 Interface 嚴格定義物件結構

```ts
// 用 interface 定義使用者資料
interface User {
  id: string;
  name: string;
  email?: string; // ? 代表可選屬性 (Optional)
}

const currentUser: User = {
  id: 'usr_123',
  name: 'Alex'
};

```


## 使用type


二、 為什麼現在很多人偏好寫 type？
在早期的 TypeScript，社群普遍習慣用 interface 來定義物件。但到了現代（包含 SvelteKit 官網與很多現代專案），越來越多人習慣「統一用 type」，主要原因有兩個：


```ts
type User = {
  name: string;
  age: number;
};
```



三、 實務上該怎麼選？
兩種選擇策略都很常見，你可以選擇最順手的一種：

簡化流（推薦新手/SvelteKit 開發）：
不用糾結，一律都用 type。因為 type 包含了 interface 所有的功能，寫法又統一。

傳統規範流：

定義「物件結構 / 資料庫 Model / API 欄位」➡️ 用 interface

定義「組合型別 / 狀態 / 函式參數 / 聯合型別」➡️ 用 type