# $derived 作用域

Svelte 5 引入 Runes 的最大核心哲學是 「通用響應性（Universal Reactivity）」——意思是 $derived 是一等公民，它在 .svelte 元件內和 .svelte.ts 檔案裡的運作方式完全一模一樣。

## 1.寫在 .svelte 元件內（區域性派生）

作用域 該元件獨享（Local Scope）  


```ts
<!-- ItemCard.svelte -->
<script lang="ts">
  let { price, discount } = $props();

  // 這個折價後的計算只在這個 Card 元件裡面用，直接寫在 .svelte 就好
  let finalPrice = $derived(price * discount);
</script>

<div>折價後價格：${finalPrice}</div>

```


## 2. 寫在 .svelte.ts 檔案內（全域或跨元件派生）
全域或實例化共享（Shared Scope）

```ts
// cart.svelte.ts
class CartState {
  items = $state([]);

  // 跨元件共享的全域衍生計算，封裝在 Class 內
  totalAmount = $derived(
    this.items.reduce((sum, item) => sum + item.price, 0)
  );
}
export const cart = new CartState();
```


