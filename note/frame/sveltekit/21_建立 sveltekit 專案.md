# 建立專案


cd /d C:\Users\USER\Documents

npx sv create ispc_core2


Which Svelte app template? Skeleton project（乾淨的基礎範本
Add type checking?  Yes, using TypeScript syntax（推薦使用 TypeScript
Additional options: 可依個人需求選擇 ESLint、Prettier、Tailwind CSS 等。



*  What would you like to add to your project? (use arrow keys / space bar)
|  [+] prettier (formatter - https://prettier.io)   自動排版對齊
|  [ ] eslint
|  [ ] vitest
|  [ ] playwright
|  [+] tailwindcss
|  [+] sveltekit-adapter
|  [ ] drizzle
|  [ ] better-auth
|  [ ] mdsvex
|  [ ] paraglide
|  [ ] storybook
|  [ ] ai-tools
|  [ ] experimental


*  tailwindcss: Which plugins would you like to add?
|  [+] typography (@tailwindcss/typography)  文字美化排版外掛
|  [+] forms             表單元件歸零與美化外掛

*  sveltekit-adapter: Which SvelteKit adapter would you like to use?
|  > auto (@sveltejs/adapter-auto)
|    node
|    static
|    vercel
|    cloudflare  V
|    netlify

*  sveltekit-adapter: Are you deploying to Workers (assets) or Pages?
|  > Workers (Recommended way to deploy to Cloudflare)  V
|    Pages
—



# clone 後
更換電腦，或clone後

npm install   安裝專案依賴套件
npx wrangler types   生成 Cloudflare Worker 型態定義檔
npx svelte-kit sync   生成 SvelteKit 路由與型態檔
npm run check   執行語法與型態檢查