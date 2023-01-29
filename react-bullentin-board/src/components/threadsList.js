import * as React from 'react'
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
            <p className='thread_title'>{thread.title}</p>
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