import styled from 'styled-components';
import { Fonts, Colors, Breakpoints } from '../../../constants/styleConstants';

export const UserProjectsWidgetWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    ${({styles}) => styles ? styles : ''}
`;

export const UserProjectWrapper = styled.div`
    position: relative;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto 20px;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        padding: 0;
    }

    ${({styles}) => styles ? styles : ''}
`;

export const UserProjectItemWrapper = styled.div`
    position: relative;
    height: 100%;
    padding: 20px;
    margin: 0 auto 20px;
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.75);
    ${({styles}) => styles ? styles : ''}
`;

export const UserProjectsBodyInfoWrapper = styled.div`
    position: relative;
    display: flex;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        flex-direction: column;
    }
`;

export const UserProjectsBodyTextWrapper = styled.div`
    position: relative;
    width: 42%;
    margin: 0 20px;
    max-height: 404px;
    overflow-y: scroll;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
        margin: 20px 0;
    }
`;

export const UserProjectsTitle = styled.div`
    display: inline-block;
    position: relative;
    font-size: ${Fonts.xlarge};
    font-weight: bold;
    color: ${Colors.primary1};
    margin-bottom: 20px;
    line-height: 40px;
    cursor: pointer;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        font-size: ${Fonts.medium};
        line-height: 20px;
    }

    ${({styles}) => styles ? styles : ''}
`;