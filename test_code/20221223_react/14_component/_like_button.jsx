//jkkkk
function LikeButton(props) {
    const [liked, setLiked] = React.useState(false);
    let result;
    if (liked) {
    	result = (
            <button onClick={() => setLiked(false)}>
                No Like
            </button>
	    )
    }
    else{
    	result = (
            <button onClick={() => setLiked(true) }>
                Like
            </button>
	    )
    }
    return result;
}
ReactDOM.render(React.createElement(LikeButton), $('component-goes-here'));
