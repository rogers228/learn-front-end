
// ----------component.js----------

// ----------test1_like_button.jsx----------
function LikeButton(props) {
    const [liked, setLiked] = useState('good');
    let obj = {'good': 'Good', 'nogood': 'No Good'}

    return (
        React.createElement("button", {onClick: ()=> setLiked((liked == 'good')?'nogood':'good')}, 
            obj[liked]
        )
    )
}


// ----------test2_mycount.jsx----------
function Mycount(){
	const [count, setCount] = useState(0);

	useEffect(()=>{
		document.title = `You clicked ${count} times`;
	});

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


// ----------main.js----------
;(function (){
    main();
})();


function after_load_handler(){
	// render_LikeButton();
}

// ----------tool_react.js----------
function render(component, element_id){
	// react render function component
	// component: function component
	// element_id
    ReactDOM.render(
    	React.createElement(component),
    	document.getElementById(element_id));
}

function useState(x){
	return React.useState(x);
}

function useEffect(x){
	return React.useEffect(x);
}

// ----------tool_str.js----------
function main(){
	console.log('main')
	window.addEventListener("DOMContentLoaded", after_load_handler);
}

function $(x){
	return document.getElementById(x);
}
