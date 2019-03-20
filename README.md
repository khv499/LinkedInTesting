# LinkedInTesting
UI Automation Testing for LinkedIn Website 


Step 1:
We need to initialize project using npm init command

Step 2:
Install following packages using npm i package_name
Packages :
 "webdriverio": "^4.5.0",
 "@types/webdriverio": "^4.4.0",
 "@types/jasmine": "^3.3.9",
 "wdio-selenium-standalone-service": "0.0.12",
 "wdio-jasmine-framework": "^0.3.8"

Step 3:
Install following package to configure webdriverio
 "@wdio/cli": "^5.7.4"
Next follow the configuration steps as asked in cli

Step 4:
Create .gitignore file and add .vscode, node_modules, package-lock.json files

Step 5:
Open wdio.conf.js file and modify the changes
a) Change specs location into './lib/spec/testing.spec.js'
b) In Capabilities change maxInstances to 1 and browserName as 'chrome'
c) Add services - "selenium-standalone" 

Step 6:
Add typescript package globally and add tsconfig.json file which configure typescript

Step 7:
Change the test script in package.json into 'wdio wdio.conf.js'

Step 8:
Write scripts in typescript and then execute 'tsc' command which will create js files for all ts files mentioned in tsconfig.json file

Step 9:
Execute command 'npm test' which will test testcases in testing.spec.js file