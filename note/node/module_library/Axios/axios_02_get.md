# get

```js
    const axios = require('axios');
    // 向给定ID的用户发起请求
    axios.get('/user?ID=12345')
      .then(function (response) {
        // 处理成功情况
        console.log(response);
      })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
      .then(function () {
        // 总是会执行
      });
```

```js
    const ax = require('axios');
    ax.get(url)
        .then(function(req){
            // 成功
            console.log(req);
        })
        .catch(function(error){
            // 失敗
            console.log(error);
        })
        .then(funtion(){
            // 最後無論成功或失敗，必定執行
        });
```

