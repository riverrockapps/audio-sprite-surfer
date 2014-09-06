'use strict';

describe('Service: spriteManager', function () {

  // load the service's module
  beforeEach(module('audioSpriteSurferApp'));

  // instantiate service
  var spriteManager;
  beforeEach(inject(function (_spriteManager_) {
    spriteManager = _spriteManager_;
    spriteManager.sprites = [1, 2, 3, 4, 5];
    spriteManager.active = 3;
  }));

  it('should be an object', function () {
    expect(typeof spriteManager).toBe("object");
  });

  it('should initialize properly', function() {
    expect(spriteManager.sprites.length).toBe(5);
    expect(spriteManager.active).toBe(3);
  });

  it('should properly delete active sprite and make next active', function() {
    expect(spriteManager.sprites.length).toBe(5);
    expect(spriteManager.active).toBe(3);
    spriteManager.delete();
    expect(spriteManager.sprites.length).toBe(4);
    expect(spriteManager.active).toBe(4);
  });

  it('should select next sprite properly', function() {
    expect(spriteManager.active).toBe(3);
    spriteManager.next();
    expect(spriteManager.active).toBe(4);
  });

  it('should select prev sprite properly', function() {
    expect(spriteManager.active).toBe(3);
    spriteManager.prev();
    expect(spriteManager.active).toBe(2);
  });

  it('should remove sprites on reset', function() {
    expect(spriteManager.sprites.length).toBe(5);
    spriteManager.reset();
    expect(spriteManager.sprites.length).toBe(0);
  });

});
