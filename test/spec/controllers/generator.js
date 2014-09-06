'use strict';

describe('Controller: GeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('audioSpriteSurferApp'));

  var GeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneratorCtrl = $controller('GeneratorCtrl', {
      $scope: scope
    });
  }));

  it('should start empty json', function () {
    expect(scope.model.json).toBe("");
  });

  it('should mark invalid json invalid', function() {
    expect(scope.model.invalid).toBe(false);
    scope.import("{\"invalidJSON:");
    expect(scope.model.invalid).toBe(true);
  });

  it('should have access to wavesurfer', function() {
    expect(typeof scope.wavesurfer).toBe("object");
  });

  it('should have access to spriteManager', function() {
    expect(typeof scope.spriteManager).toBe("object");
  });

});
