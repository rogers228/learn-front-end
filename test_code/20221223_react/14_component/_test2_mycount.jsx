function Mycount(){
	const [count, setCount] = useState(0);

	useEffect(()=>{
		document.title = `You clicked ${count} times`;
	});

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
