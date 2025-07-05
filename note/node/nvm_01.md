# 下載安裝

## 安裝nvm
https://www.casper.tw/development/2022/01/10/install-nvm/

## 安裝node及npm
指定安裝本版，並設定本地版本，方可使用
安裝完畢後，npm預設也安裝好了
```
nvm install 19.5.0   (使用系統管理員執行命令視窗)
nvm use 19.5.0 

node -v 目前版本
npm -v  目前版本
nvm -v 目前版本
```


## 安裝npm


# nvm常用指令

1. nvm list available   查看可安裝的所有版本
1. nvm ls-remote：列出目前可用的遠端 Node.js 版本
2. nvm install ：安裝特定版本的 Node.js
3. nvm ls：列出本定端所安裝的 Node.js 環境
4. nvm alias default node：設定命令列預設開啟的 Node.js 版本
5. nvm use：當前命令列套用特定版本的 Node.js

# 使用nvm 更新node
nvm list available   查看可安裝的所有版本
nvm install 22.17.0  安裝node 最新版
nvm use 22.17.0  切換node 最新版
node -v 目前版本