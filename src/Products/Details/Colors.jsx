import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Button = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 100%;
  margin: 0 6px;
  transition: .2s;
  background: ${props => props.color};
  outline: none;
  cursor: pointer;

  &:hover {
    position: relative;
    transform: scale(1.2);
  }
`;

export default props => (
  <Wrapper>
    {props.colors.map((color, index) => (
      <Button key={color} color={color} onClick={() => props.onChange(index)} />
    ))}
  </Wrapper>
);
