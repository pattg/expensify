import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<p>THIS IS MY BOILERPLATE</p>, document.getElementById('root'));

serviceWorker.unregister();
