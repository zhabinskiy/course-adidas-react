import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  left: 30px;
`;

export default () => <Image src={require('./search.svg')} alt="" />;
