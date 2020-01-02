import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/MainPage';
import UserList from './containers/UserList/UserList';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main} />
                <Route path="/userList" component={UserList} />
            </Router>
        );
    };
};

export default App;