# 在python單獨使用pug

## 安裝
```
pip install pypugjs
```

## 使用
```python
from pypugjs.ext.pug import PugJSExtension

template_pug = "html\n  body\n    h1 Hello World"
pug = PugJSExtension()
html = pug.process(template_pug)
print(html)

```
