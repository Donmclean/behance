import styled from 'styled-components';
import { Breakpoints } from '../../constants/styleConstants';

export const UserProfilePageWrapper = styled.div`
    position: relative;
    height: 100%;
    margin: 20px;
`;

export const UserProfileBodyWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        flex-direction: column;
    }
`;

export const UserProfileLeftSectionWrapper = styled.div`
    height: 100%;
    width: 30%;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
    }
`;

export const UserProfileRightSectionWrapper = styled.div`
    height: 100%;
    width: 70%;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        width: 100%;
    }
`;

export const UserProfileTopWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto 20px;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        flex-direction: column;
    }
`;