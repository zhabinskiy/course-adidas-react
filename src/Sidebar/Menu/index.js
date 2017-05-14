import React from 'react';
import {Link} from 'react-router-dom';
import './arr-down.svg';
import './style.css';

const MenuLink = props => (
  <Link to={props.to} className="menu-link">{props.children}</Link>
);

const SubmenuLink = props => (
  <Link to={props.to} className="submenu-link">{props.children}</Link>
);

export default () => (
  <nav className="menu">
    <MenuLink to="/">
      Sports
      {' '}
      <img className="menu-link-arrdown-icon" src={require('./arr-down.svg')} />
    </MenuLink>
    <nav className="menu-submenu">
      <SubmenuLink to="/item">Shoes</SubmenuLink>
      <SubmenuLink to="/">Clothing</SubmenuLink>
      <SubmenuLink to="/">Accesories</SubmenuLink>
    </nav>
    <MenuLink to="/">Brands</MenuLink>
    <MenuLink to="/">Micoach</MenuLink>
  </nav>
);
