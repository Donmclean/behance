import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import * as appActionTypes from './actionTypes';
import * as appActions from './actions';

export const appLocationChangeEpic = (action$, store) =>
    action$.ofType(appActionTypes.LOCATION_CHANGE)
        .switchMap(() => {
            return Observable.of();
        })
        .catch((err) => {
            console.error('err > appLocationChangeEpic: ', err);
        });

export default combineEpics(
    appLocationChangeEpic,
);