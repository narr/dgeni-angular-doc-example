/*!
 * grunt-contrib-watch task config
 */

'use strict';

module.exports = function() {

    // to change another task's config dynamically and run task Start
    // grunt.event.on('watch', function(action, filepath, target) {
    //     var lessFiles, cssPath;
    //     // action === 'changed'
    //     if(target === 'less') {
    //         lessFiles = {};
    //         cssPath = filepath.replace(/\.less/, '.css');
    //         lessFiles[cssPath] = filepath;
    //         grunt.config('less.dev.files', lessFiles);
    //     }
    // });
    // to change another task's config dynamically and run task End

    //return {
    //    options: {
    //        interrupt: true, // to terminate the previous process and spawn a new one upon later changes
    //        spawn: false // to dynamically modify your config, the spawn option must be disabled to keep the watch running under the same context.
    //    },
    //    gruntfile: {
    //        // By default, if Gruntfile.js is being watched, then changes to it will trigger the watch task to restart, and reload the Gruntfile.js changes.
    //        // When reload is set to true, changes to any of the watched files will trigger the watch task to restart.
    //        option: {
    //            reload: true
    //        },
    //        files0: 'Gruntfile.js',
    //        files1: [
    //            'file1',
    //            'file2'
    //        ],
    //        files2: {
    //            'dist/basic.js': ['src/main.js'],
    //            'dist/with_extras.js': ['src/main.js', 'src/extras.js']
    //        },
    //        files3: [
    //            {
    //                src: 'dev/lib/xxx.less',
    //                dest: 'dev/lib/xxx.css'
    //            },
    //            {
    //                src: 'dev/xxx.control.less',
    //                dest: 'dev/xxx.control.css'
    //            }
    //        ],
    //        files4: [
    //            {
    //                // Only Files, No Folder structure Start
    //                expand: true,
    //                flatten: true,
    //                // Only Files, No Folder structure End
    //                src: [
    //                    'dev/common/lib/aaa.js'
    //                ],
    //                dest: 'build/<%= pkg.version %>/original/common/lib/'
    //            },
    //            {
    //                expand: true,
    //                cwd: 'dev/lib/',
    //                src: ['**/*.js', '!**/*modified.js', '!aaa/*.js'],
    //                dest: 'build/<%= pkg.version %>/lib/'
    //            }
    //        ]
    //    }
    //};


    return {
        livereload: {
            options: {
                livereload: true
            },
            files: [
                'server/.nodemon-restarted', // server
                // client Start
                '<%= yeoman.client %>/.tmp/**/*.css',
                '<%= yeoman.client %>/{app,components}/**/*.js',
                '!<%= yeoman.client %>/{app,components}/**/*.spec.js',
                '<%= yeoman.client %>/index.html',
                '<%= yeoman.client %>/.tmp/app/templates.js',
                '<%= yeoman.client %>/assets/images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
                // client End
            ]
        },
        sassVendor: {
            files: [
                '<%= yeoman.client %>/app/vendor.scss',
                '<%= yeoman.client %>/components/lib/**/*.{scss,sass}' // no bower_components lib
            ],
            tasks: 'sass:vendor'
        },
        sassApp: {
            files: [
                '<%= yeoman.client %>/.tmp/sass/*.{scss,sass}',
                '<%= yeoman.client %>/{app,components}/**/*.{scss,sass}'
            ],
            tasks: 'sass:app'
        },
        ngtemplates: {
            files: '<%= yeoman.client %>/{app,components}/**/*.html',
            tasks: 'ngtemplates:tmp'
        }
    };
};
