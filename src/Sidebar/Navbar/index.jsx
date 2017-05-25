import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Burger from './Burger';

const Wrapper = styled.nav`

  @media screen and (max-width: 760px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export default () => (
  <Wrapper>
    <Logo />
    <Burger />
  </Wrapper>
);
