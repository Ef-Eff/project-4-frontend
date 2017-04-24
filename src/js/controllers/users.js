angular
  .module('forumApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'User'];
function UsersShowCtrl($stateParams, User) {
  const vm = this;

  vm.user = User.get($stateParams);
  
}
