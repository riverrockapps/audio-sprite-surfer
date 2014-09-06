'use strict';

/**
 * @ngdoc filter
 * @name audioSpriteSurferApp.filter:encodeUri
 * @function
 * @description
 * # encodeUri
 * Filter in the audioSpriteSurferApp.
 */
angular.module('audioSpriteSurferApp')
  .filter('encodeUri', function() {
    return encodeURIComponent;
  });
