# 03 fetch實做
以下是經過測試的

```js
let myobj = null;
const test1 = ()=>{console.log(myobj)};
const test2 = ()=>{console.log(myobj.tour_order)};

const s_api_url = 'http://localhost:8228';
const s_api_code = 'QnBQ9CNzNznD';
// const s_api_code = 'QnBQ9CNz';

// post json
let url = s_api_url+'/api_sider_p';
let controller = new AbortController();  //控制器 用來中止請求
let requestProp = {
    method: 'POST',
    signal: controller.signal,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        apicode: s_api_code
    })
};
let request = new Request(url, requestProp);
const promise = fetch(request)
    .then((response)=>{
        return response.json(); // 回傳一個 Promise 物件
    }).then((json)=>{
        myobj = json; 
    }).catch((error)=>{
        console.log(`Error: ${error}`);
    });


// get json
// let url = s_api_url+'/api_sider';
// let controller = new AbortController();  //控制器 用來中止請求
// let requestProp = {
//     method: 'GET',
//     signal: controller.signal 
// };
// let request = new Request(url, requestProp);
// const promise = fetch(request)
//     .then((response)=>{
//         return response.json(); // 回傳一個 Promise 物件
//     }).then((json)=>{
//         myobj = json; 
//     }).catch((error)=>{
//         console.log(`Error: ${error}`);
//     });

```