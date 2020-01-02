import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import login from './stores/login';

const loginStore = new login();

ReactDOM.render(
    <Provider login={loginStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);