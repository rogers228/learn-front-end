;(function (){
    main();
})();

function main(){
	console.log('main')
	window.addEventListener("DOMContentLoaded", after_load_handler);
}

function $(x){
	return document.getElementById(x);
}

function after_load_handler(){
	// render_LikeButton();
}