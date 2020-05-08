class mobileBrowser {
	constructor() {
        this.menu = $('button[class*="hamburger-menu__button"]');
        this.menuList = $('ul[class*="hamburger-menu__list"]');
        this.searchButton = $('button[class*="header-search__button header__icon"]');
        this.searchLine = $("input#new_form_search");
        this.supportButton = $('a[class*="cta-button-ui cta-button--envelope header__control"]');
        this.epamLogoButton = $('img[class*="header__logo"]');
    }
}

module.exports = mobileBrowser;