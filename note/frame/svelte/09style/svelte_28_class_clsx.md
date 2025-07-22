# class clsx

svelte 5 使用 clsx，
不再使用舊版的 class: 因為很高機率會同時使用 class= 與 class:

https://github.com/lukeed/clsx

雖然 clsx 可以混合 字串,array, object，但在此僅推薦使用 object 即可通吃

## class 使用 array
```html
<div class={[class_str_a', 'class_str_a']}>  兩個 class
<div class={['class_str_a class_str_a']}>  兩個 class

<div class={[is_a && 'class_str_a']}>  條件式 class is_a為true時 添加 class_str_a

<div class={['class_str_a class_str_a', is_c && 'class_str_c']}>  
兩個 class 並且條件式 class is_c為true時 添加 class_str_c
```

以上 array 的判斷是是採用 is_c && 'class_str_c',
判斷式在前className在後，並且需要 '&&' 語法 會有點凌亂難解

## class 使用 object 
```html
<div class={[
    'a b',
    {
        c: isTrue
    }
    ]}
```

```html
<button class={[
  'tag is-capitalized',
  {
    'is-primary': s_selected_labels.includes(label)
  }
  ]}
```
以上使用 array 包裹，裡面含 字串 及 object
object的 key 即是 className
object的 value 即是 判斷式
無論字串或object 的 className 都在前方，推薦使用。

svelte 5 使用 clsx 僅使用 'class=' 貼近原始html，也能達到布林判斷，
避免了svelte 4 同時混用 'class=' 與 'class:'
我覺得是一大進步。