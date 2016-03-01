QUnit.module('JSHint - controllers');
QUnit.test('controllers/index.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 9, col 65, This character may get silently deleted by one or more browsers.\ncontrollers/index.js: line 12, col 66, This character may get silently deleted by one or more browsers.\ncontrollers/index.js: line 13, col 64, This character may get silently deleted by one or more browsers.\n\n3 errors'); 
});
