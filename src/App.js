import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    <div className="app">
      <h1>chatty</h1>

      <div className="body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
