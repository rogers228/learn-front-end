# @attach 附加工廠，附加響應

它確實艱深難懂，但是它是svelte5最困難卻也是最厲害的武器。
附加工廠不好理解，我幫它命名為`附加工廠、附加響應`。

它能夠為元素，附加上任何動作。若訂閱了store就能夠響應ui，裡面的動作隨你發揮，就是能響應。

```
// 外部核心邏輯

// 專為 svelte @attach 使用的函數
// component 內使用方式:
// import { store_core, toggleId2Disable, class_from_core } from './store_core.js';

// <button class='button is-rounded is-capitalized' onclick={func} data-id={data_id}
//   {@attach class_from_core()}
// >
// </button>

import { writable } from 'svelte/store';

export const store_core = writable({
    id_1: {
        is_disable: false,
    },
    id_2: {
        is_disable: true,
    },
});

export function toggleId2Disable() {
    store_core.update(obj => {
        // 直接改變 id_2 的狀態
        obj.id_2.is_disable = !obj.id_2.is_disable;
        return obj
    });
}

export function class_from_core() {
    // 專為 svelte @attach 使用的函數

    return (node) => {
        const target_id = node.dataset.id;
        const class_name = 'is-disabled-by-core'; // 欲添加的 classname
        const attr_name = 'disabled'; // 欲添加的 attribute
        if (!target_id) {
            console.error('storeClassAttach: 必須在元素上設置 data-id 屬性！');
            return;
        }

        const update_class = (obj) => { // obj 是 store_core
            const status = obj[target_id]; // 依據 target_id 尋找
            const is_should_disabled = status && status.is_disable; //是否該禁用 (短路求值)
            node.classList.toggle(class_name, is_should_disabled);
            node.toggleAttribute(attr_name, is_should_disabled);
        };

        // 訂閱 store_core 時執行一次 update_class 並回傳 unsubscribe 方法
        const unsubscribe = store_core.subscribe(update_class);

        // 返回清理函數
        return () => {
            unsubscribe(); // 取消訂閱
            node.classList.remove(class_name); // 清除class
            node.removeAttribute(attr_name);   // 清除attr
        };
    }
}

```