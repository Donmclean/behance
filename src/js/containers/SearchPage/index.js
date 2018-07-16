import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { withRouter } from 'react-router-dom';

import { SearchPageWrapper } from './styles';

import SearchBox from './SearchBox';
import UserList from './UserList';

class SearchPage extends Component {

    handleSearchChange(event) {
        const { actions } = this.context;

        const searchValue = event.target.value;

        actions.search.setSearchValue(searchValue);
        actions.search.fetchUsers(searchValue);
    }

    render() {
        const users = get(this.props, 'state.search.users', []);
        const searchValue = get(this.props, 'state.search.searchValue', '');

        return (
            <SearchPageWrapper>
                <SearchBox searchValue={searchValue} onChangeHandler={this.handleSearchChange.bind(this)} />
                <UserList users={users} />
            </SearchPageWrapper>
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