;(function(){
    console.log('test run')
})();

function test(){
    console.log('test')
    const pug = require('pug'); // 引用pug
    let source = `
        div#gh1() test
            div#hgj hi`

    // pug以縮排為主 使用字串拼接很容易出錯
    // 再加上 remove_space方法 可去除多餘縮排空白符
    // 讓pug開頭可以任意開頭，符合js風格

    let html = pug.render(remove_space(source)); // pug轉html
    console.log(html)

}

function remove_space(strPug){
    // 去除多餘縮排空白符
    t = strPug;
    if (t.charCodeAt(0)==10){ // 刪除首字換行符
        t = t.substring(1);
    }
    let spaceCount = t.length - t.trimStart().length; //首行n個空白符
    let array = t.split('\n').map(x => x.substring(spaceCount)); //去除全部n個空白符
    return (array.join('\n'));
}