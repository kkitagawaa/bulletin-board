import * as React from 'react'
import { Link } from 'react-router-dom';
import './threadsList.css'

export function ThreadsListContainer(props) {

    const [threads, setThreads] = React.useState([])
    const [offset, setOffset] = React.useState(0)

    React.useEffect(
        () => {
        fetch(`https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=${offset}`)
            .then(response => response.json())
            .then(data => setThreads(data));
        },[offset]
    )

    const threads_list = threads.map(
        (thread) => {
          return (
            <div className='thread' key={thread.id}>
              <Link to={'/thread/' + thread.id + '/posts/'} state={{ threadTitle: thread.title }}>
                <p className='thread_title' id={thread.id}>{thread.title}</p>
              </Link>
              {/* <a href='/thread/${thread.id}/post/'>
                <p className='thread_title'>{thread.title}</p>
              </a> */}
            </div>
          )
        }
      )
    

    if (threads == null && offset !==0) {
      setOffset(0)
    }

    return (
        <div className='threads_list_container'>
            {threads_list}<br></br>
            <button onClick={
              () => {if (offset>=10) {setOffset(offset-10)}}
            }>前のページ</button>
            {offset/10 + 1}ページ目
            <button onClick={
              () => setOffset(offset+10)
            }>次のページ</button>
        </div>
    )
}