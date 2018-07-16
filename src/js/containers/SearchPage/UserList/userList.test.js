import React from 'react';
import UserList from './index';

import { getFullComponentRenderWrapper } from '../../../../__tests__utils/ComponentTestRenderer';

describe('UserList Component', () => {
    it('renders <UserList /> component successfully in to the DOM with required props', () => {
        const props = {
            users: [{
                id: 1,
                display_name: 'testname',
                images: {
                    '138': 'img/url'
                }  
            }]
        };

        const UserListWithProps = () => (<UserList {...props} />);

        const tree = getFullComponentRenderWrapper(UserListWithProps);

        expect(tree.debug()).toMatchSnapshot();
    });
});