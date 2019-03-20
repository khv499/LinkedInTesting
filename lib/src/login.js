"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginPage_1 = require("../pages/loginPage");
const basePage_1 = require("../pages/basePage");
class Login extends basePage_1.BasePage {
    constructor(emailAddress, password) {
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.loginPage = new loginPage_1.LoginPage();
    }
    open() {
        super.open('');
    }
    loginWithCorrectCredentials() {
        this.open();
        this.loginPage.emailAddress.setValue(this.emailAddress);
        this.loginPage.password.setValue(this.password);
        this.loginPage.signIn.click();
        browser.pause(6000);
    }
}
exports.Login = Login;
