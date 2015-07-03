'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    return gulp.src('src/index.html')
        .pipe(wiredep({
            directory: 'bower_components',
            exclude: [/bootstrap-sass-official/, /bootstrap.js/],
        }))
        .pipe(gulp.dest('src'));
});

// inject bower components
gulp.task('wiredep:docs', function () {
    var wiredep = require('wiredep').stream;

    return gulp.src('dgeni_docs/ng/app/index.html')
        .pipe(wiredep({
            bowerJson: require('../dgeni_docs/ng/bower.json'),
            directory: 'dgeni_docs/ng/bower_components',
            exclude: [/bootstrap-sass-official/, /bootstrap.js/, /open-sans-fontface/],
        }))
        .pipe(gulp.dest('dgeni_docs/ng/app'));
});
