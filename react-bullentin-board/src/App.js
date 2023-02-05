// import logo from './logo.svg';
import './App.css';

import * as React from 'react'
import {CreateThreadPage} from './components/createThreadPage'
import {ThreadListPage} from './components/threadListPage'
import { Header } from './components/header';

import {Routes, Route} from 'react-router-dom'
import { PostsPage } from './components/postsPage';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<ThreadListPage />} />
          <Route path="/thread/new" element={<CreateThreadPage />} />
          <Route path="/thread/:threadId/posts" element={<PostsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
