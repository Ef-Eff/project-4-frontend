angular
  .module('forumApp')
  .controller('NotFoundCtrl', NotFoundCtrl);

NotFoundCtrl.$inject = ['$state'];
function NotFoundCtrl($state) {
  setTimeout(() => {
    $state.go('home');
  }, 5000);
}
