"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elementsPage_1 = require("../pages/elementsPage");
const basePage_1 = require("../pages/basePage");
class Functionalities extends basePage_1.BasePage {
    constructor(emailAddress, password, searchName, message, jobTitle, jobLocation) {
        super();
        this.emailAddress = emailAddress;
        this.password = password;
        this.searchName = searchName;
        this.message = message;
        this.jobTitle = jobTitle;
        this.jobLocation = jobLocation;
        this.elements = new elementsPage_1.ElementsPage();
    }
    open() {
        super.open('');
        browser.maximizeWindow();
    }
    loginWithWrongCredentials() {
        this.open();
        this.elements.loginEmailAddress.setValue(this.emailAddress);
        this.elements.loginPassword.setValue(this.password);
        this.elements.loginSignIn.click();
        browser.pause(2000);
    }
    loginWithCorrectCredentials() {
        this.open();
        this.elements.loginEmailAddress.setValue(this.emailAddress);
        this.elements.loginPassword.setValue(this.password);
        this.elements.loginSignIn.click();
        browser.pause(2000);
    }
    myNetwork() {
        this.elements.myNetworkIcon.click();
        browser.pause(2000);
        this.elements.manageAll.click();
        browser.pause(3000);
        this.elements.seeAllConnections.click();
        browser.pause(3000);
        this.elements.searchByName.setValue(this.searchName);
        browser.pause(3000);
        this.elements.messageButton.click();
        browser.pause(3000);
        this.elements.textMessage.addValue(this.message);
        browser.pause(3000);
        this.elements.sendButton.click();
        browser.pause(3000);
        this.elements.cancelButton.click();
        browser.pause(3000);
        this.elements.myNetworkIcon.click();
        browser.pause(3000);
        this.elements.groups.click();
        browser.pause(3000);
        this.elements.firstGroup.click();
        browser.pause(3000);
        this.elements.myNetworkIcon.click();
        browser.pause(3000);
    }
    jobs() {
        this.elements.jobsTabIcon.click();
        browser.pause(2000);
        this.elements.searchJobs.setValue(this.jobTitle);
        browser.pause(2000);
        this.elements.searchLocation.setValue(this.jobLocation);
        browser.pause(2000);
        this.elements.searchButton.click();
        browser.pause(3000);
        this.elements.datePosted.click();
        browser.pause(1000);
        this.elements.pastMonthDatePosted.click();
        browser.pause(1000);
        this.elements.datePostedApply.click();
        browser.pause(4000);
        this.elements.linkedInFeatures.click();
        browser.pause(1000);
        this.elements.underTenApplicants.click();
        browser.pause(1000);
        this.elements.linkedInFeaturesApply.click();
        browser.pause(4000);
        this.elements.company.click();
        browser.pause(1000);
        this.elements.firstCompany.click();
        browser.pause(1000);
        this.elements.companyApply.click();
        browser.pause(4000);
        this.elements.experienceLevel.click();
        browser.pause(1000);
        this.elements.professionLevel.click();
        browser.pause(1000);
        this.elements.experienceLevelApply.click();
        browser.pause(4000);
        this.elements.clearFilters.click();
        browser.pause(2000);
        this.elements.jobsTabIcon.click();
        browser.pause(2000);
    }
    messaging() {
        this.elements.messagingIcon.click();
        browser.pause(2000);
        this.elements.textMessage.addValue(this.message);
        browser.pause(3000);
        this.elements.sendButton.click();
        browser.pause(3000);
        this.elements.homeIcon.click();
        browser.pause(2000);
    }
    notifications() {
        this.elements.notificationIcon.click();
        browser.pause(2000);
        this.elements.seeAllViews.click();
        browser.pause(4000);
        this.elements.notificationIcon.click();
        browser.pause(2000);
    }
    profile() {
        this.elements.naviagtionSettings.click();
        browser.pause(4000);
        this.elements.viewProfile.click();
        browser.pause(2000);
    }
    signOut() {
        this.elements.naviagtionSettings.click();
        browser.pause(4000);
        this.elements.signOut.click();
        browser.pause(2000);
    }
}
exports.Functionalities = Functionalities;
