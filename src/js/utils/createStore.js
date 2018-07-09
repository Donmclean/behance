import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { includes } from 'lodash';

//Include Combined Reducers
import reducers from '../Reducers';

//Include Combined Actions
import getActions from '../Actions';

//Include Redux Observable For 'Epic' Creation
import epics from '../Epics';
import { createEpicMiddleware } from 'redux-observable';
const epicMiddleware = createEpicMiddleware(epics);

//add router history
const history = createHistory();

//All redux middlewares go here
const middlewares = [routerMiddleware(history), epicMiddleware]; //[epicMiddleware] when ready to use

let composeEnhancers;

//Add Environment Specific logic here.
switch(process.env.NODE_ENV) {
    case 'development': {
        //adds Redux logger
        middlewares.push(createLogger());
        composeEnhancers = composeWithDevTools;
        break;
    }
    default: {
        composeEnhancers = compose;
        break;
    }
}

//Top level Redux Store
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

const actions = getActions(store.dispatch);

export { store, history, actions };