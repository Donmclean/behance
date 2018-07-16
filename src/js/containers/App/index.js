import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { homeRoot, userProfileRoot } from '../../constants/routes';

import './styles';

import Header from '../Header';
import SearchPage from '../SearchPage';
import UserProfilePage from '../UserProfilePage';

// //uncomment for code splitted version
// import AsyncComponent from '../../utils/AsyncComponent';
// const Header = AsyncComponent(() => import(/* webpackChunkName: "Header" */ '../Header'));
// const SearchPage = AsyncComponent(() => import(/* webpackChunkName: "SearchPage" */ '../SearchPage'));
// const UserProfilePage = AsyncComponent(() => import(/* webpackChunkName: "UserProfilePage" */ '../UserProfilePage'));

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path={homeRoot} component={SearchPage} />
                    <Route exact path={`/${userProfileRoot}/:userId`} component={UserProfilePage} />
                    <Redirect to={homeRoot} />
                </Switch>
            </div>
        )
	}
}

App.propTypes = {
    state: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

App.contextTypes = {
    actions: PropTypes.object
};

const mapStateToProps = (state) => ({state});

export default withRouter(connect(mapStateToProps)(App));