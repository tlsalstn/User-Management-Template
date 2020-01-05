import React from 'react';
import './UserList.css';
import ListHeader from '../../components/ListHeader/ListHeader';
import ListBody from '../../components/ListBody/ListBody';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer
class UserList extends React.Component {
    UNSAFE_componentWillMount() {
        this.props.user.getUsers();
    }

    render() {
        const { users } = this.props.user;
        console.log(users);

        return (
            <div className="userList">
                <div className="list">
                    <ListHeader textAlign="center">
                        <span width="10%">ID</span>
                        <span width="50%">Password</span>
                        <span width="10%">Name</span>
                        <span width="30%">Email</span>
                    </ListHeader>
                    {users.map(user => {
                        return (
                            <ListBody textAlign="center">
                                <span width="10%">{user.id}</span>
                                <span width="50%">{user.password}</span>
                                <span width="10%">{user.name}</span>
                                <span width="30%">{user.email}</span>
                            </ListBody>
                        )
                    })}
                </div>
            </div>
        );
    };
};

export default UserList;