import {Functionalities} from '../src/functionalities' 
import {Values} from '../config/values'

let values = new Values();

describe("UI Automation", function(){
    it("LinkedIn Full Functionalities", function(){
        // let test1 = new Functionalities(values.emailId, values.wrongPassword, values.searchName, values.message, values.jobTitle, values.jobLocation)
        // test1.loginWithWrongCredentials()
        // let title1 = browser.getTitle()
        // expect(title1).toBe('Sign In to LinkedIn')
        let test2 = new Functionalities(values.emailId, values.password, values.searchName, values.message, values.jobTitle, values.jobLocation)
        test2.loginWithCorrectCredentials()
        let title2 = browser.getTitle()
        expect(title2).toContain('LinkedIn')
        // test2.myNetwork()
        // let title3 = browser.getTitle()
        // expect(title3).toContain('LinkedIn')
        // test2.jobs()
        // let title4 = browser.getTitle()
        // expect(title4).toContain('Jobs | LinkedIn')
    })
})