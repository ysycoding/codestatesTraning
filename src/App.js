/*import logo from './logo.svg';*/
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App () {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
           <li>
              <Link to="/">Home</Link>{/* Link 컴포넌트를 이용하여 경로를 연결합니다 */}
           </li>
           <li>
              <Link to="/mypage">MyPage</Link>
           </li>
           <li>
              <Link to="/dashboard">Dashboard</Link>
           </li>
          </ul>
        </nav>
        <Routes>
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/" element={<Home />} /> 
          <Route path="/mypage" element={<MyPage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
      </BrowserRouter>
  )
}

function Home() {
  return <h1>Home</h1>;
}

function MyPage() {
  return <h1>MyPage</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;
