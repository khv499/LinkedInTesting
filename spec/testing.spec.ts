import {Login} from '../src/login' 
import {Values} from '../config/values'

let values = new Values();

describe("login Validation : ", function(){
    beforeEach(function(){
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000 
    })
    // Login with correct credentials
    it("Correct Credentials", function(){
        let test = new Login(values.emailId,values.password)
        test.loginWithCorrectCredentials()
        let title = browser.getTitle()
        expect(title).toBe('LinkedIn')
    })
})