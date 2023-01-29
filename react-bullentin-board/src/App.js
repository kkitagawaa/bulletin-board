// import logo from './logo.svg';
import './App.css';

import * as React from 'react'
import { ThreadsListContainer } from './components/threadsList';
import {CreateThreadPage} from './components/createThreadPage'
import {ThreadListPage} from './components/threadListPage'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <span>掲示板</span>
        <a href='/thread/new'>スレッドを立てる</a>
      </header>

      <div className='App-body'>
        <Routes>
          <Route path="/" element={<ThreadListPage />} />
          <Route path="/thread/new" element={<CreateThreadPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
