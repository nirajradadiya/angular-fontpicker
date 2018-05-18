var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Font',
      templateUrl: 'partials/font.html',
      controller: 'fontCtrl'
    })
    .when('/', {
      title: 'Font',
      templateUrl: 'partials/font.html',
      controller: 'accountCtrl',
      role: '0'
    })
    .otherwise({
      redirectTo: '/font'
    });
}])