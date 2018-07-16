import styled from 'styled-components';

export const UserListWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const UserListItemWrapper = styled.div`
    padding: 10px;
    color: #ffffff;
    margin: 10px;
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    width: 200px;
    box-shadow: 0px 4px 11px 0px rgba(0,0,0,0.75);
`;

export const UserListImageWrapper = styled.div`
    display: inline-block;
    cursor: pointer;
`;