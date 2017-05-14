angular
  .module('forumApp')
  .controller('ProfileCtrl', ProfileCtrl)
  .controller('ProfileMessageCtrl', ProfileMessageCtrl)
  .controller('ProfileEditCtrl', ProfileEditCtrl)
  .controller('ProfileInboxCtrl', ProfileInboxCtrl);

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

ProfileMessageCtrl.$inject = ['Message', 'User'];
function ProfileMessageCtrl(Message, User) {
  const vm = this;
  vm.privateMessage = privateMessage;
  User.query().$promise.then((response) => {
    vm.users = response;
  });

  function privateMessage() {
    Message
    .save(vm.message)
    .$promise
    .then((response) => {
      vm.message = {};
      vm.recentMessage = response;
    });
  }
}

ProfileEditCtrl.$inject = ['User'];
function ProfileEditCtrl(User) {
  const vm = this;
  // vm.kek = function() {
  //   var hello = document.querySelectorAll('button')[1];
  //   hello.innerHTML = 'Cmon SON';
  // };
}

ProfileInboxCtrl.$inject = ['User'];
function ProfileInboxCtrl(User) {
  const vm = this;

}
