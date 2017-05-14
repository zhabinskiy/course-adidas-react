import React from 'react';
import Icon from './Icon';
import Gender from './Gender';
import Size from './Size';
import './style.css';

export default () => (
  <div className="filters">
    <Icon />
    <Gender />
    <Size />
  </div>
);
