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