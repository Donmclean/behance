import * as types from './actionTypes';

export const fetchUsers = (searchValue) => ({
    type: types.SEARCH_FETCH_USERS,
    payload: { searchValue }
});

export const setUsers = (users) => ({
    type: types.SEARCH_SET_USERS,
    payload: { users }
});

export const setSearchValue = (searchValue) => ({
    type: types.SEARCH_SET_SEARCH_VALUE,
    payload: { searchValue }
});