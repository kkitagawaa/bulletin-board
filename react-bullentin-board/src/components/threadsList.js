import * as React from 'react'
import { Link } from 'react-router-dom';
import './threadsList.css'

export function ThreadsListContainer(props) {

    const [threads, setThreads] = React.useState([])

    React.useEffect(
        () => {
        fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0")
            .then(response => response.json())
            .then(data => setThreads(data));
        },[]
    )

    const threads_list = threads.map(
        (thread) => {
          return (
            <div className='thread' key={thread.id}>
              <Link to={'/thread/' + thread.id + '/posts/'}>
                <p className='thread_title' id={thread.id}>{thread.title}</p>
              </Link>
              {/* <a href='/thread/${thread.id}/post/'>
                <p className='thread_title'>{thread.title}</p>
              </a> */}
            </div>
          )
        }
      )
    
    return (
        <div className='threads_list_container'>
            {threads_list}
        </div>
    )
}