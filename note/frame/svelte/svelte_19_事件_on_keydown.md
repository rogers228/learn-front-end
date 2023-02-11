# on:keydown
<script>
    function handleKeydown(event) {
        if (event.key === 'Enter') {
            const text = event.target.value;
            if (!text) return;

            comments = comments.concat({
                author: 'user',
                text
            });

            event.target.value = '';

            const reply = eliza.transform(text);

            setTimeout(() => {
                comments = comments.concat({
                    author: 'eliza',
                    text: '...',
                    placeholder: true
                });

                setTimeout(() => {
                    comments = comments.filter(comment => !comment.placeholder).concat({
                        author: 'eliza',
                        text: reply
                    });
                }, 500 + Math.random() * 500);
            }, 200 + Math.random() * 200);
        }
    }

</script>
<input on:keydown={handleKeydown}>