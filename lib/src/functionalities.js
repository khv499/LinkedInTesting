"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementsPage_1 = require("../pages/elementsPage");
const basePage_1 = require("../pages/basePage");
class Functionalities extends basePage_1.BasePage {
    constructor(emailAddress, password) {
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.elements = new elementsPage_1.ElementsPage();
    }
    open() {
        super.open('');
    }
    loginWithWrongCredentials() {
        this.open();
        this.elements.loginEmailAddress.setValue(this.emailAddress);
        this.elements.loginPassword.setValue(this.password);
        this.elements.loginSignIn.click();
        browser.pause(2000);
    }
    loginWithCorrectCredentials() {
        this.open();
        this.elements.loginEmailAddress.setValue(this.emailAddress);
        this.elements.loginPassword.setValue(this.password);
        this.elements.loginSignIn.click();
        browser.pause(2000);
    }
}
exports.Functionalities = Functionalities;
