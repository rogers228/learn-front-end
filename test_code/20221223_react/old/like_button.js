//jkkkk
function LikeButton(props) {
    const [liked, setLiked] = React.useState(false);
    let result;
    if (liked) {
    	result = (
            React.createElement("button", {onClick: () => setLiked(false)}, 
                "No Like"
            )
	    )
    }
    else{
    	result = (
            React.createElement("button", {onClick: () => setLiked(true)}, 
                "Like"
            )
	    )
    }
    return result;
}
ReactDOM.render(React.createElement(LikeButton), $('component-goes-here'));
