import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card';
import './shoes-1@2x.jpg';
import './shoes-2@2x.jpg';
import './shoes-3@2x.jpg';
import './style.css';

export default () => (
  <Grid fluid className="products">
    <Row>

      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          labelClass="label label-products-item"
          label="Sale"
          image={require('./shoes-1@2x.jpg')}
          priceType="sale"
          item="/"
          price="$170"
        />
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
        <Card
          labelClass="label label-products-item"
          label="Sale"
          image={require('./shoes-2@2x.jpg')}
          priceType="sale"
          item="/"
          price="$170"
        />
      </Col>

      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          labelClass="label label-products-item"
          label="Sale"
          image={require('./shoes-3@2x.jpg')}
          priceType="sale"
          item="/item"
          price="$170"
        />
      </Col>

    </Row>
  </Grid>
);
