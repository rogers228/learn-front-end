# 套件管理

通常套件會裝在本機，專案資料夾底下，每個專案各自獨立。

通常套件不會同步至github，因為太龐大，也不需要同步，
故不同電腦pull下在專案倉庫後，需安裝npm modules

## 安裝安裝 node_modules
移動至專案資料夾底下
npm install

將依據 package.json 安裝，但是不會自動更新喔
更新完畢後，在其他電腦pull專案，一樣執行此命令，它就會根據 package.json 自動更新套件。


## 查看專案套件
npm list

## 更新套件
請參閱 npm_03_npm-check_專案下的套件更新.md




