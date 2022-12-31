import os
from functools import partial
from config import *

code_js_path = partial(os.path.join, PATH_JAVASCRIPT)
web_js_path = partial(os.path.join, PATH_WEB_JAVASCRIPT)

def compile_javascript_full():
	files = os.listdir(PATH_JAVASCRIPT)
	lis_comp =[e for e in files if e[:1]=='_']

	js = ''
	for script in lis_comp:
		js += f'\n// ----------{script[1:]}----------\n'
		with open(code_js_path(script), "r", encoding='utf-8') as f:
			js += f.read() + '\n'

	with open(web_js_path('all.js'), "w", encoding='utf-8') as f:
		f.write(js)

def main():
	compile_javascript_full()
	print('compile javascript finished')

if __name__ == '__main__':
	main()