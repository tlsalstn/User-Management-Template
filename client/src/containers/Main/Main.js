import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Input width="99%" placeholder="ID" type="text" />
                <Input width="99%" placeholder="PASSWORD" type="password" />
                <Button content="로그인" />
            </div>
        );
    };
};

export default Main;