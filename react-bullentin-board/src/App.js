// import logo from './logo.svg';
import './App.css';

import * as React from 'react'
import { ThreadsListContainer } from './components/threadsList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>掲示板</p>
      </header>
      <div className='App-body'>
        <h2>スレッド一覧</h2>
        <ThreadsListContainer />
        </div>
    </div>
  );
}

export default App;
