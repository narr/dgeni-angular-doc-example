/*!
 * grunt-filerev task config
 */

'use strict';

module.exports = function() {

    return {
        preDocNg: {
            //src: [
            //    '<%= yeoman.dist %>/public/{,*/}*.js',
            //    '<%= yeoman.dist %>/public/{,*/}*.css',
            //    '<%= yeoman.dist %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            //    '<%= yeoman.dist %>/public/assets/fonts/*',
            //    '<%= yeoman.dist %>/public/bower_components/font-awesome/fonts/*'
            //],

            files: [
                {
                    src: [
                        '<%= docPath.dest %>/ng/**/*.css',
                        '<%= docPath.dest %>/ng/**/*.js',
                        '<%= docPath.dest %>/ng/assets/**/*'
                    ]
                }

                // { // img
                //     expand: true,
                //     cwd: '<%= docPath.src %>/ng',
                //     dest: '<%= docPath.dest %>/ng',
                //     src: [
                //         'index.html'
//
//
                //     ]
                // },

                // fonts
                // {
                //     expand: true,
                //     flatten: true,
                //     cwd: '<%= docPath.src %>/ng',
                //     dest: '<%= docPath.dest %>/ng/assets/fonts',
                //     src: [
                //         'bower_components/bootstrap/dist/fonts/*'
                //     ]
                // }
            ]
        }
    };
};
