angular
  .module('forumApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'AuthCtrl as auth'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'AuthCtrl as auth'
    })
    .state('404', {
      url: '/whereTheHellIsThis',
      templateUrl: 'js/views/static/404.html',
      controller: 'NotFoundCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/static/home.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'js/views/users/profile.html',
      controller: 'UsersProfileCtrl as usersProfile'
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
