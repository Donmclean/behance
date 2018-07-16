import React from 'react';
import styled from 'styled-components';

import { Colors, Fonts, Breakpoints } from '../constants/styleConstants';

export const BodyText = styled.p`
    color: ${Colors.primary1};
    font-size: ${Fonts.small};
    line-height: 20px;
    margin: 0;
    ${({styles}) => styles ? styles : ''}
`;

export const BodyTextInline = BodyText.extend`
    display: inline;
`;

export const Bold = styled.span`
    font-weight: bold;
`;

export const TypiconFont = styled.span`
    font-size: ${Fonts.small};
    color: ${Colors.primary1};
    ${({styles}) => styles ? styles : ''}
`;

export const TypiconFontWidget = (props) => (
    <TypiconFont {...props}></TypiconFont>
);

export const MissingImageBox = styled.div`
    width: ${({ imageSize = 276 }) => imageSize}px;
    height: ${({ imageSize = 276 }) => imageSize}px;
    background: gray;
    background-size: cover;
    background-repeat: no-repeat;
    ${({styles}) => styles ? styles : ''}

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
    }
`;