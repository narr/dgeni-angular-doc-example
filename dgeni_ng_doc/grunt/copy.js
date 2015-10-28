'use strict';

module.exports = function(options) {
    return {
        assets: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: 'client/bower_components',
                    src: 'bootstrap/fonts/*',
                    dest: 'client/.tmp/assets/fonts'
                }
            ]
        },
        templates: {
            expand: true,
            cwd: 'client',
            src: '{app,components}/**/*.html',
            dest: 'client/.tmp'
        },
        examplesCommonLibs: {
            expand: true,
            cwd: options.examplesCommonLibs.cwd,
            src: options.examplesCommonLibs.src,
            dest: 'client/.tmp/examples/common'
        },
        distIndex: {
            options: {
                process: function(content, srcpath) {
                    if (srcpath === 'client/index.html') {
                        return content
                            .replace(/<\/head>/, '<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create","UA-69400538-1","auto");ga("send","pageview");</script></head>')
                            .replace(/<script.*?livereload\.js.*?<\/script>/, '');
                    }
                    return content;
                }
            },
            src: 'client/index.html',
            dest: '<%= prodPath %>/client/index.html'
        },
        distAssets: {
            files: [
                {
                    '<%= prodPath %>/client/404.html': 'client/404.html',
                    '<%= prodPath %>/client/favicon.ico': 'client/favicon.ico'
                },
                {
                    expand: true,
                    cwd: 'client/.tmp/assets',
                    src: '**/*',
                    dest: '<%= prodPath %>/client/assets'
                }
            ]
        },
        replaceTempPath: {
            options: {
                process: function(content, srcpath) {
                    return content.replace(/<iframe class=runnable-example-frame src=.tmp\//g, '<iframe class=runnable-example-frame src=');
                }
            },
            src: 'client/.tmp/usemin/concat/js/app.js',
            dest: 'client/.tmp/usemin/concat/js/app.js'
        },
        distExamples: {
            expand: true,
            cwd: 'client/.tmp/examples',
            src: '**/*',
            dest: '<%= prodPath %>/client/examples'
        },
        distIdxReplaceStr: {
            options: {
                process: function(content, srcpath) {
                    // sourceMap and defer
                    return content.replace(/\/\*#.*?\.css\.map/g, '/*').replace(/<script src/g, '<script defer src');
                }
            },
            src: '<%= prodPath %>/client/index.html',
            dest: '<%= prodPath %>/client/index.html'
        },
        distServer: {
            options: {
                process: function(content, srcpath) {
                    if (srcpath === 'server/server.js') {
                        // change the port
                        return content.replace(/3000/g, 8080);
                    }
                    else {
                        return content;
                    }
                }
            },
            files: [
                {
                    '<%= prodPath %>/package.json': 'dist_package.json'
                },
                {
                    expand: true,
                    cwd: 'server',
                    src: [
                        'server.js'
                    ],
                    dest: '<%= prodPath %>/server'
                }
            ]
        }
    };
};
