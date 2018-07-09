import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { store, history, actions } from './utils/createStore';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import App from './containers/App';

const supportsHistory = 'pushState' in window.history;

class TopLevel extends Component {
    constructor() {
        super();
    }

    getChildContext() {
        return { actions };
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter forceRefresh={!supportsHistory} history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}

TopLevel.childContextTypes = {
    actions: PropTypes.object
};

export default hot(module)(TopLevel);