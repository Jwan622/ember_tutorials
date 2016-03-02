define('library-app/tests/unit/models/library-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/library-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/library-test.js should pass jshint.');
  });
});