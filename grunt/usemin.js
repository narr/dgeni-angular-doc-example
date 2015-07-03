/*!
 * grunt-usemin task config
 */

'use strict';

module.exports = function(grunt, config) {
    return {
        useminPrepare: {
            html: '<%= yeoman.client %>/indexG.html',
            options: {
                staging: 'client/.tmp',
                dest: '<%= yeoman.dist %>/public',
                flow: {
                    html: {
                        steps: { // override css process
                            js: ['concat', 'uglifyjs']
                        },
                        post: {}
                    }
                }
            }
            //docClient: {
            //    options: {
            //        dest: '<%= yeoman.dist %>'
            //    },
            //    src: '<%= yeoman.client %>/indexG.html'
            //}
        },
        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            // html: ['<%= yeoman.dist %>/public/{,*/}*.html']
            // css: ['<%= yeoman.dist %>/public/{,*/}*.css'],
            // js: ['<%= yeoman.dist %>/public/{,*/}*.js'],
            // options: {
            //     assetsDirs: [
            //         '<%= yeoman.dist %>/public',
            //         '<%= yeoman.dist %>/public/assets/images'
            //     ],
            //     // This is so we update image references in our ng-templates
            //     patterns: {
            //         html: [
            //             [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the HTML to reference our revved images']
            //         ],
            //        css: [
            //            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the CSS to reference our revved images']
            //        ],
            //        js: [
            //            [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
            //        ]
            //    }
            // }

             docClient: {
                 files: {
                     src: ['<%= yeoman.dist %>/public/{,*/}*.html']
                 }
             }
        }
    };
};
