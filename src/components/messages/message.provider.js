/**
 * @ngdoc provider
 * @module dgeniNgDocTarget
 * @name messageProvider
 *
 * @description
 *
 * Condigure messages.
 *
 * See also {@link message message service} .
 */
angular.module('dgeniNgDocTarget').provider('message', function() {
    'use strict';

    var repos = {};

    return {

        /**
         * @ngdoc method
         * @name messageProvider#put
         * @description
         * Put a message to repository. See also `{@link message#get message#get}`.
         *
         *
         * @param {string} id The message's ID.
         * @param {string} message Content of this message.
         *
         */
        put: function(id, messagge) {
            repos[id] = messagge;
        },

        /**
         * @ngdoc service
         * @name message
         * @module dgeniNgDocTarget
         *
         * @description
         *
         * This service provides messages to your app.
         *
         * @example
         <example module="messageExample" deps="null" animate="false">
            <file name="index.html">
                <div ng-controller="ExampleController as example">
                messages: {{example.msg}}
                </div>
            </file>
             <file name="script.js">
             angular.module('messageExample', ['dgeniNgDocTarget'])
             .config(function (messageProvider) {
                  messageProvider.put('msg01', 'Hello, world!');
                })
             .controller('ExampleController', function(message){
                  var example = this;
                  example.msg = message.get('msg01');
                });
             </file>
         </example>
         */
        $get: function() {
            return {

                /**
                 * @ngdoc method
                 * @name message#get
                 *
                 * @description
                 * Get a messages by ID.
                 *
                 * @param {string} id A message ID.
                 * @return {string} message
                 *
                 */
                get: function(id) {
                    return repos[id];
                }
            };
        }
    };
});
