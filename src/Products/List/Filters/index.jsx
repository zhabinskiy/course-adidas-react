import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Gender from './Gender';
import Size from './Size';

const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 11px;
  padding-left: 23px;
  border-bottom: 3px solid rgba(#e7e7e7, 0.56);

  @media screen and (max-width: 1080px) {
    align-items: flex-start;
    flex-direction: column;
    padding: 15px 0 15px 15px;
  }
`;

export default () => (
  <Filters>
    <Icon />
    <Gender />
    <Size />
  </Filters>
);
