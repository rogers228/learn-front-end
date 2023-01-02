
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
