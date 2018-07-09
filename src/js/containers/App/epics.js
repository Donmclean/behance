import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { get } from 'lodash';
import { push } from 'react-router-redux';
import { loginRoot } from '../../constants';

import * as appActionTypes from './actionTypes';
import * as appActions from './actions';

export const appTestEpic = (action$, store) =>
    action$.ofType(appActionTypes.APP_TEST)
        .switchMap(() => {
            return Observable.of();
        })
        .catch((err) => {
            console.error('err > appTestEpic: ', err);
        });

export default combineEpics(
    appTestEpic,
);