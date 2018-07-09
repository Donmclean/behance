import { forEach } from 'lodash';
import { bindActionCreators } from 'redux';

//import All Action Creators
import { push, replace } from 'react-router-redux';
import * as appActions from './containers/App/actions';

//Then Add Action Creators here
const actionCreators = {
    push,
    replace,
    app: appActions
};

const getBoundedActions = (dispatch) => {
    const boundActionCreators = Object.keys(actionCreators).reduce((acc, val) => {
        acc[val] = bindActionCreators(actionCreators[val], dispatch);
        return acc;
    }, {});

    return boundActionCreators;
};

export default getBoundedActions;