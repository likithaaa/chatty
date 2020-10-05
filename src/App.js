import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <h1>chatty</h1>

      <div className="body">
        <Router>
          <Switch>
            <Sidebar />
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              {/* <Chat /> */}
              <Chat />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
