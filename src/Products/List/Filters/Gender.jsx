import React from 'react';
import styled from 'styled-components';

const Gender = styled.div`
  margin-left: 29px;

  @media screen and (max-width: 1080px) {
    margin-left: 0;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  font-size: 24px;
  font-weight: 700;
  font-family: "Avenir Next", Arial, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  transition: .2s;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #4d42f8;
  }
`;

export default () => (
  <Gender>
    <Button isActive>Man</Button>
    <Button>Woman</Button>
  </Gender>
);
