import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HeaderWrapper, HeaderText } from './styles';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderText>Coding Challenge</HeaderText>
            </HeaderWrapper> 
        );
    }
}

Header.propTypes = {
    state: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

Header.contextTypes = {
    actions: PropTypes.object
};

const mapStateToProps = (state) => ({state});

export default withRouter(connect(mapStateToProps)(Header));