'use strict';

var Package = require('dgeni').Package;
// Canonical path provides a consistent path (i.e. always forward slashes) across different OSs
var path = require('canonical-path');

// Create and export a new Dgeni package called dgeni-ngdoc-example.
module.exports = new Package('dgeni-ngdoc-example',
    [
        // require('dgeni-packages/jsdoc'),
        require('dgeni-packages/ngdoc'),
        require('dgeni-packages/git'),
        require('dgeni-packages/nunjucks'),
        require('dgeni-packages/examples')
    ])
    .processor(require('./processors/navigation'))

// Configure our dgeni-example package. We can ask the Dgeni dependency injector
// to provide us with access to services and processors that we wish to configure
    .config(function(log, readFilesProcessor, templateFinder, writeFilesProcessor) {
        // Set logging level
        log.level = 'info';

        // Specify the base path used when resolving relative paths to source and output files
        readFilesProcessor.basePath = path.resolve(__dirname, '../../../..');

        // Specify collections of source files that should contain the documentation to extract
        readFilesProcessor.sourceFiles = [
            {
                include: 'src/**/*.js',
                //exclude: 'src/do-not-read.js',
                basePath: 'src'
            },
            {
                include: 'dgeni_docs/ng/dgeni/content/**/*.ngdoc',
                basePath: 'dgeni_docs/ng/dgeni/content'
            }
        ];

        // Add a folder to search for our own templates to use when rendering docs
        templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));

        // Specify how to match docs to templates.
        // In this case we just use the same static template for all docs
        //templateFinder.templatePatterns.unshift('common.template.html');

        // Specify where the writeFilesProcessor will write our generated doc files
        writeFilesProcessor.outputFolder = path.normalize(__dirname + '/../../.tmp');
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
            docTypes: ['provider', 'service', 'directive', 'input', 'object', 'function', 'filter', 'type' ],
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
