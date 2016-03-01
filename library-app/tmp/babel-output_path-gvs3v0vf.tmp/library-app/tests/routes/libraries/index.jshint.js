define('library-app/tests/routes/libraries/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/libraries');
  QUnit.test('routes/libraries/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/libraries/index.js should pass jshint.\nroutes/libraries/index.js: line 9, col 3, Missing semicolon.\n\n1 error');
  });
});