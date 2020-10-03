import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <h1>chatty</h1>

      <div className="body">
        <Sidebar />
        {/* Chatty */}
      </div>
    </div>
  );
}

export default App;
