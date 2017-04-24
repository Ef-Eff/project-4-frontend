angular
  .module('forumApp')
  .directive('label', label);

function label() {
  return {
    restrict: 'A',
    link($scope, element) {
      element[0].innerHTML = 'kek';
    }
  };
}
