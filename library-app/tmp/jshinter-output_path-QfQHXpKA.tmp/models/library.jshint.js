QUnit.module('JSHint - models');
QUnit.test('models/library.js should pass jshint', function(assert) { 
  assert.expect(1);
  assert.ok(false, 'models/library.js should pass jshint.\nmodels/library.js: line 8, col 12, \'Ember\' is not defined.\n\n1 error'); 
});
