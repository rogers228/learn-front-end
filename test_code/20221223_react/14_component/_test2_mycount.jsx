function Mycount(){
	const [count, setCount] = React.useState(0);

	function add_count(){
		return setCount(count +1);
	}

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={add_count}>
				click me
			</button>
		</div>
	)
}

function render_Mycount(){
    ReactDOM.render(React.createElement(Mycount), $('mycount'));
}
