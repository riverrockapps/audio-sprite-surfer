'use strict';

/**
 * @ngdoc directive
 * @name audioSpriteSurferApp.directive:waveformSpritesView
 * @description
 * # waveformSpritesView
 */
angular.module('audioSpriteSurferApp')
  .directive('waveformSpritesView', function($compile, $timeout, wavesurfer, spriteManager) {
    return {
      templateUrl: 'views/waveform-sprites-view.html',
      replace: true,
      link: function postLink(scope, element, attrs) {

        scope.spriteManager = spriteManager;
        scope.wavesurfer = wavesurfer;

        $timeout(function() {
          //$compile(element)(scope);
          // not sure why but this triggers the view to load the correct scrollWidth
        }, 300);
      }
    };
  });
