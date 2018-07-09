import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchBox from './SearchBox';

class SearchPage extends Component {

    handleSearchChange(event) {
        console.log('event: ', event.target.value);

        //TODO: do debounce search on target value change
    }

    render() {
        return (
            <div>
                <SearchBox onChangeHandler={this.handleSearchChange.bind(this)} />
                <h1>Test</h1>
            </div>
        );
    }
}

SearchPage.propTypes = {
    state: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

SearchPage.contextTypes = {
    actions: PropTypes.object
};

const mapStateToProps = (state) => ({state});

export default withRouter(connect(mapStateToProps)(SearchPage));