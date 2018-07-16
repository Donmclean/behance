import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UserListWrapper, UserListItemWrapper, UserListImageWrapper } from './styles'; 
import { BodyText, MissingImageBox } from '../../../themeComponents';
import { userProfileRoot } from '../../../constants/routes';

const UserList = ({ users = [] }) => (
    <UserListWrapper>
        {users.map((user, index) => (
            <Link key={index} to={`/${userProfileRoot}/${user.id}`}>
                <UserListItemWrapper>
                    <UserListImageWrapper>
                        {user.images ? (
                            <img src={user.images['138']}/>
                        ) : (
                            <MissingImageBox imageSize={138} />
                        )}
                    </UserListImageWrapper>
                    <BodyText>{user.display_name}</BodyText>
                </UserListItemWrapper>
            </Link>
        ))}
    </UserListWrapper>
);

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;