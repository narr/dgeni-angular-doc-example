/*!
 * grunt-contrib-uglify task config
 */

'use strict';

module.exports = function() {
    return {
        ngExamples: {
            options: {
                sourceMap: true
            },
            expand: true,
            cwd: 'ng/client/.tmp/examples',
            src: '**/{module.js,script.js}',
            dest: '<%= prodPath %>/ng/client/examples'
        }
    };
};
