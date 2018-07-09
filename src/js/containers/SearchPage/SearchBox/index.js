import React, { Component } from 'react';
import { noop } from 'lodash';
import { SearchBoxWrapper, SearchBoxInput } from './styles'; 

class SearchBox extends Component {
    render() {
        const { onChangeHandler = noop } = this.props;

        return (
            <SearchBoxWrapper>
                <SearchBoxInput onChange={onChangeHandler} type="text" placeholder="Search for users.."/>
            </SearchBoxWrapper>
        );
    }
}

export default SearchBox;
