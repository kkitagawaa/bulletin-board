import * as React from 'react'
import './createThread.css'

export function CreateThread(props) {
    const [title, setTitle] = React.useState("")

    function postcreateThread() {
        fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title
            })
        });
    }

    return (
        <div className='create_thread_container'>
            <div id='response'></div>
            <p>
                <label htmlFor="title">スレッドタイトル</label>
                <input type="text" id="title" required onChange={
                    (e) => setTitle(e.target.value)
                }></input>
            </p>
            <p>
                <button id='post_button' onClick={
                    () => {
                        postcreateThread();
                        document.getElementById("response").innerHTML="<h2>作成しました</h2>";
                    }
                }>スレッドを作成</button>
            </p>
            <p>
                <a href='/'>スレッド一覧に戻る</a>
            </p>
        </div>
    )
}