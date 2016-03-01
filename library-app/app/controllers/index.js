import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed('isValid', function() {
    return this.get('isValid') === false;
  }),
  emailAddress: '',
  actualEmailAddress: Ember.computed('emailAddress', function() { 
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),
  emailAddressChanged: Ember.observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
  }),
  isDisabledChanged: Ember.observer('isDisabled', function() {
    console.log('isDisabled boolean has changed to', this.get('isDisabled'));
  }),
  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', {
        email: email
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }
});