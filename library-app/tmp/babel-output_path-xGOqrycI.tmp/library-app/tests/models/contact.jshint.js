define('library-app/tests/models/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/contact.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/contact.js should pass jshint.\nmodels/contact.js: line 7, col 17, \'Ember\' is not defined.\nmodels/contact.js: line 8, col 24, \'Ember\' is not defined.\nmodels/contact.js: line 10, col 12, \'Ember\' is not defined.\nmodels/contact.js: line 11, col 15, \'Ember\' is not defined.\n\n4 errors');
  });
});