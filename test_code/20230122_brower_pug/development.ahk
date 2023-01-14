; 開啟 或 重啟網路服務器

#SingleInstance force
SetTitleMatchMode, 2

; Menu, Tray, Icon, flask.ico
Menu, Tray, Add, 重啟server, open_or_reload

^p:: ; 重啟
    open_or_reload()
    Return

goto_edge(){
	
	if WinExist("Microsoft​ Edge"){
	    WinActivate
	    Send, ^1 ; go first tab
	    Sleep 500
	    Send, ^r ; reload page
	}
	else{
		MsgBox, 尚未開啟Edge!
	}
}

runbat(){
    ; 啟動bat
    Run, development.bat
}

open_or_reload(){
	Send, ^s ; save
	if WinExist("development_for_pug"){
		; Msgbox, 已開啟
		WinKill   ; 關閉
		Sleep 500 ; Waits 1 second
		runbat()  ; 啟動bat
		Sleep 500 ; Waits 1 second
		goto_edge()
	}
	else{
		; Msgbox, 尚未開啟
		runbat()  ; 啟動bat
	}
}