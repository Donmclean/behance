import { Observable } from 'rxjs'; // eslint-disable-line no-unused-vars

//Home for all Redux Observable Epics
import { combineEpics } from 'redux-observable';

// Import all Epics Here
import appEpics from './containers/App/epics';

const epics = combineEpics(
    appEpics
);

export default epics;