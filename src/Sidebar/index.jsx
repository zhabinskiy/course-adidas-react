import React from 'react';
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

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Menu />
  </Sidebar>
);
