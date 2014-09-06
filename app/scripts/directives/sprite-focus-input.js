'use strict';

/**
 * @ngdoc directive
 * @name audioSpriteSurferApp.directive:spriteFocusInput
 * @description
 * # spriteFocusInput
 */
angular.module('audioSpriteSurferApp')
  .directive('spriteFocusInput', function($rootScope) {
    return {
      link: function postLink(scope, element, attrs) {
        $rootScope.$on('sprite.focus', function($event, data) {
          element[0].focus();
        });
      }
    };
  });
