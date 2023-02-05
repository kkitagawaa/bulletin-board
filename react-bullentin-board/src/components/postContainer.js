import React from "react";

import './postContainer.css'

export function PostContainer(props) {
    
    const [offset, setOffset] = React.useState(0)    
    const [posts, setPosts] = React.useState([])

    React.useEffect(
        () => {
            fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${props.threadId}/posts?offset=${offset}`,{
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => setPosts(data["posts"]));
        },[props.threadId, offset]
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

    if (posts == null && offset !== 0) {
        setOffset(0)
    }

    return (
        <div className="posts_container">
            {posts_list}<br></br>
            <button onClick={
              () => {if (offset>=10) {setOffset(offset-10)}}
            }>前のページ</button>
            {offset/10 + 1}ページ目
            <button onClick={
              () => {
                setOffset(offset+10);
            }
            }>次のページ</button>
            {/* 存在しない次のページの処理？ */}
        </div>
    )
}
