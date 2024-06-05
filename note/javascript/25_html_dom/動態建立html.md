// function fmat(args){
//     // lile python format function
//     // args
//     // foo = fmat('The lazy {0} {1} over the {2}', bar3, bar2, bar1);
//     // console.log('foo:' + foo);
//     let num = arguments.length;
//     let oStr = arguments[0];
//     for (let i = 1; i < num; i++) {
//         let pattern = "\\{" + (i-1) + "\\}";
//         let re = new RegExp(pattern, "g");
//         oStr = oStr.replace(re, arguments[i]);
//     }
//     return oStr;
// }


function fmat(template, ...args) {
    // 支持位置參數和對象參數的格式化函數
    return template.replace(/{(\w+)}/g, (match, key) => {
        if (isNaN(key)) {
            // 支持對象參數
            return typeof args[0] === 'object' ? args[0][key] : match;
        } else {
            // 支持位置參數
            return key < args.length ? args[key] : match;
        }
    });
}

function generate() {
    // 使用位置參數
    const html_content1 = fmat(`
        <h1>{0}</h1>
        <p>hello, {1}</p>
        `, 'title', 'allen');

    // 使用對象參數
    const html_content2 = fmat(`
        <h1>{title}</h1>
        <p>hello, {name}</p>
        `, { title: 'title', name: 'allen' });

    console.log('html_content1:', html_content1);
    console.log('html_content2:', html_content2);
}

generate();