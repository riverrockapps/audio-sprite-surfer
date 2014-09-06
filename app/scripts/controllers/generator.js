'use strict';

/**
 * @ngdoc function
 * @name audioSpriteSurferApp.controller:GeneratorCtrl
 * @description
 * # GeneratorCtrl
 * Controller of the audioSpriteSurferApp
 */
angular.module('audioSpriteSurferApp')
  .controller('GeneratorCtrl', function($scope, $filter, wavesurfer, spriteManager, demoSpriteJson) {

    $scope.wavesurfer = wavesurfer;

    $scope.spriteManager = spriteManager;

    $scope.model = {};
    $scope.model.json = "";
    $scope.model.invalid = false;

    $scope.create = spriteManager.create;

    $scope.import = function(json) {
      var data;
      try {
        data = JSON.parse(json || $scope.model.json);

        // TODO spriteshould take it or show a confirmation here
        if (confirm("Warning!  This will overwrite your existing data.")) {
          spriteManager.import(data);
        }
      }
      catch (e) {
        $scope.model.invalid = true;
      }
    }

    $scope.export = function() {
      $scope.model.json = $filter('json')(spriteManager.export());
    }

    $scope.update = function() {
      if (spriteManager.active) {
        spriteManager.active.update();
      }
    }

    $scope.delete = spriteManager.delete;
    $scope.prev = spriteManager.prev;
    $scope.next = spriteManager.next

    $scope.play = function() {
      wavesurfer.togglePlaySelection();
    }

    $scope.$watch('model.json', function(newVal, oldVal) {
      if (newVal !== oldVal && $scope.model.invalid) {
        $scope.model.invalid = false;
      }
    });

    // load demo audio sprite
    wavesurfer.load('audio/demo.mp3');

    // once loaded, import the demo json
    wavesurfer.once('ready', function() {
      spriteManager.import(JSON.parse(demoSpriteJson));
    });

  });
