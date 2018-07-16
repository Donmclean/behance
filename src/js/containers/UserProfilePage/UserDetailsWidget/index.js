import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { openExternalLink } from '../../../utils';
import { BodyText, MissingImageBox } from '../../../themeComponents';
import { UserDetailsWidgetWrapper, UserDetailsWorkExperienceWrapper,
    UserDetailsWorkExperienceItemWrapper, UserDetailsFollowWrapper,
    UserDetailsTitle, UserDetailsFollowItemWrapper } from './styles';

const UserDetailsWidget = ({ styles = {}, followers = [], following = [], workExperience = [] }) => (
    <UserDetailsWidgetWrapper styles={styles}>
        <UserDetailsWorkExperienceWrapper>
            <UserDetailsTitle>Experience</UserDetailsTitle>
            {!isEmpty(workExperience) ? (
                workExperience.map(({position, organization, location}, index) => (
                    <UserDetailsWorkExperienceItemWrapper key={index}>
                        <BodyText><i>{position}</i></BodyText>
                        <BodyText>at {organization} in {location}</BodyText>
                    </UserDetailsWorkExperienceItemWrapper>
                ))
            ): (
                <BodyText>No Experience Listed...</BodyText>
            )}
        </UserDetailsWorkExperienceWrapper>

        <UserDetailsFollowWrapper>
            <UserDetailsTitle>Followers</UserDetailsTitle>
            {!isEmpty(followers) ? (
                followers.slice(0, 5).map(({display_name, images, url}, index) => (
                    <UserDetailsFollowItemWrapper key={index}
                        onClick={openExternalLink.bind(this, url)}
                        styles={{marginRight: '20px'}}>
                        <BodyText><b>{display_name}</b></BodyText>
                        {images ? (
                            <img src={images['138']}/>
                        ) : (
                            <MissingImageBox imageSize={138} />
                        )}
                    </UserDetailsFollowItemWrapper>
                ))
            ): (
                <BodyText>No Followers Listed...</BodyText>
            )}
        </UserDetailsFollowWrapper>

        <UserDetailsFollowWrapper>
            <UserDetailsTitle>Following</UserDetailsTitle>
            {!isEmpty(following) ? (
                following.slice(0, 5).map(({display_name, images, url}, index) => (
                    <UserDetailsFollowItemWrapper key={index}
                        onClick={openExternalLink.bind(this, url)}>
                        <BodyText><b>{display_name}</b></BodyText>
                        {images ? (
                            <img src={images['138']}/>
                        ) : (
                            <MissingImageBox imageSize={138} />
                        )}
                    </UserDetailsFollowItemWrapper>
                ))
            ): (
                <BodyText>No Followers Listed...</BodyText>
            )}
        </UserDetailsFollowWrapper>
        
    </UserDetailsWidgetWrapper>
);

UserDetailsWidget.propTypes = {
    styles: PropTypes.object,
    followers: PropTypes.array,
    following: PropTypes.array,
    workExperience: PropTypes.array
};

export default UserDetailsWidget;