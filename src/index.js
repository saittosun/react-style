// jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppCssModule';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
