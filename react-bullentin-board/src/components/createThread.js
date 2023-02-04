import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import './createThread.css'

export function CreateThread(props) {
    const [title, setTitle] = React.useState("")
    const [successMessage, setSuccessMessage] = React.useState("")

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

    const navigate =useNavigate();
    const back2Home = () => navigate('/');

    return (
        <div className='create_thread_container'>
            <div id='response'><h2>{successMessage}</h2></div>
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
                        setSuccessMessage("作成しました");
                    }
                }>スレッドを作成</button>
            </p>
            <p>
                {/* <a href='/'>スレッド一覧に戻る</a> */}
                <button onClick={back2Home}>
                スレッド一覧に戻る
                </button>
            </p>
        </div>
    )
}