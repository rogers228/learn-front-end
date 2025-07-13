# 清除快取 重新安裝 node_modules



rd /s /q node_modules   強制刪除 node_modules 資料夾
del package-lock.json   刪除 package-lock.json
npm install             重新安裝  將依賴 package.json

npm install --legacy-peer-deps    忽略版本衝突