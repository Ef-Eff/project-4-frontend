angular
  .module('forumApp')
  .controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.$inject = ['User', '$auth'];
function ProfileCtrl(User, $auth) {
  const vm = this;

  User.get({ id: $auth.getPayload().id }).$promise.then((user) => {
    vm.user = user;
  });
  vm.edit = edit;

  function edit() {
    User
    .update({ id: vm.user.id, user: vm.user })
    .$promise
    .then((response) => vm.user.profile_pic_url = response.profile_pic_url);
  }
}
