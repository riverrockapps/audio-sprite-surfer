'use strict';

/**
 * @ngdoc service
 * @name audioSpriteSurferApp.Sprite
 * @description
 * # Sprite
 * Factory in the audioSpriteSurferApp.
 */
angular.module('audioSpriteSurferApp')
  .factory('Sprite', function(wavesurfer) {

    var i = 0;

    var Sprite = function(model) {

      this.model = model || {};

      if (typeof this.model.id === "undefined") {
        this.model.id = i++;
      }

      if (!this.model.start || !this.model.end) {
        this.updateFromSelection();
      }

      this.update();
    }

    Sprite.prototype.updateFromSelection = function() {
      var selection = wavesurfer.getSelection();
      if (selection) {
        this.model.start = Math.floor(selection.startPosition * 1000);
        this.model.end = Math.floor(selection.endPosition * 1000);
        this.selection = selection;
      }
    }

    Sprite.prototype.updateToSelection = function() {

      var start, end, region;

      // convert ms to s
      start = this.model.start / 1000;
      end = this.model.end / 1000;

      // create a temporary region to get the region obj back which has percentages
      region = wavesurfer.region({
        id: "test",
        startPosition: start,
        endPosition: end
      })
      wavesurfer.clearRegions();


      // update wavesurfer selection and start/end markers
      wavesurfer.updateSelection(region);
      wavesurfer.mark({
        id: 'start',
        color: '#0B3E6B',
        position: start
      });
      wavesurfer.mark({
        id: 'end',
        color: '#0B3E6B',
        position: end
      });

    }

    Sprite.prototype.update = function() {
      this.updateToSelection();
      this.updateFromSelection();
      // this.updateFromSelection(wavesurfer.getSelection());
    }

    return Sprite;

  });
