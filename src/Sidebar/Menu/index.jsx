import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Submenu = styled.nav`
  font-family: "Andale Mono", Courier New, sans-serif;
  font-weight: normal;
  margin-bottom: 55px;
`;

const MenuLink = styled(NavLink)`
  display: block;
  color: #3c3c3c;
  text-decoration: none;
  margin-top: 30px;
  margin-bottom: ${props => (props.isSubmenu ? '25px' : '0')};
  transition: .2s;

  &:hover {
    color: #fff;
  }
`;

const ArrowDown = styled.img`
  position: relative;
  bottom: 3px;
  margin-left: 3px;
`;

export default () => (
  <Menu>
    <MenuLink activeStyle={{ color: '#fff' }} to="/">
      Sports
      {' '}
      <ArrowDown src={require('./arr-down.svg')} alt="" />
    </MenuLink>
    <Submenu>
      <MenuLink isSubmenu activeStyle={{ color: '#fff' }} to="/">Shoes</MenuLink>
      <MenuLink isSubmenu activeStyle={{ color: '#fff' }} to=".">Clothing</MenuLink>
      <MenuLink isSubmenu activeStyle={{ color: '#fff' }} to=".">Accesories</MenuLink>
    </Submenu>
    <MenuLink activeStyle={{ color: '#fff' }} to=".">Brands</MenuLink>
    <MenuLink activeStyle={{ color: '#fff' }} to=".">Micoach</MenuLink>
  </Menu>
);
