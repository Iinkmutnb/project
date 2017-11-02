import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HOME from './home/home';
import PRODUCT from './home/product';
import APP from './App.js'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<APP/>, document.getElementById('root'));
registerServiceWorker();
