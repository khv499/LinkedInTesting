import { ElementsPage } from '../pages/elementsPage'
import { BasePage } from '../pages/basePage'

export class Functionalities extends BasePage{

    elements : ElementsPage;
    emailAddress : string;
    password : string;

    constructor(emailAddress: string, password: string){
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.elements = new ElementsPage();
    }

    open() {
        super.open('');      
    }

    loginWithWrongCredentials(){
        this.open()
        this.elements.emailAddress.setValue(this.emailAddress)
        this.elements.password.setValue(this.password)
        this.elements.signIn.click()
        browser.pause(2000)
    }

    loginWithCorrectCredentials() {
        this.open()
        this.elements.emailAddress.setValue(this.emailAddress)
        this.elements.password.setValue(this.password)
        this.elements.signIn.click()
        browser.pause(2000)
    }
}
