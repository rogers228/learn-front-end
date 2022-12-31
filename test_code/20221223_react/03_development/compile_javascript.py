import os

def test1():
	files = os.listdir(r'C:\Users\USER\Documents\learn-front-end\test_code\20221223_react\15_javascript')
	lis_comp =[e for e in files if e[:1]=='_']
	

	print(files)
	print(lis_comp)

if __name__ == '__main__':
	test1()