import React, { Component } from 'react';
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
  }
`;

const Flex = styled.div`
  display: flex;
  margin-top: 15px;

  @media screen and (max-width: 760px) {
    position: relative;
    width: 100%;
    height: 32px;
    top: 90px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Colors = styled.div`
  display: inline-block;
  margin-right: 20px;
  z-index: 2;

  @media screen and (max-width: 760px) {
    margin-right: 0;
  }
`;

const Price = styled.div`
  margin-top: 20px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 760px) {
    position: absolute;
    margin-top: 0;
    font-size: 80px;
  }
`;

const Title = styled.h2`
  font-size: 80px;
  color: ${props => props.color};
`;

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Flex>
          <Colors>
            {this.props.children}
          </Colors>
          <Label className="label">Sale</Label>
        </Flex>
        <Price>
          <Title color={this.props.color}>$170</Title>
        </Price>
      </Wrapper>
    );
  }
}

export default Info;
