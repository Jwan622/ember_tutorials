define('library-app/tests/controllers/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/contact.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/contact.js should pass jshint.');
  });
});