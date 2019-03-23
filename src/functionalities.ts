import { ElementsPage } from '../pages/elementsPage'
import { BasePage } from '../pages/basePage'

export class Functionalities extends BasePage{

    elements : ElementsPage;
    emailAddress : string;
    password : string;
    searchName : string;
    message : string;
    jobTitle : string;
    jobLocation : string;

    constructor(emailAddress: string, password: string, searchName : string, message : string, jobTitle : string, jobLocation : string){
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.searchName = searchName;
        this.message = message;
        this.jobTitle = jobTitle;
        this.jobLocation = jobLocation;
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
        this.elements.textMessage.addValue(this.message)
        browser.pause(3000)
        this.elements.sendButton.click()
        browser.pause(3000)
        this.elements.cancelButton.click()
        browser.pause(3000)
        this.elements.myNetworkIcon.click()
        browser.pause(3000)
        this.elements.groups.click()
        browser.pause(3000)
        this.elements.firstGroup.click()
        browser.pause(3000)
        this.elements.myNetworkIcon.click()
        browser.pause(3000)
    } 

    jobs(){
        this.elements.jobsTabIcon.click()
        browser.pause(2000)
        this.elements.searchJobs.setValue(this.jobTitle)
        browser.pause(2000)
        this.elements.searchLocation.setValue(this.jobLocation)
        browser.pause(2000)
        this.elements.searchButton.click()
        browser.pause(3000)
        this.elements.datePosted.click()
        browser.pause(1000)
        this.elements.pastMonthDatePosted.click()
        browser.pause(1000)
        this.elements.datePostedApply.click()
        browser.pause(4000)
        this.elements.linkedInFeatures.click()
        browser.pause(1000)
        this.elements.underTenApplicants.click()
        browser.pause(1000)
        this.elements.linkedInFeaturesApply.click()
        browser.pause(4000)
        this.elements.company.click()
        browser.pause(1000)
        this.elements.firstCompany.click()
        browser.pause(1000)
        this.elements.companyApply.click()
        browser.pause(4000)
        this.elements.experienceLevel.click()
        browser.pause(1000)
        this.elements.professionLevel.click()
        browser.pause(1000)
        this.elements.experienceLevelApply.click()
        browser.pause(4000)
        this.elements.clearFilters.click()
        browser.pause(2000)
        this.elements.jobsTabIcon.click()
        browser.pause(2000)
    }

    messaging(){
        this.elements.messagingIcon.click()
        browser.pause(2000)
        this.elements.textMessage.addValue(this.message)
        browser.pause(3000)
        this.elements.sendButton.click()
        browser.pause(3000)
        this.elements.homeIcon.click()
        browser.pause(2000)
    }
}
