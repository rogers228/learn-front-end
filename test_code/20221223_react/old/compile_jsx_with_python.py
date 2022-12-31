# https://babeljs.io/
# https://github.com/facebookarchive/react-python
from react import jsx

def test1():
	with open('like_button.jsx', 'r', encoding='utf-8') as f:
		source = f.read()
	# print(source)

	js = jsx.JSXTransformer().transform_string(source)
	# print(js)

	with open('like_button.js', 'w', encoding='utf-8') as f:
		f.write(js);

	print('compile jsx is finished.')

if __name__ == '__main__':
	test1()