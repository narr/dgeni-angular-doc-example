angular.module('dgeniNgDocTarget')
    .controller('MainCtrl', function(modalService, $log, message) {
        'use strict';

        var that = this;

        that.awesomeThings = [
            {
                'key': 'angular',
                'title': 'AngularJS',
                'url': 'https://angularjs.org',
                'description': 'HTML enhanced for web apps!',
                'logo': 'angular.png'
            },
            {
                'key': 'browsersync',
                'title': 'BrowserSync',
                'url': 'http://browsersync.io',
                'description': 'Time-saving synchronised browser testing.',
                'logo': 'browsersync.png'
            },
            {
                'key': 'gulp',
                'title': 'GulpJS',
                'url': 'http://gulpjs.com',
                'description': 'The streaming build system.',
                'logo': 'gulp.png'
            },
            {
                'key': 'jasmine',
                'title': 'Jasmine',
                'url': 'http://jasmine.github.io',
                'description': 'Behavior-Driven JavaScript.',
                'logo': 'jasmine.png'
            },
            {
                'key': 'karma',
                'title': 'Karma',
                'url': 'http://karma-runner.github.io',
                'description': 'Spectacular Test Runner for JavaScript.',
                'logo': 'karma.png'
            },
            {
                'key': 'protractor',
                'title': 'Protractor',
                'url': 'https://github.com/angular/protractor',
                'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                'logo': 'protractor.png'
            },
            {
                'key': 'jquery',
                'title': 'jQuery',
                'url': 'http://jquery.com',
                'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
                'logo': 'jquery.jpg'
            },
            {
                'key': 'bootstrap',
                'title': 'Bootstrap',
                'url': 'http://getbootstrap.com',
                'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                'logo': 'bootstrap.png'
            }
        ];

        angular.forEach(that.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
        });

        that.oepnModal = function() {
            var modalInstance = modalService.oepn();
            modalInstance.result.then(function(result) { // close
                $log.info('Modal closed at: %s and result: %s', new Date(), result);
            }, function(reason) { // dismiss
                $log.info('Modal dismissed at: %s and reason: %s', new Date(), reason);
            });
        };

        that.yeomanMsg = message.get('msg1');
    });
