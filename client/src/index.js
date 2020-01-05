import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import { login, register, users } from './stores/userStore';

const loginStore = new login();
const registerStore = new register();
const userStore = new users();

ReactDOM.render(
    <Provider login={loginStore} register={registerStore} user={userStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);