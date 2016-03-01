define('ember-quickstart/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ember-quickstart/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _emberQuickstartConfigEnvironment) {

  var name = _emberQuickstartConfigEnvironment['default'].APP.name;
  var version = _emberQuickstartConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});