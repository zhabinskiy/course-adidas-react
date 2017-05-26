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
  padding-left: 22px;
  padding-right: 22px;

  @media screen and (max-width: 760px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default () => (
  <Content>
    <Filters />
    <Products fluid>
      <Row>

        <Col xs={12} sm={6} md={4} lg={4}>
          <Card
            label="Sale"
            isSale
            image={require('./shoes-1@2x.jpg')}
            item="/products/football/shoes/1"
            price="$170"
          />
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <Card
            image={require('./shoes-3@2x.jpg')}
            priceType="normal"
            item="/products/football/shoes/2"
            price="$240.99"
          />
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <Card
            image={require('./shoes-1@2x.jpg')}
            priceType="normal"
            item="/products/football/shoes/3"
            price="$1024"
          />
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <Card
            image={require('./shoes-1@2x.jpg')}
            priceType="normal"
            item="/products/football/shoes/4"
            price="$170"
          />
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <Card
            label="Sale"
            isSale
            image={require('./shoes-2@2x.jpg')}
            item="/products/football/shoes/5"
            price="$170"
          />
        </Col>

        <Col xs={12} sm={6} md={4} lg={4}>
          <Card
            label="Sale"
            isSale
            image={require('./shoes-3@2x.jpg')}
            item="/products/football/shoes/6"
            price="$170"
          />
        </Col>

      </Row>
    </Products>
  </Content>
);
