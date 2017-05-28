import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  padding: 37px 0 34px 414px;
  width: 100%;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  border: 0;
  text-align: center;
  font-family: "Avenir Next", Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(to left, #4949aa, #27275d);
  }

  @media screen and (max-width: 760px) {
    padding: 37px 0 34px 0;
    font-size: 20px;
  }
`;

export default () => <Button>Buy Now</Button>;
