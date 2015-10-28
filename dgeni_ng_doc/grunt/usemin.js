'use strict';

module.exports = function() {
    return {
        useminPrepare: function(target) {
            var rtnObj;
            if (target === 'dist') {
                rtnObj = {
                    html: 'client/index.html',
                    options: {
                        dest: '<%= prodPath %>/client',
                        staging: 'client/.tmp/usemin',
                        flow: {
                            steps: {
                                'js': ['concat', 'uglify'],
                                'css': ['concat']
                            },
                            post: {
                                js: [
                                    {
                                        name: 'concat',
                                        createConfig: function(context, block) {
                                            var generated = context.options.generated;
                                            generated.options = {
                                                sourceMap: true,
                                                sourceMapStyle: 'link'
                                            };
                                        }
                                    },
                                    {
                                        name: 'uglify',
                                        createConfig: function(context, block) {
                                            var generated = context.options.generated;
                                            generated.options = {
                                                sourceMap: true,
                                                sourceMapIncludeSources: true
                                                // preserveComments: 'some'
                                            };
                                        }
                                    }
                                ]
                            }
                        }
                    }
                };
            }
            return rtnObj;
        },
        usemin: function(target) {
            var rtnObj;
            if (target === 'dist') {
                rtnObj = {
                    html: '<%= prodPath %>/client/index.html',
                    css: '<%= prodPath %>/client/css/*.css',
                    js: '<%= prodPath %>/client/js/*.js'
                };
            }
            else if (target === 'distExamples') {
                rtnObj = {
                    html: '<%= prodPath %>/client/examples/**/*.html',
                    css: '<%= prodPath %>/client/examples/**/*.css',
                    js: '<%= prodPath %>/client/examples/**/*.js'
                };
            }
            return rtnObj;
        }
    };
};
