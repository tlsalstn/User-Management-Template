import { observable, action } from 'mobx';
import axios from 'axios';

export class login {
    @observable id = "";
    @observable pw = "";

    @action changeId = (txt) => this.id = txt;
    @action changePw = (txt) => this.pw = txt;

    @action login = () => {
        if(this.id === "admin" && this.pw === "1234") {            
            return true;
        }
        return false;
    };
};

export class register {
    @observable id = "";
    @observable password = "";
    @observable name = "";
    @observable email = "";

    @action changeId = (txt) => this.id = txt;
    @action changePassword = (txt) => this.password = txt;
    @action changeName = (txt) => this.name = txt;
    @action changeEmail = (txt) => this.email = txt;

    @action register = () => {
        const result = axios({
            method: "POST",
            url: 'http://localhost:3001/user/register',
            data: {
                id: this.id,
                password: this.password,
                name: this.name,
                email: this.email
            }
        });

        console.log(result);

        return result;
    };
};

export class users {
    @observable users = [];

    @action getUsers = async () => {
        const result = await axios({
            method: "GET",
            url: 'http://localhost:3001/user/users'
        });

        this.users = result.data.users;
    }
}