from livereload import Server

PORT = 5000  # 伺服器監聽的埠號
DIRECTORY = "."  # 監聽的目錄

server = Server()

# 監聽指定目錄下的所有 HTML、CSS 和 JS 檔案
server.watch(DIRECTORY + "/*.html")
server.watch(DIRECTORY + "/*.css")
server.watch(DIRECTORY + "/*.js")

# 啟動伺服器，並監聽變更 以熱重載
server.serve(port=PORT, host="0.0.0.0")

# open http://localhost:5000