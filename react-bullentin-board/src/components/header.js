import { Link } from "react-router-dom";

export function Header(props) {
    return (
        <header className="App-header">
            <span id='top_title'>掲示板</span>
            <Link to={'/'}><span id="link _home">スレッド一覧</span></Link>
            <a href='/thread/new' id='link_create_thread'>スレッドを立てる</a>
        </header>
    )
}