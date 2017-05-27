import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  bottom: 190px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

const Photo = styled.button`
  border: none;
  outline: none;
  background: none;
  border: 5px solid transparent;
  cursor: pointer;
  margin-left: 12px;
  margin-right: 12px;
  transition: .2s;

  &:hover {
    border: 5px solid #e5e5e7;
  }

  ${props => props.isActive && `
    border: 5px solid #e5e5e7;
  `};
`;

const Image = styled.img`
  width: 100%;
`;

export default props => (
  <Wrapper>
    {props.images.map((image, index) => (
      <Photo
        key={image.id}
        onClick={() => props.onClick(index)}
        isActive={index === props.selectedImageIndex}
      >
        <Image src={image.src} alt={image.alt} />
      </Photo>
    ))}
  </Wrapper>
);
