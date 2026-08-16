# 告別 writable 改用 Svelte 5 的 $state

副檔名 `.svelte.ts `  它代表「啟用 Svelte 5 響應式編譯的 TypeScript 檔案」。




```js
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}


class CartState {
  // 1. 核心狀態欄位 (Reactive State)
    // 定義需要被監聽、響應的核心資料。
    // 底層使用 JavaScript 的 Proxy 包覆。無論是修改屬性 (item.quantity += 1) 或是陣列操作 (push, pop)，都能被精準追蹤。
  items = $state<CartItem[]>([]);   // <CartItem[]>：TypeScript 的型別宣告   ([])：初始值，設定為一個空的陣列 []。
  discountCode = $state<string | null>(null); // <string | null>：TypeScript 的聯合型別（Union Type），代表這個值可能是字串（例如 "SUMMER50"），也可能是 null（代表目前沒有套用折扣碼）。 初始值 null
  isCheckout = $state(false);  // Boolean 初始值 false  TypeScript 會自動推斷 isCheckout 就是 boolean 型別，不需要多寫 <boolean>

  // 2. 派生數據  衍生數據 (Derived State)
  totalAmount = $derived(
    this.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  totalCount = $derived(
    this.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  // 3. 狀態修改方法 (Actions)
  // 將所有修改狀態的業務邏輯集中收納。
  addItem(product: Omit<CartItem, 'quantity'>) {
    const item = this.items.find((i) => i.id === product.id);
    if (item) {
      item.quantity += 1; // 直觀的原生物件修改
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  }

  removeItem(id: string) {
    this.items = this.items.filter((i) => i.id !== id);
  }

  clear() {
    this.items = [];
    this.discountCode = null;
    this.isCheckout = false;
  }
}

// 4. 單例匯出 (Singleton Export)
export const cart = new CartState();

```



```html

<!-- src/routes/shop/+page.svelte -->
<script lang="ts">
  import { cart } from '$lib/cart.svelte.ts';
</script>

<div class="p-4">
  <!-- 直接讀取計算屬性，不用 $cart.totalCount -->
  <h2>購物車 ({cart.totalCount})</h2>

  <ul>
    {#each cart.items as item}
      <li class="flex gap-4">
        <span>{item.name} x {item.quantity}</span>
        <!-- 呼叫 Class 方法，語意極度清晰 -->
        <button onclick={() => cart.addItem(item)}>+</button>
      </li>
    {/each}
  </ul>

  <p>總金額：${cart.totalAmount}</p>
</div>
```



