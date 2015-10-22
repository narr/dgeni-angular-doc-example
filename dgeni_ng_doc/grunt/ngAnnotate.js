'use strict';

module.exports = function() {
    return {
        usemin: {
            src: 'client/.tmp/usemin/concat/js/app.js',
            dest: 'client/.tmp/usemin/concat/js/app.js'
        },
        examples: {
            expand: true,
            cwd: 'client/.tmp/examples',
            src: '**/{module.js,script.js}',
            dest: 'client/.tmp/examples'
        }
    };
};
