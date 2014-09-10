'use strict';

/**
 * @ngdoc directive
 * @name audioSpriteSurferApp.directive:audioSpriteSurferKeys
 * @description
 * # audioSpriteSurferKeys
 */
angular.module('audioSpriteSurferApp')
  .directive('audioSpriteSurferKeys', function($document, $timeout, wavesurfer, spriteManager) {
    return {
      link: function postLink(scope, element, attrs) {

        $document.bind('keydown', function($event) {

          scope.$apply(function() {

            var stop = false;

            // alt
            if ($event.altKey) {
              // left
              if ($event.keyCode === 37) {
                spriteManager.adjustEnd(-10);
                stop = true;
              }
              // right
              else if ($event.keyCode === 39) {
                spriteManager.adjustEnd(10);
                stop = true;
              }
            }
            // shift
            else if ($event.shiftKey) {
              // left
              if ($event.keyCode === 37) {
                spriteManager.adjustStart(-10);
                stop = true;
              }
              // right
              else if ($event.keyCode === 39) {
                spriteManager.adjustStart(10);
                stop = true;
              }
            }
            // ctrl
            else if ($event.ctrlKey) {
              // left
              if ($event.keyCode === 37) {
                spriteManager.prev();
              }
              // right
              else if ($event.keyCode === 39) {
                spriteManager.next();
              }
              // enter
              else if ($event.keyCode === 13) {
                spriteManager.create();
              }
              // del
              else if ($event.keyCode === 46) {
                spriteManager.delete();
              }
            }

            if (stop) {
              $event.preventDefault();
              $event.stopPropagation();
            }

          });
        });

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
