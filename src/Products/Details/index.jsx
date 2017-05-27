import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Info from './Info';
import Colors from './Colors';
import Gallery from './Gallery';
import Description from './Description';
import Buy from './Buy';

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

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

const Wrapper = styled.div``;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedColorIndex) {
    this.setState({ selectedColorIndex });
  }

  render() {
    return (
      <Content>
        <Wrapper>
          <Title saveButtonColor={colors[this.state.selectedColorIndex]} />
          <Info priceColor={colors[this.state.selectedColorIndex]}>
            <Colors colors={colors} onChange={this.handleClick} />
          </Info>
          <Gallery />
          <Description />
        </Wrapper>
        <Buy />
      </Content>
    );
  }
}

export default Details;
