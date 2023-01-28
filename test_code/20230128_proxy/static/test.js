;(function(){
    console.log('test run')
})();


myjson = {
    'name': 'rogers',
    'age': 34
}

function test1(){
    // proxy 基本操作
    console.log(myjson)
    console.log(myjson.name) //get
    console.log(myjson['age']) //get
    console.log(myjson['key']) // undefined 

    const _obj = new Proxy(myjson,{
        get: (obj, key) => { // 使用箭頭函數 內部引數可自行定義
            return (key in obj)? obj[key] : null;
            console.log('this is get')
        },
        set: (obj, key, value) => {
            obj[key]=value //標準無異動
            console.log('this is set')
        }
    });

    console.log(_obj['key']) // null
    _obj['age']= 55
}

