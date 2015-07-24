/*!
 * dgeni config
 */

'use strict';

module.exports = function() {

    var _ = require('lodash');
    var Dgeni = require('dgeni');


    //var bowerFiles = require('../dgeni_docs/ng/dgeni/lib/bowerCommonFiles')({
    //    base: 'src/bower_components',
    //    exclude: [/bootstrap.js/],
    //    bowerJson: 'src/bower.json'
    //});

    var bowerFiles = {
        scripts: [
            "../../common/bower_components/angular/angular.js",
            "../../common/bower_components/angular-route/angular-route.js"
        ],
        stylesheets: [
            "../../common/bower_components/bootstrap/dist/css/bootstrap.css"
        ]
    };

    var deployment = {
        name: 'default',
        examples: {
            // These files are injected to examples' html.
            commonFiles: {
                scripts: _.union(bowerFiles.scripts, ['../modules.js']),
                stylesheets: _.union(bowerFiles.stylesheets, ['../modules.css'])
            },
            dependencyPath: '../../bower_components'
        }
    };


    //gulp.task('copy_dependencies:examples', function() {
    //    var depPath = deployment.examples.dependencyPath;
    //    var scripts = bowerFiles.scripts || [];
    //    var stylesheets = bowerFiles.stylesheets || [];
    //    var deps = _.union(scripts, stylesheets).filter(function(it) {
    //        return it.match(depPath)
    //    }).map(function(it) {
    //        return it.replace(depPath, 'bower_components');
    //    });
    //
    //    return gulp.src(deps, {base: 'bower_components'})
    //        .pipe(gulp.dest('dist_docs/deps'))
    //        .pipe($.size());
    //});


    return {
        generate: function(docType) {
            try {
                var dgeni = new Dgeni([
                    require('../dgeni_docs/ng/dgeni/config/')
                        .config(function(generateExamplesProcessor, generateProtractorTestsProcessor) { // examples Package
                            generateExamplesProcessor.deployments = [deployment];
                            generateProtractorTestsProcessor.deployments = [deployment];
                        })
                        .config(function(renderDocsProcessor) {
                            renderDocsProcessor.extraData.deploymentTarget = 'default';
                        })
                ]);
                return dgeni.generate();
            } catch (x) {
                console.log(x.stack);
                throw x;
            }
        }
    };
};
