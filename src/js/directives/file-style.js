angular
  .module('forumApp')
  .directive('label', label);

function label() {
  return {
    restrict: 'A',
    link($scope, element) {
      const label = element[0].nextElementSibling;
      console.log(label);
      let fileName = '';
      element[0].addEventListener('change', function(e) {
        fileName = e.target.value.split('\\').pop();

        if(fileName) {
          label.innerHTML = fileName;
          label.style.backgroundColor = '#b1d330';
          label.style.color = 'white';
        }
      });
    }
  };
}
