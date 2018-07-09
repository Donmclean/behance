import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { homeRoot } from '../../constants/routes';

import AsyncComponent from '../../utils/AsyncComponent';

// const Home = AsyncComponent(() => import(/* webpackChunkName: "HomePage" */'../Home'));

class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
        const { state } = this.props;

        return (
            <h1>TESTss</h1>
            // <Switch>
            //     <Route exact path={homeRoot} component={Home} />
            //     <Redirect to={homeRoot} />
            // </Switch>
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