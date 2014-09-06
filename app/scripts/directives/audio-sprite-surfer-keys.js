'use strict';

/**
 * @ngdoc directive
 * @name audioSpriteSurferApp.directive:audioSpriteSurferKeys
 * @description
 * # audioSpriteSurferKeys
 */
angular.module('audioSpriteSurferApp')
  .directive('audioSpriteSurferKeys', function($document, wavesurfer) {
    return {
      link: function postLink(scope, element, attrs) {

        // force top level keypresses to go through
        $document.bind('keypress', function($event) {

          // if (document.activeElement.nodeName === "BODY") {
            switch ($event.keyCode) {
              case 32: $event.preventDefault(); return wavesurfer.togglePlaySelection();
            }
          // }

        });
      }
    };
  });
