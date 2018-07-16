import styled from 'styled-components';
import { Fonts, Colors, Breakpoints } from '../../../constants/styleConstants';

export const UserDetailsWidgetWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 20px 0;
    ${({styles}) => styles ? styles : ''}
`;

export const UserDetailsWorkExperienceWrapper = styled.div`
    height: 100%;
    margin: 20px 0;
`;

export const UserDetailsWorkExperienceItemWrapper = styled.div`
    height: 100%;
    margin: 20px 0;
`;

export const UserDetailsFollowWrapper = styled.div`
    height: 100%;
    display: inline-block;
    margin: 10px 10px 10px 0;
`;

export const UserDetailsFollowItemWrapper = styled.div`
    height: 100%;
    margin: 20px 0;
    padding: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.75);
    ${({styles}) => styles ? styles : ''}
`;

export const UserDetailsTitle = styled.div`
    font-size: ${Fonts.large};
    line-height: 20px;
    color: ${Colors.primary1};
    font-weight: bold;
    margin-bottom: 10px;
`;