import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { SearchBoxWrapper, SearchBoxInput } from './styles'; 

const SearchBox = ({ searchValue = '', onChangeHandler = noop }) => (
    <SearchBoxWrapper>
        <SearchBoxInput value={searchValue} onChange={onChangeHandler} type="text" placeholder="Search for users.."/>
    </SearchBoxWrapper>
);

SearchBox.propTypes = {
    searchValue: PropTypes.string,
    onChangeHandler: PropTypes.func
};

export default SearchBox;
