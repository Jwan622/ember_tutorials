define('ember-quickstart/router', ['exports', 'ember', 'ember-quickstart/config/environment'], function (exports, _ember, _emberQuickstartConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberQuickstartConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});