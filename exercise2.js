describe('exercise 2 - scenario 1', function () {
    it('to test if url contains /login', function () {
        browser.get('http://qatest.staging.kaboo.com/en/login');
        expect(browser.getCurrentUrl()).toContain('/login');
    });

    it('send username and pass', function () {
        element(by.name('username')).sendKeys('autouk');
        element(by.name('password')).sendKeys('Autotest1');
        element(by.id('submitLogin')).click();
    });

    it('redirect and check if url contains /profile', function () {
        browser.sleep(5000);
        element(by.id('profile')).click();
        expect(browser.getCurrentUrl()).toContain('/profile');
    })
});