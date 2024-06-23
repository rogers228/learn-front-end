```js
    //帶參數
    // 參數是第二個引數為object params
    const ax = require('axios');
    ax.get('/user', {
    params: {
      ID: 12345
    }
  });
```