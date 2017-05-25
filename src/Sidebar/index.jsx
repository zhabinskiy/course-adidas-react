import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
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
    padding-right: 16px;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Link = styled(NavLink)`
  display: block;
  font-family: "Andale Mono", Courier New, sans-serif;
  font-weight: normal;
  color: #3c3c3c;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 25px;
  transition: .2s;

  &:hover {
    color: #fff;
  }
`;

export default () => (
  <Sidebar>
    <Navbar />
    <Search />
    <Menu title="Football">
      <Link to=".">Shoes</Link>
      <Link to=".">Clothing</Link>
      <Link to=".">Accesories</Link>
    </Menu>
    <Menu title="Running">
      <Link to=".">Shoes</Link>
      <Link to=".">Clothing</Link>
      <Link to=".">Accesories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to=".">Shoes</Link>
      <Link to=".">Clothing</Link>
      <Link to=".">Accesories</Link>
    </Menu>
  </Sidebar>
);
