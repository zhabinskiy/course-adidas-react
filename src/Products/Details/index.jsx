import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Info from './Info';
import Gallery from './Gallery';
import Description from './Description';
import Buy from './Buy';

const Content = styled.div`
  margin-left: 414px;
  padding: 26px 34px 0 34px;

  @media screen and (max-width: 760px) {
    margin-left: 0;
    padding-top: 64px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Details = styled.div``;

export default () => (
  <Content>
    <Details>
      <Title />
      <Info />
      <Gallery />
      <Description />
    </Details>
    <Buy />
  </Content>
);
