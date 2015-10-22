describe('Home', function() {
    'use strict';

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toBe('Docs');
    });

    it('should have two links', function() {
        var mainEl, h3TagNum, aTagNum;
        mainEl = $('.jumbotron').element(by.xpath('..'));
        h3TagNum = mainEl.all(by.css('h3')).count();
        aTagNum = mainEl.all(by.css('p > a')).count();
        // aTagNum.then(function(count) {
        //     console.log(arguments);
        //    console.log(count);
        // });
        expect(h3TagNum).toBe(aTagNum);
        expect(aTagNum).toBe(2);
    });
});
