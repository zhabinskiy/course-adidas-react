import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

const Menu = styled.nav`
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

const Category = styled.nav``;

const Title = styled.h3`
  padding: 24px 28px 10px 28px;
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
`;

const Link = styled(NavLink)`
  display: block;
  font-family: "Andale Mono", Courier New, sans-serif;
  font-size: 20px;
  font-weight: normal;
  color: #3c3c3c;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, .05);
  transition: .2s;

  &:hover {
    color: #fff;
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerOpened: false,
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isBurgerOpened: !prevState.isBurgerOpened,
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Burger onClick={this.handleClick} />
        {this.state.isBurgerOpened &&
          <Menu>
            <Category>
              <Title>Football</Title>
              <Link to=".">Shoes</Link>
              <Link to=".">Clothing</Link>
              <Link to=".">Accesories</Link>
            </Category>
            <Category>
              <Title>Running</Title>
              <Link to=".">Shoes</Link>
              <Link to=".">Clothing</Link>
              <Link to=".">Accesories</Link>
            </Category>
            <Category>
              <Title>Basketball</Title>
              <Link to=".">Shoes</Link>
              <Link to=".">Clothing</Link>
              <Link to=".">Accesories</Link>
            </Category>
          </Menu>}
      </Wrapper>
    );
  }
}

export default Navigation;
