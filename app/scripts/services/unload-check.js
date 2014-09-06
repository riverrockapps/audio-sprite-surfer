'use strict';

/**
 * @ngdoc service
 * @name audioSpriteSurferApp.unloadCheck
 * @description
 * # unloadCheck
 * Factory in the audioSpriteSurferApp.
 */
angular.module('audioSpriteSurferApp')
  .factory('unloadCheck', function($window) {

    var m = {};

    /**
     * Intercept closing the window with a confirmation
     * notice about being in a call.
     *
     * @param  {event} e BeforeUnload Event
     * @return {string}   Message to ask the user
     */
    $window.onbeforeunload = function(e) {
      var message = 'WARNING:  You may lose all your sprites!';

      // If we haven't been passed the event get the $window.event
      e = e || $window.event;

      // For IE6-8 and Firefox prior to version 4
      if (e) {
        e.returnValue = message;
      }

      // For Chrome, Safari, IE8+ and Opera 12+
      return message;
    }

    /**
     * When definitely navigating away, notify the server
     * of leaving the room, cancel any outgoing calls
     * @param  {event} e Unload Event
     */
    $window.onunload = function(e) {
      // may want to save data here?
    }

    return m;

  })
  .run(function(unloadCheck) {
    // inject self
  })
