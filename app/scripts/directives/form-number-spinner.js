'use strict';

/**
 * @ngdoc directive
 * @name audioSpriteSurferApp.directive:formNumberSpinner
 * @description
 * # formNumberSpinner
 */
angular.module('audioSpriteSurferApp')
  .directive('formNumberSpinner', function() {
    return {
      templateUrl: 'views/form-number-spinner.html',
      scope: {
        item: '=',
        id: '@',
        label: '@'
      },
      replace: true,
      link: function postLink(scope, element, attrs) {

        scope.keydown = function($event) {
          switch ($event.keyCode) {
            case 40: $event.preventDefault(); return scope.decrease();
            case 38: $event.preventDefault(); return scope.increase();
          }
        }

        scope.decrease = function() {
          scope.item -= 10;
        }

        scope.increase = function() {
          scope.item += 10;
        }

      }
    };
  });
