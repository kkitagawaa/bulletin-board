// import logo from './logo.svg';
import './App.css';

import * as React from 'react'
import {CreateThreadPage} from './components/createThreadPage'
import {ThreadListPage} from './components/threadListPage'
import { Header } from './components/header';

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<ThreadListPage />} />
          <Route path="/thread/new" element={<CreateThreadPage />} />
        </Routes>
      </div>
      {/* <footer className='App-footer'><span className='footer_text'>footer</span></footer> */}
    </div>
  );
}

export default App;
