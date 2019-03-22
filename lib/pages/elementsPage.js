"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ElementsPage {
    // Login Email Address Element
    get loginEmailAddress() {
        return browser.$('#login-email');
    }
    // Login Password Element
    get loginPassword() {
        return browser.$('#login-password');
    }
    // Login SignIn Element
    get loginSignIn() {
        return browser.$('#login-submit');
    }
    // Home in Navigation Bar
    get homeIcon() {
        return browser.$('#feed-tab-icon');
    }
    // My Network in Navigation Bar
    get myNetworkIcon() {
        return browser.$('#mynetwork-tab-icon');
    }
    // Manage All link at My Network
    get manageAll() {
        return browser.$('//a[@href = "/mynetwork/invitation-manager/"]');
    }
    // See All Connections at Manage All
    get seeAllConnections() {
        return browser.$('//a[@href = "/mynetwork/invite-connect/connections/"]');
    }
    // Search by name
    get searchByName() {
        return browser.$('//input[@placeholder = "Search by name"]');
    }
    // Message in Search Box
    get messageButton() {
        return browser.$('//span[text() = "Message"]/parent::button');
    }
    // Text Box in Message Box
    get textMessage() {
        return browser.$('//div[@role = "textbox"]');
    }
    // Send Button in Message Box
    get sendButton() {
        return browser.$('//button[text() = "Send"]');
    }
    // Cancel Button in Mesage Box
    get cancelButton() {
        return browser.$('(//li-icon[@type = "cancel-icon"])[3]');
    }
    // Get Groups in My Network
    get groups() {
        return browser.$('//a[@href = "/groups/my-groups/"]');
    }
    // Select first group 
    get firstGroup() {
        return browser.$('//a[@href = "/groups/4332669/"]');
    }
    // Jobs in Navigation Bar
    get jobsTabIcon() {
        return browser.$('#jobs-tab-icon');
    }
    // Search Jobs in Jobs 
    get searchJobs() {
        return browser.$('// input[@placeholder="Search jobs"]');
    }
    // Search location in Jobs 
    get searchLocation() {
        return browser.$('// input[@placeholder="Search location"]');
    }
    // Search in Jobs
    get searchButton() {
        return browser.$('// button[text()="Search"]');
    }
    // Date Posted in Filters
    get datePosted() {
        return browser.$('// h3[text() = "Date Posted"]');
    }
    // LinkedIn Features in Filters
    get linkedInFeatures() {
        return browser.$('// h3[text() = "LinkedIn Features"]');
    }
    // Company in Filters
    get company() {
        return browser.$('// h3[text() = "Company"]');
    }
    // Experience Level in Filters
    get experienceLevel() {
        return browser.$('// h3[text() = "Experience Level"]');
    }
    // Clear filters
    get clearFilters() {
        return browser.$('// span[text() = "Clear "]/parent::button');
    }
}
exports.ElementsPage = ElementsPage;
