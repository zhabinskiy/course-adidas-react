import React from 'react';
import Title from './Title';
import Info from './Info';
import Gallery from './Gallery';
import Description from './Description';
import Buy from './Buy';
import './style.css';

export default () => (
  <div className="content content-details">
    <div className="product-details">
      <Title />
      <Info />
      <Gallery />
      <Description />
    </div>
    <Buy />
  </div>
);
