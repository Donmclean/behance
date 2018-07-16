import React from 'react';
import { store, history } from '../js/utils/createStore';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

const wrapComponent = (componentToRender) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route component={componentToRender} />
        </ConnectedRouter>
    </Provider>
);

export const getFullComponentJSON = (componentToRender) => {
    const componentWrapper = wrapComponent(componentToRender);
    return renderer.create((componentWrapper).toJSON());
};

export const getFullComponentRenderWrapper = (componentToRender) => {
    const componentWrapper = wrapComponent(componentToRender);
    return mount(componentWrapper);
};

export const getShallowComponentRendererWrapper = (componentToRender) => {
    const componentWrapper = wrapComponent(componentToRender);
    return shallow(componentWrapper);
};