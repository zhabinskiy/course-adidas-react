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
        <Route exact path="/products/:group/:type" component={List} />
        <Route path="/products/:group/:type/:id" component={Details} />
      </div>
    </Router>
  );
}

export default App;
