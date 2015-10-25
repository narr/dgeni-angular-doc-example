'use strict';

module.exports = function() {
    return {
        dist: {
            src: '<%= prodPath %>/client/index.html',
            dest: '<%= prodPath %>/client/index.html'
        }
    };
};
