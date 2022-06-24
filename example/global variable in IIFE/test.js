;(function (){
    console.log('test run1')
    window.a = 125;
})();

;(function(){
    console.log('test run2')
    let w = window;
    w.b = 450;

})();

console.log('global a:', a)
console.log('global b:', b)