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

const Price = styled.div`
  margin-top: 20px;
  position: relative;
  z-index: 1;
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
        <Colors>
          {this.props.children}
        </Colors>
        <Label className="label">Sale</Label>
        <Price>
          <Title color={this.props.color}>$170</Title>
        </Price>
      </Wrapper>
    );
  }
}

export default Info;
