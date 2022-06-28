window.addEventListener('hashchange', router_layout0);
window.addEventListener("DOMContentLoaded", router_layout0);

function router_layout0(){
    //依照網址參數 將layout0排至最前方
    let parameter = get_url_parameter();
    if (parameter == ''){
        return
    }
    let walls = document.querySelectorAll('.layout0_wall');
    walls.forEach((node)=>{
        let e = document.getElementById(node.id)
        let router = e.getAttribute('data-router');
        e.style['z-index'] = "300";
        if (parameter.indexOf(router) == 0){
            e.style['z-index'] = "301";
        }
    });
}

function get_url_parameter(){
    let myurl = window.location.href;
    return (myurl.includes('#'))? myurl.split('#').pop(): '';
}
