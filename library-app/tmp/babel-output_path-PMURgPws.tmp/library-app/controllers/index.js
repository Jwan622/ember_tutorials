define('library-app/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    isValid: _ember['default'].computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: _ember['default'].computed('isValid', function () {
      return this.get('isValid') === false;
    }),
    emailAddress: '',
    actualEmailAddress: _ember['default'].computed('emailAddress', function () {

      console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }),
    emailAddressChanged: _ember['default'].observer('emailAddress', function () {

      console.log('observer is called', this.get('emailAddress'));
    }),
    isDisabledChanged: _ember['default'].observer('isDisabled', function () {
      console.log('isDisabled boolean has changed to', this.get('isDisabled'));
    }),
    actions: {
      saveInvitation: function saveInvitation() {
        var _this = this;

        var email = this.get('emailAddress');

        var newInvitation = this.store.createRecord('invitation', {
          email: email
        });

        newInvitation.save().then(function (response) {
          _this.set('responseMessage', 'Thank you! We saved your email address with the following id: ' + response.get('id'));
          _this.set('emailAddress', '');
        });
      }
    }
  });
});