import styled from 'styled-components';
import { Fonts, Colors, Breakpoints } from '../../../constants/styleConstants';

export const SocialMediaWidgetWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    line-height: 40px;
    ${({styles}) => styles ? styles : ''}
`;
