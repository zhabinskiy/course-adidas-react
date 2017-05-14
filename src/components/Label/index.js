import React from 'react';
import './style.css';

export default props => {
  return <span className={props.className}>{props.children}</span>;
};
