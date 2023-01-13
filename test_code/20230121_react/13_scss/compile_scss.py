import sys
import sass
sys.path.append(r'C:\Users\USER\Documents\learn-front-end\test_code\20230121_react')
from config import *

def main():
    '''
        將 dir_sass 資料夾當中的scss  編譯為css
        output_style option
        nested 嵌套的
        expanded 展開
        compressed 壓縮的width: 100%;stage
        '''
    sass.compile(dirname=(PATH_SASS, PATH_WEB_CSS),
                 output_style='expanded')  # 編譯


if __name__ == '__main__':
    main()
    print('scss compile finished')
