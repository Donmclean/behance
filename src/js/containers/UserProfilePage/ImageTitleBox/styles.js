import styled from 'styled-components';
import { Fonts, Colors, Breakpoints } from '../../../constants/styleConstants';

export const ImageTitleBoxWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    ${({styles}) => styles ? styles : ''}

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
        align-items: start;
    }
`;

export const ImageTitleBoxImageWrapper = styled.div`
    display: inline-block;
    height: 100%;
    margin-right: 10px;
    vertical-align: middle;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        vertical-align: top;
        margin: auto;
    }
`;

export const ImageTitleBoxMainInfoWrapper = styled.div`
    width: 49%;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
        text-align: center;
    }
`;

export const ImageTitleBoxMainText = styled.h1`
    display: block;
    color: ${Colors.primary1};
    font-size: ${Fonts.medium};
    line-height: 20px;
    ${({styles}) => styles ? styles : ''}
`;

export const ImageTitleBoxMainTextInline = ImageTitleBoxMainText.extend`
    display: inline-block;
`;