import React, { Component } from 'react';
import styled from 'styled-components';
import Photos from './Photos';

const images = [
  {
    id: 1,
    src: require('./shoes-1@3x.png'),
    alt: 'Utra Boost 1',
  },
  {
    id: 2,
    src: require('./shoes-2@3x.png'),
    alt: 'Utra Boost 2',
  },
  {
    id: 3,
    src: require('./shoes-3@3x.png'),
    alt: 'Utra Boost 3',
  },
  {
    id: 4,
    src: require('./shoes-1@3x.png'),
    alt: 'Utra Boost 4',
  },
  {
    id: 5,
    src: require('./shoes-2@3x.png'),
    alt: 'Utra Boost 5',
  },
];

const Wrapper = styled.div``;

const Main = styled.div`
  position: relative;
  bottom: 170px;
  z-index: 0;

  @media screen and (max-width: 760px) {
    bottom: 0px;
    top: 100px;
    margin-bottom: 280px;
  }
`;

const Photo = styled.img`
  width: 85%;
`;

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedImageIndex) {
    this.setState({ selectedImageIndex });
  }

  render() {
    return (
      <Wrapper>

        <Main>
          <Photo
            src={images[this.state.selectedImageIndex].src}
            alt={images[this.state.selectedImageIndex].alt}
          />
        </Main>

        <Photos
          images={images}
          onClick={this.handleClick}
          selectedImageIndex={this.state.selectedImageIndex}
        />

      </Wrapper>
    );
  }
}

export default Gallery;
