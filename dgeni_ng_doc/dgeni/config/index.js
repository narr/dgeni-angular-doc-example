'use strict';

module.exports = function(options) {
    var Dgeni, path, pkg;

    Dgeni = require('dgeni');

    // Canonical path provides a consistent path (i.e. always forward slashes) across different OSs
    path = require('path');

    pkg = new Dgeni.Package('dgeni-ngdoc-example',
        [
            // The order of pkgs is important.
            // require('dgeni-packages/jsdoc'),
            require('dgeni-packages/ngdoc'),
            require('dgeni-packages/git'),
            require('dgeni-packages/nunjucks'),
            require('dgeni-packages/examples')
        ])
        .processor(require('./processors/navigation'))
        // Configure our dgeni package. We can ask the Dgeni dependency injector
        // to provide us with access to services and processors that we wish to configure
        .config(function(log, readFilesProcessor, templateFinder, writeFilesProcessor) {
            var projectRootPath;

            // Set logging level
            log.level = 'info';

            // Specify the base path used when resolving relative paths to source and output files
            projectRootPath = __dirname + '/../../..';
            readFilesProcessor.basePath = projectRootPath;

            // Specify collections of source files that should contain the documentation to extract
            readFilesProcessor.sourceFiles = [
                {
                    include: options.sourceFiles.include,
                    exclude: options.sourceFiles.exclude
                },
                {
                    include: 'dgeni_ng_doc/dgeni/content/**/*.ngdoc',
                    basePath: 'dgeni_ng_doc/dgeni/content'
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
        .config(function(computePathsProcessor, computeIdsProcessor) {
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
                docTypes: ['module'],
                // @ link path
                // pathTemplate: '${area}/${module}',
                getPath: function(doc) {
                    return doc.area + '/' + doc.name;
                },
                // link path @
                outputPathTemplate: 'app/partials/${path}.html' // file path
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['provider', 'service', 'filter', 'directive', 'function', 'object', 'input', 'type'],
                pathTemplate: '${area}/${module}/${docType}/${name}',
                outputPathTemplate: 'app/partials/${area}/${module}/${docType}/${name}.html'
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['componentGroup'],
                pathTemplate: '${area}/${moduleName}/${groupType}',
                outputPathTemplate: 'app/partials/${area}/${moduleName}/${groupType}.html'
            });

            computePathsProcessor.pathTemplates.push({
                docTypes: ['example'],
                pathTemplate: 'examples/${example.id}',
                outputPathTemplate: 'examples/${example.id}/index${deploymentQualifier}.html'
            });

            computePathsProcessor.pathTemplates.push({ // manifest.json, script.js
                docTypes: ['example-file'],
                // getPath: function() {
                // },
                outputPathTemplate: 'examples/${id}'
            });
        })
        .config(function(renderDocsProcessor) {
            // The repository's type and url(ended with git) should be be specified in dgeni_docs's package.json
            renderDocsProcessor.extraData.git = {
                info: {
                    owner: options.git.info.owner,
                    repo: options.git.info.repo
                },
                version: {
                    isSnapshot: true // Branch: master
                }
            };
        })
        .config(function(generateExamplesProcessor, generateProtractorTestsProcessor) {
            generateExamplesProcessor.deployments = options.examples.deployments;
            generateProtractorTestsProcessor.deployments = options.examples.deployments;
        });

    return new Dgeni([pkg]);
};
