import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/MainPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Main}/>
            </Router>
        );
    };
};

export default App;