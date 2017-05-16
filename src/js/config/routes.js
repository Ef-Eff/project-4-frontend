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
      url: '/where-the-hell-is-this',
      templateUrl: 'js/views/static/404.html',
      controller: 'NotFoundCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'js/views/static/home.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'js/views/profile/show.html',
      controller: 'ProfileCtrl as profile'
    })
    .state('profile.message', {
      url: '/message',
      templateUrl: 'js/views/profile/message.html',
      controller: 'ProfileMessageCtrl as profileMessage'
    })
    .state('profile.edit', {
      url: '/edit',
      templateUrl: 'js/views/profile/edit.html',
      controller: 'ProfileEditCtrl as profileEdit'
    })
    .state('profile.inbox', {
      url: '/inbox',
      templateUrl: 'js/views/profile/inoutbox.html',
      controller: 'ProfileInboxCtrl as profileInbox'
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

  $urlRouterProvider.when('/', '/home').otherwise('/where-the-hell-is-this');
}
