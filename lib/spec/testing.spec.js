"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functionalities_1 = require("../src/functionalities");
const values_1 = require("../config/values");
let values = new values_1.Values();
describe("UI Automation", function () {
    it("LinkedIn Full Functionalities", function () {
        let test1 = new functionalities_1.Functionalities(values.emailId, values.wrongPassword);
        test1.loginWithWrongCredentials();
        let title1 = browser.getTitle();
        expect(title1).toBe('Sign In to LinkedIn');
        let test2 = new functionalities_1.Functionalities(values.emailId, values.password);
        test2.loginWithCorrectCredentials();
        let title2 = browser.getTitle();
        expect(title2).toContain('LinkedIn');
    });
});
