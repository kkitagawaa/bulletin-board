import React from "react";

export function PostContainer(props) {
    
    const [posts, setPosts] = React.useState([])

    React.useEffect(
        () => {
            fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts?offset=0`,{
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => setPosts(data["posts"]));
        },[props.threadId]
    )
    
    var posts_list = "投稿がありません"
    if (posts !=null) {
        posts_list = posts.map(
            (post) => {
                return (
                    <div className='post' key={post.id}>
                        <p className='post_content'>{post.post}</p>
                    </div>
                )
            }
        )
    }

    return (
        <div className="thread_container">
            {posts_list}
        </div>
    )
}
// https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/de6d31ee-b9fc-48e4-87e9-1d7381a56f5a/posts/