import {Functionalities} from '../src/functionalities' 
import {Values} from '../config/values'

let values = new Values();

describe("UI Automation", function(){
    it("LinkedIn Full Functionalities", function(){
        let test1 = new Functionalities(values.emailId,values.wrongPassword)
        test1.loginWithWrongCredentials()
        let title1 = browser.getTitle()
        expect(title1).toBe('Sign In to LinkedIn')
        let test2 = new Functionalities(values.emailId,values.password)
        test2.loginWithCorrectCredentials()
        let title2 = browser.getTitle()
        expect(title2).toContain('LinkedIn')
    })
})