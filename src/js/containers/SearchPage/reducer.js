import * as R from 'ramda';
import * as types from './actionTypes';

const CONSTANTS = {
    searchValue: 'searchValue',
    users: 'users'
};

export const initialState = {
    [CONSTANTS.searchValue]: '',
    [CONSTANTS.users]: []
};

const searchPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_SET_SEARCH_VALUE: {
            const { searchValue } = action.payload;

            return R.set(R.lensProp(CONSTANTS.searchValue), searchValue, state);
        }
        case types.SEARCH_SET_USERS: {
            const { users } = action.payload;

            return R.set(R.lensProp(CONSTANTS.users), users, state);
        }
        default: {
            return state;
        }
    }
};

export default searchPageReducer;