
// ----------component.js----------

// ----------like_button.jsx----------
function LikeButton(props) {
    const [liked, setLiked] = React.useState('good');
    let obj = {'good': 'Good', 'nogood': 'No Good'}

    return (
        React.createElement("button", {onClick: ()=> setLiked((liked == 'good')?'nogood':'good')}, 
            obj[liked]
        )
    )
}

function render_LikeButton(){
    ReactDOM.render(React.createElement(LikeButton), $('component-goes-here'));
}


// ----------main.js----------
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
	render_LikeButton();
}
