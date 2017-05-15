import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 400px;
  z-index: 1;

  @media screen and (max-width: 760px) {
    width: 100%;
    margin-top: 36px;
  }
`;

const Title = styled.h1`
  color: #3a3a3a;
  font-size: 64px;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 14px;

  @media screen and (max-width: 760px) {
    font-size: 36px;
  }
`;

const Button = styled.button`
  background: #e3e3e3;
  outline: none;
  border: none;
  border-radius: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  font-family: "Avenir Next", Arial, sans-serif;
  text-transform: uppercase;
  padding: 24px 14px 24px 14px;
  transition: .2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background: #d0caca;
  }

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export default () => (
  <Wrapper>
    <Title>Ultra Boost</Title>
    <Button>Save</Button>
  </Wrapper>
);
