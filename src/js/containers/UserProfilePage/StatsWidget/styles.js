import styled from 'styled-components';
import { Fonts, Colors, Breakpoints } from '../../../constants/styleConstants';

export const StatsWidgetWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    ${({styles}) => styles ? styles : ''}

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
        align-items: start;
        margin: 20px 0;
        justify-content: center;
    }
`;

export const StatsWidgetItemWrapper = styled.div`
    position: relative;
    margin: auto 10px;
    line-height: 10px;
`;
