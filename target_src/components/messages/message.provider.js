/**
 * @ngdoc provider
 * @name messageProvider
 * @module dgeniNgDocTarget
 * @description
 * Configure messages. See also {@link message message service}.
 */
angular.module('dgeniNgDocTarget').provider('message', function messageProvider() {
    'use strict';

    var that, repos;
    that = this;
    repos = {};

    /**
     * @ngdoc method
     * @name messageProvider#put
     * @param {string} id - the message's ID
     * @param {string} message - content of this message
     * @description
     * Put a message to repository. See also {@link message#get message#get}.
     */
    that.put = function(id, message) {
        repos[id] = message;
    };

    /**
     * @ngdoc service
     * @name message
     * @module dgeniNgDocTarget
     * @description
     * This service provides messages to your app.
     * @example
     <example module="messageExample" deps="null" animate="false">
         <file name="index.html">
             <div ng-controller="ExampleController as example">
                 messages: {{example.msg}}
             </div>
         </file>
         <file name="script.js">
             angular.module('messageExample', ['dgeniNgDocTarget'])
                 .config(function(messageProvider) {
                     messageProvider.put('msg1', 'Hello, world!');
                 })
                 .controller('ExampleController', function(message) {
                     var example = this;
                     example.msg = message.get('msg1');
                 });
         </file>
     </example>
     */
    that.$get = function() {
        return {

            /**
             * @ngdoc method
             * @name message#get
             * @param {string} id - A message ID
             * @return {string} message
             * @description
             * Get a messages by ID.
             */
            get: function(id) {
                return repos[id];
            }
        };
    }
});
