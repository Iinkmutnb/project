import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HOME from './home/home';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<HOME />, document.getElementById('root'));
registerServiceWorker();
