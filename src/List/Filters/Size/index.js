import React from 'react';
import './style.css';

export default () => (
  <div className="filters-size">
    <span className="size-title">Size</span>
    <button className="size-button">36</button>
    <button className="size-button">37</button>
    <button className="size-button">38</button>
    <button className="size-button">39</button>
    <button className="size-button">40</button>
    <button className="size-button size-button-active">41</button>
    <button className="size-button">42</button>
  </div>
);
