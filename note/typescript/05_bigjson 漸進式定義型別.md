# big json 漸進式定義型別

```json
{
  "status_code": 200,
  "system_logs": { ... }, // 龐大且不需要的資料
  "payload": {
    "tracking_id": "trk_9988",
    "internal_flags": [1, 0, 1, 0], // 不需要
    "order": {
      "id": "ord_2026_001",
      "payment_gateway_metadata": { ... }, // 不需要
      "customer": {
        "profile": {
          "id": "usr_555",
          "display_name": "Alex",
          "raw_auth_hash": "a8f9c0...", // 不需要
          "preferences": { ... } // 不需要
        }
      },
      "items": [
        {
          "sku": "ITEM-A",
          "title": "Svelte 5 實戰手冊",
          "pricing": { "amount": 580, "currency": "TWD", "tax_rate": 0.05 },
          "warehouse_location": "A-12-3" // 不需要
        }
      ]
    }
  }
}
```


## 用 TypeScript 建立「漸進式深層型別」
我們利用以下兩個技巧來保持彈性：

[key: string]: unknown：代表「這個層級還有其他欄位，但我不關心它們是什麼」。
Record<string, unknown>：給完全不需要拆解的未知物件使用。

```ts
// 1. 最深層：只定義商品會用到的欄位
type OrderItem = {
  sku: string;
  title: string;
  pricing: {
    amount: number;
    currency: string;
    [key: string]: unknown; // 忽略 tax_rate 等其他計價屬性
  };
  [key: string]: unknown; // 忽略 warehouse_location 等
};

// 2. 中間層：只定義顧客會用到的 display_name
type CustomerProfile = {
  id: string;
  display_name: string;
  [key: string]: unknown; // 忽略 raw_auth_hash, preferences 等
};

// 3. 核心層：串接深層巢狀結構
type OrderDetail = {
  id: string;
  customer: {
    profile: CustomerProfile; // 帶入深層的 Profile 型別
    [key: string]: unknown;
  };
  items: OrderItem[]; // 帶入深層的 Item 陣列型別
  [key: string]: unknown; // 忽略 payment_gateway_metadata 等
};

// 4. 最外層 API 回應型別
export type BigApiResponse = {
  payload: {
    order: OrderDetail; // 深入到第三層的 order
    [key: string]: unknown;
  };
  [key: string]: unknown; // 忽略 system_logs 等最外層資料
};
```

原來寫type，還能使用變數組合，不需要寫一個大巢狀type


## SvelteKit 前端頁面使

當你在 SvelteKit 前端頁面使用這個型別時，深層欄位依然享有 100% 精準的自動補全與型別保護：


```html
<!-- src/routes/order/+page.svelte -->
<script lang="ts">
  import type { BigApiResponse } from '$lib/types';

  // 模擬從後端 API 取得資料並標註型別
  export let data: { apiRes: BigApiResponse };

  // 1. 提取深層資料（安全且有型別提示）
  const order = data.apiRes.payload.order;
  const customerName = order.customer.profile.display_name; // 提示：string
</script>

<h1>訂單編號：{order.id}</h1>
<p>顧客名稱：{customerName}</p>

<h2>購買項目：</h2>
<ul>
  {#each order.items as item}
    <li>
      {item.title} - ${item.pricing.amount} {item.pricing.currency}
    </li>
  {/each}
</ul>
```