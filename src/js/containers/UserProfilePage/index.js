import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { get, isEmpty } from 'lodash';
import { withRouter } from 'react-router-dom';

import ImageTitleBox from './ImageTitleBox';
import StatsWidget from './StatsWidget';
import BasicInfoWidget from './BasicInfoWidget';
import SocialMediaWidget from './SocialMediaWidget';
import UserProjectsWidget from './UserProjectsWidget';
import UserDetailsWidget from './UserDetailsWidget';

import { UserProfilePageWrapper, UserProfileLeftSectionWrapper, UserProfileRightSectionWrapper, 
    UserProfileTopWrapper, UserProfileBodyWrapper } from './styles';

class UserProfilePage extends Component {

    componentDidMount() {
        this.fetchUserById(this.props);
    }

    fetchUserById(props) {
        const { actions } = this.context;

        const userId = get(props, 'match.params.userId', false);

        if(userId) {
            actions.userProfile.fetchUserById(userId);
        }
    }

    render() {
        const currentUser = get(this.props, 'state.userProfile.currentUser', false);
        const currentUserProjects = get(this.props, 'state.userProfile.currentUserProjects', false);

        const currentUserFollowing = get(this.props, 'state.userProfile.currentUserFollowing', false);
        const currentUserFollowers = get(this.props, 'state.userProfile.currentUserFollowers', false);
        const currentUserWorkExperience = get(this.props, 'state.userProfile.currentUserWorkExperience', false);

        return currentUser && (
            <UserProfilePageWrapper>
                <UserProfileTopWrapper>
                    <ImageTitleBox styles={{width: '30%'}} currentUser={currentUser} imageSize={138} />
                    <StatsWidget styles={{width: '70%'}} stats={currentUser.stats} />
                </UserProfileTopWrapper>

                <UserProfileBodyWrapper>
                    <UserProfileLeftSectionWrapper>
                        <BasicInfoWidget currentUser={currentUser} />
                        <SocialMediaWidget 
                            styles={{width: '70%'}} 
                            socialLinks={currentUser.social_links} />
                        <UserDetailsWidget 
                            followers={currentUserFollowers} 
                            following={currentUserFollowing} 
                            workExperience={currentUserWorkExperience} />
                    </UserProfileLeftSectionWrapper>
                    <UserProfileRightSectionWrapper>
                        {!isEmpty(currentUserProjects) && (
                            <UserProjectsWidget currentUserProjects={currentUserProjects} />
                        )}
                    </UserProfileRightSectionWrapper>
                </UserProfileBodyWrapper>
                
            </UserProfilePageWrapper>
        );
    }
}

UserProfilePage.propTypes = {
    state: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

UserProfilePage.contextTypes = {
    actions: PropTypes.object
};

const mapStateToProps = (state) => ({state});

export default withRouter(connect(mapStateToProps)(UserProfilePage));