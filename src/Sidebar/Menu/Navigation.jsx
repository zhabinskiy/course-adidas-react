import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;

  @media screen and (max-width: 760px) {
    text-align: left;
  }
`;

const Button = styled.button`
  display: inline-block;
  position: relative;
  left: 8px;
  color: #fff;
  font-family: "Avenir Next", Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  background: none;
  border: none;
  outline: none;
  margin-top: 40px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: .7;
  }

  &::after {
    display: inline-block;
    position: relative;
    content: '';
    width: 14px;
    height: 9px;
    bottom: 3px;
    margin-left: 10px;
    background: url(${require('./arr-down.svg')}) no-repeat 50% 50%;
  }

  @media screen and (max-width: 760px) {
    padding: 24px 28px 10px 28px;
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }
`;

class Navigation extends Component {
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
      <Menu>
        <Button onClick={this.handleClick}>{this.props.title}</Button>
        {this.state.isOpened && this.props.children}
      </Menu>
    );
  }
}

export default Navigation;
