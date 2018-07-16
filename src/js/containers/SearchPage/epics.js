import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { isEmpty, isNil } from 'lodash';
import ApiService from '../../classes/ApiService';

import * as searchActionTypes from './actionTypes';
import * as searchActions from './actions';

export const searchFetchUsersEpic = (action$, store) =>
    action$.ofType(searchActionTypes.SEARCH_FETCH_USERS)
        .debounceTime(350)
        .switchMap(({ payload }) => {
            const { searchValue } = payload;

            if(isEmpty(searchValue) || isNil(searchValue)) {
                return Observable.of(searchActions.setUsers([]));
            }

            return Observable.fromPromise(ApiService.fetchUsersBySearchValue(searchValue))
                .map(({ users }) => searchActions.setUsers(users))
                .catch((err) => {
                    console.error('err > searchFetchUsersEpic > fromPromise: ', err);
                    return Observable.of();
                });
        })
        .catch((err) => {
            console.error('err > searchFetchUsersEpic: ', err);
            return Observable.of();
        });

export default combineEpics(
    searchFetchUsersEpic,
);