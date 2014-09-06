'use strict';

/**
 * @ngdoc service
 * @name audioSpriteSurferApp.wavesurfer
 * @description
 * # wavesurfer
 * Factory in the audioSpriteSurferApp.
 */
angular.module('audioSpriteSurferApp')
  .value('wavesurferOptions', {
    loopSelection: false,
    waveColor: '#3e68a7',
    progressColor: '#0B3E6B',
    loaderColor: '#3e68a7',
    selectionColor: '#ffd83f',
    cursorColor: '#0B3E6B',
    markerWidth: 1,
    minPxPerSec: 200,
    scrollParent: true
  })
  .factory('wavesurfer', function($rootScope, $window, $timeout, wavesurferOptions) {

    var wavesurfer = Object.create($window.WaveSurfer);

    wavesurferOptions.container = document.querySelector('#waveform');

    // Init
    wavesurfer.init(wavesurferOptions);

    wavesurfer.togglePlaySelection = function(start, end) {
      wavesurfer.playPauseSelection();
    }

    // Flash mark when it's played over
    wavesurfer.on('mark', function(marker) {
      $timeout(function() {
        var selection = wavesurfer.getSelection();
        if (marker.position >= selection.endPosition) {
          wavesurfer.togglePlaySelection();
        }
      });
    });

    var toggleActive = function(e, toggle) {
      e.stopPropagation();
      e.preventDefault();
      toggle ? e.target.classList.add('wavesurfer-dragover') :
        e.target.classList.remove('wavesurfer-dragover');
    };

    var handlers = {
      // Drop event
      drop: function(e) {
        toggleActive(e, false);

        // Load the file into wavesurfer
        if (e.dataTransfer.files.length) {
          wavesurfer.loadBlob(e.dataTransfer.files[0]);
        }
        else {
          wavesurfer.fireEvent('error', 'Not a file');
        }
      },

      // Drag-over event
      dragover: function(e) {
        toggleActive(e, true);
      },

      // Drag-leave event
      dragleave: function(e) {
        toggleActive(e, false);
      }
    };

    var dropTarget = document.querySelector('#drop');
    Object.keys(handlers).forEach(function(event) {
      dropTarget.addEventListener(event, handlers[event]);
    });

    return wavesurfer;

  });
