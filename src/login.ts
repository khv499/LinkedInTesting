import { LoginPage } from '../pages/loginPage'
import { BasePage } from '../pages/basePage'

export class Login extends BasePage{

    loginPage : LoginPage;
    emailAddress : string;
    password : string;

    constructor(emailAddress: string, password: string){
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.loginPage = new LoginPage();
    }

    open() {
        super.open('');      
    }

    loginWithCorrectCredentials() {
        this.open()
        this.loginPage.emailAddress.setValue(this.emailAddress)
        this.loginPage.password.setValue(this.password)
        this.loginPage.signIn.click()
        browser.pause(6000)
    }
}
