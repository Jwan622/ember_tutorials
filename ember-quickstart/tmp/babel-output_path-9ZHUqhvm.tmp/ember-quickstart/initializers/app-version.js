define('ember-quickstart/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-quickstart/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberQuickstartConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_emberQuickstartConfigEnvironment['default'].APP.name, _emberQuickstartConfigEnvironment['default'].APP.version)
  };
});