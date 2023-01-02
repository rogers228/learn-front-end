from react import jsx
import os
from functools import partial
import PySimpleGUI as sg
from config import *

sg.theme('SystemDefault')
code_jsx_path = partial(os.path.join, PATH_JSX)
code_js_path = partial(os.path.join, PATH_JAVASCRIPT)

def compile_jsx():
	files = os.listdir(PATH_JSX)
	lis_comp =[e for e in files if e[:1]=='_']

	js = ''
	for script in lis_comp:
		js += f'\n// ----------{script[1:]}----------\n'
		with open(code_jsx_path(script), 'r', encoding='utf-8') as f:
			source = f.read()
		js += jsx.JSXTransformer().transform_string(source)
 
	with open(code_js_path('_component.js'), "w", encoding='utf-8') as f:
		f.write(js)

def main():
	try:
		compile_jsx()
		print('compile jsx finished')
	except:
		sg.popup_error('compile jsx is error!')

if __name__ == '__main__':
	main()
