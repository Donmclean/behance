import React from 'react';
import Header from './index';

import { getFullComponentRenderWrapper } from '../../../__tests__utils/ComponentTestRenderer';

describe('Header Component', () => {
    it('renders <Header /> component successfully in to the DOM with required props', () => {
        const props = {};

        const HeaderWithProps = () => (<Header {...props} />);

        const tree = getFullComponentRenderWrapper(HeaderWithProps);

        expect(tree.debug()).toMatchSnapshot();
    });
});