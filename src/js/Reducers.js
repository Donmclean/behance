//Top Level Redux Reducer. All Reducers Should be added here.
import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './containers/App/reducer';

//ADD ALL REDUCERS TO THE 'allReducers' OBJECT HERE
const allReducers = {
    app: appReducer
};

//REDUCERS ARE THEN COMBINED TO BE USED WITH REDUX
const combinedReducers = combineReducers(allReducers);

//THIS OBJECT IS EXPORTED AND CAN/WILL BE USED FOR TESTING PURPOSES
export const mockStoreInitialState = createStore(combinedReducers).getState();

export default combinedReducers;