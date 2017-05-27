import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Burger from './Burger';
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

const Wrapper = styled.div`
  @media screen and (max-width: 760px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Sidebar>
        <Wrapper>
          <Logo />
          <Burger onClick={this.handleClick} isOpened={this.state.isOpened} />
        </Wrapper>
        <Search />
        <Menu />
      </Sidebar>
    );
  }
}

export default Aside;
