function LikeButton(props) {
    const [liked, setLiked] = useState('good');
    let obj = {'good': 'Good', 'nogood': 'No Good'}

    return (
        <button onClick={()=> setLiked((liked == 'good')?'nogood':'good')}>
            {obj[liked]}
        </button>
    )
}

