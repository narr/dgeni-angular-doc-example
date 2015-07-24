/*!
 * grunt-usemin task config
 */

'use strict';

module.exports = function() {

    return {
        useminPrepare: {
            docNg: {
                options: {
                    flow: {
                        html: {
                            steps: {
                                css: ['concat', 'cssmin'],
                                js: ['concat', 'uglifyjs']
                            },
                            post: {}
                        }
                    },
                    staging: '<%= docPath.src %>/ng/app/.tmp/usemin',
                    dest: '<%= yeoman.dist %>/ng'
                },
                src: ['<%= docPath.src %>/ng/index.html']
            }
        },
        usemin: {

            //html: [
            //    '<%= docPath.dest %>/ng/index.html'
            //],
            //
            //
            //// css: ['<%= yeoman.dist %>/public/{,*/}*.css'],
            //// js: ['<%= yeoman.dist %>/public/{,*/}*.js'],
            //options: {
            //    assetsDirs: [
            //        '<%= docPath.dest %>/ng'
            //    ],
            //    // This is so we update image references in our ng-templates
            //    patterns: {
            //        html: [
            //            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the HTML to reference our revved images']
            //        ],
            //        css: [
            //            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the CSS to reference our revved images']
            //        ],
            //        js: [
            //            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
            //        ]
            //    }
            //}


            docNg: {
                options: {
                    assetsDirs: [
                        '<%= docPath.dest %>/ng',
                        '<%= docPath.dest %>/ng/assets/fonts'
                    ]
                    // patterns: {
                    //     html: [
                    //         [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the HTML to reference our revved images']
                    //     ],
                    //     css: [
                    //         [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the CSS to reference our revved images']
                    //     ],
                    //     js: [
                    //         [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
                    //     ]
                    // }
                },
                html: ['<%= docPath.dest %>/ng/index.html'],
                css: ['<%= docPath.dest %>/ng/app/*.css']
                // js: ['<%= yeoman.dist %>/public/{,*/}*.js']
            }
        }
    };
};
