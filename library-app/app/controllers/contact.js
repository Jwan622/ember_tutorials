import Ember from 'ember';

export default Ember.Controller.extend({
  isNotValidEmail: Ember.computed.not.match('emailAddress', /^.+@.+\..+$/),
  isNotBlank: Ember.computed.not.empty('isNotBlank')
  isNotValid: Ember.computed.and('isNotValidEmail', 'isNotBlank'),
});
