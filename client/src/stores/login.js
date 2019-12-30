import { observable } from 'mobx';

class login {
    @observable id = "";
    @observable pw = "";

    @action changeId = (txt) => this.id = txt;
    @action changePw = (txt) => this.pw = txt;
}