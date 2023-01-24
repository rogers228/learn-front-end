# async await寫法 
async await寫法 更直觀，更像普通函數式寫法。

```js

async function myajax(){
    const ax = require('axios');
    try{
        const response = await ax.get(url);
        console.log(response);
    };
    catch(error){
        console.log(error);

    };
}
```