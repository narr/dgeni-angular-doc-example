/*!
 * grunt-angular-templates task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        options: {
            // This should be the name of your apps angular module
            module: 'docApp',
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
            // usemin: 'app/app.js'
        },
        docNg: {
            // This will store the template URL as {app,components}/**/*.html
            cwd: '<%= docPath.src %>/ng/.tmp',
            src: [
                'app/{main,partials}/**/*.html',
                'components/**/*.html'
            ],
            dest: '<%= docPath.src %>/ng/.tmp/templates.js'
        }
    };
};
