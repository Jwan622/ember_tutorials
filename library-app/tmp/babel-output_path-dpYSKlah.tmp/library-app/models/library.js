define('library-app/models/library', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    phone: _emberData['default'].attr('string')
  });
});