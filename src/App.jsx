import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import List from './List';
import Details from './Details';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <Route exact path="/" component={List} />
        <Route path="/item" component={Details} />
      </div>
    </Router>
  );
}

export default App;