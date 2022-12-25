// 'use strict';

function LikeButton() {
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
    		<button onClick={() => setLiked(true)}>
	            Like
	        </button>
	    )
    }
    return result;

}

const domContainer = document.getElementById('component-goes-here');
ReactDOM.render(React.createElement(LikeButton), domContainer);


    // let result;
    // if (liked) {
    // 	result = (
    // 		<button onClick={() => setLiked(false)}>
	   //          No Like
	   //      </button>
	   //  )
    // }
    // else{
    // 	result = (
    // 		<button onClick={() => setLiked(true)}>
	   //          Like
	   //      </button>
	   //  )
    // }
    // return result;


// if (liked) {

    // 	return (
	   //      <button onClick={() => setLiked(false)}>
	   //          No Like
	   //      </button>
    // 	);
    // }
    // else{
	   //  return (
	   //      <button onClick={() => setLiked(true)}>
	   //          Like
	   //      </button>
	   //  );
    // }