angular
  .module('forumApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['Topic'];
function MainCtrl(Topic) {
  const vm = this;

  vm.all = Topic.query;
}
