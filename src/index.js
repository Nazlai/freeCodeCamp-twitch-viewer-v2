import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import './stylesheet/index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
