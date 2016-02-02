'use strict';

import 'babel-polyfill';    // polyfill for Promise (and other functions)

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Inclusion des styles du projet via webpack
require('../styles/main.sass');

ReactDOM.render((
    <App />
), document.getElementById('app'));
