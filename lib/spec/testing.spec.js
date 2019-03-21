"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functionalities_1 = require("../src/functionalities");
const values_1 = require("../config/values");
let values = new values_1.Values();
describe("UI Automation", function () {
    it("LinkedIn Full Functionalities", function () {
        // let test1 = new Functionalities(values.emailId, values.wrongPassword, values.searchName, values.message)
        // test1.loginWithWrongCredentials()
        // let title1 = browser.getTitle()
        // expect(title1).toBe('Sign In to LinkedIn')
        let test2 = new functionalities_1.Functionalities(values.emailId, values.password, values.searchName, values.message);
        test2.loginWithCorrectCredentials();
        let title2 = browser.getTitle();
        expect(title2).toContain('LinkedIn');
        test2.myNetwork();
        let title3 = browser.getTitle();
        expect(title3).toContain('LinkedIn');
    });
});
