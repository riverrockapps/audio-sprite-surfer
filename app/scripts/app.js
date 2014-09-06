'use strict';

/**
 * @ngdoc overview
 * @name audioSpriteSurferApp
 * @description
 * # audioSpriteSurferApp
 *
 * Main module of the application.
 */
angular
  .module('audioSpriteSurferApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .value('demoSpriteJson', '[{"id":"yip","start":504,"end":998,"length":494},{"id":"hip-a-dip","start":1589,"end":2479,"length":890},{"id":"what","start":3209,"end":3869,"length":660},{"id":"scooo","start":4274,"end":5774,"length":1500},{"id":"harrr","start":5989,"end":7264,"length":1275}]')
  .config(function($routeProvider, $locationProvider, $logProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/generator.html',
        controller: 'GeneratorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
