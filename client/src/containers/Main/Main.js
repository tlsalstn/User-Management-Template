import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Main.css';
import { inject, observer } from 'mobx-react';

@inject('login')
@observer
class Main extends React.Component {
    render() {
        const { changeId, changePw, login } = this.props.login;

        const onKeyUp = () => {
            if(window.event.keyCode === 13) {
                login();
            }
        }

        return (
            <div className="main">
                <Input width="99%" placeholder="ID" type="text" onChange={e => changeId(e.target.value)} onKeyUp={onKeyUp} />
                <Input width="99%" placeholder="PASSWORD" type="password" onChange={e => changePw(e.target.value)} onKeyUp={onKeyUp}/>
                <Button content="로그인" onClick={login} />
            </div>
        );
    };
};

export default Main;