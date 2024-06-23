# html轉jade
pug 原來稱為jade 
python中BeautifulSoup 可以將html轉換為jade

```python
    from bs4 import BeautifulSoup
    soup = BeautifulSoup("<div><p>Hello World</p></div>", 'html.parser')
    print(soup.prettify())
```

可以作為 csr + ssr 的實作