import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { openExternalLink } from '../../../utils';
import { BodyText, MissingImageBox } from '../../../themeComponents';
import { UserProjectsWidgetWrapper, UserProjectWrapper, UserProjectsBodyInfoWrapper,
    UserProjectItemWrapper, UserProjectsBodyTextWrapper, UserProjectsTitle } from './styles';

const UserProjectsWidget = ({ styles = {}, currentUserProjects = [] }) => (
    <UserProjectsWidgetWrapper styles={styles}>
        {currentUserProjects.map(({ project = {} }, index) => {
            const imageSize = '404';
            const coverImageUrl = get(project, `covers['${imageSize}']`, null);

            return (
                <UserProjectWrapper key={index}>
                    <UserProjectItemWrapper>
                        {project.name && (
                            <UserProjectsTitle onClick={openExternalLink.bind(this, project.url)}>
                                {project.name}
                            </UserProjectsTitle>
                        )}
                        <UserProjectsBodyInfoWrapper>
                            <MissingImageBox
                                onClick={openExternalLink.bind(this, project.url)}
                                styles={coverImageUrl ? { 
                                    background: `url("${coverImageUrl}")`,
                                    minHeight: "316px",
                                    height: 'auto',
                                    cursor: 'pointer'
                                } : {}
                                } imageSize={imageSize} />
                            <UserProjectsBodyTextWrapper>
                                <BodyText>{project.description}</BodyText>
                            </UserProjectsBodyTextWrapper>
                        </UserProjectsBodyInfoWrapper>
                    </UserProjectItemWrapper>
                </UserProjectWrapper>
            );
        })}
        
    </UserProjectsWidgetWrapper>
);

UserProjectsWidget.propTypes = {
    styles: PropTypes.object,
    currentUserProjects: PropTypes.array.isRequired
};

export default UserProjectsWidget;