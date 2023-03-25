```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Base64 Image Example</title>
  </head>
  <body>
    <h1>Base64 Image Example</h1>
    <p>Here is an example of an image encoded in base64:</p>
    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA...">
  </body>
</html>
```

在这个例子中，<img>标签的src属性的值是一个以data:开头的URL，其中包含了base64编码的jpg图像数据。你需要将/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA...替换成你自己的base64编码字符串。当你在浏览器中打开这个HTML文件时，它将显示一个带有base64编码的图片的网页。