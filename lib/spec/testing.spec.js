"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("../src/login");
const values_1 = require("../config/values");
let values = new values_1.Values();
describe("login Validation : ", function () {
    beforeEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
    });
    // Login with correct credentials
    it("Correct Credentials", function () {
        let test = new login_1.Login(values.emailId, values.password);
        test.loginWithCorrectCredentials();
        let title = browser.getTitle();
        expect(title).toBe('LinkedIn');
    });
});
