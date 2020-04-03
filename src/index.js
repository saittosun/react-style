// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppStyled';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
