const mobileBrowser = require('./mobileBrowser');


class PageFactory {
	static getPage(pageName) {
		switch (pageName) {
		case 'Browser':
            return new mobileBrowser();
        }
	}
}

module.exports = PageFactory;