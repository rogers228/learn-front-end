;(function (){
    console.log('test run1')

})();

;(function(){
    console.log('test run2')
    window.a = 45;
})();

console.log('global a:', a)