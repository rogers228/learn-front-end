function LikeButton(props) {
    const [liked, setLiked] = React.useState('good');
    let obj = {'good': 'Good', 'nogood': 'No Good'}

    return (
        <button onClick={()=> setLiked((liked == 'good')?'nogood':'good')}>
            {obj[liked]}
        </button>
    )
}

function render_LikeButton(){
    ReactDOM.render(React.createElement(LikeButton), $('component-goes-here'));
}
