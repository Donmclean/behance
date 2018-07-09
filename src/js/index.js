import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import TopLevel from './TopLevel';

const root = document.getElementById('root');

ReactDOM.render(<TopLevel/>, root);