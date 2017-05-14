import React from 'react';
import './style.css';
import './logo@2x.png';

export default () => {
  return <img className="logo" src={require('./logo@2x.png')} />;
};
