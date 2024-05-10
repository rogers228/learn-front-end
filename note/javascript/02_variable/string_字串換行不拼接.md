反引號`可以直接換行，類似python '''     


```js
    function fmat(){ 
        // foo = fmat('The lazy {0} {1} over the {2}', bar3, bar2, bar1); 
        // console.log('foo:' + foo);
        let num = arguments.length; 
        let oStr = arguments[0];   
        for (let i = 1; i < num; i++) { 
            let pattern = "\\{" + (i-1) + "\\}"; 
            let re = new RegExp(pattern, "g"); 
            oStr = oStr.replace(re, arguments[i]); 
        } 
        return oStr;
    } 



	html += fmat(`
                <div id="tour_{0}" class="product_tour" onclick="select_menu(this.id)">{1}
                    <img alt="arrow" class="icon_tour_down" id="tour_img_{0}"/>
                </div>
                <ul id="tour_menu_{0}" class="tour_menu">`, i+1, keys[i]);
```