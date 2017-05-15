import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  width: 55px;
  height: 55px;
  background: #ebebeb url(${require('./filter@2x.png')}) 50% 50% no-repeat;
  background-size: 40px 33px;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export default () => <Icon />;
