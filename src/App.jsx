import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import List from './Products/List';
import Details from './Products/Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />

        <Redirect from="/" to="/products/football/shoes" />
        <Route exact path="/products/:category/:filter" component={List} />
        <Route path="/products/:category/:filter/:id" component={Details} />
      </div>
    </Router>
  );
}

export default App;
