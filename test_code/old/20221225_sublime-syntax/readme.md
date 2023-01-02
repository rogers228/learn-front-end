http://ilkinulas.github.io/programming/2016/02/05/sublime-text-syntax-highlighting.html

https://stackoverflow.com/questions/49781644/custom-syntax-in-sublime-text-3

在sublime 自定義語法 使其文字高亮度顯示特定顏色


1 sublime text 菜單>工具>packages> package Development>New Syntax Definition
將開啟 語法定義(Syntax Definitions)範本
可參閱https://www.sublimetext.com/docs/syntax.html

2. 將範本儲存，預設會儲存在  名稱代表語法，副檔名需為.sublime-syntax

3. sublime text 菜單> 檢視>開啟主控台
	你將會看到主控台最後一行顯示 generating syntax summary

4. 關閉並重新開啟範例檔，將會套用高亮度顏色
	sublime text 視窗右下角 將顯示配對的語法

5. 他是以你的檔案副檔名 file_extensions 來媒合語言

6. 回到範本檔 在程式中 將游標停留在每一個特定位置，sublime text 可以感知到是屬於哪種類型，使用sublime text 菜單> 程式> 外掛程式開發>顯示節點名稱(Scope Naming)
它將根據游標停留的位置 以工具提示的方式顯示出來，你就能輕易的知道，
所有Scope Naming 可參閱https://www.sublimetext.com/docs/scope_naming.html

工具提示窗的標題 就是 scope: source.example-c

7. 你還要有配色(Color Schemes)

