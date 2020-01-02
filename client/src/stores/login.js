import { observable, action } from 'mobx';

export default class login {
    @observable id = "";
    @observable pw = "";

    @action changeId = (txt) => this.id = txt;
    @action changePw = (txt) => this.pw = txt;

    @action login = () => {
        if(this.id === "admin" && this.pw === "1234") {
            console.log("Success");
            return true;
        }
        console.log("Fail")
        return false;
    }
};