define('ember-quickstart/app', ['exports', 'ember', 'ember-quickstart/resolver', 'ember-load-initializers', 'ember-quickstart/config/environment'], function (exports, _ember, _emberQuickstartResolver, _emberLoadInitializers, _emberQuickstartConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberQuickstartConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberQuickstartConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberQuickstartResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberQuickstartConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});