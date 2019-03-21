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
        return browser.$('span = Message');
    }
    // Text Box in Message Box
    get textMessage() {
        return browser.$('#ember6964');
    }
    // Send Button in Message Box
    get sendButton() {
        return browser.$('button = Send');
    }
    // Cancel Button in Mesage Box
    get cancelButton() {
        return browser.$('(//li-icon[@type = "cancel-icon"])[3]');
    }
    // Get Groups in My Network
    get groups() {
        return browser.$('#ember7496');
    }
    // Select first group
    get firstGroup() {
        return browser.$('#ember7648');
    }
}
exports.ElementsPage = ElementsPage;
