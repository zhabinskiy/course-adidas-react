import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
  display: inline-block;
  color: #fff;
  font-weight: 700;
  font-family: "Avenir Next", Arial, sans-serif;
  text-transform: uppercase;
  width: 76px;
  font-size: 14px;
  padding: 6px 0;
  text-align: center;
  background: #ff5c5c;
  z-index: 2;
`;

export default props => <Label>{props.children}</Label>;
