define('library-app/components/library-item-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    buttonLabel: 'Save',

    actions: {

      buttonClicked: function buttonClicked(param) {
        this.sendAction('action', param);
      }

    }
  });
});