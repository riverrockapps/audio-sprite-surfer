'use strict';

/**
 * @ngdoc directive
 * @name audioSpriteSurferApp.directive:waveformSpriteView
 * @description
 * # waveformSpriteView
 */
angular.module('audioSpriteSurferApp')
  .directive('waveformSpriteView', function() {
    return {
      templateUrl: 'views/waveform-sprite-view.html',
      scope: {
        spriteManager: '=manager',
        sprite: '='
      },
      replace: true,
      link: function postLink(scope, element, attrs) {

        scope.midpoint = 0;
        scope.width = 0;

        scope.$watch('sprite.selection', function(newVal, oldVal) {
          var halfWidth;
          if (newVal) {
            halfWidth = (newVal.endPercentage - newVal.startPercentage) / 2;
            scope.midpoint = ((newVal.startPercentage + halfWidth) * 100).toFixed(2) + "%";
            scope.width = ((newVal.endPercentage - newVal.startPercentage) * 100) + "%";
          }
        });

        scope.activate = function() {
          scope.spriteManager.setActive(scope.sprite);
        }

      }
    };
  });
