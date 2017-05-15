import React from 'react';
import styled from 'styled-components';
import Label from '../../components/Label';

const Wrapper = styled.div`
  top: 30px;
  right: 32px;
  position: absolute;
  text-align: right;
  z-index: 1;

  @media screen and (max-width: 760px) {
    position: static;
    display: flex;
    height: 32px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Colors = styled.div`
  display: inline-block;
  position: relative;
  top: 4px;
  margin-right: 20px;

  @media screen and (max-width: 760px) {
    margin-right: 0;
  }
`;

const Button = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 100%;
  margin: 0 3px;
  transition: .2s;
  cursor: pointer;

  &:hover {
    position: relative;
    transform: scale(1.2);
  }
`;

const Price = styled.div`
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 80px;
  color: #e2e2e2;
`;

export default () => (
  <Wrapper>
    <Colors>
      <Button style={{ background: '#c5c5c5' }} />
      <Button style={{ background: '#4d87ca' }} />
      <Button style={{ background: '#4a4a4a' }} />
      <Button style={{ background: '#e0e0e0' }} />
    </Colors>
    <Label className="label">Sale</Label>
    <Price>
      <Title>$170</Title>
    </Price>
  </Wrapper>
);
