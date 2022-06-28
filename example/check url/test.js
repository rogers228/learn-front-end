window.addEventListener('hashchange', function () {
    // console.log('location changed!');
    console.log(get_url_parameter());
});

window.addEventListener('DOMContentLoaded', function (){
    console.log('DOMContentLoaded');
});

function get_url_parameter(){
    let myurl = window.location.href;
    if (myurl.includes('#')){
        return window.location.href.split('#').pop()
    }
    else{
        return ''
    }
}
