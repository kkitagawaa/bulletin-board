import { useParams } from "react-router-dom"
import { PostContainer } from "./postContainer"

export function PostsPage(props) {

    const { threadId } = useParams();
    var thread_title = document.getElementById(threadId).textContent;
    // 他にいい方法あるか？

    return (
        <div>
            <h2>{thread_title}</h2>
            <PostContainer threadId={threadId} />
        </div>
    )
}