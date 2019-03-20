"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasePage {
    open(path) {
        browser.url(path);
    }
}
exports.BasePage = BasePage;
