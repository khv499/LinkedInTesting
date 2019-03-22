import { ElementsPage } from '../pages/elementsPage'
import { BasePage } from '../pages/basePage'

export class Functionalities extends BasePage{

    elements : ElementsPage;
    emailAddress : string;
    password : string;
    searchName : string;
    message : string;

    constructor(emailAddress: string, password: string, searchName : string, message : string){
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.searchName = searchName;
        this.message = message;
        this.elements = new ElementsPage();
    }

    open() {
        super.open(''); 
        browser.maximizeWindow()     
    }

    loginWithWrongCredentials(){
        this.open()
        this.elements.loginEmailAddress.setValue(this.emailAddress)
        this.elements.loginPassword.setValue(this.password)
        this.elements.loginSignIn.click()
    }

    loginWithCorrectCredentials() {
        this.open()
        this.elements.loginEmailAddress.setValue(this.emailAddress)
        this.elements.loginPassword.setValue(this.password)
        this.elements.loginSignIn.click()
    }

    myNetwork(){
        this.elements.myNetworkIcon.click()
        browser.pause(2000)
        this.elements.manageAll.click()
        browser.pause(3000)
        this.elements.seeAllConnections.click()
        browser.pause(3000)
        this.elements.searchByName.setValue(this.searchName)
        browser.pause(3000)
        this.elements.messageButton.click()
        browser.pause(3000)
        this.elements.textMessage.click()
        this.elements.textMessage.setValue(this.message)
        browser.pause(3000)
        this.elements.sendButton.click()
        browser.pause(5000)
        this.elements.cancelButton.click()
        browser.pause(5000)
        this.elements.myNetworkIcon.click()
        browser.pause(5000)
        this.elements.groups.click()
        browser.pause(5000)
        this.elements.firstGroup.click()
        browser.pause(5000)
        this.elements.myNetworkIcon.click()
        browser.pause(5000)
    } 
}
