'use strict';

module.exports = function(options) {
    var Dgeni, path, pkg;

    Dgeni = require('dgeni');

    // Canonical path provides a consistent path (i.e. always forward slashes) across different OSs
    path = require('path');

    pkg = new Dgeni.Package('dgeni-ngdoc-example',
        [
            // require('dgeni-packages/jsdoc'),
            require('dgeni-packages/ngdoc'),
            require('dgeni-packages/git'),
            require('dgeni-packages/nunjucks')
            // require('dgeni-packages/examples') // TODO Add Example
        ])
        .processor(require('./processors/navigation'))
        // Configure our dgeni package. We can ask the Dgeni dependency injector
        // to provide us with access to services and processors that we wish to configure
        .config(function(log, readFilesProcessor, templateFinder, writeFilesProcessor) {
            var projectRootPath;

            // Set logging level
            log.level = 'info';

            // Specify the base path used when resolving relative paths to source and output files
            projectRootPath = path.join(__dirname + '../../../../..');
            readFilesProcessor.basePath = projectRootPath;

            // Specify collections of source files that should contain the documentation to extract
            readFilesProcessor.sourceFiles = [
                {
                    include: options.sourceFiles.include,
                    exclude: options.sourceFiles.exclude
                },
                {
                    include: 'dgeni_docs/ng/dgeni/content/**/*.ngdoc',
                    basePath: 'dgeni_docs/ng/dgeni/content'
                }
            ];

            // Add a folder to search for our own templates to use when rendering docs
            templateFinder.templateFolders.unshift(path.join(__dirname, 'templates'));

            // Specify how to match docs to templates.
            // In this case we just use the same static template for all docs
            // templateFinder.templatePatterns.unshift('common.template.html');

            // Specify where the writeFilesProcessor will write our generated doc files
            writeFilesProcessor.outputFolder = path.join(__dirname, '../../client/.tmp');
        })
        .config(function(renderDocsProcessor) {
            renderDocsProcessor.extraData.git = {
                info: {
                    owner: 'Quramy',
                    repo: 'dgeni-ngdocs-example'
                },
                version: {
                    isSnapshot: true
                }
            };
        })
        .config(function(computePathsProcessor, computeIdsProcessor) {
            computePathsProcessor.pathTemplates.push({
                docTypes: ['provider', 'service', 'directive', 'input', 'object', 'function', 'filter', 'type'],
                pathTemplate: '${area}/${module}/${docType}/${name}',
                outputPathTemplate: 'app/partials/${area}/${module}/${docType}/${name}.html'
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['module'],
                getPath: function(doc) {
                    return doc.area + '/' + doc.name;
                },
                outputPathTemplate: 'app/partials/${path}.html'
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['overview'],
                getPath: function(doc) {
                    var docPath = path.dirname(doc.fileInfo.relativePath);
                    if (doc.fileInfo.baseName !== 'index') {
                        docPath = path.join(docPath, doc.fileInfo.baseName);
                    } else {
                        return 'index';
                    }
                    return docPath;
                },
                outputPathTemplate: 'app/partials/${path}.html'
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['componentGroup'],
                pathTemplate: '${area}/${moduleName}/${groupType}',
                outputPathTemplate: 'app/partials/${area}/${moduleName}/${groupType}.html'
            });

            computeIdsProcessor.idTemplates.push({
                docTypes: ['overview'],
                getId: function(doc) {
                    return doc.fileInfo.baseName;
                },
                getAliases: function(doc) {
                    return [doc.id];
                }
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['example'],
                pathTemplate: 'examples/${example.id}',
                outputPathTemplate: 'examples/${example.id}/index${deploymentQualifier}.html'
            });

            computePathsProcessor.pathTemplates.push({ // manifest.json, script.js
                docTypes: ['example-file'],
                getPath: function() {
                },
                outputPathTemplate: 'examples/${id}'
            });
        });

    return new Dgeni([pkg]);
};


// var _ = require('lodash');
// var Dgeni = require('dgeni');


//var bowerFiles = require('../dgeni_docs/ng/dgeni/lib/bowerCommonFiles')({
//    base: 'src/bower_components',
//    exclude: [/bootstrap.js/],
//    bowerJson: 'src/bower.json'
//});

// var bowerFiles = {
//     scripts: [
//         '../../common/bower_components/angular/angular.js',
//         '../../common/bower_components/angular-route/angular-route.js'
//     ],
//     stylesheets: [
//         '../../common/bower_components/bootstrap/dist/css/bootstrap.css'
//     ]
// };

// var deployment = {
//     name: 'default',
//     examples: {
//         // These files are injected to examples' html.
//         commonFiles: {
//             scripts: _.union(bowerFiles.scripts, ['../modules.js']),
//             stylesheets: _.union(bowerFiles.stylesheets, ['../modules.css'])
//         },
//         dependencyPath: '../../bower_components'
//     }
// };


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


//.config(function(generateExamplesProcessor, generateProtractorTestsProcessor) { // examples Package
//    generateExamplesProcessor.deployments = [deployment];
//    generateProtractorTestsProcessor.deployments = [deployment];
//})
//.config(function(renderDocsProcessor) {
//    renderDocsProcessor.extraData.deploymentTarget = 'default';
//});
