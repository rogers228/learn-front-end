import sass

def main():
    dir_sass = r'C:\Users\user\Documents\Rogers\learn-front-end\example\check url'
    dir_css  = r'C:\Users\user\Documents\Rogers\learn-front-end\example\check url'
    '''
        將 dir_sass 資料夾當中的scss  編譯為css
        output_style option
        nested 嵌套的
        expanded 展開
        compact 袖珍的
        compressed 壓縮的
        '''
    sass.compile(dirname=(dir_sass, dir_css), output_style='expanded') # 編譯


if __name__ == '__main__':
    main()
    print('compile finished')