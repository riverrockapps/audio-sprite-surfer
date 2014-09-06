'use strict';

/**
 * @ngdoc service
 * @name audioSpriteSurferApp.spriteManager
 * @description
 * # spriteManager
 * Factory in the audioSpriteSurferApp.
 */
angular.module('audioSpriteSurferApp')
  .factory('spriteManager', function($rootScope, $timeout, wavesurfer, Sprite) {

    var m = {};

    m.sprites = [];
    m.active = null;

    m.reset = function() {
      // remove all items from the array
      while (m.sprites.length > 0) {
        m.sprites.pop();
      }
    }

    m.create = function(data) {
      var sel = wavesurfer.getSelection();
      if (sel) {
        var sprite = new Sprite();
        m.sprites.push(sprite);
        $timeout(function() {
          $rootScope.$broadcast('sprite.focus', sprite);
        });
      }
    }

    m.import = function(data) {

      m.reset();

      data.forEach(function(s) {
        var sprite = new Sprite(s);
        m.sprites.push(sprite);
      });

    }

    m.export = function() {
      var data = m.sprites.map(function(s) {
        var obj = {
          id: s.model.id.toString(),
          start: s.model.start,
          end: s.model.end
        }

        obj.length = obj.end - obj.start;

        return obj;
      });
      return data;
    }

    m.next = function() {
      var i = m.sprites.indexOf(m.active),
        l = m.sprites.length;

      m.active = m.sprites[(i + l + 1) % l];

      $rootScope.$broadcast('sprite.focus', m.active);
    }

    m.prev = function() {
      var i = m.sprites.indexOf(m.active),
        l = m.sprites.length;

      m.active = m.sprites[(i + l - 1) % l];

      $rootScope.$broadcast('sprite.focus', m.active);
    }

    m.delete = function() {
      var i = m.sprites.indexOf(m.active);
      m.sprites.splice(i, 1);
      m.prev();
    }

    m.setActive = function(sprite) {
      m.active = sprite;
      m.active.updateToSelection();
    }

    // listen for audio drop, sync reset of sprites with angular
    document.querySelector('#drop').addEventListener('drop', function(evt) {
      $timeout(function() {
        m.reset();
      });
    });

    return m;
  });
