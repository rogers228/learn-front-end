# post
post 是一種較隱密的請求

```js
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
```

```js
async function mypost(){
    const ax = require('axios');
    const url = 'test';
    const json = {
        firstName: 'Fred',
        lastName: 'Flintstone'
        };
    try{
        const response = await ax.post(url, json);
        console.log(response);
    };
    catch(error){
        console.log(error);
    };
}
```