//Top Level Redux Reducer. All Reducers Should be added here.
import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './containers/App/reducer';
import seachPageReducer from './containers/SearchPage/reducer';
import userProfilePageReducer from './containers/UserProfilePage/reducer';

//ADD ALL REDUCERS TO THE 'allReducers' OBJECT HERE
const allReducers = {
    app: appReducer,
    search: seachPageReducer,
    userProfile: userProfilePageReducer,
    routing: routerReducer
};

//REDUCERS ARE THEN COMBINED TO BE USED WITH REDUX
const combinedReducers = combineReducers(allReducers);

//THIS OBJECT IS EXPORTED AND CAN/WILL BE USED FOR TESTING PURPOSES
export const mockStoreInitialState = createStore(combinedReducers).getState();

export default combinedReducers;