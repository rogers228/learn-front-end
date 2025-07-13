# bindable雙向綁定_父狀態_子引數.md

雙向綁定試指 父的狀態值當作為引數，傳遞給子component,
當 子component 修改 其值時，
該 父的狀態值 一併改變。

props 預設為單向，無雙向綁定，
愈達到雙向綁定，有以下條件

## 雙向綁定條件

1. 父做一個$state()狀態，為component的引數
2. 父傳遞引數時，使用加上 bind:key={}

3. 子的$props引數的預設值設定為 $bindable()
4. 子設定為bind:value={value}

