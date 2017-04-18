angular
  .module('forumApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('404', {
      url: '/whereTheHellIsThis',
      templateUrl: 'js/views/404.html',
      controller: 'NotFoundCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/home/home.html'
    })
    .state('topicsIndex', {
      url: '/topics',
      templateUrl: 'js/views/topics/index.html',
      controller: 'TopicsIndexCtrl as topicsIndex'
    })
    .state('topicsShow', {
      url: '/topics/:id',
      templateUrl: 'js/views/topics/show.html',
      controller: 'TopicsShowCtrl as topicsShow'
    });


  $urlRouterProvider.otherwise('/whereTheHellIsThis');
}
