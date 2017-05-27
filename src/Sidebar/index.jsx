import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Sidebar = styled.aside`
  display: flex;
  position: fixed;
  width: 414px;
  height: 100vh;
  min-height: 100%;
  padding-top: 31px;
  background: #0e0e0e;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 64px;
    min-height: 64px;
    padding-top: 12px;
    padding-left: 16px;
    justify-content: center;
    align-items: flex-start;
  }
`;

const NavigationLink = styled(NavLink)`
  display: block;
  font-family: "Andale Mono", Courier New, sans-serif;
  font-weight: normal;
  color: #3c3c3c;
  text-decoration: none;
  margin-top: 25px;
  transition: .2s;

  &:hover {
    color: #fff;
  }
`;

const Link = ({ to, children }) => (
  <NavigationLink activeStyle={{ color: '#fff' }} to={to}>{children}</NavigationLink>
);

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Menu title="Football">
      <Link to="/products/football/shoes">Shoes</Link>
      <Link to="/products/football/clothing">Clothing</Link>
      <Link to="/products/football/accesories">Accesories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="/products/running/shoes">Shoes</Link>
      <Link to="/products/running/clothing">Clothing</Link>
      <Link to="/products/running/accesories">Accesories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="/products/basketball/shoes">Shoes</Link>
      <Link to="/products/basketball/clothing">Clothing</Link>
      <Link to="/products/basketball/accesories">Accesories</Link>
    </Menu>
  </Sidebar>
);
