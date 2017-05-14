import React from 'react';
import Filters from './Filters';
import Products from './Products';
import './style.css';

export default () => (
  <div className="content content-list">
    <Filters />
    <Products />
  </div>
);
