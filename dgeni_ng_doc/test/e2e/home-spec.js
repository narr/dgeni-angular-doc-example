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

describe('api/dgeniNgDocTarget/directive/awesome', function() {
    'use strict';

    it('should have an example', function() {
        var exampleEl;
        browser.get('http://localhost:8080/api/dgeniNgDocTarget/directive/awesome');
        exampleEl = element.all(by.css('iframe.runnable-example-frame'));
        expect(exampleEl.count()).toBe(1);
    });
});
