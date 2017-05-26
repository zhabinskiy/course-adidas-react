import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Logo = styled.img`
  width: 77px;
  height: 52px;
  transition: .2s;

  &:hover {
    opacity: .7;
  }

  @media screen and (max-width: 760px) {
    width: 41px;
    height: 30px;
  }
`;

export default () => (
  <NavLink to="/products/football/shoes">
    <Logo src={require('./logo@2x.png')} alt="" />
  </NavLink>
);
