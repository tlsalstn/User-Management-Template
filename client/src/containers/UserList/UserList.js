import React from 'react';
import './UserList.css';
import ListHeader from '../../components/ListHeader/ListHeader';
import ListBody from '../../components/ListBody/ListBody';

class UserList extends React.Component {
    render() {
        return (
            <div className="userList">
                <div className="list">
                    <ListHeader textAlign="center">
                        <span>ID</span>
                        <span>Password</span>
                        <span>Name</span>
                        <span>Email</span>
                    </ListHeader>
                    <ListBody textAlign="center">
                        <span>ID</span>
                        <span>Password</span>
                        <span>Name</span>
                        <span>Email</span>
                    </ListBody>
                </div>
            </div>
        );
    };
};

export default UserList;