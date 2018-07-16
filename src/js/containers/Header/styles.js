import React from 'react';
import styled from 'styled-components';
import { Fonts, Colors } from '../../constants/styleConstants';

export const HeaderWrapper = styled.div`
  background: ${Colors.background1};
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.75);
`;

export const HeaderText = styled.h1`
  font-size: ${Fonts.large};
  display: inline-block;
  margin: 30px 0;
  text-align: center;
  width: 100%;
`;
