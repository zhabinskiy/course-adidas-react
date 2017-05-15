import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 24px;
  font-family: "Avenir Next", Arial, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background: none;
  border: none;
  border-bottom: 4px solid rgba(55, 55, 55, 0.56);
  padding: 10px 0 20px 50px;
  width: 370px;
  height: 50px;
  outline: none;
  transition: .2s;

  &:focus {
    border-color: #fff;
  }

  &:-webkit-input-placeholder {
    color: rgba(#373737, 0.56);
  }
`;

export default () => <Input type="text" placeholder="" />;
