import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Input from './Input';

const Search = styled.form`
  margin-top: 40px;
  margin-bottom: 123px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export default () => (
  <Search>
    <Icon />
    <Input />
  </Search>
);
