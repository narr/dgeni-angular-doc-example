'use strict';

module.exports = function() {
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
        },
        docApp: {
            // This will store the template URL as {app,components}/**/*.html
            cwd: 'client/.tmp',
            src: [
                'app/{main,partials}/**/*.html',
                'components/**/*.html'
            ],
            dest: 'client/.tmp/templates.js'
        }
    };
};
