import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './js/store';

const root = document.getElementById('root')

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();