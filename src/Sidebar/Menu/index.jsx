import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';

const Wrapper = styled.div`

  @media screen and (max-width: 760px) {
    display: ${props => (props.isOpened ? 'block' : 'none')};
  }
`;

const NavigationLink = styled(NavLink)`
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

  @media screen and (max-width: 760px) {
    font-size: 20px;
    padding: 16px 34px;
    border-bottom: 1px solid rgba(255, 255, 255, .05);
  }
`;

const Link = ({ to, children }) => (
  <NavigationLink activeStyle={{ color: '#fff' }} to={to}>{children}</NavigationLink>
);

export default props => (
  <Wrapper isOpened={props.isOpened}>
    <Navigation title="Football">
      <Link to="/products/football/shoes">Shoes</Link>
      <Link to="/products/football/clothing">Clothing</Link>
      <Link to="/products/football/accesories">Accesories</Link>
    </Navigation>
    <Navigation title="Running">
      <Link to="/products/running/shoes">Shoes</Link>
      <Link to="/products/running/clothing">Clothing</Link>
      <Link to="/products/running/accesories">Accesories</Link>
    </Navigation>
    <Navigation title="Basketball">
      <Link to="/products/basketball/shoes">Shoes</Link>
      <Link to="/products/basketball/clothing">Clothing</Link>
      <Link to="/products/basketball/accesories">Accesories</Link>
    </Navigation>
  </Wrapper>
);
