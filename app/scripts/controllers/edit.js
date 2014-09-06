'use strict';

/**
 * @ngdoc function
 * @name audioSpriteSurferApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the audioSpriteSurferApp
 */
angular.module('audioSpriteSurferApp')
  .controller('EditCtrl', function($scope, spriteManager) {

    $scope.spriteManager = spriteManager;

    $scope.updateFromSelection = spriteManager.updateFromSelection;

    $scope.$watchCollection('spriteManager.active.model', function(newVal, oldVal) {
      spriteManager.active.update();
    });

  });

