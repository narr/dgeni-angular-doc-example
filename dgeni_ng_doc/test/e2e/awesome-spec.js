describe('/api/dgeniNgDocTarget/directive/awesome', function() {
    'use strict';

    beforeEach(function() {
        browser.get('http://localhost:8080/api/dgeniNgDocTarget/directive/awesome');
    });

    it('should have an example', function() {
        var exampleEl;
        exampleEl = element.all(by.css('iframe.runnable-example-frame'));
        expect(exampleEl.count()).toBe(1);
    });
});
