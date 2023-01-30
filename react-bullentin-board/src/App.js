// import logo from './logo.svg';
import './App.css';

import * as React from 'react'
import {CreateThreadPage} from './components/createThreadPage'
import {ThreadListPage} from './components/threadListPage'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <span id='top_title'>掲示板</span>
        <a href='/thread/new' id='link_create_thread'>スレッドを立てる</a>
      </header>

      <div className='App-body'>
        <Routes>
          <Route path="/" element={<ThreadListPage />} />
          <Route path="/thread/new" element={<CreateThreadPage />} />
        </Routes>
      </div>
      <footer className='App-footer'><span className='footer_text'>footer</span></footer>
    </div>
  );
}

export default App;
