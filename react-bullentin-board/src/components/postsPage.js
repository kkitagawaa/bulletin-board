import { useLocation, useParams } from "react-router-dom"
import { PostContainer } from "./postContainer"
import { CreatePostContainer } from "./createPostContainer";

export function PostsPage(props) {

    const { threadId } = useParams();
    var threadTitle = Object.values(useLocation().state);
    
    return (
        <div>
            <h2>{threadTitle}</h2>
            <PostContainer threadId={threadId} />
            <CreatePostContainer threadId={threadId} threadTitle={threadTitle} />
        </div>
    )
}
