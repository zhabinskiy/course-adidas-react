import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './style.css';

export default () => (
  <aside className="sidebar">
    <Logo />
    <Search />
    <Menu />
  </aside>
  );
