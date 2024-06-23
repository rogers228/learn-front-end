# npm
pm是Node的套件管理器，如同pip是python的套件管理器


# npm init
初始化你的專案(建立json記錄檔)
其實npm init就是建立一個專用的資料夾

```
cd /d 你的目錄位置
npm init
```
用NPM 來創建的 Project 的 json檔案

```
npm init -y
```
跳過選項直接建立


# npm install 
安裝套件，會將套件及其依賴，安裝至專案資料夾，缺點檔案無法共用，但相對簡單乾淨隔離
部屬時可依照json檔直接安裝

```
npm install modname
```

# 常用指令
npm list

## 檢查當前npm版本
npm --version
npm -v

## 檢查是否應該更新npm
npm outdated -g npm

## 更新npm
有時候更新時，node必須先更新

npm install -g npm@9.5.1
npm install -g npm@10.4.0
npm install -g npm@10.8.1

## 檢查全局路徑
npm root -g

## 檢查全局第一層套件
npm list -g --depth=0

## 更新全局套件至特定版號
npm install -g svelte@4.0.5

## 從全局移除
npm uninstall -g sirv-cli
