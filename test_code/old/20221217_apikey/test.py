def test1():
	word = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+–*/=<>.,:;?!()[]{}#$%&@^~_|"
	lis_w = list(word)
	print(lis_w)
	keyword ='jk32%@Dk'
	len(keyword)

	# 原總表
	# 新總表
	# 位置碼
	# 1 依照位置碼 對照原總表 找出位置  
	# 2 依照位置  對照新總表 找出碼
	
	# 產生隨機位置列表 1~90
	# 將此位置轉文字 後續轉前端
	# 將keyword依照位置生成總表  其他位置採用隨機補上  後炫轉前端

	# 前端有3個碼	位置碼 與原總表碼 與 新總表

	
	print(f'word: {word}')
	print(f'word lenght: {len(word)}')

def test2():
	keyword= 'kll;'
	'''
		back everyday 隨機產生key save as json
		keyword is a list [dadaff,fdafd,dafadfda]
		保持3個


		back rotour load key
		back render to front html data-value
		front js function get key
		ajas call function get key


if __name__ == '__main__':
	test1()