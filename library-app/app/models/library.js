import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  books: DS.hasMany('books'),
  isValid: Ember.computed.notEmpty('name')
});
