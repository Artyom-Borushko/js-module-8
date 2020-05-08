exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',
    
    capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    deviceName: 'myDevice'
    },
    
    specs: [
    '../specs/specForMobileBrowser.js'
    ],
    
    onPrepare: () => {
    browser.waitForAngularEnabled(false);
    },
    //test/specs/specForMobileBrowser.js
    jasmineNodeOpts: {
    defaultTimeoutInterval: 400000
    }
    }
    