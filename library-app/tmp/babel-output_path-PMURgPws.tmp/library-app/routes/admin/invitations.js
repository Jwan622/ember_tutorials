define('library-app/routes/admin/invitations', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('invitation');
    },

    actions: {
      deleteInvitation: function deleteInvitation(invitation) {
        var confirmation = confirm('Are you sure you want to delete this invitation?');

        if (confirmation) {
          invitation.destroyRecord();
        }
      }
    }
  });
});