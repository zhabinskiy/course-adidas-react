import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Main = styled.div`
  position: relative;
  bottom: 170px;
  z-index: 0;
`;

const MainPhoto = styled.img`
  width: 85%;
`;

const Gallery = styled.div`
  position: relative;
  bottom: 190px;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const Photos = styled.div`
  display: inline-block;
`;

const Lines = styled.div`
  display: inline-block;
  width: 15%;
  margin-left: 30px;
  margin-right: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #e7e7e7;
  border-radius: 1.5px;
  margin: 3px 0;
`;

const More = styled.button`
  background: none;
  border: none;
  outline: none;
  text-align: left;
  position: relative;
  bottom: 5px;
  width: 50px;
  font-size: 14px;
  font-family: "Avenir Next", Arial, sans-serif;
  font-weight: 500;
  color: #c0c0c0;
  transition: .2s;
  cursor: pointer;

  &:hover {
    color: #6e6e6e;
  }
`;

export default () => (
  <Wrapper>

    <Main>
      <MainPhoto src={require('./big-shoes@2x.jpg')} alt="" />
    </Main>

    <Gallery>

      <Photos>
        <img src={require('./small-shoes-1@2x.jpg')} width="145" height="118" alt="" />

        <img src={require('./small-shoes-2@2x.jpg')} width="145" height="118" alt="" />

        <img src={require('./small-shoes-3@2x.jpg')} width="145" height="118" alt="" />

        <img src={require('./small-shoes-4@2x.jpg')} width="145" height="118" alt="" />
      </Photos>

      <Lines>
        <Line />
        <Line />
        <Line />
      </Lines>

      <More>see more photos</More>

    </Gallery>

  </Wrapper>
);
