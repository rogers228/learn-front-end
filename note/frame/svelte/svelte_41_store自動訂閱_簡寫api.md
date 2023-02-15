# store自動訂閱_簡寫api

使用$variable, 它是一個語法糖，直接在template中將{variable}改為 {$variable}
就可以省略訂閱的寫法

他也能用在script區段中

```php
<script>
import { count } from './stores.js';
    let countValue;
    count.subscribe((value)={      //使用subscribe訂閱方法，引數為表達式,指定引數為value
        countValue = value         //將訂閱的值指定給 variable
    });
</script>
<h1>The count is {countValue}</h1>
```

使用$variable


```php
<script>
import { count } from './stores.js';
</script>
<h1>The count is {$count}</h1>
```