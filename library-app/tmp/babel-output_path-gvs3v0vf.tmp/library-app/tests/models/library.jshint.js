define('library-app/tests/models/library.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/library.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/library.js should pass jshint.');
  });
});