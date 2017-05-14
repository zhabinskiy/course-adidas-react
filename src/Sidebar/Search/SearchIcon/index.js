import React from 'react';
import './style.css';
import './search.svg';

export default () => {
  return <img className="search-icon" src={require('./search.svg')} />;
};
