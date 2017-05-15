import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Label from '../../components/Label';

const Item = styled.div`
  padding: 10px;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-family: "Avenir Next", Arial, sans-serif;
  text-transform: uppercase;
  background: #f4f4f4;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  position: absolute;
  right: 1.3rem;
  top: 1.3rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Navigate = styled(Link)`
  display: block;
  text-align: center;
  font-size: 30px;
  text-decoration: none;
  padding: 24px 0;
  color: ${props => (props.isSale ? '#fff' : '#0d0d0d')};
  background: #fff;
  background-image: ${props => (props.isSale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : 'none')};
`;

export default props => (
  <Item>
    {props.isSale &&
      <Wrapper>
        <Label>{props.label}</Label>
      </Wrapper>}
    <Image src={props.image} alt="" />
    <Navigate isSale={props.isSale} to={props.item}>
      {props.price}
    </Navigate>
  </Item>
);
