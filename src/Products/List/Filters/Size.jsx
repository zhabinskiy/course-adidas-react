import React from 'react';
import styled from 'styled-components';

const Size = styled.div`
  margin-left: 50px;

  @media screen and (max-width: 1080px) {
    margin-left: 0;
  }
`;

const Title = styled.span`
  color: #4d42f8;
  font-size: 24px;
  font-weight: 700;
  font-family: "Avenir Next", Arial, sans-serif;
  text-transform: uppercase;
  margin-right: 12px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  font-size: 24px;
  font-weight: 700;
  font-family: "Avenir Next", Arial, sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  transition: .2s;
  margin-right: 6px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #4d42f8;
  }
`;

export default () => (
  <Size>
    <Title>Size</Title>
    <Button>36</Button>
    <Button>37</Button>
    <Button>38</Button>
    <Button>39</Button>
    <Button>40</Button>
    <Button isActive>41</Button>
    <Button>42</Button>
  </Size>
);
