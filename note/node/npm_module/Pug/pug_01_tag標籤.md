# pug語法 tag

## tag  免封閉標籤

div
<div></div>

## tag 巢狀 已縮排為主 2個空白符為主

div
  lu
    li
<div>
  <lu>
    <li>
        
    </li>
  </lu>
</div>

## tag 巢狀 縮寫

div: p
  span
<div>
  <p>
    <span>
      
    </span>
  </p>
</div>

# 獨立close標籤
有些標籤就是獨立封閉的
img
<img />
input
<input />

# 強制獨立close標籤
原本雙標籤 強制改為獨立
button
<button></button>
button2/
<button2 />

# 直接寫標籤也行  混用
<div>
  div: p
</div>

<div>
  <div>
    <p>
    </p>
  </div>
</div>

# 內文 
尾隨在標籤後方 要有空格
h1 test
<h1>test</h1>

# 內文 多行文字 使用  `|` 可串接文字
p
  |test1
  |test2

# 內文 單行文字內 家標籤 使用 `#[]`
p
  |test1#[span text2]
<p>test1<span>text2</span></p>

# 內文 多行文字 使用  `|` 可串接文字  可添加標籤
p
  |test1
  br
  |test2


# 內文 多行文字 使用  `.` 將下層全部視為內文
p.
  test1
  test2

  