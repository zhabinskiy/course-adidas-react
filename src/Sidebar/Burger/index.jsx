import React, { Component } from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from '../Menu';

const Wrapper = styled.nav``;

const Burger = styled.button`
  width: 40px;
  height: 30px;
  background: url(${require('./burger.svg')}) no-repeat 50% 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: .7;
  }

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: absolute;
  left: 0;
  top: 64px;
  width: 100%;
  height: 100vh;
  background: #111010;

  @media screen and (min-width: 760px) {
    display: none;
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Burger onClick={this.props.onClick} />
        <ReactCSSTransitionGroup transitionName="example">
          {this.props.isOpened &&
            <Nav>
              <Menu isOpened={this.props.isOpened} />
            </Nav>}
        </ReactCSSTransitionGroup>
      </Wrapper>
    );
  }
}

export default Navigation;
