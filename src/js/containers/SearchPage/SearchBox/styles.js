import styled from 'styled-components';
import { Breakpoints } from '../../../constants/styleConstants';

export const SearchBoxWrapper = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    margin: 100px 0 0;

    @media (max-width: ${Breakpoints.tabletMax}px) {
        margin: 50px 0 0;
    }
`;

export const SearchBoxInput = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid black;
    text-align: center;
    width: 300px;
    font-size: 20px;
    outline: none;
`;