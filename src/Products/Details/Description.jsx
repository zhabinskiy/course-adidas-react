import React from 'react';
import styled from 'styled-components';

const Description = styled.p`
  position: relative;
  bottom: 160px;
  z-index: 1;
  font-weight: 500;
  font-size: 33px;
  line-height: 50px;
  color: #d8d8d8;

  @media screen and (max-width: 760px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Accent = styled.span`
  color: #6e6e6e;
`;

export default () => (
  <Description>
    <Accent>Adidas</Accent>
    {' '}
    is a German multinational corporation, headquartered
    in Herzogenaurach, Germany, that designs and
    manufactures shoes, clothing and accessories.
  </Description>
);
