
// ----------component.js----------

// ----------test1_like_button.jsx----------
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

// ----------test2_mycount.jsx----------
function Mycount(){
	const [count, setCount] = React.useState(0);

	function add_count(){
		return setCount(count +1);
	}

	return (
		React.createElement("div", null, 
			React.createElement("p", null, "You clicked ", count, " times"), 
			React.createElement("button", {onClick: add_count}, 
				"click me"
			)
		)
	)
}

function render_Mycount(){
    ReactDOM.render(React.createElement(Mycount), $('mycount'));
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
	// render_LikeButton();
}
