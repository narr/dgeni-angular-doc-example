/*!
 * grunt-ng-annotate task config
 */

'use strict';

module.exports = function() {
    return {
        usemin: {
            src: 'ng/client/.tmp/usemin/concat/js/app.js',
            dest: 'ng/client/.tmp/usemin/concat/js/app.js'
        },
        examples: {
            expand: true,
            cwd: 'ng/client/.tmp/examples',
            src: '**/{module.js,script.js}',
            dest: 'ng/client/.tmp/examples'
        }
    };
};
