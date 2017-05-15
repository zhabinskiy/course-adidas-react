import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  width: 77px;
  height: 52px;

  @media screen and (max-width: 760px) {
    width: 41px;
    height: 30px;
  }
`;

export default () => <Logo src={require('./logo@2x.png')} alt="" />;
