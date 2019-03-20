"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginPage {
    //Email Address Element
    get emailAddress() {
        return browser.$('#login-email');
    }
    // Password Element
    get password() {
        return browser.$('#login-password');
    }
    // SignIn Element
    get signIn() {
        return browser.$('#login-submit');
    }
}
exports.LoginPage = LoginPage;
