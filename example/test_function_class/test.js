function MyFunctionClass(name){ // function 假裝 class
    console.log('this is function test');
    console.log('my name is', name); //接收參數
    let arg = 12; //內建變數
    console.log(`i am ${arg} years old`); 

    function method_1(){  
        console.log('this is a method');
        console.log(`your name is ${name} and you are ${arg} years old`);
    }

    function func_1(arg){  
        return arg+30 
    }

    method_1(); //執行內部方法
    console.log(func_1(5)); //調用內部函數

}

class MyClass{
    constructor(name) {
        console.log('this is class test');
        this.name = name; //接收參數
        this.arg = 18; //內建變數
        console.log('my name is', this.name); //接收參數
        console.log(`i am ${this.arg} years old`); 

        this.method_1();                 //在class內 執行內部方法
        console.log(this.func_inc_1(6)); //在class內 調用內部函數
        this.method_2();                 //在class內 執行內部方法  裡面  調用內部函數
        console.log(this.func_inc_2());  //在class內 調用內部函數  裡面  調用內部函數

    }

    method_1(){  
        console.log('this is a method 1');
        console.log(`your name is ${this.name} and you are ${this.arg} years old`);
    }

    method_2(){  
        console.log('this is a method 2');
        console.log('you are', this.func_inc_1(5)); 
    }

    func_inc_1(a){  
        return this.arg+30 +a
    }

    func_inc_2(){  
        return this.func_inc_1(5)
    }

}

;(function(){
    // console.log('test run');
    window.mfc = new MyFunctionClass('Andy');
    console.log('------------------');
    window.mcs = new MyClass('Jackson');  //class 要先讀取

})();

function test1(){
    try {
        mfc.method_1() //呼叫方法
    }
    catch (e) {
        console.log(e)
        console.log('無法外部呼叫方法')
    }
}

function test2(){
    try {
        mcs.method_1() //由外部呼叫class  執行class方法
        console.log('可以外部執行class方法')
    }
    catch (e) {
        console.log(e)
        console.log('無法外部呼叫方法')
    }

    try {
        console.log(mcs.func_inc_1(456)) //由外部呼叫class  執行class函數
        console.log('可以外部執行class函數')
    }
    catch (e) {
        console.log(e)
        console.log('無法外部呼叫函數')
    }    
}