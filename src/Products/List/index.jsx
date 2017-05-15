import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';

const Content = styled.div`
  margin-left: 414px;
  padding: 10px 0;

  @media screen and (max-width: 760px) {
    margin-left: 0;
    padding-top: 64px;
  }

`;

const Products = styled(Grid)`
  padding-left: 15px;
  padding-right: 15px;
`;

export default () => (
  <Content>
    <Filters />
    <Products fluid>
      <Row>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card label="Sale" isSale image={require('./shoes-1@2x.jpg')} item="/" price="$170" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={require('./shoes-3@2x.jpg')} priceType="normal" item="/" price="$240.99" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={require('./shoes-1@2x.jpg')} priceType="normal" item="/" price="$1024" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={require('./shoes-1@2x.jpg')} priceType="normal" item="/" price="$170" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card label="Sale" isSale image={require('./shoes-2@2x.jpg')} item="/" price="$170" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card label="Sale" isSale image={require('./shoes-3@2x.jpg')} item="/item" price="$170" />
        </Col>

      </Row>
    </Products>
  </Content>
);
