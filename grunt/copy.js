/*!
 * grunt-contrib-copy task config
 */

'use strict';

module.exports = function(grunt, config) {

    return {
        docNgTemplates: {
            expand: true,
            cwd: '<%= docPath.src %>/ng',
            src: ['{app,components}/**/*.html'],
            dest: '<%= docPath.src %>/ng/.tmp'
        },


        preDocNg: {
            files: [
                {
                    expand: true,
                    cwd: '<%= docPath.src %>/ng',
                    dest: '<%= docPath.dest %>/ng',
                    src: [
                        'index.html',
                        'bower_components/bootstrap/dist/fonts/*'


                    ]
                }
                //{
                //    expand: true,
                //    cwd: '<%= yeoman.client %>/assets/images',
                //    dest: '<%= yeoman.dist %>/public/assets/images',
                //    src: ['*', '!icons']
                //},
                //{
                //    expand: true,
                //    cwd: '<%= yeoman.client %>/.tmp/assets/images',
                //    dest: '<%= yeoman.dist %>/public/assets/images',
                //    src: ['*']
                //},
                //{
                //    expand: true,
                //    dest: '<%= yeoman.dist %>',
                //    src: [
                //        'package.json',
                //        'server/**/*',
                //        '!server/**/*.spec.js'
                //    ]
                //},
                //{
                //    expand: true,
                //    cwd: '<%= yeoman.client %>/.tmp/app',
                //    dest: '<%= yeoman.dist %>/public/app',
                //    src: '*.{css,css.map}'
                //}
            ]
        },


        dist: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.client %>',
                    dest: '<%= yeoman.dist %>/public',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
                        'bower_components/font-awesome/fonts/*',
                        'assets/images/{,*/}*.{webp}',
                        'assets/fonts/**/*',
                        'index.html'
                    ]
                },
                {
                    expand: true,
                    cwd: '<%= yeoman.client %>/assets/images',
                    dest: '<%= yeoman.dist %>/public/assets/images',
                    src: ['*', '!icons']
                },
                {
                    expand: true,
                    cwd: '<%= yeoman.client %>/.tmp/assets/images',
                    dest: '<%= yeoman.dist %>/public/assets/images',
                    src: ['*']
                },
                {
                    expand: true,
                    dest: '<%= yeoman.dist %>',
                    src: [
                        'package.json',
                        'server/**/*',
                        '!server/**/*.spec.js'
                    ]
                },
                {
                    expand: true,
                    cwd: '<%= yeoman.client %>/.tmp/app',
                    dest: '<%= yeoman.dist %>/public/app',
                    src: '*.{css,css.map}'
                }
            ]
        },
        styles: {
            expand: true,
            cwd: '<%= yeoman.client %>',
            dest: '<%= yeoman.client %>/.tmp',
            src: ['{app,components}/**/*.css']
        }
    };
};
