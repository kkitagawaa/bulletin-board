import * as React from 'react'
import './createPostContainer.css'

export function CreatePostContainer(props) {
    const [post, setPost] = React.useState("")

    var reload = () => window.location.reload()

    function postCreatePost() {
        fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post: post
            })
        });
    }

    return (
        <div className='createPostContainer'>
            <p>
                <textarea id="post" cols="50" rows="5" placeholder='投稿しよう' required onChange={
                    (e) => setPost(e.target.value)
                }></textarea>
            </p>
            <p>
                <button id='create_post_button' onClick={
                    () => {
                        postCreatePost();
                        reload();
                    }
                }>投稿</button>

            </p>
        </div>
    )
}