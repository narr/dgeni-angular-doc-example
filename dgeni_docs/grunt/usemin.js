/*!
 * grunt-usemin task config
 */

'use strict';

module.exports = function() {
    return {
        useminPrepare: function(target) {
            var rtnObj;
            if (target === 'ng') {
                rtnObj = {
                    html: 'ng/client/index.html',
                    options: {
                        dest: '<%= prodPath %>/ng/client',
                        staging: 'ng/client/.tmp/usemin',
                        flow: {
                            steps: {
                                'js': ['concat', 'uglify'],
                                'css': ['concat']
                            },
                            post: {
                                js: [
                                    {
                                        name: 'uglify',
                                        createConfig: function(context, block) {
                                            var generated = context.options.generated;
                                            generated.options = {
                                                sourceMap: true,
                                                preserveComments: 'some' // to remain comments starting with *!
                                            };
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
            return rtnObj;
        },
        usemin: function(target) {
            var rtnObj;
            if (target === 'ng') {
                rtnObj = {
                    html: '<%= prodPath %>/ng/client/index.html',
                    css: '<%= prodPath %>/ng/client/css/*.css',
                    js: '<%= prodPath %>/ng/client/*.js'
                }
            }
            if (target === 'ngExamples') {
                rtnObj = {
                    html: '<%= prodPath %>/ng/client/examples/**/*.html',
                    css: '<%= prodPath %>/ng/client/examples/**/*.css',
                    js: '<%= prodPath %>/ng/client/examples/**/*.js'
                }
            }
            return rtnObj;
        }
    };
};
