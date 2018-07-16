import React from 'react';
import SearchBox from './index';

import { getFullComponentRenderWrapper } from '../../../../__tests__utils/ComponentTestRenderer';

describe('SearchBox Component', () => {
    it('renders <SearchBox /> component successfully in to the DOM with required props', () => {
        const props = {};

        const SearchBoxWithProps = () => (<SearchBox {...props} />);

        const tree = getFullComponentRenderWrapper(SearchBoxWithProps);

        expect(tree.debug()).toMatchSnapshot();
    });
});