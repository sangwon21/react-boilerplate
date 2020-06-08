import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';

const rootElement = document.getElementById('root');

import(/*webpackChunkName: 'app' */ '@/App').then(({ default: App }) => ReactDOM.render(<App />, rootElement));
